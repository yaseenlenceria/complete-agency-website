
// Enhanced Free SEO Audit Section Component
class FreeAuditSection {
    constructor(options = {}) {
        this.options = {
            title: options.title || 'Free SEO Audit Available!',
            description: options.description || 'Get a comprehensive analysis of your website\'s SEO performance worth £500 - completely free with no obligations. Discover exactly what\'s holding your website back from ranking higher on Google.',
            ctaText: options.ctaText || 'Get Your Free SEO Audit',
            ctaIcon: options.ctaIcon || 'fas fa-rocket',
            benefits: options.benefits || [
                'Complete technical SEO analysis',
                'Keyword ranking opportunities', 
                'Competitor comparison report',
                'Actionable improvement recommendations'
            ],
            valueText: options.valueText || 'Value',
            valueAmount: options.valueAmount || '£500',
            freeText: options.freeText || 'FREE',
            noObligation: options.noObligation || 'No obligations • Results in 24-48 hours',
            ...options
        };
        
        this.sectionHTML = this.generateHTML();
    }

    generateHTML() {
        const benefitsList = this.options.benefits.map(benefit => 
            `<li><i class="fas fa-check-circle"></i> ${benefit}</li>`
        ).join('');

        return `
            <section class="free-audit-section">
                <div class="container">
                    <div class="audit-content">
                        <div class="audit-text-content">
                            <h2>${this.options.title}</h2>
                            <p>${this.options.description}</p>
                            <ul class="audit-benefits">
                                ${benefitsList}
                            </ul>
                        </div>
                        <div class="audit-cta-content">
                            <div class="audit-value">
                                <span class="value-amount">${this.options.valueAmount}</span>
                                <span class="value-text">${this.options.valueText}</span>
                                <span class="free-text">${this.options.freeText}</span>
                            </div>
                            <a href="contact.html" class="audit-section-cta">
                                <i class="${this.options.ctaIcon}"></i>
                                ${this.options.ctaText}
                            </a>
                            <p class="no-obligation">${this.options.noObligation}</p>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }

    render() {
        return this.sectionHTML;
    }

    addToPage(position = 'before-cta') {
        let insertPoint;
        
        switch(position) {
            case 'after-hero':
                insertPoint = document.querySelector('.hero');
                if (insertPoint) {
                    insertPoint.insertAdjacentHTML('afterend', this.sectionHTML);
                }
                break;
            case 'before-footer':
                insertPoint = document.querySelector('.footer');
                if (insertPoint) {
                    insertPoint.insertAdjacentHTML('beforebegin', this.sectionHTML);
                }
                break;
            case 'before-cta':
            default:
                insertPoint = document.querySelector('.cta-section') || document.querySelector('.footer');
                if (insertPoint && !document.querySelector('.free-audit-section')) {
                    insertPoint.insertAdjacentHTML('beforebegin', this.sectionHTML);
                }
                break;
        }
    }

    // Static method to create different variants
    static createWebsiteAudit() {
        return new FreeAuditSection({
            title: 'Free Website Audit Available!',
            description: 'Get a comprehensive analysis of your website\'s performance worth £500 - completely free with no obligations. Discover exactly what\'s holding your website back from engaging clients effectively.',
            ctaText: 'Get Your Free Website Audit',
            benefits: [
                'Complete technical website analysis',
                'UX/UI improvement opportunities',
                'Competitor comparison report',
                'Actionable design recommendations'
            ]
        });
    }

    static createSEOConsultation() {
        return new FreeAuditSection({
            title: 'Free SEO Consultation!',
            description: 'Speak directly with our SEO experts and get personalized recommendations for your business. No sales pitch - just genuine advice to help your website rank higher.',
            ctaText: 'Book Free Consultation',
            ctaIcon: 'fas fa-calendar-alt',
            benefits: [
                '30-minute one-on-one consultation',
                'Personalized SEO strategy',
                'Keyword opportunities review',
                'Competitive analysis insights'
            ],
            noObligation: 'No obligations • Book your slot today'
        });
    }

    static createPartnershipCall() {
        return new FreeAuditSection({
            title: 'Ready to Partner With Us?',
            description: 'Join our exclusive network of white label partners and start offering professional SEO services to your clients. Complete the partnership application and speak with our team.',
            ctaText: 'Start Partnership',
            ctaIcon: 'fas fa-handshake',
            benefits: [
                'Partnership consultation call',
                'Custom pricing proposal', 
                'Demo of our white label process',
                'Training and onboarding plan'
            ],
            valueText: 'Partnership',
            freeText: 'OPPORTUNITY',
            noObligation: 'No upfront costs • Profit sharing model'
        });
    }
}

// Auto-initialize based on page type
document.addEventListener('DOMContentLoaded', function() {
    // Only add to pages that are not the home page
    if (!window.location.pathname.includes('index.html') && window.location.pathname !== '/') {
        let auditSection;
        
        // Determine which variant to use based on page
        const pathname = window.location.pathname.toLowerCase();
        
        if (pathname.includes('website-development')) {
            auditSection = FreeAuditSection.createWebsiteAudit();
        } else if (pathname.includes('white-label')) {
            auditSection = FreeAuditSection.createPartnershipCall();
        } else if (pathname.includes('contact') || pathname.includes('consultation')) {
            auditSection = FreeAuditSection.createSEOConsultation();
        } else {
            // Default SEO audit
            auditSection = new FreeAuditSection();
        }
        
        auditSection.addToPage();
    }
});

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = FreeAuditSection;
} else if (typeof window !== 'undefined') {
    window.FreeAuditSection = FreeAuditSection;
}
