
// Universal Component Loader - Include this on all pages
(function() {
    'use strict';

    // Initialize components when DOM is ready
    document.addEventListener('DOMContentLoaded', function() {
        initializeAllComponents();
    });

    function initializeAllComponents() {
        try {
            // Initialize BreadcrumbComponent
            if (typeof BreadcrumbComponent !== 'undefined') {
                new BreadcrumbComponent();
            }

            // Initialize FAQ Component
            if (typeof FAQComponent !== 'undefined') {
                let faqContainer = document.getElementById('faq-section');
                if (!faqContainer) {
                    faqContainer = document.createElement('div');
                    faqContainer.id = 'faq-section';
                    
                    // Insert before footer
                    const footer = document.querySelector('.footer');
                    if (footer && footer.parentNode) {
                        footer.parentNode.insertBefore(faqContainer, footer);
                    }
                }

                if (faqContainer) {
                    const faq = new FAQComponent();
                    const category = determineFAQCategory();
                    faq.render(faqContainer, category);
                }
            }

            // Initialize Reviews Component
            if (typeof ReviewsComponent !== 'undefined') {
                let reviewsContainer = document.getElementById('reviews-section');
                if (!reviewsContainer) {
                    reviewsContainer = document.createElement('div');
                    reviewsContainer.id = 'reviews-section';
                    
                    // Insert before FAQ section
                    const faqSection = document.getElementById('faq-section');
                    if (faqSection && faqSection.parentNode) {
                        faqSection.parentNode.insertBefore(reviewsContainer, faqSection);
                    } else {
                        const footer = document.querySelector('.footer');
                        if (footer && footer.parentNode) {
                            footer.parentNode.insertBefore(reviewsContainer, footer);
                        }
                    }
                }

                if (reviewsContainer) {
                    const reviews = new ReviewsComponent();
                    reviews.init();
                }
            }

            // Initialize UK Charts if available
            if (typeof UKRankingCharts !== 'undefined') {
                let chartsContainer = document.getElementById('uk-charts-section');
                if (chartsContainer) {
                    const charts = new UKRankingCharts();
                    charts.init();
                }
            }

            // Initialize enhanced animations
            initializeEnhancedAnimations();

        } catch (error) {
            console.warn('Component initialization error:', error);
        }
    }

    function determineFAQCategory() {
        const pathname = window.location.pathname.toLowerCase();
        
        if (pathname.includes('construction') || 
            pathname.includes('architect') || 
            pathname.includes('plumber')) {
            return 'construction';
        } else if (pathname.includes('roof')) {
            return 'roofing';
        } else if (pathname.includes('law-firm') || 
                  pathname.includes('legal')) {
            return 'legal';
        } else if (pathname.includes('about')) {
            return 'general';
        } else {
            return 'general';
        }
    }

    function initializeEnhancedAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add('in-view');
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                        
                        // Animate numbers if present
                        const numbers = entry.target.querySelectorAll('.stat-number, .number-counter');
                        numbers.forEach(num => {
                            if (!num.dataset.animated) {
                                animateNumber(num);
                            }
                        });
                    }, index * 100);
                }
            });
        }, observerOptions);

        // Observe all animatable elements
        const elements = document.querySelectorAll(
            '.scroll-animate, .service-card, .why-choose-item, ' +
            '.industry-card, .value-card, .team-member, .hero-stats'
        );
        
        elements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            observer.observe(el);
        });
    }

    function animateNumber(element) {
        if (!element || element.dataset.animated) return;

        const text = element.textContent;
        const number = parseInt(text.replace(/[^\d]/g, ''));
        if (isNaN(number)) return;

        element.dataset.animated = 'true';
        let current = 0;
        const duration = 2000;
        const steps = 60;
        const increment = number / steps;

        const timer = setInterval(() => {
            current += increment;
            if (current >= number) {
                current = number;
                clearInterval(timer);
            }

            let display = Math.floor(current);
            if (text.includes('%')) display += '%';
            else if (text.includes('+')) display += '+';
            
            element.textContent = display;
        }, duration / steps);
    }

})();
