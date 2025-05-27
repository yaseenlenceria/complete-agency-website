
// Script to update all pages with consistent navigation
document.addEventListener('DOMContentLoaded', function() {
    // Standard navigation HTML that matches index.html
    const standardNavigation = `
    <nav class="navbar">
        <div class="nav-container">
            <div class="nav-logo">
                <a href="index.html">
                    <img src="attached_assets/Screenshot_52-removebg-preview.png" alt="OutSourceSU Logo" loading="lazy">
                </a>
            </div>
            <ul class="nav-menu">
                <li><a href="index.html">Home</a></li>
                <li><a href="about.html">About</a></li>
                <li class="dropdown">
                    <a href="#services">Services <i class="fas fa-chevron-down"></i></a>
                    <ul class="dropdown-menu">
                        <li><h4 style="color: var(--primary-color); padding: 0.5rem 1.5rem; margin: 0; font-size: 0.9rem;">Construction & Trade</h4></li>
                        <li><a href="construction-seo.html"><i class="fas fa-building"></i> Construction SEO</a></li>
                        <li><a href="architects-seo.html"><i class="fas fa-drafting-compass"></i> Architects SEO</a></li>
                        <li><a href="plumbers-seo.html"><i class="fas fa-wrench"></i> Plumbers SEO</a></li>
                        <li><hr style="margin: 0.5rem 1rem; border: none; border-top: 1px solid var(--border-color);"></li>
                        <li><h4 style="color: var(--primary-color); padding: 0.5rem 1.5rem; margin: 0; font-size: 0.9rem;">Roofing SEO Specialists</h4></li>
                        <li><a href="roofer-seo.html"><i class="fas fa-home"></i> Roofer SEO</a></li>
                        <li><a href="roof-repair-seo.html"><i class="fas fa-tools"></i> Roof Repair SEO</a></li>
                        <li><a href="roof-replacement-seo.html"><i class="fas fa-hammer"></i> Roof Replacement SEO</a></li>
                        <li><a href="commercial-roofing-seo.html"><i class="fas fa-industry"></i> Commercial Roofing SEO</a></li>
                        <li><a href="best-roofing-company.html"><i class="fas fa-award"></i> Best Roofing Company SEO</a></li>
                        <li><a href="best-roofing-companies-seo.html"><i class="fas fa-trophy"></i> Best Roofing Companies SEO</a></li>
                        <li><hr style="margin: 0.5rem 1rem; border: none; border-top: 1px solid var(--border-color);"></li>
                        <li><h4 style="color: var(--primary-color); padding: 0.5rem 1.5rem; margin: 0; font-size: 0.9rem;">Roofing Company Rankings</h4></li>
                        <li><a href="best-roofing-companies-london.html"><i class="fas fa-map-marker-alt"></i> Best Roofing Companies London</a></li>
                        <li><hr style="margin: 0.5rem 1rem; border: none; border-top: 1px solid var(--border-color);"></li>
                        <li><h4 style="color: var(--primary-color); padding: 0.5rem 1.5rem; margin: 0; font-size: 0.9rem;">Professional Services</h4></li>
                        <li><a href="law-firm-seo.html"><i class="fas fa-balance-scale"></i> Law Firm SEO</a></li>
                        <li><a href="dentists-seo.html"><i class="fas fa-tooth"></i> Dentists SEO</a></li>
                        <li><a href="financial-seo.html"><i class="fas fa-chart-line"></i> Financial SEO</a></li>
                        <li><a href="accountants-seo.html"><i class="fas fa-calculator"></i> Accountants SEO</a></li>
                        <li><hr style="margin: 0.5rem 1rem; border: none; border-top: 1px solid var(--border-color);"></li>
                        <li><h4 style="color: var(--primary-color); padding: 0.5rem 1.5rem; margin: 0; font-size: 0.9rem;">Real Estate & Property</h4></li>
                        <li><a href="real-estate-seo.html"><i class="fas fa-key"></i> Real Estate SEO</a></li>
                        <li><hr style="margin: 0.5rem 1rem; border: none; border-top: 1px solid var(--border-color);"></li>
                        <li><h4 style="color: var(--primary-color); padding: 0.5rem 1.5rem; margin: 0; font-size: 0.9rem;">Agency Services</h4></li>
                        <li><a href="white-label-seo.html"><i class="fas fa-handshake"></i> White Label SEO</a></li>
                        <li><a href="professional-seo-services-uk.html"><i class="fas fa-star"></i> Professional SEO Services UK</a></li>
                        <li><a href="top-seo-agency-uk.html"><i class="fas fa-crown"></i> Top SEO Agency UK</a></li>
                        <li><a href="best-seo-agency-manchester.html"><i class="fas fa-map-marker-alt"></i> Best SEO Agency Manchester</a></li>
                        <li><a href="seo-agency-birmingham.html"><i class="fas fa-map-marker-alt"></i> SEO Agency Birmingham</a></li>
                    </ul>
                </li>
                <li><a href="website-development.html">Web Development</a></li>
                <li><a href="cities-pages.html">UK Cities</a></li>
                <li><a href="contact.html" class="nav-cta">Get Started</a></li>
            </ul>
            <div class="hamburger">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    </nav>`;

    // Update navigation if current navbar doesn't match standard
    const currentNav = document.querySelector('.navbar');
    if (currentNav) {
        const currentLogo = currentNav.querySelector('.nav-logo img');
        if (!currentLogo || !currentLogo.src.includes('Screenshot_52-removebg-preview.png')) {
            currentNav.outerHTML = standardNavigation;
            
            // Reinitialize navigation functionality
            if (typeof initializeNavigation === 'function') {
                initializeNavigation();
            }
            if (typeof initializeMobileMenu === 'function') {
                initializeMobileMenu();
            }
        }
    }
});
