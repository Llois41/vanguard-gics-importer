export const GICSIndustries = new Map<string, number>()
// 10    Sector          Energy
// 1010  Industry Group  Energy
GICSIndustries.set('Energy Equipment & Services', 101010);
GICSIndustries.set('Oil, Gas & Consumable Fuels', 101020);

// 15    Sector          Materials
// 1510  Industry Group  Materials
GICSIndustries.set('Chemicals', 151010);
GICSIndustries.set('Construction Materials', 151020);
GICSIndustries.set('Containers & Packaging', 151030);
GICSIndustries.set('Metals & Mining', 151040);
GICSIndustries.set('Paper & Forest Products', 151050);

// 20    Sector          Industrials
// 2010  Industry Group  Capital goods
GICSIndustries.set('Aerospace & Defense', 201010);
GICSIndustries.set('Building Products', 201020);
GICSIndustries.set('Construction & Engineering', 201030);
GICSIndustries.set('Electrical Equipment', 201040);
GICSIndustries.set('Industrial Conglomerates', 201050);
GICSIndustries.set('Machinery', 201060);
GICSIndustries.set('Trading Companies & Distributors', 201070);
//2020  Industry Group  Commercial & Professional Services
GICSIndustries.set('Commercial Services & Supplies', 202010);
GICSIndustries.set('Professional Services', 202020);
//2030  Industry Group  Transportation
GICSIndustries.set('Air Freight & Logistics', 203010);
GICSIndustries.set('Airlines', 203020);
GICSIndustries.set('Marine', 203030);
GICSIndustries.set('Road & Rail', 203040);
GICSIndustries.set('Transportation Infrastructure', 203050);

// 25    Sector          Consumer Discretionary
// 2510  Industry Group  Automobiles & Components
GICSIndustries.set('Auto Components', 251010);
GICSIndustries.set('Automobiles', 251020);
// 2520  Industry Group  Consumer Durables & Apparel
GICSIndustries.set('Household Durables', 252010);
GICSIndustries.set('Leisure Products', 252020);
GICSIndustries.set('Textiles, Apparel & Luxury Goods', 252030);
// 2530  Industry Group  Consumer Services
GICSIndustries.set('Hotels, Restaurants & Leisure', 253010);
GICSIndustries.set('Diversified Consumer Services', 253020);
// 2550  Industry Group  Retailing
GICSIndustries.set('Distributors', 255010);
GICSIndustries.set('Internet & Direct Marketing Retail', 255020);
GICSIndustries.set('Multiline Retail', 255030);
GICSIndustries.set('Specialty Retail', 255040);

// 30    Sector          Consumer Staples
// 3010  Industry Group  Food & Staples Retailing
GICSIndustries.set('Food & Staples Retailing', 301010);
// 3020  Industry Group  Food, Beverage & Tobacco
GICSIndustries.set('Beverages', 302010);
GICSIndustries.set('Food Products', 302020);
GICSIndustries.set('Tobacco', 302030);
// 3030  Industry Group  Household & Personal Products
GICSIndustries.set('Household Products', 303010);
GICSIndustries.set('Personal Products', 303020);

// 35    Sector          Health Care
// 3510  Industry Group  Health Care Equipment & Services
GICSIndustries.set('Health Care Equipment & Supplies', 351010);
GICSIndustries.set('Health Care Providers & Services', 351020);
GICSIndustries.set('Health Care Technology', 351030);
// 3520  Industry Group  Pharmaceuticals, Biotechnology & Life Sciences
GICSIndustries.set('Biotechnology', 352010);
GICSIndustries.set('Pharmaceuticals', 352020);
GICSIndustries.set('Life Sciences Tools & Services', 352030);

// 40    Sector          Financials
// 4010  Industry Group  Banks
GICSIndustries.set('Banks', 401010);
GICSIndustries.set('Thrifts & Mortgage Finance', 401020);
// 4020  Industry Group  Diversified Financials
GICSIndustries.set('Diversified Financial Services', 402010);
GICSIndustries.set('Consumer Finance', 402020);
GICSIndustries.set('Capital Markets', 402030);
GICSIndustries.set('Mortgage Real Estate Investment Trusts (REITs)', 402040);
// 4020  Industry Group  Insurance
GICSIndustries.set('Insurance', 403010);

// 45    Sector          Information Technology
// 4510  Industry Group  Software & Services
GICSIndustries.set('IT Services', 451020);
GICSIndustries.set('Software', 451030);
// 4520  Industry Group  Technology Hardware & Equipment
GICSIndustries.set('Communications Equipment', 452010);
GICSIndustries.set('Technology Hardware, Storage & Peripherals', 452020);
GICSIndustries.set('Electronic Equipment, Instruments & Components', 452030);
// 4530  Industry Group  Technology Hardware & Equipment
GICSIndustries.set('Semiconductors & Semiconductor Equipment', 453010);

// 50    Sector          Communication Services
// 5010  Industry Group  Telecommunication Services
GICSIndustries.set('Diversified Telecommunication Services', 501010);
GICSIndustries.set('Wireless Telecommunication Services', 501020);
// 5020  Industry Group  Media & Entertainment
GICSIndustries.set('Media', 502010);
GICSIndustries.set('Entertainment', 502020);
GICSIndustries.set('Interactive Media & Services', 502030);

// 55    Sector          Utilities
// 5510  Industry Group  Utilities
GICSIndustries.set('Electric Utilities', 551010);
GICSIndustries.set('Gas Utilities', 551020);
GICSIndustries.set('Multi-Utilities', 551030);
GICSIndustries.set('Water Utilities', 551040);
GICSIndustries.set('Independent Power and Renewable Electricity Producers', 551050);

// 60    Sector          Real Estate
// 6010  Industry Group  Real Estate
GICSIndustries.set('Equity Real Estate Investment Trusts (REITs)', 601010);
GICSIndustries.set('Real Estate Management & Development', 601020);