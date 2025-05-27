
// Sitemap Generator for OutSourceSU
class SitemapGenerator {
    constructor() {
        this.domain = 'https://outsourcesu.com';
        this.pages = this.getAllPages();
    }

    getAllPages() {
        return [
            // Main pages
            { url: '/', priority: '1.0', changefreq: 'weekly' },
            { url: '/about.html', priority: '0.9', changefreq: 'monthly' },
            { url: '/contact.html', priority: '0.9', changefreq: 'monthly' },
            { url: '/cities-pages.html', priority: '0.9', changefreq: 'weekly' },
            { url: '/website-development.html', priority: '0.8', changefreq: 'monthly' },
            { url: '/how-it-works.html', priority: '0.8', changefreq: 'monthly' },
            { url: '/case-studies.html', priority: '0.8', changefreq: 'monthly' },

            // Construction & Trade SEO Services
            { url: '/construction-seo.html', priority: '0.8', changefreq: 'monthly' },
            { url: '/architects-seo.html', priority: '0.7', changefreq: 'monthly' },
            { url: '/plumbers-seo.html', priority: '0.7', changefreq: 'monthly' },

            // Roofing SEO Services
            { url: '/roofer-seo.html', priority: '0.8', changefreq: 'monthly' },
            { url: '/roof-repair-seo.html', priority: '0.7', changefreq: 'monthly' },
            { url: '/roof-replacement-seo.html', priority: '0.7', changefreq: 'monthly' },
            { url: '/commercial-roofing-seo.html', priority: '0.7', changefreq: 'monthly' },
            { url: '/best-roofing-company.html', priority: '0.7', changefreq: 'monthly' },
            { url: '/best-roofing-companies-seo.html', priority: '0.7', changefreq: 'monthly' },
            { url: '/best-roofing-companies-london.html', priority: '0.7', changefreq: 'monthly' },

            // Professional Services SEO
            { url: '/law-firm-seo.html', priority: '0.8', changefreq: 'monthly' },
            { url: '/dentists-seo.html', priority: '0.8', changefreq: 'monthly' },
            { url: '/healthcare-seo.html', priority: '0.7', changefreq: 'monthly' },
            { url: '/financial-seo.html', priority: '0.7', changefreq: 'monthly' },
            { url: '/accountants-seo.html', priority: '0.7', changefreq: 'monthly' },
            { url: '/real-estate-seo.html', priority: '0.8', changefreq: 'monthly' },

            // Agency & Premium Services
            { url: '/white-label-seo.html', priority: '0.8', changefreq: 'monthly' },
            { url: '/professional-seo-services-uk.html', priority: '0.8', changefreq: 'monthly' },
            { url: '/top-seo-agency-uk.html', priority: '0.8', changefreq: 'monthly' },
            { url: '/best-seo-agency-manchester.html', priority: '0.7', changefreq: 'monthly' },
            { url: '/seo-agency-birmingham.html', priority: '0.7', changefreq: 'monthly' },

            // Legal Pages
            { url: '/privacy-policy.html', priority: '0.3', changefreq: 'yearly' },
            { url: '/terms-conditions.html', priority: '0.3', changefreq: 'yearly' }
        ];
    }

    generateXMLSitemap() {
        const today = new Date().toISOString().split('T')[0];
        
        let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">`;

        this.pages.forEach(page => {
            xml += `
    <url>
        <loc>${this.domain}${page.url}</loc>
        <lastmod>${today}</lastmod>
        <changefreq>${page.changefreq}</changefreq>
        <priority>${page.priority}</priority>`;
        
        // Add image for homepage
        if (page.url === '/') {
            xml += `
        <image:image>
            <image:loc>${this.domain}/attached_assets/Screenshot_52-removebg-preview.png</image:loc>
            <image:title>OutSourceSU - UK's Leading SEO Agency</image:title>
            <image:caption>Professional SEO services across the UK</image:caption>
        </image:image>`;
        }
        
        xml += `
    </url>`;
        });

        xml += `
</urlset>`;

        return xml;
    }
}

// Auto-update sitemap
document.addEventListener('DOMContentLoaded', function() {
    const generator = new SitemapGenerator();
    console.log('Sitemap generated:', generator.generateXMLSitemap());
});
