
// Comprehensive Google SEO Optimization for OutSourceSU
class GoogleSEOOptimizer {
    constructor() {
        this.domain = 'https://outsourcesu.com';
        this.init();
    }

    init() {
        this.addGoogleVerification();
        this.addComprehensiveStructuredData();
        this.optimizeForGoogleRequirements();
        this.addSocialMetaTags();
        this.addOpenGraphTags();
        this.addTwitterCardTags();
        this.improvePageSpeed();
        this.addFavicons();
        this.addCanonicalTags();
        this.optimizeImages();
        this.addLocalBusinessSchema();
    }

    addGoogleVerification() {
        if (!document.querySelector('meta[name="google-site-verification"]')) {
            const verification = document.createElement('meta');
            verification.name = 'google-site-verification';
            verification.content = 'ornn-7cs4m1xk0nv5pm_0t7_uihoek2oopxudyrik4q';
            document.head.appendChild(verification);
        }
    }

    addComprehensiveStructuredData() {
        // Organization Schema
        const organizationSchema = {
            "@context": "https://schema.org",
            "@type": "SEOAgency",
            "name": "OutSourceSU",
            "alternateName": "OutSourceSU Limited",
            "url": "https://outsourcesu.com",
            "logo": {
                "@type": "ImageObject",
                "url": "https://outsourcesu.com/assets/logo.png",
                "width": "300",
                "height": "100"
            },
            "description": "UK's leading SEO agency providing professional SEO services across Manchester, London, Birmingham and nationwide. 15+ years experience, 500+ happy clients, 94% success rate.",
            "telephone": "07411575188",
            "email": "contact@outsourcesu.com",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "20-22 Wenlock Road",
                "addressLocality": "London",
                "addressRegion": "London",
                "postalCode": "N1 7GU",
                "addressCountry": "GB"
            },
            "geo": {
                "@type": "GeoCoordinates",
                "latitude": "51.5074",
                "longitude": "-0.1278"
            },
            "openingHours": "Mo-Fr 09:00-18:00",
            "foundingDate": "2009",
            "numberOfEmployees": "50-100",
            "priceRange": "££",
            "sameAs": [
                "https://www.linkedin.com/company/outsourcesu",
                "https://twitter.com/outsourcesu",
                "https://www.facebook.com/outsourcesu",
                "https://www.instagram.com/outsourcesu"
            ],
            "areaServed": [
                {
                    "@type": "Country",
                    "name": "United Kingdom"
                },
                {
                    "@type": "City",
                    "name": "Manchester"
                },
                {
                    "@type": "City",
                    "name": "London"
                },
                {
                    "@type": "City",
                    "name": "Birmingham"
                },
                {
                    "@type": "City",
                    "name": "Leeds"
                },
                {
                    "@type": "City",
                    "name": "Liverpool"
                },
                {
                    "@type": "City",
                    "name": "Sheffield"
                },
                {
                    "@type": "City",
                    "name": "Bristol"
                },
                {
                    "@type": "City",
                    "name": "Newcastle"
                },
                {
                    "@type": "City",
                    "name": "Edinburgh"
                },
                {
                    "@type": "City",
                    "name": "Cardiff"
                },
                {
                    "@type": "City",
                    "name": "Belfast"
                }
            ],
            "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "SEO Services",
                "itemListElement": [
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Local SEO",
                            "description": "Local search optimization for businesses"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Technical SEO",
                            "description": "Technical website optimization"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Content Marketing",
                            "description": "SEO content creation and optimization"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Link Building",
                            "description": "Authority link building services"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Website Development",
                            "description": "Professional website development and design"
                        }
                    }
                ]
            },
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5.0",
                "reviewCount": "500",
                "bestRating": "5",
                "worstRating": "5"
            },
            "awards": [
                "Best SEO Agency UK 2024",
                "Top Digital Marketing Agency 2024",
                "Google Premier Partner"
            ]
        };

        this.addSchemaMarkup(organizationSchema);

        // Website Schema
        const websiteSchema = {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "OutSourceSU",
            "url": "https://outsourcesu.com",
            "potentialAction": {
                "@type": "SearchAction",
                "target": "https://outsourcesu.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
            },
            "publisher": {
                "@type": "Organization",
                "name": "OutSourceSU",
                "url": "https://outsourcesu.com"
            }
        };

        this.addSchemaMarkup(websiteSchema);
    }

    addLocalBusinessSchema() {
        const localBusinessSchema = {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "OutSourceSU",
            "description": "UK's leading SEO agency",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "20-22 Wenlock Road",
                "addressLocality": "London",
                "addressRegion": "London",
                "postalCode": "N1 7GU",
                "addressCountry": "GB"
            },
            "telephone": "07411575188",
            "email": "contact@outsourcesu.com",
            "url": "https://outsourcesu.com",
            "geo": {
                "@type": "GeoCoordinates",
                "latitude": "51.5074",
                "longitude": "-0.1278"
            },
            "openingHours": "Mo-Fr 09:00-18:00",
            "priceRange": "££",
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5.0",
                "reviewCount": "500"
            }
        };

        this.addSchemaMarkup(localBusinessSchema);
    }

    addSchemaMarkup(schema) {
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.textContent = JSON.stringify(schema);
        document.head.appendChild(script);
    }

    optimizeForGoogleRequirements() {
        // Add language attribute
        document.documentElement.lang = 'en-GB';

        // Add charset if not present
        if (!document.querySelector('meta[charset]')) {
            const charset = document.createElement('meta');
            charset.setAttribute('charset', 'UTF-8');
            document.head.insertBefore(charset, document.head.firstChild);
        }

        // Add viewport if not present
        if (!document.querySelector('meta[name="viewport"]')) {
            const viewport = document.createElement('meta');
            viewport.name = 'viewport';
            viewport.content = 'width=device-width, initial-scale=1.0';
            document.head.appendChild(viewport);
        }

        // Add robots meta tag
        if (!document.querySelector('meta[name="robots"]')) {
            const robots = document.createElement('meta');
            robots.name = 'robots';
            robots.content = 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1';
            document.head.appendChild(robots);
        }

        // Add author
        if (!document.querySelector('meta[name="author"]')) {
            const author = document.createElement('meta');
            author.name = 'author';
            author.content = 'OutSourceSU';
            document.head.appendChild(author);
        }

        // Add geo tags
        this.addGeoTags();
    }

    addGeoTags() {
        const geoTags = [
            { name: 'geo.region', content: 'GB' },
            { name: 'geo.placename', content: 'United Kingdom' },
            { name: 'geo.position', content: '51.5074;-0.1278' },
            { name: 'ICBM', content: '51.5074, -0.1278' }
        ];

        geoTags.forEach(tag => {
            if (!document.querySelector(`meta[name="${tag.name}"]`)) {
                const meta = document.createElement('meta');
                meta.name = tag.name;
                meta.content = tag.content;
                document.head.appendChild(meta);
            }
        });
    }

    addSocialMetaTags() {
        const currentUrl = window.location.href;
        const title = document.title;
        const description = document.querySelector('meta[name="description"]')?.content || 'UK\'s leading SEO agency with 15+ years experience and 500+ happy clients.';
        const image = 'https://outsourcesu.com/assets/og-image.jpg';

        // Open Graph tags
        const ogTags = [
            { property: 'og:title', content: title },
            { property: 'og:description', content: description },
            { property: 'og:url', content: currentUrl },
            { property: 'og:image', content: image },
            { property: 'og:image:width', content: '1200' },
            { property: 'og:image:height', content: '630' },
            { property: 'og:type', content: 'website' },
            { property: 'og:site_name', content: 'OutSourceSU' },
            { property: 'og:locale', content: 'en_GB' }
        ];

        ogTags.forEach(tag => {
            if (!document.querySelector(`meta[property="${tag.property}"]`)) {
                const meta = document.createElement('meta');
                meta.setAttribute('property', tag.property);
                meta.content = tag.content;
                document.head.appendChild(meta);
            }
        });
    }

    addTwitterCardTags() {
        const title = document.title;
        const description = document.querySelector('meta[name="description"]')?.content || 'UK\'s leading SEO agency with 15+ years experience and 500+ happy clients.';
        const image = 'https://outsourcesu.com/assets/twitter-card.jpg';

        const twitterTags = [
            { name: 'twitter:card', content: 'summary_large_image' },
            { name: 'twitter:site', content: '@outsourcesu' },
            { name: 'twitter:creator', content: '@outsourcesu' },
            { name: 'twitter:title', content: title },
            { name: 'twitter:description', content: description },
            { name: 'twitter:image', content: image }
        ];

        twitterTags.forEach(tag => {
            if (!document.querySelector(`meta[name="${tag.name}"]`)) {
                const meta = document.createElement('meta');
                meta.name = tag.name;
                meta.content = tag.content;
                document.head.appendChild(meta);
            }
        });
    }

    addCanonicalTags() {
        if (!document.querySelector('link[rel="canonical"]')) {
            const canonical = document.createElement('link');
            canonical.rel = 'canonical';
            canonical.href = window.location.href;
            document.head.appendChild(canonical);
        }
    }

    addFavicons() {
        const favicons = [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
            { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
            { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
            { rel: 'manifest', href: '/site.webmanifest' }
        ];

        favicons.forEach(favicon => {
            if (!document.querySelector(`link[rel="${favicon.rel}"]`)) {
                const link = document.createElement('link');
                Object.keys(favicon).forEach(key => {
                    link.setAttribute(key, favicon[key]);
                });
                document.head.appendChild(link);
            }
        });
    }

    optimizeImages() {
        const images = document.querySelectorAll('img');
        images.forEach(img => {
            // Add loading attribute if not present
            if (!img.hasAttribute('loading') && !img.src.includes('hero') && !img.src.includes('above-fold')) {
                img.setAttribute('loading', 'lazy');
            }
            
            // Ensure alt text is present and meaningful
            if (!img.hasAttribute('alt') || img.alt === '') {
                const src = img.src;
                const filename = src.substring(src.lastIndexOf('/') + 1);
                img.alt = `OutSourceSU SEO Services - ${filename.replace(/\.[^/.]+$/, "").replace(/[-_]/g, ' ')}`;
            }
            
            // Add width and height attributes for better CLS
            if (!img.hasAttribute('width') || !img.hasAttribute('height')) {
                img.addEventListener('load', function() {
                    if (!this.hasAttribute('width')) {
                        this.setAttribute('width', this.naturalWidth);
                        this.setAttribute('height', this.naturalHeight);
                    }
                });
            }
        });
    }

    improvePageSpeed() {
        // Preload critical resources
        this.preloadCriticalResources();
        
        // Add resource hints
        this.addResourceHints();
        
        // Optimize fonts
        this.optimizeFonts();
    }

    preloadCriticalResources() {
        const criticalResources = [
            { href: '/style.css', as: 'style' },
            { href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap', as: 'style' },
            { href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css', as: 'style' }
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

    addResourceHints() {
        const hints = [
            { rel: 'dns-prefetch', href: '//fonts.googleapis.com' },
            { rel: 'dns-prefetch', href: '//images.unsplash.com' },
            { rel: 'dns-prefetch', href: '//cdnjs.cloudflare.com' },
            { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
            { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' }
        ];
        
        hints.forEach(hint => {
            if (!document.querySelector(`link[href="${hint.href}"]`)) {
                const link = document.createElement('link');
                link.rel = hint.rel;
                link.href = hint.href;
                if (hint.crossorigin) {
                    link.crossOrigin = hint.crossorigin;
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
                link.href += link.href.includes('?') ? '&display=swap' : '?display=swap';
            }
        });
    }
}

// Initialize Google SEO Optimizer
document.addEventListener('DOMContentLoaded', function() {
    new GoogleSEOOptimizer();
});

// Export for use
if (typeof window !== 'undefined') {
    window.GoogleSEOOptimizer = GoogleSEOOptimizer;
}
