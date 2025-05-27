// Universal Component Loader for OutSourceSU
class UniversalLoader {
    constructor() {
        this.components = new Map();
        this.loadedComponents = new Set();
        this.init();
    }

    init() {
        this.registerComponents();
        this.loadComponents();
        console.log('🚀 Universal Loader initialized');
    }

    registerComponents() {
        // Register all available components
        this.components.set('BreadcrumbComponent', () => this.loadBreadcrumbComponent());
        this.components.set('FAQComponent', () => this.loadFAQComponent());
        this.components.set('ReviewsComponent', () => this.loadReviewsComponent());
        this.components.set('UKRankingCharts', () => this.loadUKRankingCharts());
        this.components.set('EnhancedComponents', () => this.loadEnhancedComponents());
    }

    async loadComponents() {
        for (const [name, loader] of this.components) {
            try {
                await loader();
                this.loadedComponents.add(name);
                console.log(`✓ ${name} loaded successfully`);
            } catch (error) {
                console.warn(`⚠️ Failed to load ${name}:`, error.message);
            }
        }
    }

    loadBreadcrumbComponent() {
        return new Promise((resolve) => {
            if (typeof BreadcrumbComponent === 'undefined') {
                window.BreadcrumbComponent = class {
                    constructor() {
                        this.init();
                    }

                    init() {
                        this.createBreadcrumb();
                    }

                    createBreadcrumb() {
                        const existing = document.querySelector('.breadcrumb-nav');
                        if (existing) return;

                        const breadcrumbNav = document.createElement('nav');
                        breadcrumbNav.className = 'breadcrumb-nav';
                        breadcrumbNav.innerHTML = this.generateBreadcrumbHTML();

                        const main = document.querySelector('main') || document.body;
                        main.insertBefore(breadcrumbNav, main.firstChild);
                    }

                    generateBreadcrumbHTML() {
                        const path = window.location.pathname;
                        const segments = path.split('/').filter(segment => segment);

                        let breadcrumbHTML = `
                            <div class="container">
                                <ol class="breadcrumb">
                                    <li><a href="/">Home</a></li>
                        `;

                        let currentPath = '';
                        segments.forEach((segment, index) => {
                            currentPath += '/' + segment;
                            const isLast = index === segments.length - 1;
                            const title = this.formatSegment(segment);

                            if (isLast) {
                                breadcrumbHTML += `<li class="current">${title}</li>`;
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

                    formatSegment(segment) {
                        return segment
                            .replace(/-/g, ' ')
                            .replace(/\.html$/i, '')
                            .replace(/\b\w/g, l => l.toUpperCase());
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
                        this.faqs = {
                            general: [
                                {
                                    question: "How long does SEO take to show results?",
                                    answer: "Most clients see significant improvements within 3-6 months, with some results visible as early as 4-8 weeks for local SEO campaigns."
                                },
                                {
                                    question: "Do you guarantee first page rankings?",
                                    answer: "While we can't guarantee specific rankings due to Google's ever-changing algorithm, we do guarantee significant improvements in visibility and traffic."
                                },
                                {
                                    question: "What makes your SEO services different?",
                                    answer: "Our proven track record, transparent reporting, UK-based team, and industry-specific expertise set us apart from other SEO agencies."
                                }
                            ]
                        };
                    }

                    init(category = 'general') {
                        this.render(document.getElementById('faq-section'), category);
                    }

                    render(container, category) {
                        if (!container) return;

                        const faqsToShow = this.faqs[category] || this.faqs.general;

                        container.innerHTML = `
                            <section class="faq-section">
                                <div class="container">
                                    <h2>Frequently Asked Questions</h2>
                                    <div class="faq-list">
                                        ${faqsToShow.map((faq, index) => `
                                            <div class="faq-item">
                                                <button class="faq-question" onclick="toggleFAQ(${index})">
                                                    ${faq.question}
                                                    <i class="fas fa-chevron-down"></i>
                                                </button>
                                                <div class="faq-answer" id="faq-${index}">
                                                    <p>${faq.answer}</p>
                                                </div>
                                            </div>
                                        `).join('')}
                                    </div>
                                </div>
                            </section>
                        `;
                    }
                };

                // Global toggle function
                window.toggleFAQ = function(index) {
                    const answer = document.getElementById(`faq-${index}`);
                    const question = answer.previousElementSibling;

                    if (answer.style.maxHeight && answer.style.maxHeight !== '0px') {
                        answer.style.maxHeight = '0px';
                        question.classList.remove('active');
                    } else {
                        // Close all other FAQs
                        document.querySelectorAll('.faq-answer').forEach(otherAnswer => {
                            otherAnswer.style.maxHeight = '0px';
                            otherAnswer.previousElementSibling.classList.remove('active');
                        });

                        answer.style.maxHeight = answer.scrollHeight + 'px';
                        question.classList.add('active');
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
                        this.reviews = [
                            {
                                name: "Sarah Johnson",
                                company: "Johnson Construction Ltd",
                                rating: 5,
                                text: "Outstanding SEO results! Our website traffic increased by 340% in just 4 months.",
                                location: "Manchester"
                            },
                            {
                                name: "Michael Chen",
                                company: "Chen & Associates Law",
                                rating: 5,
                                text: "Professional service and excellent communication. Highly recommend for legal SEO.",
                                location: "London"
                            }
                        ];
                    }

                    init() {
                        this.render();
                    }

                    render() {
                        const reviewsSection = document.createElement('section');
                        reviewsSection.className = 'reviews-section';
                        reviewsSection.innerHTML = `
                            <div class="container">
                                <h2>What Our Clients Say</h2>
                                <div class="reviews-grid">
                                    ${this.reviews.map(review => `
                                        <div class="review-card">
                                            <div class="review-rating">
                                                ${'★'.repeat(review.rating)}
                                            </div>
                                            <p>"${review.text}"</p>
                                            <div class="review-author">
                                                <strong>${review.name}</strong>
                                                <span>${review.company}</span>
                                                <small>${review.location}</small>
                                            </div>
                                        </div>
                                    `).join('')}
                                </div>
                            </div>
                        `;

                        const footer = document.querySelector('.footer');
                        if (footer && footer.parentNode) {
                            footer.parentNode.insertBefore(reviewsSection, footer);
                        }
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
                        this.data = {
                            cities: ['London', 'Manchester', 'Birmingham', 'Leeds', 'Glasgow'],
                            performance: [95, 88, 82, 79, 76]
                        };
                    }

                    init() {
                        // Initialize ranking charts if needed
                    }
                };
            }
            resolve();
        });
    }

    loadEnhancedComponents() {
        return new Promise((resolve) => {
            // EnhancedComponents is already defined in enhanced-components.js
            resolve();
        });
    }
}

// Initialize the loader
new UniversalLoader();