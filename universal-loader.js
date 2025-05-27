// Universal Loader for OutSourceSU Components
class UniversalLoader {
    constructor() {
        this.components = new Map();
        this.loadedComponents = new Set();
        this.init();
    }

    init() {
        this.registerComponents();
        this.loadComponents();
        this.initializePageSpecificComponents();
        this.setupGlobalEventListeners();
    }

    registerComponents() {
        // Register all available components
        this.components.set('GoogleSEOOptimizer', () => {
            if (typeof GoogleSEOOptimizer !== 'undefined') {
                return new GoogleSEOOptimizer();
            }
        });

        this.components.set('BreadcrumbComponent', () => {
            if (typeof BreadcrumbComponent !== 'undefined') {
                return new BreadcrumbComponent();
            }
        });

        this.components.set('FAQComponent', () => {
            if (typeof FAQComponent !== 'undefined') {
                const faq = new FAQComponent();
                this.initializeFAQForPage(faq);
                return faq;
            }
        });

        this.components.set('ReviewsComponent', () => {
            if (typeof ReviewsComponent !== 'undefined') {
                const reviews = new ReviewsComponent();
                reviews.init();
                return reviews;
            }
        });

        this.components.set('UKRankingCharts', () => {
            if (typeof UKRankingCharts !== 'undefined') {
                const charts = new UKRankingCharts();
                charts.init();
                return charts;
            }
        });

        this.components.set('EnhancedComponents', () => {
            if (typeof EnhancedComponents !== 'undefined') {
                const enhanced = new EnhancedComponents();
                enhanced.init();
                return enhanced;
            }
        });
    }

    loadComponents() {
        // Load all registered components
        this.components.forEach((loader, componentName) => {
            try {
                const component = loader();
                if (component) {
                    this.loadedComponents.add(componentName);
                    console.log(`✓ ${componentName} loaded successfully`);
                }
            } catch (error) {
                console.warn(`⚠ Failed to load ${componentName}:`, error);
            }
        });
    }

    initializeFAQForPage(faqComponent) {
        if (!faqComponent) return;

        let category = 'general';
        const pathname = window.location.pathname.toLowerCase();

        // Determine FAQ category based on current page
        if (pathname.includes('construction')) category = 'construction';
        else if (pathname.includes('roofer') || pathname.includes('roofing')) category = 'roofing';
        else if (pathname.includes('law-firm') || pathname.includes('legal')) category = 'legal';
        else if (pathname.includes('dentist') || pathname.includes('dental')) category = 'dental';
        else if (pathname.includes('real-estate') || pathname.includes('property')) category = 'real-estate';
        else if (pathname.includes('healthcare') || pathname.includes('medical')) category = 'healthcare';
        else if (pathname.includes('financial') || pathname.includes('finance')) category = 'financial';
        else if (pathname.includes('accountant')) category = 'accounting';
        else if (pathname.includes('white-label')) category = 'white-label';
        else if (pathname.includes('about')) category = 'about';
        else if (pathname.includes('cities')) category = 'local';
        else if (pathname.includes('technical') || pathname.includes('development')) category = 'technical';

        // Initialize FAQ with appropriate category
        try {
            faqComponent.init(category);
        } catch (error) {
            console.warn('FAQ initialization error:', error);
            // Fallback to general category
            faqComponent.init('general');
        }
    }

    initializePageSpecificComponents() {
        const pathname = window.location.pathname;

        // Initialize city page manager if on cities page
        if (pathname.includes('cities-pages.html') && typeof CitiesPageManager !== 'undefined') {
            try {
                window.citiesPageManager = new CitiesPageManager();
                console.log('✓ CitiesPageManager loaded');
            } catch (error) {
                console.warn('⚠ Failed to load CitiesPageManager:', error);
            }
        }

        // Initialize SEO process component if present
        const seoProcessContainer = document.getElementById('seo-process-section');
        if (seoProcessContainer && typeof SEOProcessComponent !== 'undefined') {
            try {
                const seoProcess = new SEOProcessComponent();
                seoProcess.init(seoProcessContainer);
                console.log('✓ SEOProcessComponent loaded');
            } catch (error) {
                console.warn('⚠ Failed to load SEOProcessComponent:', error);
            }
        }
    }

