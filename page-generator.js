
// Page Generation Script for Remaining Service Pages
// Run this in the browser console or as a Node.js script

const servicePages = [
    {
        filename: "builders-merchants-seo.html",
        title: "Builders Merchants SEO Services",
        h1: "Builders Merchants SEO",
        description: "Expert SEO services for builders merchants and trade suppliers. Increase online visibility, attract more trade customers, and grow your builders merchant business.",
        heroImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        industry: "builders merchants",
        keywords: [
            "builders merchants [location]",
            "trade suppliers near me",
            "building materials [area]",
            "construction supplies [location]",
            "trade counters [area]"
        ]
    },
    {
        filename: "financial-seo.html",
        title: "Financial SEO Services",
        h1: "Financial SEO Services",
        description: "Expert SEO services for financial advisors, wealth management firms, and financial services companies. Attract high-value clients and grow your financial business.",
        heroImage: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        industry: "financial services",
        keywords: [
            "financial advisors [location]",
            "wealth management [area]",
            "financial planning [location]",
            "investment advice [area]",
            "financial consultants [location]"
        ]
    },
    {
        filename: "accountants-seo.html",
        title: "SEO For Accountants",
        h1: "SEO For Accountants",
        description: "Specialized SEO services for accounting firms and chartered accountants. Generate more qualified leads and grow your accounting practice online.",
        heroImage: "https://images.unsplash.com/photo-1554224154-22dec7ec8818?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        industry: "accounting",
        keywords: [
            "accountants [location]",
            "chartered accountants near me",
            "tax advisors [area]",
            "bookkeeping services [location]",
            "accounting firms [area]"
        ]
    },
    {
        filename: "insurance-seo.html",
        title: "Insurance SEO Services",
        h1: "Insurance SEO Services",
        description: "Expert SEO services for insurance brokers, agents, and companies. Attract more clients and dominate search results for insurance-related keywords.",
        heroImage: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        industry: "insurance",
        keywords: [
            "insurance brokers [location]",
            "car insurance [area]",
            "life insurance advisors [location]",
            "business insurance [area]",
            "insurance quotes [location]"
        ]
    },
    {
        filename: "fintech-seo.html",
        title: "Fintech SEO Agency",
        h1: "Fintech SEO Agency",
        description: "Specialized SEO services for fintech companies, cryptocurrency platforms, and financial technology startups. Scale your fintech business online.",
        heroImage: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        industry: "fintech",
        keywords: [
            "fintech companies [location]",
            "cryptocurrency platforms",
            "digital banking [area]",
            "payment processing [location]",
            "blockchain companies [area]"
        ]
    },
    {
        filename: "law-digital-marketing.html",
        title: "Law Digital Marketing",
        h1: "Law Digital Marketing",
        description: "Comprehensive digital marketing services for law firms including SEO, PPC, and content marketing. Attract more clients and grow your legal practice.",
        heroImage: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        industry: "legal",
        keywords: [
            "law firm marketing [location]",
            "legal marketing [area]",
            "solicitor marketing [location]",
            "barrister marketing [area]",
            "legal advertising [location]"
        ]
    },
    {
        filename: "law-firm-seo.html",
        title: "Law Firm SEO",
        h1: "Law Firm SEO",
        description: "Expert SEO services for law firms, solicitors, and barristers. Dominate legal search results and attract high-value clients to your practice.",
        heroImage: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        industry: "legal",
        keywords: [
            "law firms [location]",
            "solicitors near me",
            "barristers [area]",
            "legal services [location]",
            "lawyers [area]"
        ]
    },
    {
        filename: "personal-injury-seo.html",
        title: "Personal Injury SEO",
        h1: "Personal Injury SEO",
        description: "Specialized SEO services for personal injury lawyers and claims specialists. Generate more qualified personal injury leads and cases.",
        heroImage: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        industry: "personal injury",
        keywords: [
            "personal injury lawyers [location]",
            "accident claims [area]",
            "compensation lawyers [location]",
            "injury solicitors [area]",
            "car accident lawyers [location]"
        ]
    },
    {
        filename: "lawyer-ppc.html",
        title: "Lawyer PPC Agency",
        h1: "Lawyer PPC Agency",
        description: "Expert PPC advertising services for lawyers and law firms. Generate immediate leads and maximize ROI with our specialized legal PPC campaigns.",
        heroImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        industry: "legal PPC",
        keywords: [
            "lawyer PPC management",
            "legal advertising [location]",
            "Google Ads for lawyers",
            "law firm PPC [area]",
            "legal lead generation"
        ]
    },
    {
        filename: "lawyer-web-design.html",
        title: "Lawyer Web Design",
        h1: "Lawyer Web Design",
        description: "Professional web design services for lawyers and law firms. Create compelling websites that attract clients and showcase your legal expertise.",
        heroImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        industry: "legal web design",
        keywords: [
            "lawyer website design",
            "law firm websites [location]",
            "legal web design [area]",
            "solicitor websites [location]",
            "attorney web design"
        ]
    },
    {
        filename: "travel-seo.html",
        title: "Travel SEO Services",
        h1: "Travel SEO Services",
        description: "Expert SEO services for travel agencies, tour operators, and hospitality businesses. Attract more travelers and grow your tourism business online.",
        heroImage: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        industry: "travel",
        keywords: [
            "travel agencies [location]",
            "tour operators [area]",
            "holiday packages [location]",
            "travel deals [area]",
            "vacation planning [location]"
        ]
    },
    {
        filename: "private-jet-seo.html",
        title: "Private Jet SEO",
        h1: "Private Jet SEO",
        description: "Luxury SEO services for private jet companies, charter services, and aviation businesses. Attract high-net-worth clients and premium bookings.",
        heroImage: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        industry: "private aviation",
        keywords: [
            "private jet charter [location]",
            "luxury aircraft rental",
            "private aviation [area]",
            "jet charter services [location]",
            "executive travel [area]"
        ]
    },
    {
        filename: "hotels-seo.html",
        title: "SEO for Hotels",
        h1: "SEO for Hotels",
        description: "Specialized SEO services for hotels, resorts, and accommodation providers. Increase direct bookings and reduce dependency on OTAs.",
        heroImage: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        industry: "hotels",
        keywords: [
            "hotels [location]",
            "luxury hotels [area]",
            "boutique hotels [location]",
            "hotel bookings [area]",
            "accommodation [location]"
        ]
    },
    {
        filename: "healthcare-seo.html",
        title: "SEO For Healthcare",
        h1: "SEO For Healthcare",
        description: "Expert SEO services for healthcare providers, medical practices, and clinics. Attract more patients and grow your healthcare practice online.",
        heroImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        industry: "healthcare",
        keywords: [
            "healthcare providers [location]",
            "medical practices [area]",
            "private clinics [location]",
            "healthcare services [area]",
            "medical specialists [location]"
        ]
    },
    {
        filename: "dentists-seo.html",
        title: "Dentists SEO",
        h1: "Dentists SEO",
        description: "Specialized SEO services for dental practices, orthodontists, and oral surgeons. Attract more patients and grow your dental practice.",
        heroImage: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        industry: "dental",
        keywords: [
            "dentists [location]",
            "dental practice [area]",
            "orthodontists [location]",
            "dental implants [area]",
            "cosmetic dentistry [location]"
        ]
    },
    {
        filename: "startups-seo.html",
        title: "SEO For Startups",
        h1: "SEO For Startups",
        description: "Affordable SEO services for startups and early-stage companies. Build your online presence and compete with established businesses.",
        heroImage: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        industry: "startups",
        keywords: [
            "startup SEO services",
            "early-stage company marketing",
            "small business SEO [location]",
            "startup marketing [area]",
            "growth marketing [location]"
        ]
    },
    {
        filename: "saas-seo.html",
        title: "SEO For SaaS",
        h1: "SEO For SaaS",
        description: "Specialized SEO services for SaaS companies and software businesses. Drive qualified leads and grow your software business online.",
        heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        industry: "SaaS",
        keywords: [
            "SaaS companies [location]",
            "software businesses [area]",
            "cloud software [location]",
            "B2B SaaS [area]",
            "enterprise software [location]"
        ]
    },
    {
        filename: "spotify-seo.html",
        title: "SEO For Spotify",
        h1: "SEO For Spotify",
        description: "Specialized SEO services for Spotify artists, podcasters, and music industry professionals. Increase your Spotify visibility and streams.",
        heroImage: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        industry: "music",
        keywords: [
            "Spotify optimization",
            "music marketing [location]",
            "podcast promotion [area]",
            "artist marketing [location]",
            "music SEO [area]"
        ]
    },
    {
        filename: "restaurants-seo.html",
        title: "SEO For Restaurants",
        h1: "SEO For Restaurants",
        description: "Expert SEO services for restaurants, cafes, and food businesses. Attract more customers and increase table bookings with local SEO.",
        heroImage: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        industry: "restaurants",
        keywords: [
            "restaurants [location]",
            "best restaurants near me",
            "food delivery [area]",
            "fine dining [location]",
            "local restaurants [area]"
        ]
    },
    {
        filename: "car-dealers-seo.html",
        title: "SEO for Car Dealers",
        h1: "SEO for Car Dealers",
        description: "Specialized SEO services for car dealerships and automotive businesses. Increase car sales and dominate local automotive searches.",
        heroImage: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        industry: "automotive",
        keywords: [
            "car dealers [location]",
            "used cars [area]",
            "auto dealerships [location]",
            "car sales [area]",
            "automotive [location]"
        ]
    },
    {
        filename: "white-label-seo.html",
        title: "White Label SEO",
        h1: "White Label SEO Services",
        description: "Professional white label SEO services for agencies, consultants, and resellers. Partner with us to offer SEO services under your brand.",
        heroImage: "https://images.unsplash.com/photo-1553028826-f4804a6dba3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        industry: "white label",
        keywords: [
            "white label SEO services",
            "SEO reseller program",
            "agency SEO services",
            "private label SEO",
            "SEO partnership"
        ]
    }
];

