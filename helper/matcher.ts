import { GICSIndustryNames } from '../GICSIndustryNames';

export const vanguardMatcher = new Map<string, string[]>();

//vanguardMatcher.set(GICSIndustryNames.ENERGY_EQUIPMENT_AND_SERVICES, [])

vanguardMatcher.set(GICSIndustryNames.AEROSPACE_AND_DEFENSE, [
    'Aerospace',
    'Defense',
    'Aerospace and Defense'
])