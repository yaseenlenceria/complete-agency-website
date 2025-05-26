
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

// Service types for dynamic content
const serviceTypes = [
    'SEO Services',
    'Local SEO',
    'Website Development',
    'Digital Marketing',
    'PPC Management',
    'Content Marketing',
    'Social Media Marketing',
    'E-commerce SEO',
    'Technical SEO',
    'Link Building'
];

// Industry types
const industries = [
    'Real Estate',
    'Construction',
    'Legal Services',
    'Healthcare',
    'Dental Practices',
    'Financial Services',
    'Accounting',
    'Insurance',
    'Restaurants',
    'Hotels & Hospitality',
    'E-commerce',
    'SaaS Companies',
    'Manufacturing',
    'Automotive'
];

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
