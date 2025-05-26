
// Enhanced Images Configuration for OutSourceSU Website
class EnhancedImagesConfig {
    constructor() {
        this.pageImages = {
            construction: {
                hero: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
                sections: [
                    'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
                    'https://images.unsplash.com/photo-1590725175657-58e4b41c873c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
                    'https://images.unsplash.com/photo-1541976590-713941681591?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
                ],
                alt: 'Construction SEO Services UK'
            },
            roofing: {
                hero: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
                sections: [
                    'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
                    'https://images.unsplash.com/photo-1628624747186-a941c476b7ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
                ],
                alt: 'Professional Roofing SEO Services'
            },
            legal: {
                hero: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
                sections: [
                    'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
                    'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
                ],
                alt: 'Law Firm SEO Services UK'
            },
            healthcare: {
                hero: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
                sections: [
                    'https://images.unsplash.com/photo-1584982751601-97dcc096659c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
                    'https://images.unsplash.com/photo-1612277795421-9bc7706a4a34?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
                ],
                alt: 'Healthcare SEO Services UK'
            },
            realestate: {
                hero: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
                sections: [
                    'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
                    'https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
                ],
                alt: 'Real Estate SEO Services UK'
            },
            financial: {
                hero: 'https://images.unsplash.com/photo-1554224154-22dec7ec8818?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
                sections: [
                    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
                    'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
                ],
                alt: 'Financial SEO Services UK'
            },
            dental: {
                hero: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
                sections: [
                    'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
                    'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
                ],
                alt: 'Dental SEO Services UK'
            }
        };

        this.genericImages = {
            teamwork: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
            analytics: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
            growth: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
            success: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
            office: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
        };
    }

    addImageSections() {
        const currentPage = this.getCurrentPageType();
        if (currentPage && this.pageImages[currentPage]) {
            this.insertSectionImages(this.pageImages[currentPage]);
        }
        this.optimizeAllImages();
    }

    getCurrentPageType() {
        const path = window.location.pathname;
        if (path.includes('construction')) return 'construction';
        if (path.includes('roof') || path.includes('roofer')) return 'roofing';
        if (path.includes('law') || path.includes('legal')) return 'legal';
        if (path.includes('healthcare') || path.includes('dental') || path.includes('dentist')) return 'healthcare';
        if (path.includes('real-estate')) return 'realestate';
        if (path.includes('financial') || path.includes('accountant')) return 'financial';
        return null;
    }

    insertSectionImages(images) {
        const sections = document.querySelectorAll('.content-section, .why-seo, .benefits-grid');
        sections.forEach((section, index) => {
            if (images.sections[index] && !section.querySelector('img')) {
                const imageContainer = document.createElement('div');
                imageContainer.className = 'section-image-container';
                imageContainer.innerHTML = `
                    <img src="${images.sections[index]}" 
                         alt="${images.alt} - Section ${index + 1}" 
                         loading="lazy"
                         class="section-image">
                `;
                section.insertBefore(imageContainer, section.firstChild);
            }
        });
    }

    optimizeAllImages() {
        const images = document.querySelectorAll('img');
        images.forEach(img => {
            // Add loading attribute
            if (!img.hasAttribute('loading')) {
                img.setAttribute('loading', 'lazy');
            }
            
            // Improve alt text if missing
            if (!img.alt || img.alt === '') {
                const src = img.src;
                const filename = src.substring(src.lastIndexOf('/') + 1);
                img.alt = `OutSourceSU - UK SEO Services - ${filename.replace(/\.[^/.]+$/, "").replace(/[-_]/g, ' ')}`;
            }
            
            // Add structured data
            img.setAttribute('itemprop', 'image');
            
            // Add error handling
            img.onerror = function() {
                this.src = 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
                this.alt = 'OutSourceSU - UK SEO Services';
            };
        });
    }

    addImageStyles() {
        if (!document.querySelector('#enhanced-image-styles')) {
            const style = document.createElement('style');
            style.id = 'enhanced-image-styles';
            style.textContent = `
                .section-image-container {
                    margin-bottom: 30px;
                    text-align: center;
                }
                
                .section-image {
                    width: 100%;
                    max-width: 600px;
                    height: 300px;
                    object-fit: cover;
                    border-radius: 16px;
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
                    transition: all 0.3s ease;
                }
                
                .section-image:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
                }
                
                @media (max-width: 768px) {
                    .section-image {
                        height: 200px;
                    }
                }
            `;
            document.head.appendChild(style);
        }
    }

    init() {
        this.addImageStyles();
        this.addImageSections();
    }
}

// Initialize enhanced images
document.addEventListener('DOMContentLoaded', function() {
    const enhancedImages = new EnhancedImagesConfig();
    enhancedImages.init();
});

// Export for use
if (typeof window !== 'undefined') {
    window.EnhancedImagesConfig = EnhancedImagesConfig;
}
