
class CityContentGenerator {
    constructor() {
        this.baseContent = {
            heroStats: [
                { number: "500+", label: "Local Businesses Helped" },
                { number: "95%", label: "Success Rate" },
                { number: "15+", label: "Years Experience" }
            ],
            guarantees: [
                "No Long-Term Contracts",
                "90-Day Results Guarantee", 
                "Proven Local SEO Results"
            ]
        };
    }

    generateCityPage(cityData, serviceCategory = null) {
        const cityName = cityData.name;
        const citySlug = cityData.slug;
        const isSponsored = cityData.major;

        return {
            title: this.generateTitle(cityName, serviceCategory),
            h1: this.generateH1(cityName, serviceCategory),
            description: this.generateDescription(cityName, serviceCategory),
            content: this.generateFullContent(cityData, serviceCategory),
            keywords: this.generateKeywords(cityName, serviceCategory),
            schema: this.generateSchema(cityData, serviceCategory)
        };
    }

    generateTitle(cityName, serviceCategory) {
        if (serviceCategory) {
            return `${serviceCategory.name} in ${cityName} | OutSourceSU`;
        }
        return `Best SEO Agency & Website Development in ${cityName} | OutSourceSU`;
    }

    generateH1(cityName, serviceCategory) {
        if (serviceCategory) {
            return `Professional ${serviceCategory.name} in ${cityName}`;
        }
        return `Best SEO Agency and Website Development Company in ${cityName}`;
    }

    generateDescription(cityName, serviceCategory) {
        if (serviceCategory) {
            return `Looking for ${serviceCategory.name.toLowerCase()} in ${cityName}? OutSourceSU provides specialized SEO services to help your business dominate local search results. Get your free consultation today.`;
        }
        return `Looking for the best digital partner in ${cityName}? We are a leading SEO agency and web development company trusted by businesses in ${cityName} to deliver measurable growth. Our expert team specializes in search engine optimization, custom website design, eCommerce stores, and mobile-responsive websites.`;
    }

    generateKeywords(cityName, serviceCategory) {
        const baseKeywords = [
            `seo agency ${cityName.toLowerCase()}`,
            `website development ${cityName.toLowerCase()}`,
            `digital marketing ${cityName.toLowerCase()}`,
            `seo services ${cityName.toLowerCase()}`,
            `web design ${cityName.toLowerCase()}`
        ];

        if (serviceCategory) {
            serviceCategory.services.forEach(service => {
                baseKeywords.push(`${service.name.toLowerCase()} ${cityName.toLowerCase()}`);
                baseKeywords.push(`${service.slug} ${cityName.toLowerCase()}`);
            });
        }

        return baseKeywords;
    }

    generateFullContent(cityData, serviceCategory) {
        const cityName = cityData.name;
        const population = cityData.population;
        
        return {
            hero: this.generateHeroSection(cityData, serviceCategory),
            whyChoose: this.generateWhyChooseSection(cityData),
            services: this.generateServicesSection(cityData, serviceCategory),
            localSEO: this.generateLocalSEOSection(cityData),
            caseStudies: this.generateCaseStudiesSection(cityData),
            process: this.generateProcessSection(cityData),
            testimonials: this.generateTestimonialsSection(cityData),
            faq: this.generateFAQSection(cityData, serviceCategory),
            cta: this.generateCTASection(cityData)
        };
    }

    generateHeroSection(cityData, serviceCategory) {
        const cityName = cityData.name;
        const isSponsored = cityData.major;
        
        return {
            badge: isSponsored ? `${cityName}'s Leading SEO Agency` : `Professional SEO Services in ${cityName}`,
            title: serviceCategory ? 
                `Professional ${serviceCategory.name} in ${cityName}` :
                `Best SEO Agency and Website Development Company in ${cityName}`,
            subtitle: serviceCategory ?
                `Specialized ${serviceCategory.name.toLowerCase()} services for businesses in ${cityName}. We help local companies dominate search results and attract more customers through proven SEO strategies.` :
                `Looking for the best digital partner in ${cityName}? We are a leading SEO agency and web development company trusted by businesses in ${cityName} to deliver measurable growth. Our expert team specializes in search engine optimization, custom website design, eCommerce stores, and mobile-responsive websites.`,
            features: [
                `Local SEO Experts With Proven Rankings in ${cityName}`,
                `Mobile-First, SEO-Optimized Website Development`,
                `Affordable Packages for Small & Large Businesses in ${cityName}`,
                `Results-Driven Strategy Focused on ROI`
            ],
            currentCampaign: {
                title: `Active ${cityName} Campaign`,
                metrics: {
                    traffic: '+425%',
                    leads: '+67%',
                    revenue: '+156%'
                }
            }
        };
    }

