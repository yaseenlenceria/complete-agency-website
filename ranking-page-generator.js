
// Ranking Page Generator for Additional Cities
class RankingPageGenerator {
    constructor() {
        this.cities = ['Manchester', 'Birmingham', 'Liverpool', 'Leeds', 'Sheffield', 'Bristol', 'Newcastle', 'Nottingham'];
        this.templates = {
            companies: this.generateSampleCompanies
        };
    }

    generateSampleCompanies(cityName) {
        const companyTemplates = [
            'Roofing Solutions', 'Elite Roofing', 'Premier Roofing', 'Professional Roofers',
            'City Roofing Services', 'Quality Roofing Co', 'Reliable Roofing', 'Expert Roofers',
            'Trusted Roofing', 'Local Roofing Specialists'
        ];

        return companyTemplates.map((template, index) => ({
            rank: index + 1,
            name: `${cityName} ${template}`,
            website: `www.${template.toLowerCase().replace(/\s+/g, '')}-${cityName.toLowerCase()}.co.uk`,
            rating: (4.0 + Math.random() * 1.0).toFixed(1),
            reviewCount: Math.floor(50 + Math.random() * 300),
            description: `Professional roofing services in ${cityName} with excellent customer satisfaction and quality workmanship.`,
            specialties: ['Local Roofing', 'Emergency Repairs', 'Quality Service'],
            yearsExperience: Math.floor(8 + Math.random() * 20),
            features: ['Free Quotes', 'Fully Insured', 'Local Experts', 'Quality Guarantee'],
            address: `${Math.floor(100 + Math.random() * 900)} ${template} Street, ${cityName}`,
            phone: `+44 ${Math.floor(100 + Math.random() * 900)} ${Math.floor(100 + Math.random() * 900)} ${Math.floor(1000 + Math.random() * 9000)}`,
            keyServices: ['Roof Repairs', 'New Installations', 'Maintenance', 'Emergency Service'],
            certifications: ['NFRC Certified', 'Fully Insured', 'Local Approved']
        }));
    }

    generateCityPage(cityName) {
        const companies = this.generateSampleCompanies(cityName);
        
        return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Best Roofing Companies in ${cityName} | Top 10 Ranked 2024</title>
    <meta name="description" content="Find the best roofing companies in ${cityName}. Expert rankings of top roofers based on reviews, experience, and quality.">
    <!-- Include same CSS and structure as London page -->
    <link href="style.css" rel="stylesheet" type="text/css" />
    <style>
        /* Include same styles as London page */
    </style>
</head>
<body>
    <!-- Same navigation structure -->
    <!-- Same layout with ${cityName} specific content -->
    <script>
        // Load ${cityName} specific company data
        const companies = ${JSON.stringify(companies, null, 8)};
        // Same JavaScript functionality
    </script>
</body>
</html>`;
    }

    createDropdownHTML() {
        return `
            <li><h4>Roofing Company Rankings</h4></li>
            <li><a href="best-roofing-companies-london.html">Best Roofing Companies London</a></li>
            ${this.cities.map(city => `
                <li><a href="best-roofing-companies-${city.toLowerCase()}.html">Best Roofing Companies ${city}</a></li>
            `).join('')}
        `;
    }
}

// Export for use
if (typeof window !== 'undefined') {
    window.RankingPageGenerator = RankingPageGenerator;
}
