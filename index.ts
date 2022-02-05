import xlsx from 'node-xlsx';

enum GICSSectorNumerics {
    ENERGY = 10,
}

enum GICSIndustryNumerics {
    ENERGY_EQUIPMENT_AND_SERVICES = 101010,
    AUTOMOBILES = 251020,
}

enum GICSIndustryDescriptions {
    ENERGY_EQUIPMENT_AND_SERVICES = "Energy Equipment & Services",
    AUTOMOBILES = "Automobiles",
}

type GICSIndustry = {
    numeric: GICSIndustryNumerics,
    description: GICSIndustryDescriptions,
}

type VanguardInformation = {
    ticker: string,
    wertpapiere: string,
    prozentDerAssets: number,
    sektor: string,
    region: string,
    marktwert: string,
    anteile: string,
}

type Worksheet = {name: string, data: string[][]}

const VANGUARD_COLUMN_COUNT = 7; //TODO Possible to extract this from type like VanguardInformation.properties.length?
const VANGUARD_HEADER_ROW = [
    'Ticker',
    'Wertpapiere',
    '% der Assets',
    'Sektor',
    'Region',
    'Marktwert',
    'Anteile'
]


const parseWorksheet = (worksheet: Worksheet[]): VanguardInformation[] => {
    let insideTable = false;
    let positions: VanguardInformation[] = [];
    worksheet[0].data.forEach((row: string[]) => {
        if(row.toString() == VANGUARD_HEADER_ROW.toString()) {
            insideTable = true;
        }
        else if(insideTable && row.length === VANGUARD_COLUMN_COUNT) {
            positions.push(mapRow(row))
        }
    })
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
    return +prozentDerAssets.replace(' %', '');
}

(() => {
    const workSheetsFromFile = xlsx.parse(`${__dirname}/data/FTSEDevelopedWorldUCITSETFAccumulating.xlsx`);
    const positions = parseWorksheet(workSheetsFromFile as Worksheet[]);
    console.log(positions);
})();