    setupGlobalEventListeners() {
        // Enhanced form handling
        document.addEventListener('submit', (e) => {
            if (e.target.matches('form')) {
                this.handleFormSubmission(e);
            }
        });

        // Enhanced navigation
        document.addEventListener('click', (e) => {
            if (e.target.matches('a[href^="#"]')) {
                this.handleSmoothScroll(e);
            }
        });

        // Performance monitoring
        this.monitorPerformance();
    }

    handleFormSubmission(event) {
        event.preventDefault();

        const form = event.target;
        const submitButton = form.querySelector('[type="submit"]');
        const originalText = submitButton.innerHTML;

        // Show loading state
        submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitButton.disabled = true;

        // Simulate form submission (replace with actual submission logic)
        setTimeout(() => {
            submitButton.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
            submitButton.style.background = 'linear-gradient(135deg, #00cc66, #00a052)';

            // Reset form after delay
            setTimeout(() => {
                form.reset();
                submitButton.innerHTML = originalText;
                submitButton.disabled = false;
                submitButton.style.background = '';

                // Show success message
                this.showNotification('Thank you for your message! We\'ll get back to you within 24 hours.', 'success');
            }, 2000);
        }, 1500);
    }

    handleSmoothScroll(event) {
        const href = event.target.getAttribute('href');
        if (href && href !== '#' && href.length > 1) {
            try {
                const target = document.querySelector(href);
                if (target) {
                    event.preventDefault();
                    const navHeight = document.querySelector('.navbar')?.offsetHeight || 0;
                    const targetPosition = target.offsetTop - navHeight - 20;

                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            } catch (error) {
                console.warn('Smooth scroll error:', error);
            }
        }
    }

    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <i class="fas fa-${type === 'success' ? 'check-circle' : 'info-circle'}"></i>
                <span>${message}</span>
                <button class="notification-close">&times;</button>
            </div>
        `;

        // Add styles
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${type === 'success' ? '#00cc66' : '#0066cc'};
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 10px;
            box-shadow: 0 10px 25px rgba(0,0,0,0.15);
            z-index: 10000;
            animation: slideInRight 0.3s ease;
        `;

        document.body.appendChild(notification);

        // Auto remove after 5 seconds
        setTimeout(() => {
            notification.remove();
        }, 5000);

        // Manual close
        notification.querySelector('.notification-close').addEventListener('click', () => {
            notification.remove();
        });
    }

    monitorPerformance() {
        // Monitor Core Web Vitals
        if ('web-vital' in window) {
            try {
                const observer = new PerformanceObserver((list) => {
                    for (const entry of list.getEntries()) {
                        console.log(`Performance: ${entry.name} = ${entry.value}ms`);
                    }
                });
                observer.observe({ entryTypes: ['measure', 'navigation'] });
            } catch (error) {
                console.warn('Performance monitoring not available');
            }
        }
    }

    // Public methods for manual component loading
    loadComponent(componentName) {
        if (this.components.has(componentName) && !this.loadedComponents.has(componentName)) {
            try {
                const component = this.components.get(componentName)();
                if (component) {
                    this.loadedComponents.add(componentName);
                    return component;
                }
            } catch (error) {
                console.warn(`Failed to manually load ${componentName}:`, error);
            }
        }
        return null;
    }

    isComponentLoaded(componentName) {
        return this.loadedComponents.has(componentName);
    }

    getLoadedComponents() {
        return Array.from(this.loadedComponents);
    }
}

// Initialize Universal Loader when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    window.universalLoader = new UniversalLoader();
    console.log('🚀 Universal Loader initialized');
});

// Export for use
if (typeof window !== 'undefined') {
    window.UniversalLoader = UniversalLoader;
}