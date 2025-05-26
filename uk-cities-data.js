const ukCitiesData = {
    england: {
        name: "England",
        cities: [
            { name: "Bath", major: false },
            { name: "Birmingham", major: true },
            { name: "Bradford", major: true },
            { name: "Brighton & Hove", major: false },
            { name: "Bristol", major: true },
            { name: "Cambridge", major: false },
            { name: "Canterbury", major: true },
            { name: "Carlisle", major: false },
            { name: "Chelmsford", major: false },
            { name: "Chester", major: true },
            { name: "Chichester", major: false },
            { name: "Colchester", major: false },
            { name: "Coventry", major: true },
            { name: "Derby", major: false },
            { name: "Doncaster", major: false },
            { name: "Durham", major: false },
            { name: "Ely", major: false },
            { name: "Exeter", major: true },
            { name: "Gloucester", major: false },
            { name: "Hereford", major: false },
            { name: "Kingston-upon-Hull", major: true },
            { name: "Lancaster", major: false },
            { name: "Leeds", major: true },
            { name: "Leicester", major: true },
            { name: "Lichfield", major: false },
            { name: "Lincoln", major: false },
            { name: "Liverpool", major: true },
            { name: "London", major: true },
            { name: "Manchester", major: true },
            { name: "Milton Keynes", major: false },
            { name: "Newcastle-upon-Tyne", major: true },
            { name: "Norwich", major: true },
            { name: "Nottingham", major: true },
            { name: "Oxford", major: true },
            { name: "Peterborough", major: false },
            { name: "Plymouth", major: true },
            { name: "Portsmouth", major: true },
            { name: "Preston", major: false },
            { name: "Ripon", major: false },
            { name: "Salford", major: false },
            { name: "Salisbury", major: false },
            { name: "Sheffield", major: true },
            { name: "Southampton", major: true },
            { name: "Southend-on-Sea", major: false },
            { name: "St Albans", major: false },
            { name: "Stoke on Trent", major: true },
            { name: "Sunderland", major: false },
            { name: "Truro", major: false },
            { name: "Wakefield", major: false },
            { name: "Wells", major: false },
            { name: "Westminster", major: true },
            { name: "Winchester", major: false },
            { name: "Wolverhampton", major: false },
            { name: "Worcester", major: false },
            { name: "York", major: true }
        ]
    },
    scotland: {
        name: "Scotland",
        cities: [
            { name: "Aberdeen", major: true },
            { name: "Dundee", major: true },
            { name: "Dunfermline", major: false },
            { name: "Edinburgh", major: true },
            { name: "Glasgow", major: true },
            { name: "Inverness", major: false },
            { name: "Perth", major: false },
            { name: "Stirling", major: false }
        ]
    },
    wales: {
        name: "Wales",
        cities: [
            { name: "Bangor", major: false },
            { name: "Cardiff", major: true },
            { name: "Newport", major: false },
            { name: "St Asaph", major: false },
            { name: "St Davids", major: false },
            { name: "Swansea", major: true },
            { name: "Wrexham", major: false }
        ]
    },
    northernIreland: {
        name: "Northern Ireland",
        cities: [
            { name: "Armagh", major: true },
            { name: "Bangor", major: false },
            { name: "Belfast", major: true },
            { name: "Lisburn", major: false },
            { name: "Londonderry", major: false },
            { name: "Newry", major: false }
        ]
    }
};