    generateWhyChooseSection(cityData) {
        const cityName = cityData.name;
        
        return {
            title: `Why Choose Us as Your SEO & Web Design Partner in ${cityName}?`,
            reasons: [
                {
                    title: `Local SEO Experts in ${cityName}`,
                    description: `Deep understanding of ${cityName}'s market, demographics, and search behavior. We know what works for businesses in your area.`,
                    icon: 'fas fa-map-marker-alt'
                },
                {
                    title: 'Proven Track Record',
                    description: `Over 15 years helping businesses across the UK, with specific success stories from ${cityName} and surrounding areas.`,
                    icon: 'fas fa-trophy'
                },
                {
                    title: 'No Long-Term Contracts',
                    description: 'We earn your business every month through results, not binding contracts. Start or stop anytime with complete flexibility.',
                    icon: 'fas fa-handshake'
                },
                {
                    title: 'Transparent Reporting',
                    description: `Monthly detailed reports showing exactly how your investment is performing and the impact on your ${cityName} business growth.`,
                    icon: 'fas fa-chart-line'
                }
            ]
        };
    }

    generateServicesSection(cityData, serviceCategory) {
        const cityName = cityData.name;
        
        if (serviceCategory) {
            return {
                title: `Our ${serviceCategory.name} Services in ${cityName}`,
                services: serviceCategory.services.map(service => ({
                    name: service.name,
                    description: `${service.description} specifically tailored for ${cityName} businesses.`,
                    features: this.getServiceFeatures(service.slug, cityName),
                    icon: this.getServiceIcon(service.slug)
                }))
            };
        }

        return {
            title: `Our Services in ${cityName}`,
            services: [
                {
                    name: `SEO Audit and Keyword Research for ${cityName}`,
                    description: `Comprehensive SEO analysis specifically for ${cityName} market conditions and competition.`,
                    features: [
                        'Technical SEO audit',
                        `${cityName} competitor analysis`,
                        'Local keyword research',
                        'Content gap analysis'
                    ],
                    icon: 'fas fa-search'
                },
                {
                    name: 'On-Page and Off-Page SEO for Local Businesses',
                    description: `Complete SEO optimization to help your ${cityName} business rank higher in search results.`,
                    features: [
                        'On-page optimization',
                        'Local citation building',
                        'Google My Business optimization',
                        'Review management'
                    ],
                    icon: 'fas fa-cog'
                },
                {
                    name: `Custom Website Design & Development in ${cityName}`,
                    description: `Professional websites designed specifically for ${cityName} businesses and their target audiences.`,
                    features: [
                        'Mobile-responsive design',
                        'Fast loading speeds',
                        'SEO-optimized structure',
                        'Conversion optimization'
                    ],
                    icon: 'fas fa-laptop-code'
                },
                {
                    name: `Google My Business Optimization & Local Citations`,
                    description: `Maximize your visibility in ${cityName} local search results and Google Maps.`,
                    features: [
                        'GMB profile optimization',
                        `${cityName} directory submissions`,
                        'Local schema markup',
                        'Citation consistency'
                    ],
                    icon: 'fas fa-map-marked-alt'
                }
            ]
        };
    }

    generateLocalSEOSection(cityData) {
        const cityName = cityData.name;
        const region = this.getRegionForCity(cityName);
        
        return {
            title: `Local SEO Services in ${cityName}`,
            description: `Dominate local search results in ${cityName} with our proven local SEO strategies.`,
            benefits: [
                {
                    title: `${cityName} Market Expertise`,
                    description: `We understand the unique characteristics of the ${cityName} market and optimize accordingly.`,
                    icon: 'fas fa-bullseye'
                },
                {
                    title: 'Google My Business Mastery',
                    description: `Optimize your GMB profile to appear prominently when ${cityName} residents search for your services.`,
                    icon: 'fas fa-google'
                },
                {
                    title: `${region} Directory Network`,
                    description: `Get listed in all relevant ${region} and ${cityName} business directories for maximum exposure.`,
                    icon: 'fas fa-list'
                },
                {
                    title: 'Review Management',
                    description: `Build and manage your online reputation to become the most trusted business in ${cityName}.`,
                    icon: 'fas fa-star'
                }
            ]
        };
    }