// Function to generate HTML content for each page
function generatePageHTML(pageData) {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${pageData.title} | Digital Search Group</title>
    <meta name="description" content="${pageData.description}">
    <link href="style.css" rel="stylesheet" type="text/css" />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
</head>
<body>
    <!-- Navigation -->
    <nav class="navbar">
        <div class="nav-container">
            <div class="nav-logo">
                <h2>Digital Search Group</h2>
            </div>
            <ul class="nav-menu">
                <li><a href="index.html">Home</a></li>
                <li><a href="index.html#about">About</a></li>
                <li class="dropdown">
                    <a href="index.html#services">Services ↓</a>
                    <ul class="dropdown-menu">
                        <li><a href="real-estate-seo.html">Real Estate SEO</a></li>
                        <li><a href="construction-seo.html">SEO For Construction</a></li>
                        <li><a href="${pageData.filename}">${pageData.title}</a></li>
                        <li><a href="roofer-seo.html">Roofer SEO</a></li>
                        <li><a href="law-firm-seo.html">Law Firm SEO</a></li>
                        <li><a href="healthcare-seo.html">Healthcare SEO</a></li>
                        <li><a href="white-label-seo.html">White Label SEO</a></li>
                    </ul>
                </li>
                <li><a href="index.html#industries">Industries</a></li>
                <li><a href="index.html#contact">Contact</a></li>
            </ul>
            <div class="hamburger">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <section class="hero service-hero">
        <div class="hero-content">
            <div class="hero-text">
                <h1>${pageData.h1}</h1>
                <p>${pageData.description}</p>
                <div class="hero-buttons">
                    <a href="index.html#contact" class="btn-primary">Get Free SEO Audit</a>
                    <a href="#services" class="btn-secondary">Our ${pageData.industry} SEO Services</a>
                </div>
            </div>
            <div class="hero-image">
                <img src="${pageData.heroImage}" alt="${pageData.industry}">
            </div>
        </div>
    </section>

    <!-- Why SEO Section -->
    <section class="why-seo">
        <div class="container">
            <h2>Why ${pageData.industry} SEO is Essential</h2>
            <div class="benefits-grid">
                <div class="benefit-card">
                    <i class="fas fa-search"></i>
                    <h3>Increased Online Visibility</h3>
                    <p>Dominate search results for ${pageData.industry}-related keywords and attract more qualified leads to your business.</p>
                </div>
                <div class="benefit-card">
                    <i class="fas fa-chart-line"></i>
                    <h3>Higher Quality Leads</h3>
                    <p>SEO generates leads that are actively searching for ${pageData.industry} services, resulting in higher conversion rates.</p>
                </div>
                <div class="benefit-card">
                    <i class="fas fa-pound-sign"></i>
                    <h3>Cost-Effective Marketing</h3>
                    <p>Unlike paid advertising, SEO provides long-term results for your ${pageData.industry} business without ongoing ad spend.</p>
                </div>
                <div class="benefit-card">
                    <i class="fas fa-award"></i>
                    <h3>Industry Authority</h3>
                    <p>Establish your ${pageData.industry} business as a trusted authority through strategic content and search optimization.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Services Section -->
    <section id="services" class="services-detailed">
        <div class="container">
            <h2>Our ${pageData.industry} SEO Services</h2>
            <div class="services-list">
                <div class="service-item">
                    <h3>Local ${pageData.industry} SEO</h3>
                    <p>Dominate local search results for ${pageData.industry} services in your area with comprehensive local SEO strategies.</p>
                    <ul>
                        <li>Google My Business optimization</li>
                        <li>Local citation building</li>
                        <li>Location-based keyword targeting</li>
                        <li>Customer review management</li>
                        <li>Local directory submissions</li>
                    </ul>
                </div>
                <div class="service-item">
                    <h3>${pageData.industry} Website Optimization</h3>
                    <p>Optimize your ${pageData.industry} website for search engines and user experience to maximize conversions.</p>
                    <ul>
                        <li>On-page SEO optimization</li>
                        <li>Content strategy and creation</li>
                        <li>Technical SEO improvements</li>
                        <li>Mobile optimization</li>
                        <li>Conversion rate optimization</li>
                    </ul>
                </div>
                <div class="service-item">
                    <h3>${pageData.industry} Content Marketing</h3>
                    <p>Create valuable content that showcases your ${pageData.industry} expertise and attracts potential customers.</p>
                    <ul>
                        <li>Industry-specific blog posts</li>
                        <li>Service page optimization</li>
                        <li>Case studies and testimonials</li>
                        <li>FAQ and guide creation</li>
                        <li>Video content optimization</li>
                    </ul>
                </div>
                <div class="service-item">
                    <h3>Technical SEO for ${pageData.industry}</h3>
                    <p>Ensure your ${pageData.industry} website performs perfectly across all devices and search engines.</p>
                    <ul>
                        <li>Website speed optimization</li>
                        <li>Mobile-responsive design</li>
                        <li>Schema markup implementation</li>
                        <li>Site structure optimization</li>
                        <li>Security and performance</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <!-- Keywords Section -->
    <section class="keywords-section">
        <div class="container">
            <h2>${pageData.industry} Keywords We Target</h2>
            <div class="keywords-grid">
                <div class="keyword-category">
                    <h3>Primary ${pageData.industry} Keywords</h3>
                    <ul>
                        ${pageData.keywords.map(keyword => `<li>"${keyword}"</li>`).join('\n                        ')}
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <!-- Results Section -->
    <section class="results-section">
        <div class="container">
            <h2>${pageData.industry} SEO Results</h2>
            <div class="results-stats">
                <div class="stat-item">
                    <h3>285%</h3>
                    <p>Average increase in leads</p>
                </div>
                <div class="stat-item">
                    <h3>73%</h3>
                    <p>Improvement in search visibility</p>
                </div>
                <div class="stat-item">
                    <h3>3.2x</h3>
                    <p>More qualified enquiries</p>
                </div>
                <div class="stat-item">
                    <h3>156%</h3>
                    <p>Increase in website traffic</p>
                </div>
            </div>
        </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
        <div class="container">
            <h2>Ready to Grow Your ${pageData.industry} Business?</h2>
            <p>Get a free SEO audit and discover how we can help your ${pageData.industry} business generate more leads and customers through search engine optimization.</p>
            <a href="index.html#contact" class="btn-primary">Get Your Free ${pageData.industry} SEO Audit</a>
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h3>Digital Search Group</h3>
                    <p>UK's leading SEO and digital marketing agency, helping businesses grow online for over 15 years.</p>
                </div>
                <div class="footer-section">
                    <h4>Popular Services</h4>
                    <ul>
                        <li><a href="real-estate-seo.html">Real Estate SEO</a></li>
                        <li><a href="construction-seo.html">Construction SEO</a></li>
                        <li><a href="${pageData.filename}">${pageData.title}</a></li>
                        <li><a href="law-firm-seo.html">Law Firm SEO</a></li>
                        <li><a href="healthcare-seo.html">Healthcare SEO</a></li>
                        <li><a href="white-label-seo.html">White Label SEO</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h4>Industries</h4>
                    <ul>
                        <li><a href="real-estate-seo.html">Real Estate</a></li>
                        <li><a href="construction-seo.html">Construction</a></li>
                        <li><a href="${pageData.filename}">${pageData.industry}</a></li>
                        <li><a href="healthcare-seo.html">Healthcare</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h4>Company</h4>
                    <ul>
                        <li><a href="index.html#about">About Us</a></li>
                        <li><a href="index.html#contact">Contact</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms & Conditions</a></li>
                    </ul>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2025 Digital Search Group Limited. All rights reserved.</p>
                <p>Registered in England No. 06950800</p>
            </div>
        </div>
    </footer>

    <script src="script.js"></script>
</body>
</html>`;
}

// Generate files for each service page
servicePages.forEach(pageData => {
    const content = generatePageHTML(pageData);
    console.log(`Generated content for ${pageData.filename}`);
    console.log('---');
    console.log(content);
    console.log('\n\n');
});

console.log('Page generation complete! Copy each generated HTML content to create the respective files.');
