
// Universal Loader for OutSourceSU Components
class UniversalLoader {
    constructor() {
        this.loadedComponents = new Set();
        this.init();
    }

    init() {
        this.loadEssentialComponents();
        this.initSEOOptimization();
        this.fixMobileNavigation();
        this.optimizePerformance();
    }

    async loadEssentialComponents() {
        try {
            // Load breadcrumb component
            if (!this.loadedComponents.has('breadcrumb')) {
                await this.loadBreadcrumbComponent();
                this.loadedComponents.add('breadcrumb');
                console.log('✓ BreadcrumbComponent loaded successfully');
            }

            // Load FAQ component
            if (!this.loadedComponents.has('faq')) {
                await this.loadFAQComponent();
                this.loadedComponents.add('faq');
                console.log('✓ FAQComponent loaded successfully');
            }

            // Load reviews component
            if (!this.loadedComponents.has('reviews')) {
                await this.loadReviewsComponent();
                this.loadedComponents.add('reviews');
                console.log('✓ ReviewsComponent loaded successfully');
            }

            // Load UK ranking charts
            if (!this.loadedComponents.has('ranking')) {
                await this.loadUKRankingCharts();
                this.loadedComponents.add('ranking');
                console.log('✓ UKRankingCharts loaded successfully');
            }

            // Load enhanced components
            if (!this.loadedComponents.has('enhanced')) {
                await this.loadEnhancedComponents();
                this.loadedComponents.add('enhanced');
                console.log('✓ EnhancedComponents loaded successfully');
            }

        } catch (error) {
            console.error('Error loading components:', error);
        }
    }

    loadBreadcrumbComponent() {
        return new Promise((resolve) => {
            if (typeof BreadcrumbComponent === 'undefined') {
                window.BreadcrumbComponent = class {
                    constructor() {
                        this.generateBreadcrumbs();
                    }

                    generateBreadcrumbs() {
                        const path = window.location.pathname;
                        const breadcrumbs = [{ name: "Home", url: "https://outsourcesu.com/" }];
                        
                        if (path.includes('about')) {
                            breadcrumbs.push({ name: "About Us", url: window.location.href });
                        } else if (path.includes('contact')) {
                            breadcrumbs.push({ name: "Contact", url: window.location.href });
                        } else if (path.includes('seo')) {
                            breadcrumbs.push({ name: "SEO Services", url: "https://outsourcesu.com/#services" });
                            const pageName = document.title.split(' | ')[0];
                            breadcrumbs.push({ name: pageName, url: window.location.href });
                        }

                        this.insertBreadcrumbs(breadcrumbs);
                    }

                    insertBreadcrumbs(breadcrumbs) {
                        if (breadcrumbs.length > 1 && !document.querySelector('.breadcrumb')) {
                            const breadcrumbHTML = `
                                <section class="breadcrumb">
                                    <div class="container">
                                        <ul class="breadcrumb-list">
                                            ${breadcrumbs.map((crumb, index) => `
                                                <li class="breadcrumb-item">
                                                    ${index === breadcrumbs.length - 1 
                                                        ? crumb.name 
                                                        : `<a href="${crumb.url}">${crumb.name}</a>`
                                                    }
                                                </li>
                                            `).join('')}
                                        </ul>
                                    </div>
                                </section>
                            `;
                            
                            const nav = document.querySelector('.navbar');
                            if (nav) {
                                nav.insertAdjacentHTML('afterend', breadcrumbHTML);
                            }
                        }
                    }
                };
            }
            resolve();
        });
    }

    loadFAQComponent() {
        return new Promise((resolve) => {
            if (typeof FAQComponent === 'undefined') {
                window.FAQComponent = class {
                    constructor() {
                        this.addFAQSection();
                    }

                    addFAQSection() {
                        const faqContainer = document.querySelector('.faq-section');
                        if (!faqContainer && document.querySelector('.cta-section')) {
                            const faqHTML = `
                                <section class="faq-section">
                                    <div class="container">
                                        <div class="section-header">
                                            <h2>Frequently Asked Questions</h2>
                                            <p>Get answers to common questions about our SEO services</p>
                                        </div>
                                        <div class="faq-grid">
                                            <div class="faq-item">
                                                <h3>How long does it take to see SEO results?</h3>
                                                <p>Most clients see significant improvements within 3-6 months, with initial gains often visible within 4-8 weeks.</p>
                                            </div>
                                            <div class="faq-item">
                                                <h3>Do you guarantee first page rankings?</h3>
                                                <p>While we can't guarantee specific rankings due to Google's algorithm changes, 95% of our clients achieve first page rankings for their target keywords.</p>
                                            </div>
                                            <div class="faq-item">
                                                <h3>What makes OutSourceSU different?</h3>
                                                <p>Our 15+ years of experience, proven track record with 500+ clients, and commitment to transparent, results-driven SEO strategies.</p>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            `;
                            
                            const ctaSection = document.querySelector('.cta-section');
                            if (ctaSection) {
                                ctaSection.insertAdjacentHTML('beforebegin', faqHTML);
                            }
                        }
                    }
                };
            }
            resolve();
        });
    }

