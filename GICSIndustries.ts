import { GICSIndustryNames } from './GICSIndustryNames';

export const GICSIndustries = new Map<string, string>()
// 10    Sector          Energy
// 1010  Industry Group  Energy
GICSIndustries.set(GICSIndustryNames.ENERGY_EQUIPMENT_AND_SERVICES, '101010');
GICSIndustries.set(GICSIndustryNames.OIL_GAS_AND_CONSUMABLE_FUELS, '101020');

// 15    Sector          Materials
// 1510  Industry Group  Materials
GICSIndustries.set(GICSIndustryNames.CHEMICALS, '151010');
GICSIndustries.set(GICSIndustryNames.CONSTRUCTION_MATERIALS, '151020');
GICSIndustries.set(GICSIndustryNames.CONTAINERS_AND_PACKAGING, '151030');
GICSIndustries.set(GICSIndustryNames.METALS_AND_MINING, '151040');
GICSIndustries.set(GICSIndustryNames.PAPER_AND_FOREST_PRODUCTS, '151050');

// 20    Sector          Industrials
// 2010  Industry Group  Capital goods
GICSIndustries.set(GICSIndustryNames.AEROSPACE_AND_DEFENSE, '201010');
GICSIndustries.set(GICSIndustryNames.BUILDING_AND_PRODUCTS, '201020');
GICSIndustries.set(GICSIndustryNames.CONSTRUCTION_AND_ENGINEERING, '201030');
GICSIndustries.set(GICSIndustryNames.ELECTRICAL_EQUIPMENT, '201040');
GICSIndustries.set(GICSIndustryNames.INDUSTRIAL_CONGLOMERATES, '201050');
GICSIndustries.set(GICSIndustryNames.MACHINERY, '201060');
GICSIndustries.set(GICSIndustryNames.TRADING_COMPANIES_AND_DISTRIBUTORS, '201070');
//2020  Industry Group  Commercial & Professional Services
GICSIndustries.set(GICSIndustryNames.COMMERCIAL_SERVICES_AND_SUPPLIES, '202010');
GICSIndustries.set(GICSIndustryNames.PROFESSIONAL_SERVICES, '202020');
//2030  Industry Group  Transportation
GICSIndustries.set(GICSIndustryNames.AIR_FREIGHT_AND_LOGISTICS, '203010');
GICSIndustries.set(GICSIndustryNames.AIRLINES, '203020');
GICSIndustries.set(GICSIndustryNames.MARINE, '203030');
GICSIndustries.set(GICSIndustryNames.ROAD_AND_RAIL, '203040');
GICSIndustries.set(GICSIndustryNames.TRANSPORTATION_INFRASTRUCTURE, '203050');

// 25    Sector          Consumer Discretionary
// 2510  Industry Group  Automobiles & Components
GICSIndustries.set(GICSIndustryNames.AUTO_COMPONENTS, '251010');
GICSIndustries.set(GICSIndustryNames.AUTOMOBILES, '251020');
// 2520  Industry Group  Consumer Durables & Apparel
GICSIndustries.set(GICSIndustryNames.HOUSEHOLD_DURABLES, '252010');
GICSIndustries.set(GICSIndustryNames.LEISURE_PRODUCTS, '252020');
GICSIndustries.set(GICSIndustryNames.TEXTILES_APPAREL_AND_LUXURY_GOODS, '252030');
// 2530  Industry Group  Consumer Services
GICSIndustries.set(GICSIndustryNames.HOTELS_RESTAURANTS_AND_LEISURE, '253010');
GICSIndustries.set(GICSIndustryNames.DIVERSIFIED_CONSUMER_SERVICES, '253020');
// 2550  Industry Group  Retailing
GICSIndustries.set(GICSIndustryNames.DISTRIBUTORS, '255010');
GICSIndustries.set(GICSIndustryNames.INTERNET_AND_DIRECT_MARKETING_RETAIL, '255020');
GICSIndustries.set(GICSIndustryNames.MULTILINE_RETAIL, '255030');
GICSIndustries.set(GICSIndustryNames.SPECIALTY_RETAIL, '255040');

// 30    Sector          Consumer Staples
// 3010  Industry Group  Food & Staples Retailing
GICSIndustries.set(GICSIndustryNames.FOOD_AND_STAPLES_RETAILING, '301010');
// 3020  Industry Group  Food, Beverage & Tobacco
GICSIndustries.set(GICSIndustryNames.BEVERAGES, '302010');
GICSIndustries.set(GICSIndustryNames.FOOD_PRODUCTS, '302020');
GICSIndustries.set(GICSIndustryNames.TOBACCO, '302030');
// 3030  Industry Group  Household & Personal Products
GICSIndustries.set(GICSIndustryNames.HOUSEHOLD_PRODUCTS, '303010');
GICSIndustries.set(GICSIndustryNames.PERSONAL_PRODUCTS, '303020');

