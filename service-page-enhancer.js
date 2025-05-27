
class ServicePageEnhancer {
    constructor() {
        this.init();
    }

    init() {
        this.addServicePageComponents();
        this.enhanceExistingContent();
        this.addInteractiveElements();
    }

    addServicePageComponents() {
        const servicePages = [
            'construction-seo', 'roofer-seo', 'law-firm-seo', 'healthcare-seo',
            'real-estate-seo', 'financial-seo', 'accountants-seo', 'dentists-seo'
        ];

        const currentPage = window.location.pathname.split('/').pop().replace('.html', '');
        
        if (servicePages.includes(currentPage)) {
            this.addTrustSignals();
            this.addProcessTimeline();
            this.addPricingPreview();
            this.addLocationTargeting();
            this.addCompetitorComparison();
        }
    }

    addTrustSignals() {
        const trustSection = document.createElement('section');
        trustSection.className = 'trust-signals-component';
        trustSection.innerHTML = `
            <div class="container">
                <div class="trust-signals-grid">
                    <div class="trust-signal">
                        <div class="trust-icon">
                            <i class="fas fa-award"></i>
                        </div>
                        <div class="trust-content">
                            <h4>Google Premier Partner</h4>
                            <p>Certified by Google for excellence in SEO</p>
                        </div>
                    </div>
                    <div class="trust-signal">
                        <div class="trust-icon">
                            <i class="fas fa-shield-check"></i>
                        </div>
                        <div class="trust-content">
                            <h4>15+ Years Experience</h4>
                            <p>Proven track record since 2009</p>
                        </div>
                    </div>
                    <div class="trust-signal">
                        <div class="trust-icon">
                            <i class="fas fa-users"></i>
                        </div>
                        <div class="trust-content">
                            <h4>500+ Happy Clients</h4>
                            <p>Businesses across the UK trust us</p>
                        </div>
                    </div>
                    <div class="trust-signal">
                        <div class="trust-icon">
                            <i class="fas fa-chart-line"></i>
                        </div>
                        <div class="trust-content">
                            <h4>94% Success Rate</h4>
                            <p>Page 1 rankings within 90 days</p>
                        </div>
                    </div>
                </div>
            </div>
        `;

        const heroSection = document.querySelector('.service-hero');
        if (heroSection) {
            heroSection.insertAdjacentElement('afterend', trustSection);
        }
    }

    addProcessTimeline() {
        const timelineSection = document.createElement('section');
        timelineSection.className = 'process-timeline-component';
        timelineSection.innerHTML = `
            <div class="container">
                <div class="section-header">
                    <h2>Our Proven SEO Process</h2>
                    <p>How we deliver results in 90 days</p>
                </div>
                <div class="timeline">
                    <div class="timeline-item">
                        <div class="timeline-marker">
                            <span>1</span>
                        </div>
                        <div class="timeline-content">
                            <h3>Week 1-2: SEO Audit & Strategy</h3>
                            <p>Complete technical analysis and keyword research</p>
                            <ul>
                                <li>Technical SEO audit</li>
                                <li>Competitor analysis</li>
                                <li>Keyword research & mapping</li>
                                <li>Strategy development</li>
                            </ul>
                        </div>
                    </div>
                    <div class="timeline-item">
                        <div class="timeline-marker">
                            <span>2</span>
                        </div>
                        <div class="timeline-content">
                            <h3>Week 3-6: Implementation</h3>
                            <p>Execute technical fixes and content optimization</p>
                            <ul>
                                <li>Technical optimizations</li>
                                <li>On-page optimization</li>
                                <li>Content creation</li>
                                <li>Local SEO setup</li>
                            </ul>
                        </div>
                    </div>
                    <div class="timeline-item">
                        <div class="timeline-marker">
                            <span>3</span>
                        </div>
                        <div class="timeline-content">
                            <h3>Week 7-12: Authority Building</h3>
                            <p>Build domain authority and track results</p>
                            <ul>
                                <li>Link building campaigns</li>
                                <li>Content marketing</li>
                                <li>Performance monitoring</li>
                                <li>Monthly reporting</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        `;

        const servicesSection = document.querySelector('.services-detailed');
        if (servicesSection) {
            servicesSection.insertAdjacentElement('afterend', timelineSection);
        }
    }

