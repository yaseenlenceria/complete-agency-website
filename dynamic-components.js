// Dynamic Components for OutSourceSU

class DynamicPageBuilder {
    constructor() {
        this.components = {};
        this.initializeComponents();
    }

    initializeComponents() {
        this.components = {
            hero: this.createHeroSection.bind(this),
            stats: this.createStatsSection.bind(this),
            services: this.createServicesSection.bind(this),
            benefits: this.createBenefitsSection.bind(this),
            process: this.createProcessSection.bind(this),
            testimonials: this.createTestimonialsSection.bind(this),
            faq: this.createFAQSection.bind(this),
            cta: this.createCTASection.bind(this),
            industryTable: this.createIndustryTableSection.bind(this),
            liveStats: this.createLiveStatsSection.bind(this),
            currentlyWorking: this.createCurrentlyWorkingSection.bind(this),
            performanceGraph: this.createPerformanceGraphSection.bind(this)
        };
    }

    buildPage(pageConfig) {
        const main = document.createElement('main');

        pageConfig.sections.forEach(sectionConfig => {
            if (this.components[sectionConfig.type]) {
                const section = this.components[sectionConfig.type](sectionConfig.data);
                main.appendChild(section);
            }
        });

        return main;
    }

    createHeroSection(data) {
        return this.createElement('section', 'hero service-hero', `
            <div class="hero-content">
                <div class="hero-text">
                    <div class="hero-badge">
                        <i class="fas fa-award"></i>
                        ${data.badge || 'Award-Winning SEO Services'}
                    </div>
                    <h1>${data.title}</h1>
                    <p class="hero-subtitle">${data.subtitle}</p>
                    <div class="hero-stats">
                        ${data.stats ? data.stats.map(stat => `
                            <div class="stat-item">
                                <span class="stat-number">${stat.number}</span>
                                <span class="stat-label">${stat.label}</span>
                            </div>
                        `).join('') : ''}
                    </div>
                    <div class="hero-buttons">
                        <a href="#contact" class="btn-primary">
                            <i class="fas fa-rocket"></i>
                            Get Free SEO Audit
                        </a>
                        <a href="#services" class="btn-secondary">
                            <i class="fas fa-info-circle"></i>
                            Learn More
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
                    <img src="${data.image}" alt="${data.title}">
                    <div class="floating-card">
                        <h4>Current Campaign</h4>
                        <p>+${data.currentStats?.increase || '425'}% Traffic</p>
                        <p>+${data.currentStats?.leads || '67'}% Leads</p>
                        <p>+${data.currentStats?.revenue || '156'}% Revenue</p>
                    </div>
                </div>
            </div>
        `);
    }

