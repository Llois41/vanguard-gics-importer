import xlsx from 'node-xlsx';
import { ParqetExportData, ParqetIndustryData, VanguardInformation, Worksheet } from './types';
import { GICSIndustries } from './GICSIndustries';
import { vanguardMatcher } from './helper/matcher';

const VANGUARD_HEADER_ROW = [
    'Ticker',
    'Wertpapiere',
    '% der Assets',
    'Sektor',
    'Region',
    'Marktwert',
    'Anteile',
]
const VANGUARD_COLUMN_COUNT = VANGUARD_HEADER_ROW.length;

const parseWorksheet = (worksheet: Worksheet[]): VanguardInformation[] => {
    let insideTable = false;
    let positions: VanguardInformation[] = [];
    const worksheetData = worksheet[0].data;
    for (let row of worksheetData) {
        if (row.toString() == VANGUARD_HEADER_ROW.toString()) {
            insideTable = true;
        } else if (insideTable && row.length === VANGUARD_COLUMN_COUNT) {
            positions.push(mapRow(row))
        }
    }
    return positions;
}

const mapRow = (row: string[]): VanguardInformation => {
    return {
        ticker: row[0],
        wertpapiere: row[1],
        prozentDerAssets: mapProzente(row[2]),
        sektor: row[3],
        region: row[4],
        marktwert: row[5],
        anteile: row[6],
    }
}

const mapProzente = (prozentDerAssets: string): number => {
    return +prozentDerAssets
        .replace('%', '')
        .replace(',', '.')
        .replace(/\s/g, '');
}

const mapToGICS = (positions: VanguardInformation[]): ParqetIndustryData[] => {
    let industryData: ParqetIndustryData[] = [];

    for (let position of positions) {
        const gicsIndustry = GICSIndustries.get(matchVanguardSectors(position.sektor));
        if (gicsIndustry) {
            industryData.push({ industry: gicsIndustry, percentage: position.prozentDerAssets })
        }
    }
    return industryData;
}

const matchVanguardSectors = (sektor: string): string => {
    let gicsIndustry = GICSIndustries.get(sektor);
    if (!gicsIndustry) {
        for(let [key, value] of vanguardMatcher.entries()) {
            const matchingAlias = value.find(alias => alias === sektor) ? key : '' ;
            if(matchingAlias) {
                return matchingAlias
            }
        }
    }
    return sektor;
}

const sumUpDuplicates = (rawIndustryData: ParqetIndustryData[]): ParqetIndustryData[] => {
    let industryData: ParqetIndustryData[] = [];
    const tempData = new Map<number, number>();

    for (let { industry, percentage } of rawIndustryData) {
        const industryPercentage = tempData.get(industry);
        if (industryPercentage) {
            tempData.set(industry, industryPercentage + percentage);
        } else {
            tempData.set(industry, percentage);
        }
    }
    tempData.forEach((percentage, industry) => {
        industryData.push({industry, percentage: +percentage.toFixed(3)});
    })

    return industryData;
}

(() => {
    const isin = 'REPLACEME'
    // read in file
    const workSheetsFromFile = xlsx.parse(`${__dirname}/data/FTSEDevelopedWorldUCITSETFAccumulating.xlsx`);
    // extract data to model
    const positions = parseWorksheet(workSheetsFromFile as Worksheet[]);
    // Do mapping
    const rawIndustryData = mapToGICS(positions);
    const industryData = sumUpDuplicates(rawIndustryData);
    const exportData: ParqetExportData = { isin, industryData }
    // send/export data to endpoint
    console.log(exportData);
})();