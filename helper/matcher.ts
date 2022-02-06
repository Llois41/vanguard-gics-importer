import { GICSIndustryNames } from '../GICSIndustryNames';

export const vanguardMatcher = new Map<string, string[]>();

vanguardMatcher.set(GICSIndustryNames.AEROSPACE_AND_DEFENSE, [
    'Aerospace',
    'Defense',
    'Aerospace and Defense'
])

vanguardMatcher.set(GICSIndustryNames.INDEPENDENT_POWER_AND_RENEWABLE_ELECTRICITY_PRODUCERS, [
    'Alternative Electricity'
])

vanguardMatcher.set(GICSIndustryNames.METALS_AND_MINING, [
    'Aluminium',
    'Copper',
    'Gold Mining',
    'Platinum and Precious Metals',
    'Nonferrous Metals',
    'General Mining',
])

vanguardMatcher.set(GICSIndustryNames.SPECIALTY_RETAIL, [
    'Apparel Retailers',
])