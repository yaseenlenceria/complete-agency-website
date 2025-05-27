
// Free SEO Audit Section Component
class FreeAuditSection {
    constructor() {
        this.sectionHTML = `
            <section class="free-audit-section">
                <div class="container">
                    <div class="audit-content">
                        <div class="audit-text-content">
                            <h2>Free SEO Audit Available!</h2>
                            <p>Get a comprehensive analysis of your website's SEO performance worth £500 - completely free with no obligations. Discover exactly what's holding your website back from ranking higher on Google.</p>
                            <ul class="audit-benefits">
                                <li><i class="fas fa-check-circle"></i> Complete technical SEO analysis</li>
                                <li><i class="fas fa-check-circle"></i> Keyword ranking opportunities</li>
                                <li><i class="fas fa-check-circle"></i> Competitor comparison report</li>
                                <li><i class="fas fa-check-circle"></i> Actionable improvement recommendations</li>
                            </ul>
                        </div>
                        <div class="audit-cta-content">
                            <div class="audit-value">
                                <span class="value-amount">£500</span>
                                <span class="value-text">Value</span>
                                <span class="free-text">FREE</span>
                            </div>
                            <a href="contact.html" class="audit-section-cta">
                                <i class="fas fa-rocket"></i>
                                Get Your Free SEO Audit
                            </a>
                            <p class="no-obligation">No obligations • Results in 24-48 hours</p>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }

    render() {
        return this.sectionHTML;
    }

    addToPage() {
        // Find a good place to insert the section (before CTA or footer)
        const ctaSection = document.querySelector('.cta-section');
        const footer = document.querySelector('.footer');
        const insertPoint = ctaSection || footer;

        if (insertPoint && !document.querySelector('.free-audit-section')) {
            insertPoint.insertAdjacentHTML('beforebegin', this.sectionHTML);
        }
    }
}

// Auto-initialize if not on home page
document.addEventListener('DOMContentLoaded', function() {
    // Only add to pages that are not the home page
    if (!window.location.pathname.includes('index.html') && window.location.pathname !== '/') {
        const auditSection = new FreeAuditSection();
        auditSection.addToPage();
    }
});
