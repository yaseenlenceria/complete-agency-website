
// Dynamic Image Configuration for Service Pages
const serviceImages = {
    'construction': 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    'roofing': 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    'plumbing': 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    'architecture': 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    'legal': 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    'dental': 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80',
    'financial': 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    'realestate': 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2073&q=80'
};

// Function to update images based on page type
function updateServiceImages() {
    const pageType = document.body.dataset.serviceType;
    if (pageType && serviceImages[pageType]) {
        const heroImage = document.querySelector('.hero-image img');
        if (heroImage) {
            heroImage.src = serviceImages[pageType];
            heroImage.alt = `${pageType.charAt(0).toUpperCase() + pageType.slice(1)} SEO Services UK`;
        }
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', updateServiceImages);
