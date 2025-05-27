
class BreadcrumbComponent {
    constructor() {
        this.init();
    }

    init() {
        this.generateBreadcrumb();
        this.addStructuredData();
    }

    generateBreadcrumb() {
        const path = window.location.pathname;
        const breadcrumbData = this.getBreadcrumbData(path);
        
        if (breadcrumbData.length > 1) {
            this.insertBreadcrumb(breadcrumbData);
        }
    }

    getBreadcrumbData(path) {
        const breadcrumbs = [
            { name: "Home", url: "https://outsourcesu.com/" }
        ];
        
        // Remove file extension and leading slash
        const cleanPath = path.replace(/^\//, '').replace(/\.html$/, '');
        
        if (!cleanPath || cleanPath === 'index') {
            return breadcrumbs;
        }

        // Service pages
        if (cleanPath.includes('seo') || cleanPath.includes('services')) {
            breadcrumbs.push({ 
                name: "SEO Services", 
                url: "https://outsourcesu.com/#services" 
            });
        }

        // Specific page mappings
        const pageMap = {
            'about': 'About Us',
            'contact': 'Contact',
            'cities-pages': 'UK Cities',
            'website-development': 'Website Development',
            'case-studies': 'Case Studies',
            'how-it-works': 'How It Works',
            'construction-seo': 'Construction SEO',
            'roofer-seo': 'Roofer SEO',
            'roof-repair-seo': 'Roof Repair SEO',
            'roof-replacement-seo': 'Roof Replacement SEO',
            'commercial-roofing-seo': 'Commercial Roofing SEO',
            'best-roofing-company': 'Best Roofing Company SEO',
            'best-roofing-companies-seo': 'Best Roofing Companies SEO',
            'best-roofing-companies-london': 'Best Roofing Companies London',
            'architects-seo': 'Architects SEO',
            'plumbers-seo': 'Plumbers SEO',
            'law-firm-seo': 'Law Firm SEO',
            'dentists-seo': 'Dentists SEO',
            'healthcare-seo': 'Healthcare SEO',
            'financial-seo': 'Financial SEO',
            'accountants-seo': 'SEO For Accountants',
            'real-estate-seo': 'Real Estate SEO',
            'white-label-seo': 'White Label SEO',
            'professional-seo-services-uk': 'Professional SEO Services UK',
            'top-seo-agency-uk': 'Top SEO Agency UK',
            'best-seo-agency-manchester': 'Best SEO Agency Manchester',
            'seo-agency-birmingham': 'SEO Agency Birmingham'
        };

        const pageName = pageMap[cleanPath] || this.formatPageName(cleanPath);
        breadcrumbs.push({ 
            name: pageName, 
            url: window.location.href 
        });

        return breadcrumbs;
    }

    formatPageName(path) {
        return path
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    }

    insertBreadcrumb(breadcrumbData) {
        const breadcrumbHTML = this.createBreadcrumbHTML(breadcrumbData);
        
        // Insert after navigation
        const navbar = document.querySelector('.navbar');
        if (navbar) {
            const existingBreadcrumb = document.querySelector('.breadcrumb');
            if (!existingBreadcrumb) {
                navbar.insertAdjacentHTML('afterend', breadcrumbHTML);
            }
        }
    }

    createBreadcrumbHTML(breadcrumbs) {
        return `
            <nav class="breadcrumb" aria-label="Breadcrumb">
                <div class="container">
                    <ul class="breadcrumb-list">
                        ${breadcrumbs.map((crumb, index) => `
                            <li class="breadcrumb-item">
                                ${index === breadcrumbs.length - 1 
                                    ? `<span aria-current="page">${crumb.name}</span>`
                                    : `<a href="${crumb.url}">${crumb.name}</a>`
                                }
                            </li>
                        `).join('')}
                    </ul>
                </div>
            </nav>
        `;
    }

    addStructuredData() {
        const breadcrumbData = this.getBreadcrumbData(window.location.pathname);
        
        if (breadcrumbData.length > 1) {
            const structuredData = {
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                "itemListElement": breadcrumbData.map((crumb, index) => ({
                    "@type": "ListItem",
                    "position": index + 1,
                    "name": crumb.name,
                    "item": crumb.url
                }))
            };

            const script = document.createElement('script');
            script.type = 'application/ld+json';
            script.textContent = JSON.stringify(structuredData);
            
            // Only add if not already present
            if (!document.querySelector('script[type="application/ld+json"]')) {
                document.head.appendChild(script);
            }
        }
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    new BreadcrumbComponent();
});

// Export for use
if (typeof window !== 'undefined') {
    window.BreadcrumbComponent = BreadcrumbComponent;
}
