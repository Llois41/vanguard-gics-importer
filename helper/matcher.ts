import { GICSIndustryNames } from '../GICSIndustryNames';

export const vanguardMatcher = new Map<string, string[]>();

vanguardMatcher.set(GICSIndustryNames.AEROSPACE_AND_DEFENSE, [
    'Aerospace',
    'Defense',
])

vanguardMatcher.set(GICSIndustryNames.INDEPENDENT_POWER_AND_RENEWABLE_ELECTRICITY_PRODUCERS, [
    'Alternative Electricity',
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

vanguardMatcher.set(GICSIndustryNames.CAPITAL_MARKETS, [
    'Asset Managers and Custodians',
])

vanguardMatcher.set(GICSIndustryNames.AUTO_COMPONENTS, [
    'Auto Parts',
])

vanguardMatcher.set(GICSIndustryNames.BEVERAGES, [
    'Brewers',
    'Distillers and Vintners',
])

vanguardMatcher.set(GICSIndustryNames.PROFESSIONAL_SERVICES, [
   'Business Training and Employment Agencie',
])

vanguardMatcher.set(GICSIndustryNames.MEDIA, [
    'Cable Television Services',
])

vanguardMatcher.set(GICSIndustryNames.HOTELS_RESTAURANTS_AND_LEISURE, [
    'Casinos and Gambling',
])

vanguardMatcher.set(GICSIndustryNames.CONSTRUCTION_MATERIALS, [
    'Cement',
])

vanguardMatcher.set(GICSIndustryNames.CHEMICALS, [
    'Chemicals and Synthetic Fibers',
    'Chemicals: Diversified',
    'Fertilizers',
])

vanguardMatcher.set(GICSIndustryNames.TEXTILES_APPAREL_AND_LUXURY_GOODS, [
    'Clothing and Accessories',
])

vanguardMatcher.set(GICSIndustryNames.OIL_GAS_AND_CONSUMABLE_FUELS, [
    'Coal',
])

vanguardMatcher.set(GICSIndustryNames.TECHNOLOGY_HARDWARE_STORAGE_AND_PERIPHERALS, [
    'Computer Hardware',
])

vanguardMatcher.set(GICSIndustryNames.IT_SERVICES, [
    'Computer Services',
])

vanguardMatcher.set(GICSIndustryNames.CONSTRUCTION_AND_ENGINEERING, [
    'Construction',
    'Engineering and Contracting Services',
])

vanguardMatcher.set(GICSIndustryNames.HOUSEHOLD_DURABLES, [
    'Consumer Electronics',
])

vanguardMatcher.set(GICSIndustryNames.CONTAINERS_AND_PACKAGING, [
    'Containers and Packaging',
])

vanguardMatcher.set(GICSIndustryNames.ELECTRIC_UTILITIES, [
    'Conventional Electricity',
])

vanguardMatcher.set(GICSIndustryNames.PERSONAL_PRODUCTS, [
    'Cosmetics',
])

vanguardMatcher.set(GICSIndustryNames.AIR_FREIGHT_AND_LOGISTICS, [
    'Delivery Services',
])

vanguardMatcher.set(GICSIndustryNames.INDUSTRIAL_CONGLOMERATES, [
    'Diversified Industrials',
])

vanguardMatcher.set(GICSIndustryNames.EQUITY_REAL_ESTATE_INVESTMENT_TRUSTS, [
    'Diversified REITs',
])

vanguardMatcher.set(GICSIndustryNames.FOOD_AND_STAPLES_RETAILING, [
    'Drug Retailers',
])

vanguardMatcher.set(GICSIndustryNames.DIVERSIFIED_CONSUMER_SERVICES, [
    'Education Services',
])

vanguardMatcher.set(GICSIndustryNames.ELECTRICAL_EQUIPMENT, [
    'Electrical Components',
])

vanguardMatcher.set(GICSIndustryNames.ELECTRONIC_EQUIPMENT_INSTRUMENTS_AND_COMPONENTS, [
    'Electronic Components',
])

vanguardMatcher.set(GICSIndustryNames.ENTERTAINMENT, [
    'Electronic Entertainment',
])

vanguardMatcher.set(GICSIndustryNames.MACHINERY, [
    'Electronic Equipment: Pollution Control',
])

vanguardMatcher.set(GICSIndustryNames.COMMERCIAL_SERVICES_AND_SUPPLIES, [
    'Electronic Office Equipment',
])

vanguardMatcher.set(GICSIndustryNames.FOOD_PRODUCTS, [
    'Farming, Fishing, Ranching and Plantatio',
    // first entry is used by Vanguard, but it looks like a mistake so this entry backups it, if they fix the exports
    'Farming, Fishing, Ranching and Plantation',
])








