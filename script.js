// Navigation and Mobile Menu Functionality
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeMobileMenu();
    initializeScrollAnimations();
});

function initializeNavigation() {
    // Navigation scroll effect
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (navbar) {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href && href !== '#' && href.length > 1) {
                try {
                    const target = document.querySelector(href);
                    if (target) {
                        e.preventDefault();
                        const navHeight = document.querySelector('.navbar')?.offsetHeight || 0;
                        const targetPosition = target.offsetTop - navHeight - 20;

                        window.scrollTo({
                            top: targetPosition,
                            behavior: 'smooth'
                        });
                    }
                } catch (error) {
                    console.warn('Invalid selector:', href);
                }
            }
        });
    });
}

function initializeMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (!hamburger || !navMenu) return;

    // Create mobile overlay if it doesn't exist
    let overlay = document.querySelector('.mobile-nav-overlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.className = 'mobile-nav-overlay';
        overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            z-index: 1000;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
            backdrop-filter: blur(2px);
        `;
        document.body.appendChild(overlay);
    }

    function toggleMobileMenu(event) {
        if (event) {
            event.preventDefault();
            event.stopPropagation();
        }

        const isActive = navMenu.classList.contains('active');

        if (isActive) {
            closeMobileMenu();
        } else {
            openMobileMenu();
        }
    }

    function openMobileMenu() {
        hamburger.classList.add('active');
        navMenu.classList.add('active');
        overlay.style.opacity = '1';
        overlay.style.visibility = 'visible';
        document.body.style.overflow = 'hidden';
        document.body.classList.add('mobile-nav-open');
    }

    function closeMobileMenu() {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        overlay.style.opacity = '0';
        overlay.style.visibility = 'hidden';
        document.body.style.overflow = '';
        document.body.classList.remove('mobile-nav-open');

        // Close all dropdowns
        document.querySelectorAll('.dropdown').forEach(dropdown => {
            dropdown.classList.remove('active');
        });
    }

    // Event listeners
    hamburger.addEventListener('click', toggleMobileMenu);
    hamburger.addEventListener('touchstart', function(e) {
        e.preventDefault();
        toggleMobileMenu();
    });

    overlay.addEventListener('click', closeMobileMenu);

    // Handle dropdown toggles on mobile
    document.querySelectorAll('.dropdown > a').forEach(link => {
        link.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                e.stopPropagation();

                const dropdown = this.parentElement;
                const isActive = dropdown.classList.contains('active');

                // Close all other dropdowns
                document.querySelectorAll('.dropdown').forEach(function(otherDropdown) {
                    if (otherDropdown !== dropdown) {
                        otherDropdown.classList.remove('active');
                    }
                });

                // Toggle current dropdown
                dropdown.classList.toggle('active');
            }
        });
    });

    // Close menu when clicking on regular nav links
    document.querySelectorAll('.nav-menu > li > a:not(.dropdown > a)').forEach(function(link) {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                closeMobileMenu();
            }
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (navMenu.classList.contains('active') && 
            !navMenu.contains(e.target) && 
            !hamburger.contains(e.target)) {
            closeMobileMenu();
        }
    });

    // Handle window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            closeMobileMenu();
        }
    });
}

function initializeScrollAnimations() {
    // Add scroll animations for elements
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements that should animate on scroll
    document.querySelectorAll('.service-card, .industry-card, .about-visual').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// FAQ Toggle Functionality
function initializeFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');

        if (question && answer) {
            question.addEventListener('click', () => {
                const isActive = item.classList.contains('active');

                // Close all other FAQ items
                faqItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('active');
                    }
                });

                // Toggle current item
                item.classList.toggle('active');
            });
        }
    });
}

// Initialize FAQ when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeFAQ);

function initializeHeroAnimations() {
    // Add entrance animations to hero elements
    const heroElements = document.querySelectorAll('.hero-badge, .hero-content h1, .hero-subtitle, .feature-item, .hero-buttons');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 200);
            }
        });
    }, { threshold: 0.1 });

    heroElements.forEach(el => {
        if (el && !el.style.animation) {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
            observer.observe(el);
        }
    });
}

function initializeAnimations() {
    // Simple scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('fade-in-up');
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.service-card, .why-choose-item, .industry-card, .section-header');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        observer.observe(el);
    });
}

function initializeCounters() {
    const counters = document.querySelectorAll('.stat-number');

    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.dataset.animated) {
                animateCounter(entry.target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => {
        counterObserver.observe(counter);
    });
}

function animateCounter(element) {
    if (!element || element.dataset.animated) return;

    const targetText = element.textContent;
    const target = parseInt(targetText.replace(/[^\d]/g, ''));
    if (isNaN(target)) return;

    element.dataset.animated = 'true';
    let current = 0;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    const stepTime = duration / steps;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }

        const value = Math.floor(current);
        if (targetText.includes('%')) {
            element.textContent = value + '%';
        } else if (targetText.includes('+')) {
            element.textContent = value + '+';
        } else {
            element.textContent = value;
        }
    }, stepTime);
}

// Form handling
function handleContactForm(event) {
    event.preventDefault();

    const submitBtn = event.target.querySelector('button[type="submit"]');
    if (submitBtn) {
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
        submitBtn.style.background = '#00cc66';

        setTimeout(() => {
            event.target.reset();
            submitBtn.innerHTML = originalText;
            submitBtn.style.background = '';
            alert('Thank you for your message! We will contact you within 24 hours.');
        }, 2000);
    }
}

// Add smooth page transitions
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a:not([href^="#"]):not([href^="mailto"]):not([href^="tel"])');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.hostname === window.location.hostname && !this.hasAttribute('download')) {
                document.body.style.opacity = '0.95';
                document.body.style.transform = 'scale(0.98)';

                setTimeout(() => {
                    window.location.href = this.href;
                }, 150);

                e.preventDefault();
            }
        });
    });
});

// Enhanced number counter for all stat elements
function initializeNumberCounters() {
    const counters = document.querySelectorAll('.stat-number, .live-stat-card .stat-number, .coverage-stat h3, .summary-stat h4');

    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.dataset.animated) {
                // Add a small delay for visual effect
                setTimeout(() => {
                    animateCounter(entry.target);
                }, 200);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => {
        counterObserver.observe(counter);
    });
}

function initializeImageLoading() {
    // Lazy loading for images
    const images = document.querySelectorAll('img[loading="lazy"]');

    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.classList.add('loaded');
                    imageObserver.unobserve(img);
                }
            });
        });

        images.forEach(img => {
            imageObserver.observe(img);
        });
    }

    // Add loading animation to images
    const allImages = document.querySelectorAll('img');
    allImages.forEach(img => {
        img.addEventListener('load', () => {
            img.classList.add('image-loaded');
        });
    });
}

function initializeDynamicComponents() {
    // Initialize Live Stats if present
    if (document.querySelector('.live-stats-wrapper')) {
        initializeLiveStats();
    }

    // Initialize Currently Working if present
    if (document.querySelector('.currently-working-wrapper')) {
        initializeCurrentlyWorking();
    }

    // Initialize Performance Graph if present
    if (document.querySelector('.performance-graph-wrapper')) {
        initializePerformanceGraph();
    }

    // Initialize FAQ if present
    if (document.querySelector('.faq-component')) {
        initializeFAQ();
    }
}

function initializeLiveStats() {
    const statCards = document.querySelectorAll('.live-stat-card');

    setInterval(() => {
        statCards.forEach(card => {
            const statNumber = card.querySelector('.stat-number');
            if (statNumber) {
                const currentValue = parseInt(statNumber.textContent);
                const variation = Math.floor(Math.random() * 10) - 5;
                const newValue = Math.max(0, currentValue + variation);

                statNumber.textContent = newValue;
                card.classList.add('updated');

                setTimeout(() => {
                    card.classList.remove('updated');
                }, 1000);
            }
        });
    }, 5000);
}

function initializeCurrentlyWorking() {
    const workingCards = document.querySelectorAll('.working-card');
    let currentIndex = 0;

    function showNextCard() {
        workingCards.forEach((card, index) => {
            card.classList.toggle('active', index === currentIndex);
        });

        currentIndex = (currentIndex + 1) % workingCards.length;
    }

    if (workingCards.length > 0) {
        showNextCard();
        setInterval(showNextCard, 4000);
    }
}

function initializePerformanceGraph() {
    const graphBars = document.querySelectorAll('.graph-bar');

    setTimeout(() => {
        graphBars.forEach(bar => {
            const height = Math.random() * 200 + 50;
            bar.style.height = height + 'px';
        });
    }, 500);
}

function initializeFAQComponent() {
    if (typeof FAQComponent !== 'undefined') {
        let faqContainer = document.getElementById('faq-section');

        // If FAQ section doesn't exist, create it
        if (!faqContainer) {
            faqContainer = document.createElement('div');
            faqContainer.id = 'faq-section';

            // Insert before footer
            const footer = document.querySelector('.footer');
            if (footer && footer.parentNode) {
                footer.parentNode.insertBefore(faqContainer, footer);
            } else {
                // If no footer, append to body
                document.body.appendChild(faqContainer);
            }
        }

        if (faqContainer) {
            try {
                const faq = new FAQComponent();
                // Determine category based on page
                let category = 'general';
                const pathname = window.location.pathname.toLowerCase();

                if (pathname.includes('construction') || 
                    pathname.includes('roofing') || 
                    pathname.includes('plumber') ||
                    pathname.includes('architect')) {
                    category = 'industries';
                } else if (pathname.includes('cities') || 
                          pathname.includes('manchester') || 
                          pathname.includes('birmingham') ||
                          pathname.includes('london')) {
                    category = 'local';
                } else if (pathname.includes('technical') || 
                          pathname.includes('development') ||
                          pathname.includes('website')) {
                    category = 'technical';
                }

                faq.init(category);
            } catch (error) {
                console.error('Error initializing FAQ component:', error);
            }
        }
    }
}

function handleFormSubmit(event) {
    event.preventDefault();

    // Get form data
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    // Show success message
    const submitBtn = event.target.querySelector('.form-submit-btn');
    const originalText = submitBtn.innerHTML;

    submitBtn.innerHTML = '<i class="fas fa-check"></i> <span>Message Sent Successfully!</span>';
    submitBtn.style.background = 'linear-gradient(135deg, #10b981, #059669)';

    // Reset form after 3 seconds
    setTimeout(() => {
        event.target.reset();
        submitBtn.innerHTML = originalText;
        submitBtn.style.background = 'linear-gradient(135deg, #10b981, #059669)';

        // Show thank you alert
        alert('Thank you for your interest! Our team will contact you within 24 hours with your free SEO audit and strategy recommendations.');
    }, 2000);
}

// Dynamic page creation utilities
function createDynamicSection(type, content) {
    const section = document.createElement('section');
    section.className = `${type}-section`;
    section.innerHTML = content;
    return section;
}

function createDynamicGrid(items, className) {
    const grid = document.createElement('div');
    grid.className = `${className}-grid`;

    items.forEach(item => {
        const gridItem = document.createElement('div');
        gridItem.className = `${className}-item`;
        gridItem.innerHTML = item;
        grid.appendChild(gridItem);
    });

    return grid;
}

// Enhanced scroll animations and initialization
function addCleanStyles() {
    // Styles are now handled in CSS file
    document.body.classList.add('styles-loaded');
}

// Initialize smooth transitions
function initializeSmoothTransitions() {
    // Add smooth hover effects to all interactive elements
    const interactiveElements = document.querySelectorAll('button, a, .card, .service-card, .industry-card');

    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
        });
    });

    // Add smooth page transitions
    const links = document.querySelectorAll('a:not([href^="#"]):not([href^="mailto"]):not([href^="tel"])');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.hostname === window.location.hostname) {
                // Add page transition effect
                document.body.style.opacity = '0.95';
                document.body.style.transform = 'scale(0.98)';

                setTimeout(() => {
                    window.location.href = this.href;
                }, 200);

                e.preventDefault();
            }
        });
    });

    // Add smooth form interactions
    const formElements = document.querySelectorAll('input, textarea, select');
    formElements.forEach(element => {
        element.addEventListener('focus', function() {
            this.style.transform = 'scale(1.02)';
            this.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.1)';
        });

        element.addEventListener('blur', function() {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = 'none';
        });
    });
}

// Initialize Reviews Component
function initializeReviews() {
    if (typeof ReviewsComponent !== 'undefined') {
        const reviewsSection = document.getElementById('reviews-section');
        if (reviewsSection) {
            const reviews = new ReviewsComponent();
            reviews.init();
        }
    }
}

// SEO Enhancements
function initializeSEOEnhancements() {
    // Add structured data for pages
    addPageStructuredData();

    // Initialize FAQ functionality
    initializeFAQSEO();

    // Add schema markup for services
    addServiceSchema();
}

function addPageStructuredData() {
    const pageType = document.body.getAttribute('data-page-type') || 'WebPage';
    const pageTitle = document.title;
    const pageDescription = document.querySelector('meta[name="description"]')?.content || '';

    const structuredData = {
        "@context": "http://schema.org",
        "@type": pageType,
        "name": pageTitle,
        "description": pageDescription,
        "url": window.location.href,
        "publisher": {
            "@type": "Organization",
            "name": "OutSourceSU",
            "url": "https://outsourcesu.com",
            "logo": "https://outsourcesu.com/logo.png",
            "telephone": "07411575188",
            "email": "contact@outsourcesu.com",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "20-22 Wenlock Road",
                "addressLocality": "London",
                "postalCode": "N1 7GU",
                "addressCountry": "GB"
            }
        }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);
}

function initializeFAQSEO() {
    // This function is now handled by the FAQComponent class
    // Remove to avoid conflicts
}

function addServiceSchema() {
    const servicePage = document.querySelector('[data-service]');
    if (servicePage) {
        const serviceName = servicePage.getAttribute('data-service');
        const serviceSchema = {
            "@context": "http://schema.org",
            "@type": "Service",
            "name": serviceName,
            "description": document.querySelector('meta[name="description"]')?.content || '',
            "provider": {
                "@type": "Organization",
                "name": "OutSourceSU",
                "url": "https://outsourcesu.com",
                "telephone": "07411575188"
            },
            "areaServed": "United Kingdom",
            "serviceType": "SEO Services"
        };

        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.textContent = JSON.stringify(serviceSchema);
        document.head.appendChild(script);
    }
}

// Global Navigation Template
function getGlobalNavigation() {
    return `
        <nav class="navbar">
            <div class="nav-container">
                <div class="nav-logo">
                    <h2>OutSourceSU</h2>
                </div>
                <ul class="nav-menu">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="about.html">About</a></li>
                    <li class="dropdown">
                        <a href="index.html#services">SEO Services ↓</a>
                        <ul class="dropdown-menu">
                            <li><h4>Construction & Trade</h4></li>
                            <li><a href="construction-seo.html">Construction SEO</a></li>
                            <li><a href="architects-seo.html">Architects SEO</a></li>
                            <li><a href="plumbers-seo.html">Plumbers SEO</a></li>
                            <li><hr></li>
                            <li><h4>Roofing SEO Specialists</h4></li>
                            <li><a href="roofer-seo.html">Roofer SEO</a></li>
                            <li><a href="roof-repair-seo.html">Roof Repair SEO</a></li>
                            <li><a href="roof-replacement-seo.html">Roof Replacement SEO</a></li>
                            <li><a href="commercial-roofing-seo.html">Commercial Roofing SEO</a></li>
                            <li><a href="best-roofing-company.html">Best Roofing Company SEO</a></li>
                            <li><a href="best-roofing-companies-seo.html">Best Roofing Companies SEO</a></li>
                            <li><hr></li>
                            <li><h4>Roofing Company Rankings</h4></li>
                            <li><a href="best-roofing-companies-london.html">Best Roofing Companies London</a></li>
                            <li><hr></li>
                            <li><h4>Professional Services</h4></li>
                            <li><a href="law-firm-seo.html">Law Firm SEO</a></li>
                            <li><a href="dentists-seo.html">Dentists SEO</a></li>
                            <li><a href="financial-seo.html">Financial SEO</a></li>
                            <li><a href="accountants-seo.html">Accountants SEO</a></li>
                            <li><hr></li>
                            <li><h4>Real Estate & Property</h4></li>
                            <li><a href="real-estate-seo.html">Real Estate SEO</a></li>
                            <li><hr></li>
                            <li><h4>Agency Services</h4></li>
                            <li><a href="white-label-seo.html">White Label SEO</a></li>
                            <li><a href="professional-seo-services-uk.html">Professional SEO Services UK</a></li>
                            <li><a href="top-seo-agency-uk.html">Top SEO Agency UK</a></li>
                            <li><a href="best-seo-agency-manchester.html">Best SEO Agency Manchester</a></li>
                            <li><a href="seo-agency-birmingham.html">SEO Agency Birmingham</a></li>
                        </ul>
                    </li>
                    <li><a href="website-development.html">Web Development</a></li>
                    <li><a href="cities-pages.html">UK Cities</a></li>
                    <li><a href="index.html#why-choose-us">Why Choose Us</a></li>
                    <li><a href="contact.html">Contact</a></li>
                </ul>
                <div class="hamburger">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </nav>
    `;
}

// Initialize global navigation on all pages
function initializeGlobalNavigation() {
    const existingNav = document.querySelector('.navbar');
    if (existingNav && !existingNav.classList.contains('global-nav-initialized')) {
        existingNav.outerHTML = getGlobalNavigation();
        existingNav.classList.add('global-nav-initialized');

        // Reinitialize navigation functionality
        initializeNavigation();
    }
}

// Add smooth transitions to all elements
function addSmoothTransitions() {
    const style = document.createElement('style');
    style.textContent = `
        * {
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
        }

        .service-card, .why-choose-item, .value-card, .team-member, .industry-card {
            transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), 
                       box-shadow 0.4s cubic-bezier(0.4, 0, 0.2, 1),
                       background 0.3s ease !important;
        }

        .service-card:hover, .why-choose-item:hover, .value-card:hover, 
        .team-member:hover, .industry-card:hover {
            transform: translateY(-8px) scale(1.02);
            box-shadow: 0 20px 40px rgba(0,0,0,0.15);
        }

        .faq-question {
            transition: all 0.3s ease !important;
        }

        .faq-answer {
            transition: max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1) !important;
        }

        .btn-primary, .btn-secondary {
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
        }

        .nav-menu a {
            transition: color 0.3s ease !important;
        }
    `;
    document.head.appendChild(style);
}

// Initialize breadcrumbs when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    if (typeof BreadcrumbComponent !== 'undefined') {
        new BreadcrumbComponent();
    }
});

// Enhanced Script with Better Mobile Performance and Animations

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeAnimations();
    initializeScrollEffects();
    initializeLazyLoading();
    initializeFormValidation();
    initializePerformanceOptimizations();
    makeLogoClickable();
    logInitialization();
});

function makeLogoClickable() {
    const logoLinks = document.querySelectorAll('.nav-logo a');
    logoLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Ensure the link works properly
            if (this.getAttribute('href') === 'index.html' || this.getAttribute('href') === '/') {
                window.location.href = 'index.html';
            }
        });
    });
}

function logInitialization() {
    console.log('✅ OutSourceSU Enhanced Script Loaded Successfully');
    console.log('🚀 All components initialized');
}
// Enhanced Script with Better Mobile Performance and Animations

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeAnimations();
    initializeScrollEffects();
    initializeLazyLoading();
    initializeFormValidation();
    initializePerformanceOptimizations();
    makeLogoClickable();
    logInitialization();
});

function makeLogoClickable() {
    const logoLinks = document.querySelectorAll('.nav-logo a');
    logoLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Ensure the link works properly
            if (this.getAttribute('href') === 'index.html' || this.getAttribute('href') === '/') {
                window.location.href = 'index.html';
            }
        });
    });
}

function logInitialization() {
    console.log('✅ OutSourceSU Enhanced Script Loaded Successfully');
    console.log('🚀 All components initialized');
}