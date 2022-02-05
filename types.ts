/*export enum GICSSectorNumerics {
    ENERGY = 10,
}*/

export const GICSIndustries = new Map<string, number>()
GICSIndustries.set('Energy Equipment & Services', 101010);
GICSIndustries.set('Automobiles', 251020);

/*export const GICSIndustryDescriptions = {
    ENERGY_EQUIPMENT_AND_SERVICES: "Energy Equipment & Services",
    AUTOMOBILES: "Automobiles",
}*/

/*export type GICSIndustry = {
    numeric: GICSIndustryNumerics,
    description: GICSIndustryDescriptions,
}*/

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