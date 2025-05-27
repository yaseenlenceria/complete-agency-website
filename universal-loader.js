// Universal Loader for OutSourceSU Components
(function() {
    'use strict';
    
    class UniversalLoader {
        constructor() {
            this.components = new Map();
            this.loadOrder = [
                'BreadcrumbComponent',
                'FAQComponent', 
                'ReviewsComponent',
                'UKRankingCharts',
                'EnhancedComponents'
            ];
            this.init();
        }

        async init() {
            try {
                await this.loadComponents();
                this.initializeAll();
                console.log('🚀 Universal Loader initialized');
            } catch (error) {
                console.error('❌ Universal Loader failed:', error);
            }
        }

        async loadComponents() {
            const componentConfigs = {
                BreadcrumbComponent: this.createBreadcrumbComponent,
                FAQComponent: this.createFAQComponent,
                ReviewsComponent: this.createReviewsComponent,
                UKRankingCharts: this.createUKRankingCharts,
                EnhancedComponents: this.createEnhancedComponents
            };

            for (const componentName of this.loadOrder) {
                try {
                    if (!window[componentName]) {
                        window[componentName] = componentConfigs[componentName]();
                        this.components.set(componentName, window[componentName]);
                        console.log(`✓ ${componentName} loaded successfully`);
                    }
                } catch (error) {
                    console.warn(`⚠️ Failed to load ${componentName}:`, error);
                }
            }
        }

        createBreadcrumbComponent() {
            return {
                generateBreadcrumb: function(currentPage, customPath = null) {
                    const breadcrumbContainer = document.createElement('nav');
                    breadcrumbContainer.className = 'breadcrumb-nav';
                    breadcrumbContainer.setAttribute('aria-label', 'Breadcrumb');

                    const breadcrumbList = document.createElement('ol');
                    breadcrumbList.className = 'breadcrumb-list';

                    // Home link
                    const homeItem = this.createBreadcrumbItem('Home', 'index.html', false);
                    breadcrumbList.appendChild(homeItem);

                    if (customPath) {
                        customPath.forEach((item, index) => {
                            const isLast = index === customPath.length - 1;
                            const breadcrumbItem = this.createBreadcrumbItem(item.name, item.url, isLast);
                            breadcrumbList.appendChild(breadcrumbItem);
                        });
                    } else {
                        // Auto-generate based on current page
                        if (currentPage && currentPage !== 'Home') {
                            const currentItem = this.createBreadcrumbItem(currentPage, '#', true);
                            breadcrumbList.appendChild(currentItem);
                        }
                    }

                    breadcrumbContainer.appendChild(breadcrumbList);
                    return breadcrumbContainer;
                },

                createBreadcrumbItem: function(text, url, isLast) {
                    const listItem = document.createElement('li');
                    listItem.className = 'breadcrumb-item';

                    if (isLast) {
                        listItem.setAttribute('aria-current', 'page');
                        listItem.className += ' current';
                        const span = document.createElement('span');
                        span.textContent = text;
                        listItem.appendChild(span);
                    } else {
                        const link = document.createElement('a');
                        link.href = url;
                        link.textContent = text;
                        listItem.appendChild(link);

                        const separator = document.createElement('span');
                        separator.className = 'breadcrumb-separator';
                        separator.innerHTML = '<i class="fas fa-chevron-right"></i>';
                        listItem.appendChild(separator);
                    }

                    return listItem;
                },

                addToPage: function() {
                    const pageTitle = document.title.replace(' | OutSourceSU', '').replace(' | The SEO Works', '');
                    const breadcrumb = this.generateBreadcrumb(pageTitle);

                    const targetElement = document.querySelector('.hero') || document.querySelector('main') || document.body;
                    if (targetElement) {
                        targetElement.insertBefore(breadcrumb, targetElement.firstChild);
                    }

                    // Enhance service page heroes
                    this.enhanceServiceHeroes();
                },

                enhanceServiceHeroes: function() {
                    const serviceHeroes = document.querySelectorAll('.service-hero');
                    serviceHeroes.forEach(hero => {
                        if (!hero.classList.contains('enhanced')) {
                            hero.classList.add('enhanced');

                            // Check if hero needs restructuring
                            const heroContent = hero.querySelector('.hero-content');
                            if (heroContent && !heroContent.querySelector('.hero-container')) {
                                this.restructureServiceHero(hero);
                            }
                        }
                    });
                },

                restructureServiceHero: function(hero) {
                    const content = hero.querySelector('.hero-content');
                    if (!content) return;

                    // Add hero-container wrapper if missing
                    const container = document.createElement('div');
                    container.className = 'hero-container';
                    container.appendChild(content);
                    hero.appendChild(container);

                    // Add professional styling elements
                    const heroText = content.querySelector('.hero-text');
                    if (heroText && !heroText.querySelector('.hero-badge')) {
                        const h1 = heroText.querySelector('h1');
                        if (h1) {
                            const serviceType = h1.textContent.toLowerCase();
                            const icon = this.getServiceIcon(serviceType);

                            const badge = document.createElement('div');
                            badge.className = 'hero-badge';
                            badge.innerHTML = `<i class="${icon}"></i> Professional ${h1.textContent}`;

                            heroText.insertBefore(badge, h1);
                        }
                    }
                },

                getServiceIcon: function(serviceType) {
                    const icons = {
                        'construction': 'fas fa-hard-hat',
                        'roofer': 'fas fa-home',
                        'roofing': 'fas fa-home', 
                        'law': 'fas fa-balance-scale',
                        'legal': 'fas fa-balance-scale',
                        'financial': 'fas fa-chart-line',
                        'accountant': 'fas fa-calculator',
                        'dental': 'fas fa-tooth',
                        'healthcare': 'fas fa-heartbeat',
                        'real estate': 'fas fa-building'
                    };

                    for (const [key, icon] of Object.entries(icons)) {
                        if (serviceType.includes(key)) {
                            return icon;
                        }
                    }
                    return 'fas fa-star';
                }
            };
        }

        createFAQComponent() {
            return {
                data: {
                    seo: [
                        {
                            question: "How long does it take to see SEO results?",
                            answer: "Most clients see initial improvements within 3-6 months, with significant results typically visible after 6-12 months. SEO is a long-term strategy that builds momentum over time."
                        },
                        {
                            question: "Do you guarantee first page rankings?",
                            answer: "While no ethical SEO company can guarantee specific rankings, we do guarantee to improve your current positions and provide a 90-day money-back guarantee if you're not satisfied with our service."
                        },
                        {
                            question: "What's included in your SEO packages?",
                            answer: "Our packages include keyword research, on-page optimization, technical SEO, content creation, link building, local SEO, and monthly reporting. Each package is tailored to your specific business needs."
                        },
                        {
                            question: "How do you measure SEO success?",
                            answer: "We track keyword rankings, organic traffic, conversion rates, local visibility, and ultimately your return on investment. You'll receive detailed monthly reports showing your progress."
                        },
                        {
                            question: "Do you work with businesses outside the UK?",
                            answer: "While we specialize in UK markets and understand local search behavior, we do work with international clients. Our expertise in UK SEO often translates well to other English-speaking markets."
                        }
                    ]
                },

                render: function(container, category = 'seo') {
                    const faqData = this.data[category] || this.data.seo;

                    const faqHTML = `
                        <div class="faq-section">
                            <h2>Frequently Asked Questions</h2>
                            <div class="faq-list">
                                ${faqData.map((faq, index) => `
                                    <div class="faq-item" data-index="${index}">
                                        <button class="faq-question" aria-expanded="false">
                                            ${faq.question}
                                            <i class="fas fa-plus"></i>
                                        </button>
                                        <div class="faq-answer">
                                            <div class="faq-answer-content">
                                                ${faq.answer}
                                            </div>
                                        </div>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    `;

                    if (typeof container === 'string') {
                        const element = document.querySelector(container);
                        if (element) {
                            element.innerHTML = faqHTML;
                            this.initializeInteractions(element);
                        }
                    } else if (container instanceof Element) {
                        container.innerHTML = faqHTML;
                        this.initializeInteractions(container);
                    }
                },

                initializeInteractions: function(container) {
                    const faqItems = container.querySelectorAll('.faq-item');

                    faqItems.forEach(item => {
                        const question = item.querySelector('.faq-question');
                        const answer = item.querySelector('.faq-answer');
                        const icon = question.querySelector('i');

                        question.addEventListener('click', () => {
                            const isOpen = question.getAttribute('aria-expanded') === 'true';

                            // Close all other FAQ items
                            faqItems.forEach(otherItem => {
                                if (otherItem !== item) {
                                    const otherQuestion = otherItem.querySelector('.faq-question');
                                    const otherAnswer = otherItem.querySelector('.faq-answer');
                                    const otherIcon = otherQuestion.querySelector('i');

                                    otherQuestion.setAttribute('aria-expanded', 'false');
                                    otherAnswer.style.maxHeight = '0';
                                    otherIcon.className = 'fas fa-plus';
                                }
                            });

                            // Toggle current item
                            if (!isOpen) {
                                question.setAttribute('aria-expanded', 'true');
                                answer.style.maxHeight = answer.scrollHeight + 'px';
                                icon.className = 'fas fa-minus';
                            } else {
                                question.setAttribute('aria-expanded', 'false');
                                answer.style.maxHeight = '0';
                                icon.className = 'fas fa-plus';
                            }
                        });
                    });
                }
            };
        }

        createReviewsComponent() {
            return {
                init: function() {
                    console.log('Reviews Component initialized');
                }
            };
        }

        createUKRankingCharts() {
            return {
                init: function() {
                    console.log('UK Ranking Charts initialized');
                }
            };
        }

        createEnhancedComponents() {
            return {
                init: function() {
                    console.log('Enhanced Components initialized');
                }
            };
        }

        initializeAll() {
            // Initialize components that need it
            this.components.forEach((component, name) => {
                if (component && typeof component.init === 'function') {
                    try {
                        component.init();
                    } catch (error) {
                        console.warn(`Failed to initialize ${name}:`, error);
                    }
                }
            });

            // Auto-add breadcrumbs if component exists
            if (this.components.has('BreadcrumbComponent')) {
                try {
                    this.components.get('BreadcrumbComponent').addToPage();
                } catch (error) {
                    console.warn('Failed to add breadcrumbs:', error);
                }
            }
        }
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            new UniversalLoader();
        });
    } else {
        new UniversalLoader();
    }

// Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            try {
                new UniversalLoader();
            } catch (error) {
                console.error('Universal Loader initialization error:', error);
            }
        });
    } else {
        try {
            new UniversalLoader();
        } catch (error) {
            console.error('Universal Loader error:', error);
        }
    }
})();