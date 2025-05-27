
// Universal logo updater for all pages
document.addEventListener('DOMContentLoaded', function() {
    const logoImages = document.querySelectorAll('.nav-logo img');
    logoImages.forEach(img => {
        if (img.src.includes('YourLogoHere') || img.src.includes('imgur')) {
            img.src = 'attached_assets/Screenshot_52.jpg';
            img.alt = 'OutSource SU - UK\'s Leading SEO Agency';
        }
    });
});