// Comprehensive service categories for dynamic content
const serviceCategories = {
    "construction-trade": {
        name: "Construction & Trade",
        services: [
            { name: "Construction SEO", slug: "construction-seo", description: "SEO for construction companies and contractors" },
            { name: "Architects SEO", slug: "architects-seo", description: "Specialized SEO for architectural firms" },
            { name: "Plumbers SEO", slug: "plumbers-seo", description: "Local SEO for plumbing services" }
        ]
    },
    "roofing-specialists": {
        name: "Roofing SEO Specialists",
        services: [
            { name: "Roofer SEO", slug: "roofer-seo", description: "SEO for roofing contractors" },
            { name: "Roof Repair SEO", slug: "roof-repair-seo", description: "SEO for roof repair services" },
            { name: "Roof Replacement SEO", slug: "roof-replacement-seo", description: "SEO for roof replacement companies" },
            { name: "Commercial Roofing SEO", slug: "commercial-roofing-seo", description: "SEO for commercial roofing contractors" },
            { name: "Best Roofing Company SEO", slug: "best-roofing-company", description: "SEO for top roofing companies" },
            { name: "Best Roofing Companies SEO", slug: "best-roofing-companies-seo", description: "SEO for roofing company rankings" }
        ]
    },
    "roofing-rankings": {
        name: "Roofing Company Rankings",
        services: [
            { name: "Best Roofing Companies London", slug: "best-roofing-companies-london", description: "Top roofing companies in London rankings" }
        ]
    },
    "professional-services": {
        name: "Professional Services",
        services: [
            { name: "Law Firm SEO", slug: "law-firm-seo", description: "SEO for law firms and legal practices" },
            { name: "Dentists SEO", slug: "dentists-seo", description: "SEO for dental practices" },
            { name: "Financial SEO", slug: "financial-seo", description: "SEO for financial advisors and firms" },
            { name: "Accountants SEO", slug: "accountants-seo", description: "SEO for accounting firms" }
        ]
    },
    "real-estate-property": {
        name: "Real Estate & Property",
        services: [
            { name: "Real Estate SEO", slug: "real-estate-seo", description: "SEO for real estate agents and agencies" }
        ]
    },
    "agency-services": {
        name: "Agency Services",
        services: [
            { name: "White Label SEO", slug: "white-label-seo", description: "White label SEO services for agencies" },
            { name: "Professional SEO Services UK", slug: "professional-seo-services-uk", description: "Professional SEO services across the UK" },
            { name: "Top SEO Agency UK", slug: "top-seo-agency-uk", description: "Leading SEO agency in the UK" },
            { name: "Best SEO Agency Manchester", slug: "best-seo-agency-manchester", description: "Top SEO agency in Manchester" },
            { name: "SEO Agency Birmingham", slug: "seo-agency-birmingham", description: "Leading SEO agency in Birmingham" }
        ]
    }
};

// Extended industry keywords for each city
const industryKeywords = {
    construction: ["builders", "contractors", "construction companies", "building services", "renovation specialists"],
    roofing: ["roofers", "roofing contractors", "roof repairs", "roof replacement", "commercial roofing"],
    legal: ["solicitors", "law firms", "legal services", "barristers", "legal advice"],
    dental: ["dentists", "dental practices", "orthodontists", "dental implants", "cosmetic dentistry"],
    financial: ["financial advisors", "wealth management", "financial planning", "investment advice"],
    accounting: ["accountants", "chartered accountants", "bookkeeping", "tax advisors", "accounting firms"],
    realEstate: ["estate agents", "property sales", "property management", "real estate", "property developers"]
};

// Function to generate location-based content
function generateLocationContent(city, service = 'SEO Services') {
    return {
        title: `${service} in ${city} | OutSourceSU`,
        h1: `Professional ${service} in ${city}`,
        description: `Leading ${service.toLowerCase()} provider in ${city}. Helping local businesses grow online with proven strategies. Get your free consultation today.`,
        localKeywords: [
            `${service.toLowerCase()} ${city.toLowerCase()}`,
            `${service.toLowerCase()} near ${city.toLowerCase()}`,
            `${service.toLowerCase()} company ${city.toLowerCase()}`,
            `best ${service.toLowerCase()} ${city.toLowerCase()}`,
            `${service.toLowerCase()} agency ${city.toLowerCase()}`
        ]
    };
}

// Export for use in other files
if (typeof window !== 'undefined') {
    window.ukCitiesData = ukCitiesData;
    window.serviceTypes = serviceTypes;
    window.industries = industries;
    window.generateLocationContent = generateLocationContent;
}