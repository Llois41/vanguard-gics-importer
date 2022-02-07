import xlsx from 'node-xlsx';
import { ParqetIndustryData, ParqetIndustryDiff, ParqetSuggestion, VanguardInformation, Worksheet } from './types';
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
            industryData.push({ id: gicsIndustry, share: position.prozentDerAssets })
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
    const tempData = new Map<string, number>();

    for (let { id, share } of rawIndustryData) {
        const industryPercentage = tempData.get(id);
        if (industryPercentage) {
            tempData.set(id, industryPercentage + share);
        } else {
            tempData.set(id, share);
        }
    }
    tempData.forEach((share, id) => {
        industryData.push({id, share: +share.toFixed(3)});
    })

    return industryData;
}

const buildParqetSuggestionPayload = (industryData: ParqetIndustryData[], security: string): ParqetSuggestion => {
    let diff: ParqetIndustryDiff[] = [];

    for(let entry of industryData) {
        diff.push({
            op: 'add',
            path: '/industries/-',
            value: entry,
        })
    }
    return {
        suggestion: {
            jsonpatchFormat: true,
            security,
            diff,
        }
    };
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
    // send/export data to endpoint
    const payload = buildParqetSuggestionPayload(industryData, isin);
    console.info(JSON.stringify(payload, null, " "));
})();