    createStatsSection(data) {
        return this.createElement('section', 'stats-component', `
            <div class="container">
                <div class="section-header">
                    <h2>${data.title}</h2>
                    <p>${data.description}</p>
                </div>
                <div class="stats-grid">
                    ${data.stats.map(stat => `
                        <div class="stat-item">
                            <div class="stat-icon">
                                <i class="${stat.icon}"></i>
                            </div>
                            <div class="stat-number">${stat.number}</div>
                            <div class="stat-label">${stat.label}</div>
                            <div class="stat-description">${stat.description}</div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `);
    }

    createServicesSection(data) {
        return this.createElement('section', 'services-section', `
            <div class="container">
                <div class="section-header">
                    <h2>${data.title}</h2>
                    <p>${data.description}</p>
                </div>
                <div class="services-grid">
                    ${data.services.map(service => `
                        <div class="service-card">
                            <div class="service-icon">
                                <i class="${service.icon}"></i>
                            </div>
                            <h3>${service.name}</h3>
                            <p>${service.description}</p>
                            <ul>
                                ${service.features.map(feature => `<li>${feature}</li>`).join('')}
                            </ul>
                            <div class="service-card-footer">
                                <a href="${service.link}" class="service-cta">
                                    Learn More <i class="fas fa-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `);
    }

    createBenefitsSection(data) {
        return this.createElement('section', 'benefits-component', `
            <div class="container">
                <div class="section-header">
                    <h2>${data.title}</h2>
                    <p>${data.description}</p>
                </div>
                <div class="benefits-grid">
                    ${data.benefits.map(benefit => `
                        <div class="benefit-card">
                            <div class="benefit-icon">
                                <i class="${benefit.icon}"></i>
                            </div>
                            <h3>${benefit.title}</h3>
                            <p>${benefit.description}</p>
                            <ul class="benefit-features">
                                ${benefit.features.map(feature => `<li>${feature}</li>`).join('')}
                            </ul>
                        </div>
                    `).join('')}
                </div>
            </div>
        `);
    }

    createProcessSection(data) {
        return this.createElement('section', 'process-component', `
            <div class="container">
                <div class="section-header">
                    <h2>${data.title}</h2>
                    <p>${data.description}</p>
                </div>
                <div class="process-steps">
                    ${data.steps.map((step, index) => `
                        <div class="process-step">
                            <div class="step-number">${index + 1}</div>
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
        `);
    }

    createTestimonialsSection(data) {
        return this.createElement('section', 'testimonials-component', `
            <div class="container">
                <div class="section-header">
                    <h2>${data.title}</h2>
                    <p>${data.description}</p>
                </div>
                <div class="testimonials-grid">
                    ${data.testimonials.map(testimonial => `
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
        `);
    }

    createFAQSection(data) {
        return this.createElement('section', 'faq-component', `
            <div class="container">
                <div class="section-header">
                    <h2>${data.title}</h2>
                    <p>${data.description}</p>
                </div>
                <div class="faq-list">
                    ${data.faqs.map(faq => `
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
        `);
    }

    createCTASection(data) {
        return this.createElement('section', 'cta-section', `
            <div class="container">
                <div class="cta-content">
                    <h2>${data.title}</h2>
                    <p>${data.description}</p>
                    <div class="cta-buttons">
                        <a href="${data.primaryButton.link}" class="btn-primary large">
                            <i class="${data.primaryButton.icon}"></i>
                            ${data.primaryButton.text}
                        </a>
                        <div class="cta-contact">
                            <p>Or call us directly: <strong>${data.phone}</strong></p>
                        </div>
                    </div>
                </div>
            </div>
        `);
    }

    createLiveStatsSection(data) {
        return this.createElement('section', 'live-stats-wrapper', `
            <div class="container">
                <div class="section-header">
                    <h2>${data.title}</h2>
                    <p>${data.description}</p>
                    <div class="live-indicator">
                        <div class="live-dot"></div>
                        <span>Live Data</span>
                    </div>
                </div>
                <div class="live-stats-grid">
                    ${data.stats.map(stat => `
                        <div class="live-stat-card">
                            <div class="stat-icon">
                                <i class="${stat.icon}"></i>
                            </div>
                            <div class="stat-number">${stat.value}</div>
                            <div class="stat-label">${stat.label}</div>
                            <div class="stat-trend">
                                <i class="fas fa-arrow-up"></i>
                                ${stat.trend}
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `);
    }

    createCurrentlyWorkingSection(data) {
        return this.createElement('section', 'currently-working-wrapper', `
            <div class="container">
                <div class="section-header">
                    <h2>${data.title}</h2>
                    <p>${data.description}</p>
                </div>
                <div class="working-carousel">
                    <div class="working-cards">
                        ${data.projects.map((project, index) => `
                            <div class="working-card ${index === 0 ? 'active' : ''}">
                                <div class="working-status">
                                    <div class="status-indicator"></div>
                                    <div class="status-text">Currently Working</div>
                                </div>
                                <h3>${project.title}</h3>
                                <div class="client-details">
                                    <div class="industry">${project.industry}</div>
                                    <div class="location">${project.location}</div>
                                </div>
                                <div class="current-work">
                                    <i class="fas fa-cog fa-spin"></i>
                                    <span>${project.currentTask}</span>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `);
    }

    createPerformanceGraphSection(data) {
        return this.createElement('section', 'performance-graph-wrapper', `
            <div class="container">
                <div class="section-header">
                    <h2>${data.title}</h2>
                    <p>${data.description}</p>
                </div>
                <div class="graph-container">
                    <div class="graph-legend">
                        <div class="legend-item">
                            <div class="legend-color traffic"></div>
                            <span>Website Traffic</span>
                        </div>
                        <div class="legend-item">
                            <div class="legend-color leads"></div>
                            <span>Lead Generation</span>
                        </div>
                        <div class="legend-item">
                            <div class="legend-color revenue"></div>
                            <span>Revenue Growth</span>
                        </div>
                    </div>
                    <div class="graph-chart">
                        ${data.months.map(month => `
                            <div class="graph-bar-group">
                                <div class="graph-bars">
                                    <div class="graph-bar traffic" style="height: ${month.traffic}px"></div>
                                    <div class="graph-bar leads" style="height: ${month.leads}px"></div>
                                    <div class="graph-bar revenue" style="height: ${month.revenue}px"></div>
                                </div>
                                <div class="month-label">${month.name}</div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `);
    }

    createElement(tag, className, innerHTML) {
        const element = document.createElement(tag);
        element.className = className;
        element.innerHTML = innerHTML;
        return element;
    }
}

// Sample page configurations
const sampleConfigurations = {
    seoService: {
        sections: [
            {
                type: 'hero',
                data: {
                    title: 'Professional SEO Services That Deliver Results',
                    subtitle: 'Dominate search results and drive qualified traffic to your business with our proven SEO strategies.',
                    badge: 'UK\'s Leading SEO Agency',
                    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2015&q=80',
                    stats: [
                        { number: '500+', label: 'Clients Served' },
                        { number: '95%', label: 'Success Rate' },
                        { number: '15+', label: 'Years Experience' }
                    ],
                    currentStats: {
                        increase: '425',
                        leads: '67',
                        revenue: '156'
                    }
                }
            },
            {
                type: 'stats',
                data: {
                    title: 'Proven SEO Results',
                    description: 'Our track record speaks for itself with measurable improvements across all key metrics.',
                    stats: [
                        {
                            icon: 'fas fa-chart-line',
                            number: '425%',
                            label: 'Average Traffic Increase',
                            description: 'Within 6 months of implementation'
                        },
                        {
                            icon: 'fas fa-users',
                            number: '89%',
                            label: 'Lead Generation Improvement',
                            description: 'More qualified prospects'
                        },
                        {
                            icon: 'fas fa-pound-sign',
                            number: '267%',
                            label: 'Revenue Growth',
                            description: 'Return on SEO investment'
                        },
                        {
                            icon: 'fas fa-trophy',
                            number: '95%',
                            label: 'Client Satisfaction',
                            description: 'Excellent service ratings'
                        }
                    ]
                }
            },
            {
                type: 'services',
                data: {
                    title: 'Comprehensive SEO Services',
                    description: 'Everything you need to dominate search results and grow your business online.',
                    services: [
                        {
                            icon: 'fas fa-search',
                            name: 'Technical SEO',
                            description: 'Complete technical optimization to ensure search engines can crawl and index your site effectively.',
                            features: [
                                'Site speed optimization',
                                'Mobile responsiveness',
                                'Schema markup implementation',
                                'XML sitemap optimization'
                            ],
                            link: '#contact'
                        },
                        {
                            icon: 'fas fa-map-marker-alt',
                            name: 'Local SEO',
                            description: 'Dominate local search results and attract more customers in your area.',
                            features: [
                                'Google Business Profile optimization',
                                'Local citation building',
                                'Review management',
                                'Local keyword targeting'
                            ],
                            link: '#contact'
                        },
                        {
                            icon: 'fas fa-edit',
                            name: 'Content Marketing',
                            description: 'High-quality, SEO-optimized content that engages your audience and ranks well.',
                            features: [
                                'Keyword research & strategy',
                                'Content creation & optimization',
                                'Blog management',
                                'Content performance analysis'
                            ],
                            link: '#contact'
                        }
                    ]
                }
            }
        ]
    }
};

// Initialize dynamic page builder
window.DynamicPageBuilder = DynamicPageBuilder;
window.sampleConfigurations = sampleConfigurations;