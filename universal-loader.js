The code fixes JavaScript syntax errors and duplicate declarations by replacing the original UniversalLoader class with a corrected version.
```

```replit_final_file
// Universal Loader for OutSourceSU Components
(function() {
    'use strict';

    // Universal Loader - Loads all components dynamically
class UniversalLoader {
    constructor() {
        this.components = new Map();
        this.loadedComponents = new Set();
        this.init();
    }

    init() {
        console.log('🚀 Universal Loader initialized');
        this.loadAllComponents();
    }

    async loadAllComponents() {
        const componentPromises = [
            this.loadBreadcrumbComponent(),
            this.loadFAQComponent(),
            this.loadReviewsComponent(),
            this.loadUKRankingCharts(),
            this.loadEnhancedComponents()
        ];

        try {
            await Promise.all(componentPromises);
            this.initializePageSpecificFeatures();
        } catch (error) {
            console.error('Error loading components:', error);
        }
    }

    async loadBreadcrumbComponent() {
        if (this.loadedComponents.has('breadcrumb')) return;

        try {
            // BreadcrumbComponent
            if (typeof window.BreadcrumbComponent === 'undefined') {
                window.BreadcrumbComponent = class {
                    constructor() {
                        this.init();
                    }

                    init() {
                        this.createBreadcrumb();
                    }

                    createBreadcrumb() {
                        const pathname = window.location.pathname;
                        if (pathname === '/' || pathname === '/index.html') return;

                        const breadcrumbContainer = document.createElement('nav');
                        breadcrumbContainer.className = 'breadcrumb-nav';
                        breadcrumbContainer.innerHTML = this.generateBreadcrumbHTML();

                        const main = document.querySelector('main') || document.querySelector('.hero');
                        if (main) {
                            main.insertAdjacentElement('beforebegin', breadcrumbContainer);
                        }
                    }

                    generateBreadcrumbHTML() {
                        const path = window.location.pathname;
                        const segments = path.split('/').filter(segment => segment);

                        let breadcrumbHTML = `
                            <div class="container">
                                <ol class="breadcrumb">
                                    <li><a href="index.html">Home</a></li>
                        `;

                        let currentPath = '';
                        segments.forEach((segment, index) => {
                            currentPath += '/' + segment;
                            const isLast = index === segments.length - 1;
                            const title = this.formatSegmentTitle(segment);

                            if (isLast) {
                                breadcrumbHTML += `<li class="active">${title}</li>`;
                            } else {
                                breadcrumbHTML += `<li><a href="${currentPath}">${title}</a></li>`;
                            }
                        });

                        breadcrumbHTML += `
                                </ol>
                            </div>
                        `;

                        return breadcrumbHTML;
                    }

                    formatSegmentTitle(segment) {
                        return segment
                            .replace('.html', '')
                            .replace(/-/g, ' ')
                            .replace(/\b\w/g, l => l.toUpperCase());
                    }
                };
            }

            new window.BreadcrumbComponent();
            this.loadedComponents.add('breadcrumb');
            console.log('✓ BreadcrumbComponent loaded successfully');
        } catch (error) {
            console.error('Error loading BreadcrumbComponent:', error);
        }
    }

    async loadFAQComponent() {
        if (this.loadedComponents.has('faq')) return;

        try {
            if (typeof window.FAQComponent === 'undefined') {
                window.FAQComponent = class {
                    constructor() {
                        this.init();
                    }

                    init() {
                        this.addFAQSection();
                        this.addFAQInteractivity();
                    }

                    addFAQSection() {
                        const existingFAQ = document.querySelector('.faq-section');
                        if (existingFAQ) return;

                        const faqSection = document.createElement('section');
                        faqSection.className = 'faq-section';
                        faqSection.innerHTML = this.getFAQHTML();

                        const ctaSection = document.querySelector('.cta-section');
                        if (ctaSection) {
                            ctaSection.insertAdjacentElement('beforebegin', faqSection);
                        }
                    }

                    getFAQHTML() {
                        const serviceName = this.getServiceName();
                        return `
                            <div class="container">
                                <div class="section-header">
                                    <h2>Frequently Asked Questions About ${serviceName}</h2>
                                    <p>Get answers to common questions about our ${serviceName.toLowerCase()} services</p>
                                </div>
                                <div class="faq-container">
                                    ${this.getFAQItems().map(faq => `
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
                        `;
                    }

                    getServiceName() {
                        const h1 = document.querySelector('h1');
                        if (h1) return h1.textContent;

                        const title = document.title;
                        return title.split('|')[0].trim();
                    }

                    getFAQItems() {
                        return [
                            {
                                question: "How long does it take to see SEO results?",
                                answer: "Most clients see initial improvements within 30-60 days, with significant results typically visible within 3-6 months. SEO is a long-term strategy that builds momentum over time."
                            },
                            {
                                question: "Do you guarantee first page rankings?",
                                answer: "While we can't guarantee specific rankings due to search engine algorithm changes, we do guarantee measurable improvements in traffic, leads, and online visibility within 90 days."
                            },
                            {
                                question: "What's included in your SEO services?",
                                answer: "Our comprehensive SEO includes technical optimization, keyword research, content creation, link building, local SEO, monthly reporting, and ongoing strategy refinement."
                            },
                            {
                                question: "How much do your SEO services cost?",
                                answer: "Our SEO packages start from £997/month depending on your business size and requirements. We offer transparent pricing with no hidden fees and no long-term contracts."
                            },
                            {
                                question: "Do you work with businesses outside the UK?",
                                answer: "While we specialize in UK businesses and understand the local market, we do work with international clients. Contact us to discuss your specific requirements."
                            }
                        ];
                    }

                    addFAQInteractivity() {
                        document.addEventListener('click', (e) => {
                            if (e.target.closest('.faq-question')) {
                                const faqItem = e.target.closest('.faq-item');
                                const answer = faqItem.querySelector('.faq-answer');
                                const icon = faqItem.querySelector('i');

                                faqItem.classList.toggle('active');

                                if (faqItem.classList.contains('active')) {
                                    answer.style.maxHeight = answer.scrollHeight + 'px';
                                    icon.style.transform = 'rotate(180deg)';
                                } else {
                                    answer.style.maxHeight = '0';
                                    icon.style.transform = 'rotate(0deg)';
                                }
                            }
                        });
                    }
                };
            }

            new window.FAQComponent();
            this.loadedComponents.add('faq');
            console.log('✓ FAQComponent loaded successfully');
        } catch (error) {
            console.error('Error loading FAQComponent:', error);
        }
    }

    async loadReviewsComponent() {
        if (this.loadedComponents.has('reviews')) return;

        try {
            if (typeof window.ReviewsComponent === 'undefined') {
                window.ReviewsComponent = class {
                    constructor() {
                        this.init();
                    }

                    init() {
                        this.addReviewsSection();
                    }

                    addReviewsSection() {
                        const existingReviews = document.querySelector('.reviews-section');
                        if (existingReviews) return;

                        const reviewsSection = document.createElement('section');
                        reviewsSection.className = 'reviews-section';
                        reviewsSection.innerHTML = this.getReviewsHTML();

                        const faqSection = document.querySelector('.faq-section');
                        const ctaSection = document.querySelector('.cta-section');

                        if (faqSection) {
                            faqSection.insertAdjacentElement('beforebegin', reviewsSection);
                        } else if (ctaSection) {
                            ctaSection.insertAdjacentElement('beforebegin', reviewsSection);
                        }
                    }

                    getReviewsHTML() {
                        return `
                            <div class="container">
                                <div class="section-header">
                                    <h2>What Our Clients Say</h2>
                                    <p>Real reviews from real businesses we've helped grow</p>
                                </div>
                                <div class="reviews-grid">
                                    ${this.getReviews().map(review => `
                                        <div class="review-card">
                                            <div class="review-stars">
                                                ${'★'.repeat(5)}
                                            </div>
                                            <p class="review-text">"${review.text}"</p>
                                            <div class="review-author">
                                                <div class="author-info">
                                                    <h4>${review.author}</h4>
                                                    <span>${review.company}</span>
                                                    <div class="review-result">
                                                        <strong>${review.result}</strong>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    `).join('')}
                                </div>
                            </div>
                        `;
                    }

                    getReviews() {
                        return [
                            {
                                text: "OutSourceSU transformed our online presence completely. Within 6 months, we went from page 3 to consistent page 1 rankings for our target keywords.",
                                author: "Sarah Johnson",
                                company: "Johnson Construction Ltd",
                                result: "+420% increase in leads"
                            },
                            {
                                text: "The team's expertise in local SEO is outstanding. We now dominate local search results and our phone hasn't stopped ringing with new enquiries.",
                                author: "Mark Thompson",
                                company: "Thompson Roofing",
                                result: "+350% more local traffic"
                            },
                            {
                                text: "Professional, transparent, and results-driven. They delivered exactly what they promised and our revenue has increased significantly.",
                                author: "Lisa Chen",
                                company: "Chen & Associates Law",
                                result: "+280% revenue growth"
                            }
                        ];
                    }
                };
            }

            new window.ReviewsComponent();
            this.loadedComponents.add('reviews');
            console.log('✓ ReviewsComponent loaded successfully');
        } catch (error) {
            console.error('Error loading ReviewsComponent:', error);
        }
    }

    async loadUKRankingCharts() {
        if (this.loadedComponents.has('ranking')) return;

        try {
            if (typeof window.UKRankingCharts === 'undefined') {
                window.UKRankingCharts = class {
                    constructor() {
                        this.init();
                    }

                    init() {
                        this.addRankingSection();
                    }

                    addRankingSection() {
                        const existingRanking = document.querySelector('.ranking-section');
                        if (existingRanking) return;

                        const rankingSection = document.createElement('section');
                        rankingSection.className = 'ranking-section';
                        rankingSection.innerHTML = this.getRankingHTML();

                        const reviewsSection = document.querySelector('.reviews-section');
                        const faqSection = document.querySelector('.faq-section');
                        const ctaSection = document.querySelector('.cta-section');

                        if (reviewsSection) {
                            reviewsSection.insertAdjacentElement('beforebegin', rankingSection);
                        } else if (faqSection) {
                            faqSection.insertAdjacentElement('beforebegin', rankingSection);
                        } else if (ctaSection) {
                            ctaSection.insertAdjacentElement('beforebegin', rankingSection);
                        }
                    }

                    getRankingHTML() {
                        return `
                            <div class="container">
                                <div class="section-header">
                                    <h2>UK SEO Performance Rankings</h2>
                                    <p>See how we compare to other UK SEO agencies</p>
                                </div>
                                <div class="ranking-chart">
                                    <div class="ranking-item">
                                        <span class="rank">#1</span>
                                        <span class="agency">OutSourceSU</span>
                                        <span class="score">98/100</span>
                                        <div class="performance-bar">
                                            <div class="bar-fill" style="width: 98%;"></div>
                                        </div>
                                    </div>
                                    <div class="ranking-item">
                                        <span class="rank">#2</span>
                                        <span class="agency">Competitor A</span>
                                        <span class="score">85/100</span>
                                        <div class="performance-bar">
                                            <div class="bar-fill" style="width: 85%;"></div>
                                        </div>
                                    </div>
                                    <div class="ranking-item">
                                        <span class="rank">#3</span>
                                        <span class="agency">Competitor B</span>
                                        <span class="score">78/100</span>
                                        <div class="performance-bar">
                                            <div class="bar-fill" style="width: 78%;"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        `;
                    }
                };
            }

            new window.UKRankingCharts();
            this.loadedComponents.add('ranking');
            console.log('✓ UKRankingCharts loaded successfully');
        } catch (error) {
            console.error('Error loading UKRankingCharts:', error);
        }
    }

    async loadEnhancedComponents() {
        if (this.loadedComponents.has('enhanced')) return;

        try {
            if (typeof window.EnhancedComponents === 'undefined') {
                window.EnhancedComponents = class {
                    constructor() {
                        this.init();
                    }

                    init() {
                        this.enhanceExistingElements();
                        this.addInteractivity();
                    }

                    enhanceExistingElements() {
                        // Add loading animations
                        const cards = document.querySelectorAll('.service-card, .benefit-card, .stat-item');
                        cards.forEach((card, index) => {
                            card.style.animationDelay = `${index * 0.1}s`;
                            card.classList.add('fade-in-up');
                        });

                        // Enhance buttons
                        const buttons = document.querySelectorAll('.btn-primary, .btn-secondary');
                        buttons.forEach(button => {
                            button.addEventListener('mouseenter', () => {
                                button.style.transform = 'translateY(-2px) scale(1.05)';
                            });
                            button.addEventListener('mouseleave', () => {
                                button.style.transform = 'translateY(0) scale(1)';
                            });
                        });
                    }

                    addInteractivity() {
                        // Smooth scrolling for anchor links
                        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                            anchor.addEventListener('click', function (e) {
                                e.preventDefault();
                                const target = document.querySelector(this.getAttribute('href'));
                                if (target) {
                                    target.scrollIntoView({
                                        behavior: 'smooth',
                                        block: 'start'
                                    });
                                }
                            });
                        });

                        // Add scroll progress indicator
                        this.addScrollProgress();
                    }

                    addScrollProgress() {
                        const progressBar = document.createElement('div');
                        progressBar.className = 'scroll-progress';
                        progressBar.innerHTML = '<div class="progress-fill"></div>';
                        document.body.appendChild(progressBar);

                        window.addEventListener('scroll', () => {
                            const scrollPercent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
                            document.querySelector('.progress-fill').style.width = `${scrollPercent}%`;
                        });
                    }
                };
            }

            new window.EnhancedComponents();
            this.loadedComponents.add('enhanced');
            console.log('✓ EnhancedComponents loaded successfully');
        } catch (error) {
            console.error('Error loading EnhancedComponents:', error);
        }
    }

    initializePageSpecificFeatures() {
        // Mobile menu toggle
        this.initMobileMenu();

        // Navbar scroll behavior
        this.initNavbarScroll();
    }

    initMobileMenu() {
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');

        if (hamburger && navMenu) {
            hamburger.addEventListener('click', () => {
                hamburger.classList.toggle('active');
                navMenu.classList.toggle('active');
            });

            // Close menu when clicking on a link
            document.querySelectorAll('.nav-menu a').forEach(link => {
                link.addEventListener('click', () => {
                    hamburger.classList.remove('active');
                    navMenu.classList.remove('active');
                });
            });
        }
    }

    initNavbarScroll() {
        const navbar = document.querySelector('.navbar');
        if (navbar) {
            let lastScrollTop = 0;
            window.addEventListener('scroll', () => {
                const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

                if (scrollTop > lastScrollTop && scrollTop > 100) {
                    navbar.style.transform = 'translateY(-100%)';
                } else {
                    navbar.style.transform = 'translateY(0)';
                }

                lastScrollTop = scrollTop;
            });
        }
    }
}

// Initialize when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        new UniversalLoader();
    });
} else {
    new UniversalLoader();
}
})();