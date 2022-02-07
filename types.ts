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
    id: string,
    share: number,
}

export interface ParqetIndustryDiff {
    op: 'add',
    path: '/industries/-',
    value: ParqetIndustryData,
}

export interface ParqetSuggestion {
    suggestion: {
        jsonpatchFormat: boolean,
        security: string,
        diff: ParqetIndustryDiff[],
    }

}

export type Worksheet = { name: string, data: string[][] }