
// Comprehensive SEO Optimization Script
class SEOOptimizer {
    constructor() {
        this.init();
    }

    init() {
        this.addStructuredData();
        this.optimizeImages();
        this.addBreadcrumbs();
        this.optimizeInternalLinks();
        this.addSocialMetaTags();
        this.improvePageSpeed();
    }

    addStructuredData() {
        // Organization Schema
        const organizationSchema = {
            "@context": "https://schema.org",
            "@type": "SEOAgency",
            "name": "OutSourceSU",
            "url": "https://outsourcesu.com",
            "logo": "https://outsourcesu.com/logo.png",
            "description": "UK's leading SEO agency providing professional SEO services across Manchester, London, Birmingham and nationwide. 15+ years experience, 500+ happy clients.",
            "telephone": "07411575188",
            "email": "contact@outsourcesu.com",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "20-22 Wenlock Road",
                "addressLocality": "London",
                "postalCode": "N1 7GU",
                "addressCountry": "GB"
            },
            "geo": {
                "@type": "GeoCoordinates",
                "latitude": "51.5074",
                "longitude": "-0.1278"
            },
            "openingHours": "Mo-Fr 09:00-18:00",
            "sameAs": [
                "https://www.linkedin.com/company/outsourcesu",
                "https://twitter.com/outsourcesu",
                "https://www.facebook.com/outsourcesu"
            ],
            "areaServed": [
                "Manchester", "London", "Birmingham", "Leeds", "Liverpool", 
                "Sheffield", "Bristol", "Newcastle", "Edinburgh", "Cardiff", "Belfast"
            ],
            "serviceType": [
                "SEO Services", "Local SEO", "Technical SEO", "Construction SEO",
                "Law Firm SEO", "Healthcare SEO", "Real Estate SEO", "Website Development"
            ],
            "priceRange": "££",
            "foundingDate": "2009",
            "numberOfEmployees": "50-100",
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5.0",
                "reviewCount": "500",
                "bestRating": "5",
                "worstRating": "5"
            }
        };

        this.addSchemaMarkup(organizationSchema);
    }

    addSchemaMarkup(schema) {
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.textContent = JSON.stringify(schema);
        document.head.appendChild(script);
    }

    optimizeImages() {
        const images = document.querySelectorAll('img');
        images.forEach(img => {
            // Add loading attribute if not present
            if (!img.hasAttribute('loading')) {
                img.setAttribute('loading', 'lazy');
            }
            
            // Ensure alt text is present
            if (!img.hasAttribute('alt') || img.alt === '') {
                const src = img.src;
                const filename = src.substring(src.lastIndexOf('/') + 1);
                img.alt = `OutSourceSU - ${filename.replace(/\.[^/.]+$/, "").replace(/[-_]/g, ' ')}`;
            }
            
            // Add structured data for images
            if (img.src && !img.hasAttribute('itemprop')) {
                img.setAttribute('itemprop', 'image');
            }
        });
    }

    addBreadcrumbs() {
        if (!document.querySelector('.breadcrumb')) {
            const breadcrumbData = this.generateBreadcrumbData();
            if (breadcrumbData.length > 1) {
                const breadcrumbHTML = this.generateBreadcrumbHTML(breadcrumbData);
                const breadcrumbSchema = this.generateBreadcrumbSchema(breadcrumbData);
                
                // Insert breadcrumb after navigation
                const nav = document.querySelector('.navbar');
                if (nav) {
                    nav.insertAdjacentHTML('afterend', breadcrumbHTML);
                }
                
                this.addSchemaMarkup(breadcrumbSchema);
            }
        }
    }

    generateBreadcrumbData() {
        const path = window.location.pathname;
        const breadcrumbs = [{ name: "Home", url: "https://outsourcesu.com/" }];
        
        if (path.includes('about')) {
            breadcrumbs.push({ name: "About Us", url: window.location.href });
        } else if (path.includes('contact')) {
            breadcrumbs.push({ name: "Contact", url: window.location.href });
        } else if (path.includes('seo')) {
            breadcrumbs.push({ name: "SEO Services", url: "https://outsourcesu.com/#services" });
            const pageName = document.title.split(' | ')[0];
            breadcrumbs.push({ name: pageName, url: window.location.href });
        } else if (path.includes('cities')) {
            breadcrumbs.push({ name: "UK Cities", url: window.location.href });
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
                                    ? crumb.name 
                                    : `<a href="${crumb.url}">${crumb.name}</a>`
                                }
                            </li>
                        `).join('')}
                    </ul>
                </div>
            </section>
        `;
    }

    generateBreadcrumbSchema(breadcrumbs) {
        return {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": breadcrumbs.map((crumb, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "name": crumb.name,
                "item": crumb.url
            }))
        };
    }

    optimizeInternalLinks() {
        const links = document.querySelectorAll('a[href]');
        links.forEach(link => {
            const href = link.getAttribute('href');
            
            // Add title attributes for better accessibility and SEO
            if (!link.hasAttribute('title') && link.textContent.trim()) {
                link.setAttribute('title', link.textContent.trim());
            }
            
            // Open external links in new tab
            if (href && (href.startsWith('http') && !href.includes('outsourcesu.com'))) {
                link.setAttribute('target', '_blank');
                link.setAttribute('rel', 'noopener noreferrer');
            }
        });
    }

    addSocialMetaTags() {
        if (!document.querySelector('meta[property="og:title"]')) {
            const title = document.title;
            const description = document.querySelector('meta[name="description"]')?.content || '';
            const url = window.location.href;
            const image = 'https://outsourcesu.com/og-image.jpg';
            
            const socialMeta = [
                { property: 'og:title', content: title },
                { property: 'og:description', content: description },
                { property: 'og:url', content: url },
                { property: 'og:image', content: image },
                { property: 'og:type', content: 'website' },
                { property: 'og:site_name', content: 'OutSourceSU' },
                { name: 'twitter:card', content: 'summary_large_image' },
                { name: 'twitter:title', content: title },
                { name: 'twitter:description', content: description },
                { name: 'twitter:image', content: image }
            ];
            
            socialMeta.forEach(meta => {
                const metaTag = document.createElement('meta');
                if (meta.property) metaTag.setAttribute('property', meta.property);
                if (meta.name) metaTag.setAttribute('name', meta.name);
                metaTag.setAttribute('content', meta.content);
                document.head.appendChild(metaTag);
            });
        }
    }

    improvePageSpeed() {
        // Preload critical resources
        this.preloadCriticalResources();
        
        // Optimize fonts
        this.optimizeFonts();
        
        // Add resource hints
        this.addResourceHints();
    }

    preloadCriticalResources() {
        const criticalResources = [
            { href: 'style.css', as: 'style' },
            { href: 'dynamic-styles.css', as: 'style' },
            { href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap', as: 'style' }
        ];
        
        criticalResources.forEach(resource => {
            if (!document.querySelector(`link[href="${resource.href}"]`)) {
                const link = document.createElement('link');
                link.rel = 'preload';
                link.href = resource.href;
                link.as = resource.as;
                if (resource.as === 'style') {
                    link.onload = function() { this.rel = 'stylesheet'; };
                }
                document.head.appendChild(link);
            }
        });
    }

    optimizeFonts() {
        // Add font-display: swap to improve loading performance
        const fontLinks = document.querySelectorAll('link[href*="fonts.googleapis.com"]');
        fontLinks.forEach(link => {
            if (!link.href.includes('display=swap')) {
                link.href += '&display=swap';
            }
        });
    }

    addResourceHints() {
        const hints = [
            { rel: 'dns-prefetch', href: '//fonts.googleapis.com' },
            { rel: 'dns-prefetch', href: '//images.unsplash.com' },
            { rel: 'dns-prefetch', href: '//cdnjs.cloudflare.com' }
        ];
        
        hints.forEach(hint => {
            if (!document.querySelector(`link[href="${hint.href}"]`)) {
                const link = document.createElement('link');
                link.rel = hint.rel;
                link.href = hint.href;
                document.head.appendChild(link);
            }
        });
    }
}

// Initialize SEO Optimizer
document.addEventListener('DOMContentLoaded', function() {
    new SEOOptimizer();
});

// Export for use
if (typeof window !== 'undefined') {
    window.SEOOptimizer = SEOOptimizer;
}
