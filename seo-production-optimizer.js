
// Production SEO Optimizer for OutSourceSU
class ProductionSEOOptimizer {
    constructor() {
        this.domain = 'https://outsourcesu.com';
        this.init();
    }

    init() {
        this.addGoogleAnalytics();
        this.addGoogleSearchConsole();
        this.optimizeForProduction();
        this.addCriticalSEOTags();
        this.setupPerformanceMonitoring();
    }

    addGoogleAnalytics() {
        // Add Google Analytics 4
        if (!document.querySelector('script[src*="gtag"]')) {
            const gtagScript = document.createElement('script');
            gtagScript.async = true;
            gtagScript.src = 'https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID';
            document.head.appendChild(gtagScript);

            const gtagConfig = document.createElement('script');
            gtagConfig.innerHTML = `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'GA_MEASUREMENT_ID', {
                    page_title: document.title,
                    page_location: window.location.href
                });
            `;
            document.head.appendChild(gtagConfig);
        }
    }

    addGoogleSearchConsole() {
        if (!document.querySelector('meta[name="google-site-verification"]')) {
            const verification = document.createElement('meta');
            verification.name = 'google-site-verification';
            verification.content = 'ornn-7cs4m1xk0nv5pm_0t7_uihoek2oopxudyrik4q';
            document.head.appendChild(verification);
        }
    }

    optimizeForProduction() {
        // Add critical performance optimizations
        this.addPreloadTags();
        this.optimizeImages();
        this.addSecurityHeaders();
    }

    addPreloadTags() {
        const criticalResources = [
            { href: '/style.css', as: 'style' },
            { href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap', as: 'style' },
            { href: '/attached_assets/Screenshot_52-removebg-preview.png', as: 'image' }
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

    optimizeImages() {
        const images = document.querySelectorAll('img');
        images.forEach(img => {
            // Add loading attribute for non-critical images
            if (!img.hasAttribute('loading') && !img.closest('.hero')) {
                img.setAttribute('loading', 'lazy');
            }

            // Ensure proper alt text
            if (!img.hasAttribute('alt') || img.alt === '') {
                const filename = img.src.substring(img.src.lastIndexOf('/') + 1);
                img.alt = `OutSourceSU - ${filename.replace(/\.[^/.]+$/, "").replace(/[-_]/g, ' ')}`;
            }

            // Add width and height for CLS optimization
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

    addCriticalSEOTags() {
        // Ensure all pages have proper meta tags
        const requiredTags = [
            { name: 'robots', content: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1' },
            { name: 'author', content: 'OutSourceSU' },
            { name: 'generator', content: 'OutSourceSU SEO Platform' },
            { name: 'geo.region', content: 'GB' },
            { name: 'geo.placename', content: 'United Kingdom' },
            { name: 'geo.position', content: '51.5074;-0.1278' },
            { name: 'ICBM', content: '51.5074, -0.1278' }
        ];

        requiredTags.forEach(tag => {
            if (!document.querySelector(`meta[name="${tag.name}"]`)) {
                const meta = document.createElement('meta');
                meta.name = tag.name;
                meta.content = tag.content;
                document.head.appendChild(meta);
            }
        });
    }

    addSecurityHeaders() {
        // Add security-related meta tags
        const securityTags = [
            { httpEquiv: 'X-Content-Type-Options', content: 'nosniff' },
            { httpEquiv: 'X-Frame-Options', content: 'DENY' },
            { httpEquiv: 'X-XSS-Protection', content: '1; mode=block' }
        ];

        securityTags.forEach(tag => {
            if (!document.querySelector(`meta[http-equiv="${tag.httpEquiv}"]`)) {
                const meta = document.createElement('meta');
                meta.httpEquiv = tag.httpEquiv;
                meta.content = tag.content;
                document.head.appendChild(meta);
            }
        });
    }

    setupPerformanceMonitoring() {
        // Monitor Core Web Vitals
        if ('web-vital' in window) {
            import('https://unpkg.com/web-vitals@2/dist/web-vitals.js').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
                getCLS(console.log);
                getFID(console.log);
                getFCP(console.log);
                getLCP(console.log);
                getTTFB(console.log);
            });
        }
    }
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', function() {
    new ProductionSEOOptimizer();
});

// Export for use
if (typeof window !== 'undefined') {
    window.ProductionSEOOptimizer = ProductionSEOOptimizer;
}
