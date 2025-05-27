
// Global Components Initializer - Ensures all pages have enhanced components
class GlobalComponentsManager {
    constructor() {
        this.initializeAllComponents();
    }

    initializeAllComponents() {
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                this.loadComponents();
            });
        } else {
            this.loadComponents();
        }
    }

    loadComponents() {
        // Initialize breadcrumbs
        this.initializeBreadcrumbs();
        
        // Initialize enhanced components
        this.initializeEnhancedComponents();
        
        // Initialize page-specific enhancements
        this.initializePageSpecificEnhancements();
        
        // Initialize interactive elements
        this.initializeInteractiveElements();
    }

    initializeBreadcrumbs() {
        if (typeof BreadcrumbComponent !== 'undefined') {
            new BreadcrumbComponent();
        }
    }

    initializeEnhancedComponents() {
        if (typeof EnhancedComponents !== 'undefined') {
            new EnhancedComponents();
        }
    }

    initializePageSpecificEnhancements() {
        // Enhance service pages
        this.enhanceServicePages();
        
        // Enhance list content
        this.enhanceListContent();
        
        // Add content sections
        this.addContentSections();
    }

    enhanceServicePages() {
        const serviceSections = document.querySelectorAll('.services-detailed, .service-item');
        serviceSections.forEach(section => {
            if (!section.classList.contains('enhanced')) {
                section.classList.add('enhanced');
                this.addServiceEnhancements(section);
            }
        });
    }

    addServiceEnhancements(section) {
        // Add process indicators if not present
        if (!section.querySelector('.progress-indicator')) {
            const progressDiv = document.createElement('div');
            progressDiv.className = 'progress-indicator';
            progressDiv.innerHTML = `
                <h4>📈 Implementation Progress</h4>
                <div style="margin: 15px 0;">
                    <span>Setup & Planning</span>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: 100%;"></div>
                    </div>
                    <small>Complete initial analysis and strategy</small>
                </div>
                <div style="margin: 15px 0;">
                    <span>Implementation</span>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: 75%;"></div>
                    </div>
                    <small>Execute optimization strategies</small>
                </div>
                <div style="margin: 15px 0;">
                    <span>Results & Monitoring</span>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: 90%;"></div>
                    </div>
                    <small>Track performance and adjust</small>
                </div>
            `;
            section.appendChild(progressDiv);
        }
    }

    enhanceListContent() {
        // Find all unenhanced lists and enhance them
        const allLists = document.querySelectorAll('ul:not(.enhanced-list):not(.nav-menu):not(.dropdown-menu)');
        allLists.forEach(list => {
            // Skip if it's a navigation or already enhanced
            if (list.closest('.navbar') || list.closest('.footer') || list.classList.contains('enhanced-list')) {
                return;
            }

            list.classList.add('enhanced-list');
            const items = list.querySelectorAll('li');
            items.forEach(item => {
                if (!item.classList.contains('feature-item') && !item.classList.contains('benefit-item')) {
                    // Determine the type based on content or context
                    const parentSection = item.closest('section');
                    if (parentSection && (parentSection.classList.contains('benefits') || parentSection.classList.contains('why-choose'))) {
                        item.classList.add('benefit-item');
                    } else {
                        item.classList.add('feature-item');
                    }
                }
            });
        });
    }

    addContentSections() {
        // Add value proposition sections to service pages
        const serviceHeros = document.querySelectorAll('.service-hero');
        serviceHeros.forEach(hero => {
            if (!hero.nextElementSibling || !hero.nextElementSibling.classList.contains('value-proposition')) {
                this.addValueProposition(hero);
            }
        });
    }

    addValueProposition(hero) {
        const valueProposition = document.createElement('section');
        valueProposition.className = 'value-proposition content-section';
        valueProposition.innerHTML = `
            <div class="container">
                <div class="info-card">
                    <h3>💡 Why Choose Our SEO Services?</h3>
                    <p>We deliver measurable results that directly impact your business growth and online success.</p>
                    <div class="row" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; margin-top: 20px;">
                        <div class="highlight-box success">
                            <strong>Proven Track Record:</strong> Over 500 successful UK businesses have trusted us with their SEO needs, achieving an average of 425% traffic increase.
                        </div>
                        <div class="highlight-box">
                            <strong>Transparent Reporting:</strong> Monthly detailed reports showing exactly what we've accomplished and how it impacts your bottom line.
                        </div>
                        <div class="highlight-box warning">
                            <strong>No Long-Term Contracts:</strong> We earn your business every month through exceptional results, not legal obligations.
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        hero.insertAdjacentElement('afterend', valueProposition);
    }

    initializeInteractiveElements() {
        // Add scroll animations
        this.addScrollAnimations();
        
        // Add hover effects
        this.addHoverEffects();
        
        // Add click interactions
        this.addClickInteractions();
    }

    addScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe all cards and sections
        const elementsToAnimate = document.querySelectorAll('.info-card, .highlight-box, .progress-indicator, .service-card, .benefit-card');
        elementsToAnimate.forEach(el => {
            if (!el.style.opacity) {
                el.style.opacity = '0';
                el.style.transform = 'translateY(30px)';
                el.style.transition = 'all 0.6s ease';
            }
            observer.observe(el);
        });
    }

    addHoverEffects() {
        const cards = document.querySelectorAll('.info-card, .service-card, .benefit-card');
        cards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-5px) scale(1.02)';
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0) scale(1)';
            });
        });
    }

    addClickInteractions() {
        // Add copy-to-clipboard for contact information
        const contactElements = document.querySelectorAll('[data-copyable]');
        contactElements.forEach(el => {
            el.style.cursor = 'pointer';
            el.title = 'Click to copy';
            el.addEventListener('click', () => {
                navigator.clipboard.writeText(el.textContent);
                this.showToast('Copied to clipboard!');
            });
        });
    }

    showToast(message) {
        const toast = document.createElement('div');
        toast.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #10b981;
            color: white;
            padding: 12px 20px;
            border-radius: 8px;
            z-index: 10000;
            font-weight: 600;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            animation: slideIn 0.3s ease;
        `;
        toast.textContent = message;
        document.body.appendChild(toast);
        
        setTimeout(() => {
            toast.remove();
        }, 3000);
    }
}

// Auto-initialize when script loads
new GlobalComponentsManager();