    addPricingPreview() {
        const pricingSection = document.createElement('section');
        pricingSection.className = 'pricing-preview-component';
        pricingSection.innerHTML = `
            <div class="container">
                <div class="section-header">
                    <h2>SEO Investment Packages</h2>
                    <p>Transparent pricing with no hidden fees</p>
                </div>
                <div class="pricing-grid">
                    <div class="pricing-card starter">
                        <h3>Starter</h3>
                        <div class="price">
                            <span class="currency">£</span>
                            <span class="amount">997</span>
                            <span class="period">/month</span>
                        </div>
                        <ul class="features">
                            <li><i class="fas fa-check"></i> Local SEO optimization</li>
                            <li><i class="fas fa-check"></i> Google Business Profile</li>
                            <li><i class="fas fa-check"></i> 5 target keywords</li>
                            <li><i class="fas fa-check"></i> Monthly reporting</li>
                        </ul>
                        <p class="best-for">Best for: Small local businesses</p>
                    </div>
                    <div class="pricing-card professional popular">
                        <div class="popular-badge">Most Popular</div>
                        <h3>Professional</h3>
                        <div class="price">
                            <span class="currency">£</span>
                            <span class="amount">1,997</span>
                            <span class="period">/month</span>
                        </div>
                        <ul class="features">
                            <li><i class="fas fa-check"></i> Everything in Starter</li>
                            <li><i class="fas fa-check"></i> 15 target keywords</li>
                            <li><i class="fas fa-check"></i> Content creation</li>
                            <li><i class="fas fa-check"></i> Link building</li>
                            <li><i class="fas fa-check"></i> Technical SEO</li>
                        </ul>
                        <p class="best-for">Best for: Growing businesses</p>
                    </div>
                    <div class="pricing-card enterprise">
                        <h3>Enterprise</h3>
                        <div class="price">
                            <span class="currency">£</span>
                            <span class="amount">3,997</span>
                            <span class="period">/month</span>
                        </div>
                        <ul class="features">
                            <li><i class="fas fa-check"></i> Everything in Professional</li>
                            <li><i class="fas fa-check"></i> Unlimited keywords</li>
                            <li><i class="fas fa-check"></i> Advanced analytics</li>
                            <li><i class="fas fa-check"></i> Dedicated account manager</li>
                            <li><i class="fas fa-check"></i> Weekly reporting</li>
                        </ul>
                        <p class="best-for">Best for: Large enterprises</p>
                    </div>
                </div>
                <div class="pricing-footer">
                    <p><strong>90-Day Money-Back Guarantee</strong> - No rankings improvement? Full refund.</p>
                    <a href="contact.html" class="btn-primary large">Get Custom Quote</a>
                </div>
            </div>
        `;

        const keywordsSection = document.querySelector('.keywords-section');
        if (keywordsSection) {
            keywordsSection.insertAdjacentElement('beforebegin', pricingSection);
        }
    }

    addLocationTargeting() {
        const locationSection = document.createElement('section');
        locationSection.className = 'location-targeting-component';
        locationSection.innerHTML = `
            <div class="container">
                <div class="section-header">
                    <h2>UK-Wide Service Coverage</h2>
                    <p>Local SEO expertise across all major UK cities</p>
                </div>
                <div class="location-grid">
                    <div class="location-card">
                        <h3><i class="fas fa-map-marker-alt"></i> London & South East</h3>
                        <p>Covering London, Brighton, Canterbury, Oxford, Reading</p>
                        <div class="location-stats">
                            <span>150+ clients</span> • <span>avg +420% traffic</span>
                        </div>
                    </div>
                    <div class="location-card">
                        <h3><i class="fas fa-map-marker-alt"></i> Manchester & North West</h3>
                        <p>Covering Manchester, Liverpool, Preston, Blackpool, Chester</p>
                        <div class="location-stats">
                            <span>95+ clients</span> • <span>avg +385% traffic</span>
                        </div>
                    </div>
                    <div class="location-card">
                        <h3><i class="fas fa-map-marker-alt"></i> Birmingham & Midlands</h3>
                        <p>Covering Birmingham, Coventry, Leicester, Nottingham</p>
                        <div class="location-stats">
                            <span>80+ clients</span> • <span>avg +395% traffic</span>
                        </div>
                    </div>
                    <div class="location-card">
                        <h3><i class="fas fa-map-marker-alt"></i> Scotland & Wales</h3>
                        <p>Covering Edinburgh, Glasgow, Cardiff, Swansea, Aberdeen</p>
                        <div class="location-stats">
                            <span>60+ clients</span> • <span>avg +410% traffic</span>
                        </div>
                    </div>
                </div>
            </div>
        `;

        const resultsSection = document.querySelector('.results-section');
        if (resultsSection) {
            resultsSection.insertAdjacentElement('beforebegin', locationSection);
        }
    }

