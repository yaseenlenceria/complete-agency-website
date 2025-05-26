
// Roofing Companies Database for Dynamic Ranking Pages
const roofingCompaniesData = {
    london: {
        name: "London",
        companies: [
            {
                rank: 1,
                name: "Element Roofing Co Ltd",
                website: "www.no1roofing.com",
                rating: 4.7,
                reviewCount: 284,
                description: "Highly rated roofing company known for excellent craftsmanship and professionalism.",
                specialties: ["Commercial Roofing", "Residential Roofing", "Emergency Repairs"],
                yearsExperience: 15,
                features: ["24/7 Emergency Service", "Free Quotes", "Fully Insured", "10-Year Guarantee"],
                address: "123 Roofing Street, London, E1 6AN",
                phone: "+44 20 7946 0958",
                keyServices: ["Roof Repairs", "New Roof Installation", "Flat Roofing", "Guttering"],
                certifications: ["NFRC Certified", "Trustmark Approved", "FMB Member"]
            },
            {
                rank: 2,
                name: "Capital Roofing Company",
                website: "www.capital-roofing.co.uk",
                rating: 4.6,
                reviewCount: 312,
                description: "Over 35 years' experience, award-winning team providing reliable roofing services.",
                specialties: ["Heritage Roofing", "Slate Roofing", "Tile Replacement"],
                yearsExperience: 35,
                features: ["Award-Winning Team", "35+ Years Experience", "Heritage Specialists", "Free Surveys"],
                address: "456 Capital Road, London, SW1A 1AA",
                phone: "+44 20 7946 0959",
                keyServices: ["Heritage Roofing", "Slate Work", "Lead Work", "Chimney Repairs"],
                certifications: ["Historic England Approved", "NFRC Member", "CHAS Accredited"]
            },
            {
                rank: 3,
                name: "J & J London Roofing",
                website: "www.jandjroofing.co.uk",
                rating: 4.5,
                reviewCount: 198,
                description: "Responsive service with detailed estimates and quality materials for all roofing needs.",
                specialties: ["Residential Roofing", "Roof Maintenance", "Storm Damage"],
                yearsExperience: 20,
                features: ["Detailed Estimates", "Quality Materials", "Responsive Service", "Storm Damage Specialists"],
                address: "789 Roofing Lane, London, N1 9AB",
                phone: "+44 20 7946 0960",
                keyServices: ["Storm Damage Repairs", "Roof Maintenance", "Gutter Cleaning", "Fascia Boards"],
                certifications: ["NFRC Certified", "TrustATrader Approved", "Which? Trusted Trader"]
            },
            {
                rank: 4,
                name: "JPR Roofing Solutions Ltd",
                website: "www.jprroofingsolutionsltd.co.uk",
                rating: 4.4,
                reviewCount: 167,
                description: "Professional roofing with 10-year guarantee and thorough, efficient service.",
                specialties: ["Commercial Roofing", "Industrial Roofing", "Waterproofing"],
                yearsExperience: 12,
                features: ["10-Year Guarantee", "Thorough Service", "Commercial Specialists", "Waterproofing Experts"],
                address: "321 Industrial Estate, London, SE1 9XX",
                phone: "+44 20 7946 0961",
                keyServices: ["Industrial Roofing", "Waterproofing", "Green Roofs", "Solar Panel Installation"],
                certifications: ["NFRC Member", "SafeContractor Approved", "Constructionline Gold"]
            },
            {
                rank: 5,
                name: "Total Roofing London",
                website: "www.totalroofinglondon.co.uk",
                rating: 4.3,
                reviewCount: 234,
                description: "Emergency repairs specialist with prompt and friendly service across London.",
                specialties: ["Emergency Repairs", "24/7 Service", "Leak Repairs"],
                yearsExperience: 18,
                features: ["24/7 Emergency Service", "Same Day Response", "Leak Specialists", "No Call Out Charge"],
                address: "654 Emergency Row, London, W1K 5AB",
                phone: "+44 20 7946 0962",
                keyServices: ["Emergency Leak Repairs", "Roof Patching", "Temporary Repairs", "Insurance Work"],
                certifications: ["Emergency Response Certified", "Insurance Approved", "NFRC Member"]
            },
            {
                rank: 6,
                name: "Victorian Roofing And Building Ltd",
                website: "www.victorianroofingandbuildingltd.co.uk",
                rating: 5.0,
                reviewCount: 89,
                description: "5-star Google rating with 24/7 availability and full roof replacement services.",
                specialties: ["Victorian Properties", "Period Roofing", "Conservation Work"],
                yearsExperience: 25,
                features: ["5-Star Rating", "24/7 Availability", "Victorian Specialists", "Conservation Experts"],
                address: "987 Victorian Terrace, London, SW7 2AZ",
                phone: "+44 20 7946 0963",
                keyServices: ["Period Property Roofing", "Conservation Roofing", "Listed Building Work", "Traditional Materials"],
                certifications: ["Conservation Accredited", "Listed Building Specialists", "SPAB Member"]
            },
            {
                rank: 7,
                name: "Town & City London Ltd",
                website: "www.townandcitylondon.co.uk",
                rating: 4.2,
                reviewCount: 156,
                description: "Excellent communication with honest assessments and detailed workmanship.",
                specialties: ["Urban Roofing", "City Properties", "Access Solutions"],
                yearsExperience: 14,
                features: ["Excellent Communication", "Honest Assessments", "Detailed Work", "Urban Specialists"],
                address: "147 City Road, London, EC1V 1NR",
                phone: "+44 20 7946 0964",
                keyServices: ["Urban Roofing Solutions", "Difficult Access Roofing", "City Centre Work", "Scaffold-Free Options"],
                certifications: ["Urban Roofing Specialists", "NFRC Member", "IPAF Certified"]
            },
            {
                rank: 8,
                name: "Runnymede Roofing London",
                website: "www.runnymederoofing.co.uk",
                rating: 4.1,
                reviewCount: 143,
                description: "Long-term guarantees with honest and efficient team providing quality roofing.",
                specialties: ["Guarantee Specialists", "Quality Assurance", "Long-term Solutions"],
                yearsExperience: 16,
                features: ["Long-term Guarantees", "Honest Team", "Efficient Service", "Quality Focus"],
                address: "258 Guarantee Street, London, TW20 9EE",
                phone: "+44 20 7946 0965",
                keyServices: ["Guaranteed Roofing", "Quality Installations", "Long-term Maintenance", "Warranty Work"],
                certifications: ["Extended Warranty Provider", "Quality Assured", "NFRC Member"]
            },
            {
                rank: 9,
                name: "Craftsman Roofing Solutions Ltd",
                website: "www.craftsmanroofingsolutions.co.uk",
                rating: 4.0,
                reviewCount: 178,
                description: "Fair pricing with attention to detail and professional teams for all roofing projects.",
                specialties: ["Craftsmanship", "Attention to Detail", "Bespoke Solutions"],
                yearsExperience: 22,
                features: ["Fair Pricing", "Attention to Detail", "Professional Teams", "Bespoke Work"],
                address: "369 Craftsman Way, London, E14 5HP",
                phone: "+44 20 7946 0966",
                keyServices: ["Bespoke Roofing", "Detailed Craftsmanship", "Custom Solutions", "Restoration Work"],
                certifications: ["Craftsman Guild Member", "Bespoke Specialists", "Quality Craftsmen"]
            },
            {
                rank: 10,
                name: "Nunhead Roofing",
                website: "www.nunheadroofing.co.uk",
                rating: 4.8,
                reviewCount: 92,
                description: "Exceptional service with trustworthy approach, highly recommended by customers.",
                specialties: ["Customer Service", "Reliability", "Local Expertise"],
                yearsExperience: 11,
                features: ["Exceptional Service", "Trustworthy", "Highly Recommended", "Local Experts"],
                address: "741 Nunhead Lane, London, SE15 3TR",
                phone: "+44 20 7946 0967",
                keyServices: ["Reliable Roofing", "Customer-Focused Service", "Local Roofing", "Trustworthy Work"],
                certifications: ["Customer Service Excellence", "Local Approved", "Trustworthy Traders"]
            }
        ]
    }
};

// Function to generate ranking page content
function generateRankingPageContent(location, companies) {
    return {
        title: `Best Roofing Companies in ${location} | Top 10 Ranked 2024`,
        h1: `Best Roofing Companies in ${location} - Top 10 Ranked for 2024`,
        description: `Find the best roofing companies in ${location}. Our expert rankings feature the top 10 roofers based on reviews, experience, and quality. Get free quotes today.`,
        metaKeywords: `best roofing companies ${location.toLowerCase()}, top roofers ${location.toLowerCase()}, roofing contractors ${location.toLowerCase()}, roof repairs ${location.toLowerCase()}`,
        companies: companies
    };
}

// Export for use in other files
if (typeof window !== 'undefined') {
    window.roofingCompaniesData = roofingCompaniesData;
    window.generateRankingPageContent = generateRankingPageContent;
}
