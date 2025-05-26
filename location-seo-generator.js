
// Location-based SEO Content Generator

class LocationSEOGenerator {
    constructor() {
        this.initLocationContent();
    }

    initLocationContent() {
        // Add location-specific schema markup
        this.addLocationSchema();
        
        // Generate location-specific content
        this.generateLocationContent();
        
        // Add location-based keywords
        this.optimizeForLocations();
    }

    addLocationSchema() {
        const schema = {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "OutSourceSU - SEO & Website Development Agency",
            "description": "Leading SEO and website development agency serving businesses across the UK",
            "address": {
                "@type": "PostalAddress",
                "addressCountry": "GB",
                "addressRegion": "England"
            },
            "areaServed": [
                {
                    "@type": "Country",
                    "name": "United Kingdom"
                },
                {
                    "@type": "AdministrativeArea",
                    "name": "England"
                },
                {
                    "@type": "AdministrativeArea", 
                    "name": "Scotland"
                },
                {
                    "@type": "AdministrativeArea",
                    "name": "Wales"
                },
                {
                    "@type": "AdministrativeArea",
                    "name": "Northern Ireland"
                }
            ],
            "serviceArea": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                    "@type": "GeoCoordinates",
                    "latitude": 54.7023545,
                    "longitude": -3.2765753
                },
                "geoRadius": "1000000"
            },
            "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "SEO and Digital Marketing Services",
                "itemListElement": [
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Local SEO Services",
                            "description": "Local search engine optimization for UK businesses"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Website Development",
                            "description": "Professional website design and development"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Technical SEO",
                            "description": "Technical website optimization services"
                        }
                    }
                ]
            }
        };

        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.textContent = JSON.stringify(schema);
        document.head.appendChild(script);
    }

    generateLocationContent() {
        // Create location-specific sections
        this.createUKCitiesSection();
        this.createLocationBasedTestimonials();
    }

    createUKCitiesSection() {
        const locationSection = document.createElement('section');
        locationSection.className = 'uk-locations-section';
        locationSection.innerHTML = `
            <div class="container">
                <div class="section-header">
                    <h2>SEO Services Across the UK</h2>
                    <p>Serving businesses in major cities and towns throughout England, Scotland, Wales, and Northern Ireland</p>
                </div>
                <div class="uk-regions">
                    ${Object.entries(ukCitiesData).map(([region, data]) => `
                        <div class="region-block">
                            <h3>${data.name}</h3>
                            <div class="cities-grid">
                                ${data.cities.map(city => `
                                    <div class="city-item ${city.major ? 'major-city' : ''}">
                                        <a href="#contact" data-city="${city.name}">
                                            <i class="fas fa-map-marker-alt"></i>
                                            <span>${city.name}</span>
                                            ${city.major ? '<span class="major-tag">Major City</span>' : ''}
                                        </a>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    `).join('')}
                </div>
                <div class="location-cta">
                    <p>Don't see your location? We serve businesses throughout the UK. <a href="#contact">Contact us</a> to discuss your SEO needs.</p>
                </div>
            </div>
        `;

        // Insert before footer
        const footer = document.querySelector('.footer');
        if (footer) {
            footer.parentNode.insertBefore(locationSection, footer);
        }
    }

    createLocationBasedTestimonials() {
        const testimonials = [
            {
                text: "OutSourceSU helped our construction company dominate local searches in Manchester. We're now the #1 result for 'builders Manchester'.",
                author: "James Wright",
                company: "Wright Construction Ltd",
                location: "Manchester",
                result: "+285% local traffic"
            },
            {
                text: "Their SEO expertise helped our law firm rank #1 for competitive legal keywords across London. Highly recommended!",
                author: "Sarah Mitchell",
                company: "Mitchell & Partners",
                location: "London", 
                result: "+340% organic leads"
            },
            {
                text: "As a dental practice in Birmingham, we needed local SEO that works. OutSourceSU delivered exceptional results.",
                author: "Dr. Michael Chen",
                company: "Birmingham Dental Care",
                location: "Birmingham",
                result: "+198% new patients"
            }
        ];

        const testimonialsSection = document.createElement('section');
        testimonialsSection.className = 'location-testimonials';
        testimonialsSection.innerHTML = `
            <div class="container">
                <div class="section-header">
                    <h2>Success Stories Across the UK</h2>
                    <p>Real results from real businesses in major UK cities</p>
                </div>
                <div class="testimonials-grid">
                    ${testimonials.map(testimonial => `
                        <div class="testimonial-card">
                            <div class="testimonial-content">
                                <p>"${testimonial.text}"</p>
                            </div>
                            <div class="testimonial-author">
                                <div class="author-info">
                                    <h4>${testimonial.author}</h4>
                                    <span>${testimonial.company}</span>
                                    <div class="location-result">
                                        <span class="location"><i class="fas fa-map-marker-alt"></i> ${testimonial.location}</span>
                                        <span class="result">${testimonial.result}</span>
                                    </div>
                                </div>
                            </div>
                            <div class="testimonial-rating">
                                ${'★'.repeat(5)}
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;

        const industriesSection = document.querySelector('#industries');
        if (industriesSection) {
            industriesSection.parentNode.insertBefore(testimonialsSection, industriesSection.nextSibling);
        }
    }

    optimizeForLocations() {
        // Add location-specific meta descriptions
        this.updateMetaDescriptions();
        
        // Add location-specific keywords to content
        this.addLocationKeywords();
    }

    updateMetaDescriptions() {
        const currentDesc = document.querySelector('meta[name="description"]');
        if (currentDesc) {
            const newDesc = currentDesc.content + ' Serving businesses across England, Scotland, Wales, and Northern Ireland.';
            currentDesc.content = newDesc;
        }
    }

    addLocationKeywords() {
        // Add location keywords to existing content
        const keywordSections = document.querySelectorAll('.hero-text p, .section-header p');
        keywordSections.forEach(section => {
            if (section.textContent.includes('UK') && !section.textContent.includes('England')) {
                section.textContent = section.textContent.replace('UK', 'UK (England, Scotland, Wales, Northern Ireland)');
            }
        });
    }
}

// Industry-specific location optimization
class IndustryLocationOptimizer {
    constructor() {
        this.industries = [
            'Construction', 'Real Estate', 'Legal Services', 'Healthcare',
            'Dental Practices', 'Financial Services', 'Accounting',
            'Insurance', 'Restaurants', 'Hotels'
        ];
        this.init();
    }

    init() {
        this.createIndustryLocationMatrix();
    }

    createIndustryLocationMatrix() {
        const matrixSection = document.createElement('section');
        matrixSection.className = 'industry-location-matrix';
        matrixSection.innerHTML = `
            <div class="container">
                <div class="section-header">
                    <h2>Industries We Serve Across the UK</h2>
                    <p>Specialized SEO strategies for every industry in every major UK city</p>
                </div>
                <div class="industry-matrix">
                    ${this.industries.map(industry => `
                        <div class="industry-row">
                            <h3>${industry} SEO</h3>
                            <div class="industry-locations">
                                <span class="industry-desc">Available in:</span>
                                <div class="location-tags">
                                    ${this.getMajorCities().slice(0, 8).map(city => `
                                        <span class="location-tag">${city}</span>
                                    `).join('')}
                                    <span class="more-locations">+50 more cities</span>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;

        const aboutSection = document.querySelector('#about');
        if (aboutSection) {
            aboutSection.parentNode.insertBefore(matrixSection, aboutSection.nextSibling);
        }
    }

    getMajorCities() {
        const cities = [];
        Object.values(ukCitiesData).forEach(region => {
            region.cities.forEach(city => {
                if (city.major) cities.push(city.name);
            });
        });
        return cities.sort();
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    if (typeof ukCitiesData !== 'undefined') {
        new LocationSEOGenerator();
        new IndustryLocationOptimizer();
    }
});

// Export for use in other files
if (typeof window !== 'undefined') {
    window.LocationSEOGenerator = LocationSEOGenerator;
    window.IndustryLocationOptimizer = IndustryLocationOptimizer;
}