    addCompetitorComparison() {
        const comparisonSection = document.createElement('section');
        comparisonSection.className = 'competitor-comparison-component';
        comparisonSection.innerHTML = `
            <div class="container">
                <div class="section-header">
                    <h2>Why Choose OutSourceSU vs Other SEO Agencies</h2>
                    <p>See how we compare to the competition</p>
                </div>
                <div class="comparison-table-wrapper">
                    <table class="comparison-table">
                        <thead>
                            <tr>
                                <th>Features</th>
                                <th class="highlight">OutSourceSU</th>
                                <th>Other Agencies</th>
                                <th>Freelancers</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>90-Day Guarantee</td>
                                <td class="highlight"><i class="fas fa-check-circle"></i></td>
                                <td><i class="fas fa-times-circle"></i></td>
                                <td><i class="fas fa-times-circle"></i></td>
                            </tr>
                            <tr>
                                <td>No Long-Term Contracts</td>
                                <td class="highlight"><i class="fas fa-check-circle"></i></td>
                                <td><i class="fas fa-times-circle"></i></td>
                                <td><i class="fas fa-check-circle"></i></td>
                            </tr>
                            <tr>
                                <td>Dedicated Account Manager</td>
                                <td class="highlight"><i class="fas fa-check-circle"></i></td>
                                <td><i class="fas fa-minus-circle"></i></td>
                                <td><i class="fas fa-times-circle"></i></td>
                            </tr>
                            <tr>
                                <td>15+ Years Experience</td>
                                <td class="highlight"><i class="fas fa-check-circle"></i></td>
                                <td><i class="fas fa-minus-circle"></i></td>
                                <td><i class="fas fa-times-circle"></i></td>
                            </tr>
                            <tr>
                                <td>Google Premier Partner</td>
                                <td class="highlight"><i class="fas fa-check-circle"></i></td>
                                <td><i class="fas fa-times-circle"></i></td>
                                <td><i class="fas fa-times-circle"></i></td>
                            </tr>
                            <tr>
                                <td>Transparent Reporting</td>
                                <td class="highlight"><i class="fas fa-check-circle"></i></td>
                                <td><i class="fas fa-minus-circle"></i></td>
                                <td><i class="fas fa-minus-circle"></i></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        `;

        const internalLinksSection = document.querySelector('.internal-links');
        if (internalLinksSection) {
            internalLinksSection.insertAdjacentElement('beforebegin', comparisonSection);
        }
    }

    enhanceExistingContent() {
        // Add loading animations to stat cards
        const statItems = document.querySelectorAll('.stat-item, .result-item');
        statItems.forEach((item, index) => {
            item.style.animationDelay = `${index * 0.1}s`;
            item.classList.add('animate-fade-in');
        });

        // Add hover effects to service cards
        const serviceCards = document.querySelectorAll('.service-card, .benefit-card');
        serviceCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-10px) scale(1.02)';
                card.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15)';
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0) scale(1)';
                card.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.08)';
            });
        });
    }

    addInteractiveElements() {
        // Add scroll progress indicator
        const progressBar = document.createElement('div');
        progressBar.className = 'scroll-progress';
        progressBar.innerHTML = '<div class="progress-fill"></div>';
        document.body.appendChild(progressBar);

        // Update progress on scroll
        window.addEventListener('scroll', () => {
            const scrollPercent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
            document.querySelector('.progress-fill').style.width = `${scrollPercent}%`;
        });

        // Add floating CTA button
        const floatingCTA = document.createElement('div');
        floatingCTA.className = 'floating-cta';
        floatingCTA.innerHTML = `
            <a href="contact.html" class="floating-btn">
                <i class="fas fa-rocket"></i>
                <span>Get Free Audit</span>
            </a>
        `;
        document.body.appendChild(floatingCTA);

        // Show/hide floating CTA based on scroll
        let lastScrollTop = 0;
        window.addEventListener('scroll', () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            if (scrollTop > lastScrollTop && scrollTop > 500) {
                floatingCTA.classList.add('visible');
            } else if (scrollTop < lastScrollTop || scrollTop < 200) {
                floatingCTA.classList.remove('visible');
            }
            lastScrollTop = scrollTop;
        });
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    new ServicePageEnhancer();
});

// Export for use
if (typeof window !== 'undefined') {
    window.ServicePageEnhancer = ServicePageEnhancer;
}