    generateCaseStudiesSection(cityData) {
        const cityName = cityData.name;
        
        return {
            title: `Success Stories from ${cityName}`,
            description: `Real results from real businesses we've helped in ${cityName}.`,
            caseStudies: [
                {
                    industry: 'Construction',
                    businessType: 'Local Builder',
                    location: cityName,
                    result: '+285% local traffic',
                    description: `Helped a local construction company become the #1 result for "builders ${cityName.toLowerCase()}".`,
                    metrics: {
                        trafficIncrease: '285%',
                        leadIncrease: '340%',
                        revenueGrowth: '198%'
                    }
                },
                {
                    industry: 'Professional Services',
                    businessType: 'Law Firm',
                    location: cityName,
                    result: '+340% organic leads',
                    description: `Law firm dominates competitive legal keywords across ${cityName}.`,
                    metrics: {
                        trafficIncrease: '156%',
                        leadIncrease: '340%',
                        revenueGrowth: '267%'
                    }
                },
                {
                    industry: 'Healthcare',
                    businessType: 'Dental Practice',
                    location: cityName,
                    result: '+198% new patients',
                    description: `Dental practice becomes top choice for ${cityName} residents.`,
                    metrics: {
                        trafficIncrease: '234%',
                        leadIncrease: '198%',
                        revenueGrowth: '178%'
                    }
                }
            ]
        };
    }

    generateProcessSection(cityData) {
        const cityName = cityData.name;
        
        return {
            title: `Our SEO Process for ${cityName} Businesses`,
            description: `A proven 6-step process that has helped hundreds of ${cityName} businesses succeed online.`,
            steps: [
                {
                    step: 1,
                    title: `${cityName} Market Analysis`,
                    description: `We analyze your local competition and identify opportunities specific to ${cityName}.`,
                    icon: 'fas fa-search',
                    details: [
                        `${cityName} competitor research`,
                        'Local market analysis',
                        'Industry trend identification',
                        'Opportunity assessment'
                    ]
                },
                {
                    step: 2,
                    title: 'SEO Strategy Development',
                    description: `Create a customized SEO strategy tailored to your ${cityName} business goals.`,
                    icon: 'fas fa-chart-line',
                    details: [
                        'Custom strategy creation',
                        'Keyword targeting plan',
                        'Content strategy development',
                        'Technical optimization roadmap'
                    ]
                },
                {
                    step: 3,
                    title: 'Technical Implementation',
                    description: `Implement technical SEO improvements to ensure search engines can properly index your site.`,
                    icon: 'fas fa-cog',
                    details: [
                        'Technical SEO fixes',
                        'Site speed optimization',
                        'Mobile optimization',
                        'Schema markup implementation'
                    ]
                },
                {
                    step: 4,
                    title: `${cityName} Content Creation`,
                    description: `Create high-quality, SEO-optimized content that resonates with ${cityName} audiences.`,
                    icon: 'fas fa-edit',
                    details: [
                        `${cityName}-focused content`,
                        'Local keyword optimization',
                        'Service page optimization',
                        'Blog content creation'
                    ]
                },
                {
                    step: 5,
                    title: 'Local SEO Optimization',
                    description: `Optimize your local presence to dominate ${cityName} search results.`,
                    icon: 'fas fa-map-marker-alt',
                    details: [
                        'Google My Business optimization',
                        `${cityName} citation building`,
                        'Review strategy implementation',
                        'Local schema markup'
                    ]
                },
                {
                    step: 6,
                    title: 'Monitoring & Optimization',
                    description: `Continuously monitor and optimize your SEO performance in ${cityName}.`,
                    icon: 'fas fa-chart-bar',
                    details: [
                        'Performance monitoring',
                        'Monthly reporting',
                        'Continuous optimization',
                        'Strategy refinement'
                    ]
                }
            ]
        };
    }

