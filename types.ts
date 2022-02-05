export type VanguardInformation = {
    ticker: string,
    wertpapiere: string,
    prozentDerAssets: number,
    sektor: string,
    region: string,
    marktwert: string,
    anteile: string,
}

export type ParqetIndustryData = {
    industry: number,
    percentage: number,
}

export interface ParqetExportData {
    isin: string, //TODO maybe find a type or validate at least
    industryData: ParqetIndustryData[],
}

export type Worksheet = { name: string, data: string[][] }