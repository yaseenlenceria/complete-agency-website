class BreadcrumbComponent {
    constructor() {
        this.init();
    }

    init() {
        this.addBreadcrumbs();
        this.addBreadcrumbSchema();
    }

    addBreadcrumbs() {
        // Check if breadcrumb already exists
        if (document.querySelector('.breadcrumb')) {
            return;
        }

        const breadcrumbData = this.generateBreadcrumbData();
        if (breadcrumbData.length > 1) {
            const breadcrumbHTML = this.generateBreadcrumbHTML(breadcrumbData);

            // Insert breadcrumb after navigation
            const nav = document.querySelector('.navbar');
            if (nav) {
                nav.insertAdjacentHTML('afterend', breadcrumbHTML);
            }
        }
    }

    generateBreadcrumbData() {
        const path = window.location.pathname;
        const breadcrumbs = [{ name: "Home", url: "https://outsourcesu.com/" }];

        // Get page title for better breadcrumb names
        const pageTitle = document.title.split(' | ')[0];

        if (path.includes('about')) {
            breadcrumbs.push({ name: "About Us", url: window.location.href });
        } else if (path.includes('contact')) {
            breadcrumbs.push({ name: "Contact", url: window.location.href });
        } else if (path.includes('case-studies')) {
            breadcrumbs.push({ name: "Case Studies", url: window.location.href });
        } else if (path.includes('cities-pages')) {
            breadcrumbs.push({ name: "UK Cities", url: window.location.href });
        } else if (path.includes('website-development')) {
            breadcrumbs.push({ name: "Website Development", url: window.location.href });
        } else if (path.includes('seo')) {
            breadcrumbs.push({ name: "SEO Services", url: "https://outsourcesu.com/#services" });
            breadcrumbs.push({ name: pageTitle, url: window.location.href });
        } else if (path.includes('construction')) {
            breadcrumbs.push({ name: "SEO Services", url: "https://outsourcesu.com/#services" });
            breadcrumbs.push({ name: "Construction SEO", url: window.location.href });
        } else if (path.includes('roofing') || path.includes('roofer')) {
            breadcrumbs.push({ name: "SEO Services", url: "https://outsourcesu.com/#services" });
            breadcrumbs.push({ name: "Roofing SEO", url: window.location.href });
        } else if (path.includes('law-firm')) {
            breadcrumbs.push({ name: "SEO Services", url: "https://outsourcesu.com/#services" });
            breadcrumbs.push({ name: "Law Firm SEO", url: window.location.href });
        } else if (path.includes('dentist')) {
            breadcrumbs.push({ name: "SEO Services", url: "https://outsourcesu.com/#services" });
            breadcrumbs.push({ name: "Dentist SEO", url: window.location.href });
        } else if (path.includes('real-estate')) {
            breadcrumbs.push({ name: "SEO Services", url: "https://outsourcesu.com/#services" });
            breadcrumbs.push({ name: "Real Estate SEO", url: window.location.href });
        } else if (path.includes('healthcare')) {
            breadcrumbs.push({ name: "SEO Services", url: "https://outsourcesu.com/#services" });
            breadcrumbs.push({ name: "Healthcare SEO", url: window.location.href });
        } else if (path.includes('financial')) {
            breadcrumbs.push({ name: "SEO Services", url: "https://outsourcesu.com/#services" });
            breadcrumbs.push({ name: "Financial SEO", url: window.location.href });
        } else if (path.includes('accountant')) {
            breadcrumbs.push({ name: "SEO Services", url: "https://outsourcesu.com/#services" });
            breadcrumbs.push({ name: "Accountants SEO", url: window.location.href });
        } else if (path.includes('white-label')) {
            breadcrumbs.push({ name: "SEO Services", url: "https://outsourcesu.com/#services" });
            breadcrumbs.push({ name: "White Label SEO", url: window.location.href });
        }

        return breadcrumbs;
    }

    generateBreadcrumbHTML(breadcrumbs) {
        return `
            <section class="breadcrumb">
                <div class="container">
                    <ul class="breadcrumb-list">
                        ${breadcrumbs.map((crumb, index) => `
                            <li class="breadcrumb-item">
                                ${index === breadcrumbs.length - 1 
                                    ? `<span>${crumb.name}</span>`
                                    : `<a href="${crumb.url}">${crumb.name}</a>`
                                }
                            </li>
                        `).join('')}
                    </ul>
                </div>
            </section>
        `;
    }

    addBreadcrumbSchema() {
        const breadcrumbData = this.generateBreadcrumbData();
        if (breadcrumbData.length > 1) {
            const schema = {
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
            script.textContent = JSON.stringify(schema);
            document.head.appendChild(script);
        }
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    new BreadcrumbComponent();
});

// Export for use
if (typeof window !== 'undefined') {
    window.BreadcrumbComponent = BreadcrumbComponent;
}