    generateTestimonialsSection(cityData) {
        const cityName = cityData.name;
        
        return {
            title: `What ${cityName} Businesses Say About Us`,
            testimonials: [
                {
                    content: `OutSourceSU transformed our online presence in ${cityName}. We're now the top result for our main keywords and our leads have increased by 340%.`,
                    author: 'Sarah Mitchell',
                    company: `${cityName} Professional Services`,
                    location: cityName,
                    result: '+340% leads',
                    rating: 5,
                    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b665?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
                },
                {
                    content: `As a construction company in ${cityName}, we needed local SEO that works. OutSourceSU delivered beyond our expectations.`,
                    author: 'James Wright',
                    company: `${cityName} Construction Ltd`,
                    location: cityName,
                    result: '+285% traffic',
                    rating: 5,
                    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
                },
                {
                    content: `Our dental practice in ${cityName} has seen incredible growth thanks to OutSourceSU's SEO expertise. Highly recommended!`,
                    author: 'Dr. Michael Chen',
                    company: `${cityName} Dental Care`,
                    location: cityName,
                    result: '+198% patients',
                    rating: 5,
                    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
                }
            ]
        };
    }

    generateFAQSection(cityData, serviceCategory) {
        const cityName = cityData.name;
        const serviceName = serviceCategory ? serviceCategory.name.toLowerCase() : 'SEO services';
        
        return {
            title: `Frequently Asked Questions About ${serviceName} in ${cityName}`,
            faqs: [
                {
                    question: `How long does it take to see SEO results in ${cityName}?`,
                    answer: `For ${cityName} businesses, we typically see initial improvements within 30-60 days, with significant results in 3-6 months. The timeline depends on your current website status, competition level in ${cityName}, and the specific keywords you're targeting.`
                },
                {
                    question: `Do you guarantee first page rankings in ${cityName}?`,
                    answer: `While we can't guarantee specific rankings (no ethical SEO company can), we do guarantee measurable improvements in your ${cityName} search visibility. Our 90-day guarantee ensures you'll see tangible results or we'll work for free until you do.`
                },
                {
                    question: `What makes your ${serviceName} different in ${cityName}?`,
                    answer: `Our deep understanding of the ${cityName} market, combined with 15+ years of experience, allows us to create highly targeted strategies. We focus on local search behavior patterns specific to ${cityName} and surrounding areas.`
                },
                {
                    question: `How much do your ${serviceName} cost in ${cityName}?`,
                    answer: `Our ${serviceName} packages start from £799/month for ${cityName} businesses. We offer flexible pricing based on your specific needs, business size, and competition level. Contact us for a custom quote tailored to your ${cityName} business.`
                },
                {
                    question: `Do you work with small businesses in ${cityName}?`,
                    answer: `Absolutely! We work with businesses of all sizes in ${cityName}, from local startups to established enterprises. Our scalable approach ensures every ${cityName} business can benefit from professional SEO services.`
                },
                {
                    question: `Can you help with Google My Business optimization in ${cityName}?`,
                    answer: `Yes, Google My Business optimization is a core part of our local SEO services for ${cityName} businesses. We'll optimize your profile, manage reviews, and ensure you appear prominently in ${cityName} local search results.`
                }
            ]
        };
    }

    generateCTASection(cityData) {
        const cityName = cityData.name;
        
        return {
            title: `Ready to Grow Your ${cityName} Business?`,
            description: `Get a free SEO audit and discover how we can help your ${cityName} business generate more leads and customers through search engine optimization.`,
            primaryButton: {
                text: `Get Your Free ${cityName} SEO Audit`,
                link: '#contact',
                icon: 'fas fa-rocket'
            },
            phone: '07411575188',
            email: 'contact@outsourcesu.com',
            guarantee: `90-day results guarantee for all ${cityName} businesses`
        };
    }