// 35    Sector          Health Care
// 3510  Industry Group  Health Care Equipment & Services
GICSIndustries.set(GICSIndustryNames.HEALTH_CARE_EQUIPMENT_AND_SUPPLIES, '351010');
GICSIndustries.set(GICSIndustryNames.HEALTH_CARE_PROVIDERS_AND_SERVICES, '351020');
GICSIndustries.set(GICSIndustryNames.HEALTH_CARE_TECHNOLOGY, '351030');
// 3520  Industry Group  Pharmaceuticals, Biotechnology & Life Sciences
GICSIndustries.set(GICSIndustryNames.BIOTECHNOLOGY, '352010');
GICSIndustries.set(GICSIndustryNames.PHARMACEUTICALS, '352020');
GICSIndustries.set(GICSIndustryNames.LIFE_SCIENCES_TOOLS_AND_SERVICES, '352030');

// 40    Sector          Financials
// 4010  Industry Group  Banks
GICSIndustries.set(GICSIndustryNames.BANKS, '401010');
GICSIndustries.set(GICSIndustryNames.THRIFTS_AND_MORTGAGE_FINANCE, '401020');
// 4020  Industry Group  Diversified Financials
GICSIndustries.set(GICSIndustryNames.DIVERSIFIED_FINANCIAL_SERVICES, '402010');
GICSIndustries.set(GICSIndustryNames.CONSUMER_FINANCE, '402020');
GICSIndustries.set(GICSIndustryNames.CAPITAL_MARKETS, '402030');
GICSIndustries.set(GICSIndustryNames.MORTGAGE_REAL_ESTATE_INVESTMENT_TRUSTS, '402040');
// 4020  Industry Group  Insurance
GICSIndustries.set(GICSIndustryNames.INSURANCE, '403010');

// 45    Sector          Information Technology
// 4510  Industry Group  Software & Services
GICSIndustries.set(GICSIndustryNames.IT_SERVICES, '451020');
GICSIndustries.set(GICSIndustryNames.SOFTWARE, '451030');
// 4520  Industry Group  Technology Hardware & Equipment
GICSIndustries.set(GICSIndustryNames.COMMUNICATION_EQUIPMENT, '452010');
GICSIndustries.set(GICSIndustryNames.TECHNOLOGY_HARDWARE_STORAGE_AND_PERIPHERALS, '452020');
GICSIndustries.set(GICSIndustryNames.ELECTRONIC_EQUIPMENT_INSTRUMENTS_AND_COMPONENTS, '452030');
// 4530  Industry Group  Technology Hardware & Equipment
GICSIndustries.set(GICSIndustryNames.SEMICONDUCTORS_AND_SEMICONDUCTOR_EQUIPMENT, '453010');

// 50    Sector          Communication Services
// 5010  Industry Group  Telecommunication Services
GICSIndustries.set(GICSIndustryNames.DIVERSIFIED_TELECOMMUNICATION_SERVICES, '501010');
GICSIndustries.set(GICSIndustryNames.WIRELESS_TELECOMMUNICATION_SERVICES, '501020');
// 5020  Industry Group  Media & Entertainment
GICSIndustries.set(GICSIndustryNames.MEDIA, '502010');
GICSIndustries.set(GICSIndustryNames.ENTERTAINMENT, '502020');
GICSIndustries.set(GICSIndustryNames.INTERACTIVE_MEDIA_AND_SERVICES, '502030');

// 55    Sector          Utilities
// 5510  Industry Group  Utilities
GICSIndustries.set(GICSIndustryNames.ELECTRIC_UTILITIES, '551010');
GICSIndustries.set(GICSIndustryNames.GAS_UTILITIES, '551020');
GICSIndustries.set(GICSIndustryNames.MULTI_UTILITIES, '551030');
GICSIndustries.set(GICSIndustryNames.WATER_UTILITIES, '551040');
GICSIndustries.set(GICSIndustryNames.INDEPENDENT_POWER_AND_RENEWABLE_ELECTRICITY_PRODUCERS, '551050');

// 60    Sector          Real Estate
// 6010  Industry Group  Real Estate
GICSIndustries.set(GICSIndustryNames.EQUITY_REAL_ESTATE_INVESTMENT_TRUSTS, '601010');
GICSIndustries.set(GICSIndustryNames.REAL_ESTATE_MANAGEMENT_AND_DEVELOPMENT, '601020');