
// Breadcrumb Navigation Component
class BreadcrumbComponent {
    constructor() {
        this.init();
    }

    init() {
        this.addBreadcrumbStyles();
        this.generateBreadcrumbs();
    }

    addBreadcrumbStyles() {
        const style = document.createElement('style');
        style.textContent = `
            .breadcrumb-navigation {
                background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
                padding: 20px 0;
                margin-top: 75px;
                border-bottom: 1px solid #e2e8f0;
                position: relative;
            }

            .breadcrumb-navigation::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: linear-gradient(45deg, rgba(59, 130, 246, 0.03) 0%, rgba(16, 185, 129, 0.03) 100%);
                z-index: 1;
            }

            .breadcrumb-container {
                max-width: 1400px;
                margin: 0 auto;
                padding: 0 2rem;
                position: relative;
                z-index: 2;
            }

            .breadcrumb-list {
                display: flex;
                align-items: center;
                flex-wrap: wrap;
                gap: 8px;
                list-style: none;
                margin: 0;
                padding: 0;
            }

            .breadcrumb-item {
                display: flex;
                align-items: center;
                font-size: 14px;
                font-weight: 500;
                color: #64748b;
                transition: all 0.3s ease;
            }

            .breadcrumb-item:first-child .breadcrumb-link::before {
                content: '🏠';
                margin-right: 6px;
            }

            .breadcrumb-link {
                color: #3b82f6;
                text-decoration: none;
                padding: 8px 12px;
                border-radius: 8px;
                transition: all 0.3s ease;
                position: relative;
                display: flex;
                align-items: center;
                background: rgba(255, 255, 255, 0.6);
                border: 1px solid rgba(59, 130, 246, 0.2);
            }

            .breadcrumb-link:hover {
                background: rgba(59, 130, 246, 0.1);
                color: #1d4ed8;
                transform: translateY(-1px);
                box-shadow: 0 4px 12px rgba(59, 130, 246, 0.2);
            }

            .breadcrumb-current {
                color: #1e293b;
                font-weight: 600;
                padding: 8px 12px;
                background: white;
                border-radius: 8px;
                border: 1px solid #e2e8f0;
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
            }

            .breadcrumb-separator {
                color: #94a3b8;
                margin: 0 4px;
                font-size: 12px;
                transform: rotate(0deg);
                transition: transform 0.3s ease;
            }

            .breadcrumb-item:hover + .breadcrumb-separator {
                transform: rotate(15deg);
            }

            @media (max-width: 768px) {
                .breadcrumb-navigation {
                    padding: 15px 0;
                }

                .breadcrumb-container {
                    padding: 0 1rem;
                }

                .breadcrumb-item {
                    font-size: 13px;
                }

                .breadcrumb-link,
                .breadcrumb-current {
                    padding: 6px 10px;
                }
            }
        `;
        document.head.appendChild(style);
    }

    generateBreadcrumbs() {
        const path = window.location.pathname;
        const breadcrumbs = this.getBreadcrumbData(path);
        
        if (breadcrumbs.length > 1) {
            this.insertBreadcrumb(breadcrumbs);
            this.addBreadcrumbSchema(breadcrumbs);
        }
    }

    getBreadcrumbData(path) {
        const breadcrumbs = [{ name: "Home", url: "/", icon: "home" }];
        
        if (path.includes('about')) {
            breadcrumbs.push({ name: "About Us", url: path, current: true });
        } else if (path.includes('contact')) {
            breadcrumbs.push({ name: "Contact", url: path, current: true });
        } else if (path.includes('cities-pages')) {
            breadcrumbs.push({ name: "UK Cities", url: path, current: true });
        } else if (path.includes('how-it-works')) {
            breadcrumbs.push({ name: "How It Works", url: path, current: true });
        } else if (path.includes('case-studies')) {
            breadcrumbs.push({ name: "Case Studies", url: path, current: true });
        } else if (path.includes('website-development')) {
            breadcrumbs.push({ name: "Services", url: "/#services" });
            breadcrumbs.push({ name: "Website Development", url: path, current: true });
        } else if (path.includes('-seo.html')) {
            breadcrumbs.push({ name: "SEO Services", url: "/#services" });
            const serviceName = this.getServiceName(path);
            breadcrumbs.push({ name: serviceName, url: path, current: true });
        } else if (path.includes('best-') && path.includes('.html')) {
            breadcrumbs.push({ name: "Services", url: "/#services" });
            breadcrumbs.push({ name: "Rankings", url: "#" });
            const pageName = this.getPageTitle();
            breadcrumbs.push({ name: pageName, url: path, current: true });
        }
        
        return breadcrumbs;
    }

    getServiceName(path) {
        const filename = path.split('/').pop();
        const serviceName = filename.replace('-seo.html', '').replace('.html', '');
        return serviceName.split('-').map(word => 
            word.charAt(0).toUpperCase() + word.slice(1)
        ).join(' ') + ' SEO';
    }

    getPageTitle() {
        const title = document.title.split(' | ')[0];
        return title || 'Services';
    }

    insertBreadcrumb(breadcrumbs) {
        const breadcrumbHTML = `
            <nav class="breadcrumb-navigation" aria-label="Breadcrumb">
                <div class="breadcrumb-container">
                    <ol class="breadcrumb-list">
                        ${breadcrumbs.map((crumb, index) => `
                            <li class="breadcrumb-item">
                                ${crumb.current ? 
                                    `<span class="breadcrumb-current">${crumb.name}</span>` :
                                    `<a href="${crumb.url}" class="breadcrumb-link">${crumb.name}</a>`
                                }
                                ${index < breadcrumbs.length - 1 ? 
                                    '<span class="breadcrumb-separator">→</span>' : ''
                                }
                            </li>
                        `).join('')}
                    </ol>
                </div>
            </nav>
        `;

        const navbar = document.querySelector('.navbar');
        if (navbar && !document.querySelector('.breadcrumb-navigation')) {
            navbar.insertAdjacentHTML('afterend', breadcrumbHTML);
        }
    }

    addBreadcrumbSchema(breadcrumbs) {
        const schema = {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": breadcrumbs.map((crumb, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "name": crumb.name,
                "item": window.location.origin + crumb.url
            }))
        };

        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.textContent = JSON.stringify(schema);
        document.head.appendChild(script);
    }
}

// Initialize breadcrumbs when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    new BreadcrumbComponent();
});