    generateSchema(cityData, serviceCategory) {
        const cityName = cityData.name;
        
        return {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": `OutSourceSU - SEO & Website Development Agency ${cityName}`,
            "description": serviceCategory ? 
                `Professional ${serviceCategory.name.toLowerCase()} services in ${cityName}` :
                `Leading SEO and website development agency serving businesses in ${cityName}`,
            "address": {
                "@type": "PostalAddress",
                "addressLocality": cityName,
                "addressCountry": "GB"
            },
            "areaServed": {
                "@type": "City",
                "name": cityName
            },
            "telephone": "07411575188",
            "email": "contact@outsourcesu.com",
            "url": `https://outsourcesu.com/${cityData.slug}`,
            "sameAs": [
                "https://www.facebook.com/outsourcesu",
                "https://www.linkedin.com/company/outsourcesu",
                "https://twitter.com/outsourcesu"
            ],
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "127"
            }
        };
    }

    getServiceFeatures(serviceSlug, cityName) {
        const features = {
            'construction-seo': [
                `Local ${cityName} construction keyword targeting`,
                'Google My Business optimization for contractors',
                'Construction project portfolio optimization',
                'Local citation building for trade directories'
            ],
            'roofer-seo': [
                `Roofing contractor SEO for ${cityName}`,
                'Emergency roof repair keyword optimization',
                'Local roofing directory submissions',
                'Review management for roofing companies'
            ],
            'law-firm-seo': [
                `Legal SEO for ${cityName} law firms`,
                'Practice area page optimization',
                'Legal directory submissions',
                'Attorney bio and case study optimization'
            ],
            'dentists-seo': [
                `Dental practice SEO for ${cityName}`,
                'Dental procedure page optimization',
                'Patient review management',
                'Dental directory listings'
            ]
        };

        return features[serviceSlug] || [
            `Specialized SEO for ${cityName} businesses`,
            'Industry-specific keyword research',
            'Local search optimization',
            'Competitive analysis and strategy'
        ];
    }

    getServiceIcon(serviceSlug) {
        const icons = {
            'construction-seo': 'fas fa-hard-hat',
            'roofer-seo': 'fas fa-home',
            'law-firm-seo': 'fas fa-gavel',
            'dentists-seo': 'fas fa-tooth',
            'real-estate-seo': 'fas fa-building',
            'financial-seo': 'fas fa-chart-line'
        };

        return icons[serviceSlug] || 'fas fa-search';
    }

    getRegionForCity(cityName) {
        for (const [region, data] of Object.entries(ukCitiesData)) {
            if (data.cities.some(city => city.name === cityName)) {
                return data.name;
            }
        }
        return 'UK';
    }

    // Generate comprehensive city landing page HTML
    generateCityPageHTML(cityData, serviceCategory = null) {
        const content = this.generateCityPage(cityData, serviceCategory);
        const cityName = cityData.name;
        
        return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${content.title}</title>
    <meta name="description" content="${content.description}">
    <meta name="keywords" content="${content.keywords.join(', ')}">
    <link href="style.css" rel="stylesheet" type="text/css" />
    <link href="dynamic-styles.css" rel="stylesheet" type="text/css" />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <script type="application/ld+json">${JSON.stringify(content.schema)}</script>
</head>
<body>
    <!-- Navigation -->
    <nav class="navbar">
        <div class="nav-container">
            <div class="nav-logo">
                <h2>OutSourceSU</h2>
            </div>
            <ul class="nav-menu">
                <li><a href="index.html">Home</a></li>
                <li><a href="about.html">About</a></li>
                <li class="dropdown">
                    <a href="index.html#services">SEO Services ↓</a>
                    <ul class="dropdown-menu">
                        ${this.generateServiceDropdown()}
                    </ul>
                </li>
                <li><a href="website-development.html">Web Development</a></li>
                <li><a href="cities-pages.html">UK Cities</a></li>
                <li><a href="index.html#why-choose-us">Why Choose Us</a></li>
                <li><a href="contact.html">Contact</a></li>
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
                <div class="hero-badge">
                    <i class="fas fa-award"></i>
                    ${content.content.hero.badge}
                </div>
                <h1>${content.content.hero.title}</h1>
                <p class="hero-subtitle">${content.content.hero.subtitle}</p>
                <div class="hero-features">
                    ${content.content.hero.features.map(feature => `
                        <div class="feature-item">
                            <i class="fas fa-check"></i>
                            <span>${feature}</span>
                        </div>
                    `).join('')}
                </div>
                <div class="hero-buttons">
                    <a href="#contact" class="btn-primary">
                        <i class="fas fa-rocket"></i>
                        Get Free SEO Audit
                    </a>
                    <a href="#services" class="btn-secondary">
                        <i class="fas fa-info-circle"></i>
                        Our Services
                    </a>
                </div>
                <div class="hero-guarantees">
                    <div class="guarantee-item">
                        <i class="fas fa-check"></i>
                        <span>No Contracts</span>
                    </div>
                    <div class="guarantee-item">
                        <i class="fas fa-check"></i>
                        <span>90-Day Guarantee</span>
                    </div>
                    <div class="guarantee-item">
                        <i class="fas fa-check"></i>
                        <span>Proven Results</span>
                    </div>
                </div>
            </div>
            <div class="hero-image">
                <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2015&q=80" alt="SEO Services ${cityName}">
                <div class="floating-card">
                    <h4>${content.content.hero.currentCampaign.title}</h4>
                    <p>${content.content.hero.currentCampaign.metrics.traffic} Traffic</p>
                    <p>${content.content.hero.currentCampaign.metrics.leads} Leads</p>
                    <p>${content.content.hero.currentCampaign.metrics.revenue} Revenue</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Why Choose Us Section -->
    <section class="why-choose-us">
        <div class="container">
            <h2>${content.content.whyChoose.title}</h2>
            <div class="why-choose-grid">
                ${content.content.whyChoose.reasons.map(reason => `
                    <div class="why-choose-item">
                        <div class="why-icon">
                            <i class="${reason.icon}"></i>
                        </div>
                        <div class="why-choose-content">
                            <h3>${reason.title}</h3>
                            <p>${reason.description}</p>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    </section>

    <!-- Services Section -->
    <section id="services" class="services-section">
        <div class="container">
            <h2>${content.content.services.title}</h2>
            <div class="services-grid">
                ${content.content.services.services.map(service => `
                    <div class="service-card">
                        <div class="service-icon">
                            <i class="${service.icon}"></i>
                        </div>
                        <h3>${service.name}</h3>
                        <p>${service.description}</p>
                        <ul>
                            ${service.features.map(feature => `<li>${feature}</li>`).join('')}
                        </ul>
                    </div>
                `).join('')}
            </div>
        </div>
    </section>

    <!-- Local SEO Section -->
    <section class="local-seo-section">
        <div class="container">
            <h2>${content.content.localSEO.title}</h2>
            <p>${content.content.localSEO.description}</p>
            <div class="benefits-grid">
                ${content.content.localSEO.benefits.map(benefit => `
                    <div class="benefit-card">
                        <div class="benefit-icon">
                            <i class="${benefit.icon}"></i>
                        </div>
                        <h3>${benefit.title}</h3>
                        <p>${benefit.description}</p>
                    </div>
                `).join('')}
            </div>
        </div>
    </section>

    <!-- Case Studies Section -->
    <section class="case-studies-section">
        <div class="container">
            <h2>${content.content.caseStudies.title}</h2>
            <p>${content.content.caseStudies.description}</p>
            <div class="case-studies-grid">
                ${content.content.caseStudies.caseStudies.map(study => `
                    <div class="case-study-card">
                        <div class="case-study-header">
                            <h3>${study.industry} - ${study.businessType}</h3>
                            <span class="location">${study.location}</span>
                        </div>
                        <p>${study.description}</p>
                        <div class="case-study-metrics">
                            <div class="metric">
                                <span class="metric-value">${study.metrics.trafficIncrease}</span>
                                <span class="metric-label">Traffic Increase</span>
                            </div>
                            <div class="metric">
                                <span class="metric-value">${study.metrics.leadIncrease}</span>
                                <span class="metric-label">Lead Increase</span>
                            </div>
                            <div class="metric">
                                <span class="metric-value">${study.metrics.revenueGrowth}</span>
                                <span class="metric-label">Revenue Growth</span>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    </section>

    <!-- Process Section -->
    <section class="process-section">
        <div class="container">
            <h2>${content.content.process.title}</h2>
            <p>${content.content.process.description}</p>
            <div class="process-steps">
                ${content.content.process.steps.map(step => `
                    <div class="process-step">
                        <div class="step-number">${step.step}</div>
                        <div class="step-icon">
                            <i class="${step.icon}"></i>
                        </div>
                        <h3>${step.title}</h3>
                        <p>${step.description}</p>
                        <ul class="step-details">
                            ${step.details.map(detail => `<li>${detail}</li>`).join('')}
                        </ul>
                    </div>
                `).join('')}
            </div>
        </div>
    </section>

    <!-- Testimonials Section -->
    <section class="testimonials-section">
        <div class="container">
            <h2>${content.content.testimonials.title}</h2>
            <div class="testimonials-grid">
                ${content.content.testimonials.testimonials.map(testimonial => `
                    <div class="testimonial-card">
                        <div class="testimonial-rating">
                            ${'★'.repeat(testimonial.rating)}
                        </div>
                        <p>"${testimonial.content}"</p>
                        <div class="testimonial-author">
                            <img src="${testimonial.image}" alt="${testimonial.author}">
                            <div class="author-info">
                                <h4>${testimonial.author}</h4>
                                <span>${testimonial.company}</span>
                                <div class="result-metric">
                                    ${testimonial.result}
                                </div>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    </section>

    <!-- FAQ Section -->
    <section class="faq-section">
        <div class="container">
            <h2>${content.content.faq.title}</h2>
            <div class="faq-list">
                ${content.content.faq.faqs.map(faq => `
                    <div class="faq-item">
                        <button class="faq-question">
                            ${faq.question}
                            <i class="fas fa-chevron-down"></i>
                        </button>
                        <div class="faq-answer">
                            <p>${faq.answer}</p>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    </section>

    <!-- CTA Section -->
    <section id="contact" class="cta-section">
        <div class="container">
            <h2>${content.content.cta.title}</h2>
            <p>${content.content.cta.description}</p>
            <div class="cta-buttons">
                <a href="${content.content.cta.primaryButton.link}" class="btn-primary large">
                    <i class="${content.content.cta.primaryButton.icon}"></i>
                    ${content.content.cta.primaryButton.text}
                </a>
                <div class="cta-contact">
                    <p>Or contact us directly:</p>
                    <p><strong>Phone:</strong> ${content.content.cta.phone}</p>
                    <p><strong>Email:</strong> ${content.content.cta.email}</p>
                </div>
            </div>
            <div class="cta-guarantee">
                <i class="fas fa-shield-alt"></i>
                <span>${content.content.cta.guarantee}</span>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h3>OutSourceSU</h3>
                    <p>Award-winning UK SEO company, helping businesses in ${cityName} achieve exceptional organic growth.</p>
                </div>
                <div class="footer-section">
                    <h4>Popular Services in ${cityName}</h4>
                    <ul>
                        <li><a href="real-estate-seo.html">Real Estate SEO</a></li>
                        <li><a href="construction-seo.html">Construction SEO</a></li>
                        <li><a href="law-firm-seo.html">Law Firm SEO</a></li>
                        <li><a href="dentists-seo.html">Dentists SEO</a></li>
                        <li><a href="white-label-seo.html">White Label SEO</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h4>Company</h4>
                    <ul>
                        <li><a href="about.html">About Us</a></li>
                        <li><a href="contact.html">Contact</a></li>
                        <li><a href="privacy-policy.html">Privacy Policy</a></li>
                        <li><a href="terms-conditions.html">Terms & Conditions</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h4>Contact Info</h4>
                    <ul>
                        <li><i class="fas fa-phone"></i> ${content.content.cta.phone}</li>
                        <li><i class="fas fa-envelope"></i> ${content.content.cta.email}</li>
                        <li><i class="fas fa-map-marker-alt"></i> Serving ${cityName} & Surrounding Areas</li>
                    </ul>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2025 OutSourceSU Limited. All rights reserved.</p>
                <p>Award-Winning SEO Services in ${cityName} | Registered in England No. 06950800</p>
            </div>
        </div>
    </footer>

    <script src="script.js"></script>
    <script src="uk-cities-data.js"></script>
    <script src="city-content-generator.js"></script>
</body>
</html>`;
    }

    generateServiceDropdown() {
        let dropdownHTML = '';
        
        Object.entries(serviceCategories).forEach(([categoryKey, category]) => {
            dropdownHTML += `<li><h4>${category.name}</h4></li>`;
            category.services.forEach(service => {
                dropdownHTML += `<li><a href="${service.slug}.html">${service.name}</a></li>`;
            });
            dropdownHTML += `<li><hr></li>`;
        });
        
        return dropdownHTML;
    }
}

// Initialize city content generator
if (typeof window !== 'undefined') {
    window.CityContentGenerator = CityContentGenerator;
    window.serviceCategories = serviceCategories;
    window.industryKeywords = industryKeywords;
}