    loadReviewsComponent() {
        return new Promise((resolve) => {
            if (typeof ReviewsComponent === 'undefined') {
                window.ReviewsComponent = class {
                    constructor() {
                        this.addReviewsSection();
                    }

                    addReviewsSection() {
                        // Add reviews section if needed
                    }
                };
            }
            resolve();
        });
    }

    loadUKRankingCharts() {
        return new Promise((resolve) => {
            if (typeof UKRankingCharts === 'undefined') {
                window.UKRankingCharts = class {
                    constructor() {
                        this.initRankingCharts();
                    }

                    initRankingCharts() {
                        // Initialize ranking charts
                    }
                };
            }
            resolve();
        });
    }

    loadEnhancedComponents() {
        return new Promise((resolve) => {
            if (typeof EnhancedComponents === 'undefined') {
                window.EnhancedComponents = class {
                    constructor() {
                        this.initEnhancements();
                    }

                    initEnhancements() {
                        this.optimizeImages();
                        this.addStructuredData();
                    }

                    optimizeImages() {
                        const images = document.querySelectorAll('img');
                        images.forEach(img => {
                            if (!img.hasAttribute('loading') && !img.src.includes('hero')) {
                                img.setAttribute('loading', 'lazy');
                            }
                            if (!img.hasAttribute('alt') || img.alt === '') {
                                const filename = img.src.substring(img.src.lastIndexOf('/') + 1);
                                img.alt = `OutSourceSU - ${filename.replace(/\.[^/.]+$/, "").replace(/[-_]/g, ' ')}`;
                            }
                        });
                    }

                    addStructuredData() {
                        if (!document.querySelector('script[type="application/ld+json"]')) {
                            const schema = {
                                "@context": "https://schema.org",
                                "@type": "SEOAgency",
                                "name": "OutSourceSU",
                                "url": "https://outsourcesu.com",
                                "description": "UK's leading SEO agency with 15+ years experience and 500+ happy clients",
                                "telephone": "07411575188",
                                "email": "contact@outsourcesu.com",
                                "address": {
                                    "@type": "PostalAddress",
                                    "streetAddress": "20-22 Wenlock Road",
                                    "addressLocality": "London",
                                    "postalCode": "N1 7GU",
                                    "addressCountry": "GB"
                                }
                            };

                            const script = document.createElement('script');
                            script.type = 'application/ld+json';
                            script.textContent = JSON.stringify(schema);
                            document.head.appendChild(script);
                        }
                    }
                };
            }
            resolve();
        });
    }

    initSEOOptimization() {
        // Add critical SEO meta tags
        this.addCriticalMetaTags();
        
        // Optimize performance
        this.addResourceHints();
        
        // Add canonical tags
        this.addCanonicalTags();
    }

    addCriticalMetaTags() {
        // Add robots meta if not present
        if (!document.querySelector('meta[name="robots"]')) {
            const robots = document.createElement('meta');
            robots.name = 'robots';
            robots.content = 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1';
            document.head.appendChild(robots);
        }

        // Add viewport meta if not present
        if (!document.querySelector('meta[name="viewport"]')) {
            const viewport = document.createElement('meta');
            viewport.name = 'viewport';
            viewport.content = 'width=device-width, initial-scale=1.0';
            document.head.appendChild(viewport);
        }
    }

    addResourceHints() {
        const hints = [
            { rel: 'dns-prefetch', href: '//fonts.googleapis.com' },
            { rel: 'dns-prefetch', href: '//cdnjs.cloudflare.com' },
            { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
            { rel: 'preconnect', href: 'https://fonts.gstatic.com' }
        ];

        hints.forEach(hint => {
            if (!document.querySelector(`link[href="${hint.href}"]`)) {
                const link = document.createElement('link');
                link.rel = hint.rel;
                link.href = hint.href;
                if (hint.rel === 'preconnect' && hint.href.includes('gstatic')) {
                    link.crossOrigin = 'anonymous';
                }
                document.head.appendChild(link);
            }
        });
    }

    addCanonicalTags() {
        if (!document.querySelector('link[rel="canonical"]')) {
            const canonical = document.createElement('link');
            canonical.rel = 'canonical';
            canonical.href = window.location.href;
            document.head.appendChild(canonical);
        }
    }

    fixMobileNavigation() {
        // Ensure mobile navigation works properly
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');

        if (hamburger && navMenu) {
            hamburger.addEventListener('click', () => {
                navMenu.classList.toggle('active');
                hamburger.classList.toggle('active');
            });
        }
    }

    optimizePerformance() {
        // Optimize font loading
        const fontLinks = document.querySelectorAll('link[href*="fonts.googleapis.com"]');
        fontLinks.forEach(link => {
            if (!link.href.includes('display=swap')) {
                link.href += link.href.includes('?') ? '&display=swap' : '?display=swap';
            }
        });
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    new UniversalLoader();
    console.log('🚀 Universal Loader initialized');
});

// Initialize breadcrumbs for each page
document.addEventListener('DOMContentLoaded', function() {
    if (typeof BreadcrumbComponent !== 'undefined') {
        new BreadcrumbComponent();
    }
});

// Initialize FAQ component
document.addEventListener('DOMContentLoaded', function() {
    if (typeof FAQComponent !== 'undefined') {
        new FAQComponent();
    }
});

// Export for use
if (typeof window !== 'undefined') {
    window.UniversalLoader = UniversalLoader;
}
