
// Global Image Configuration for OutSourceSU Website
const imageConfig = {
    // Hero section images
    hero: {
        main: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
        analytics: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        team: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
    },
    
    // Service page images
    services: {
        construction: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        roofing: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        legal: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        medical: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        realEstate: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        finance: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    
    // About page images
    about: {
        story: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        values: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        trust: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        results: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        innovation: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        partnership: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    
    // Team member images
    team: {
        ceo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        cto: 'https://images.unsplash.com/photo-1494790108755-2616b612b665?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        headSeo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    
    // City and location images
    cities: {
        london: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        manchester: 'https://images.unsplash.com/photo-1559389581-f6db5e62d5da?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        birmingham: 'https://images.unsplash.com/photo-1571813822429-0b76e1d67dc2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        edinburgh: 'https://images.unsplash.com/photo-1523395384444-14fbbeb143da?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        cardiff: 'https://images.unsplash.com/photo-1578590055300-e0e2b6a4c707?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    
    // Background and decorative images
    backgrounds: {
        office: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        meeting: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        workspace: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    }
};

// Function to get image URL by category and type
function getImageUrl(category, type) {
    return imageConfig[category] && imageConfig[category][type] 
        ? imageConfig[category][type] 
        : 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
}

// Function to preload critical images
function preloadImages() {
    const criticalImages = [
        imageConfig.hero.main,
        imageConfig.hero.analytics,
        imageConfig.about.story,
        imageConfig.about.values
    ];
    
    criticalImages.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

// Initialize image preloading when DOM is loaded
document.addEventListener('DOMContentLoaded', preloadImages);

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = imageConfig;
}
