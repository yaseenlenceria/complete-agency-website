// Load global components script
const globalComponentsScript = document.createElement('script');
globalComponentsScript.src = 'global-components.js';
document.head.appendChild(globalComponentsScript);

// DOM ready initialization
document.addEventListener('DOMContentLoaded', function() {
    initializeGlobalNavigation();
    initializeNavigation();
    initializeAnimations();
    initializeDynamicComponents();
    initializeReviews();
    initializeFAQComponent();
    initializeSEOEnhancements();
    initializeNumberCounters();
    initializeSmoothTransitions();
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

    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
            document.body.classList.toggle('nav-open');
        });

        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.classList.remove('nav-open');
            });
        });
    }

    // Dropdown menu for mobile
    document.querySelectorAll('.dropdown > a, .mega-dropdown > a').forEach(dropdownToggle => {
        dropdownToggle.addEventListener('click', (e) => {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                const dropdown = dropdownToggle.parentElement;

                // Close other dropdowns
                document.querySelectorAll('.dropdown, .mega-dropdown').forEach(otherDropdown => {
                    if (otherDropdown !== dropdown) {
                        otherDropdown.classList.remove('active');
                    }
                });

                dropdown.classList.toggle('active');
            }
        });
    });

    // Close mega menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.mega-dropdown')) {
            document.querySelectorAll('.mega-dropdown').forEach(dropdown => {
                dropdown.classList.remove('active');
            });
        }
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        if (anchor) {
            anchor.addEventListener('click', function (e) {
                const href = this.getAttribute('href');
                if (href && href !== '#' && href.length > 1) {
                    try {
                        const target = document.querySelector(href);
                        if (target) {
                            e.preventDefault();
                            // Add smooth scroll with offset for fixed navbar
                            const navHeight = document.querySelector('.navbar')?.offsetHeight || 0;
                            const targetPosition = target.offsetTop - navHeight - 20;

                            window.scrollTo({
                                top: targetPosition,
                                behavior: 'smooth'
                            });
                        }
                    } catch (error) {
                        // Handle invalid selectors gracefully
                        console.warn('Invalid selector:', href);
                    }
                }
            });
        }
    });
}

function initializeAnimations() {
    // Add loading class
    document.body.classList.add('loaded');

    // Initialize simple scroll animations
    initializeScrollAnimations();

    // Initialize counter animations for hero stats
    initializeCounterAnimations();

    // Initialize image loading
    initializeImageLoading();
}

function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -80px 0px'
    };

    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Add staggered reveal for cards
                setTimeout(() => {
                    entry.target.classList.add('in-view', 'revealed');
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0) scale(1)';
                }, index * 100); // Stagger by 100ms

                // Animate counters when they come into view
                if (entry.target.classList.contains('stat-item')) {
                    const numberEl = entry.target.querySelector('.stat-number');
                    if (numberEl) {
                        setTimeout(() => {
                            numberEl.classList.add('animated');
                            animateCounter(numberEl);
                        }, 300);
                    }
                }
            }
        });
    }, observerOptions);

    // Add card-reveal class and observe elements
    const animateElements = document.querySelectorAll('.service-card, .why-choose-item, .industry-card, .section-header, .value-card, .team-member');
    animateElements.forEach((el, index) => {
        el.classList.add('card-reveal', `stagger-${Math.min(index % 6 + 1, 6)}`);
        scrollObserver.observe(el);
    });
}

function initializeCounterAnimations() {
    // Simple counter animation for hero stats
    const heroStats = document.querySelectorAll('.hero-stats .stat-number');
    heroStats.forEach(stat => {
        animateCounter(stat);
    });
}

function animateCounter(element) {
    if (!element || element.dataset.animated) return;

    const targetText = element.textContent;
    const target = parseInt(targetText.replace(/[^\d]/g, ''));
    if (isNaN(target)) return;

    element.dataset.animated = 'true';
    element.classList.add('counting');

    let current = 0;
    const duration = 3000; // 3 seconds for slower animation
    const steps = 120; // More steps for smoother animation
    const increment = target / steps;
    const stepTime = duration / steps;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
            element.classList.remove('counting');
            element.classList.add('animated');
        }

        // Preserve original formatting
        const value = Math.floor(current);
        if (targetText.includes('%')) {
            element.textContent = value + '%';
        } else if (targetText.includes('+')) {
            element.textContent = value + '+';
        } else if (targetText.includes('K')) {
            element.textContent = value + 'K+';
        } else if (targetText.includes('M')) {
            element.textContent = (value / 1000000).toFixed(1) + 'M+';
        } else {
            element.textContent = value.toLocaleString();
        }
    }, stepTime);
}

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

function initializeFAQ() {
    // Clean FAQ initialization
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');

        if (question && answer) {
            question.addEventListener('click', () => {
                const isActive = item.classList.contains('active');

                // Close all FAQ items
                faqItems.forEach(otherItem => {
                    otherItem.classList.remove('active');
                    const otherAnswer = otherItem.querySelector('.faq-answer');
                    if (otherAnswer) {
                        otherAnswer.style.maxHeight = '0';
                    }
                });

                // Toggle current item
                if (!isActive) {
                    item.classList.add('active');
                    answer.style.maxHeight = answer.scrollHeight + 'px';
                }
            });
        }
    });
}

// Cities Page Manager Integration
if (typeof CitiesPageManager !== 'undefined') {
    document.addEventListener('DOMContentLoaded', function() {
        if (window.location.pathname.includes('cities-pages.html')) {
            window.citiesPageManager = new CitiesPageManager();
        }
    });
}

// Form handling
function handleContactForm(event) {
    event.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
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

// Initialize FAQ Component on all pages
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

// FAQ Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Initialize FAQ functionality
    initializeFAQ();

    // Initialize scroll animations
    initializeScrollAnimations();

    // Initialize navbar scroll effect
    initializeNavbar();

    // Initialize mobile menu
    initializeMobileMenu();
});

function initializeFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');

        if (question && answer) {
            question.addEventListener('click', function() {
                const isActive = item.classList.contains('active');

                // Close all other FAQ items
                faqItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('active');
                        const otherAnswer = otherItem.querySelector('.faq-answer');
                        if (otherAnswer) {
                            otherAnswer.style.maxHeight = '0';
                        }
                    }
                });

                // Toggle current item
                if (isActive) {
                    item.classList.remove('active');
                    answer.style.maxHeight = '0';
                } else {
                    item.classList.add('active');
                    answer.style.maxHeight = answer.scrollHeight + 'px';
                }

                console.log('FAQ clicked:', question.textContent.trim());
            });
        }
    });
}

function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all cards and sections
    const elementsToAnimate = document.querySelectorAll('.service-card, .why-choose-item, .industry-card, .section-header');
    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });
}

function initializeNavbar() {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }
}

function initializeMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const dropdowns = document.querySelectorAll('.dropdown');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
            document.body.classList.toggle('nav-open');
        });
    }

    // Handle dropdown menus on mobile
    dropdowns.forEach(dropdown => {
        const dropdownLink = dropdown.querySelector('a');
        if (dropdownLink) {
            dropdownLink.addEventListener('click', function(e) {
                if (window.innerWidth <= 768) {
                    e.preventDefault();
                    dropdown.classList.toggle('active');
                }
            });
        }
    });
}

// Mobile Navigation
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu when clicking on a link
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href && href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // Stats Animation
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statNumbers = entry.target.querySelectorAll('.stat-number');
                statNumbers.forEach(stat => {
                    animateNumber(stat);
                });
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe stats sections
    const statsContainers = document.querySelectorAll('.hero-stats, .stats-grid, .success-metrics');
    statsContainers.forEach(container => {
        if (container) {
            observer.observe(container);
        }
    });

    // Initialize FAQ
    initializeFAQComponent();

    // Add smooth transitions
    addSmoothTransitions();
});

function animateNumber(element) {
    if (!element) return;

    const text = element.textContent;
    const hasPercent = text.includes('%');
    const hasPlus = text.includes('+');
    const number = parseFloat(text.replace(/[^\d.]/g, ''));

    if (isNaN(number)) return;

    element.textContent = '0';

    const duration = 3000; // Slower animation
    const steps = 120; // More steps for smoother animation
    const increment = number / steps;
    const stepDuration = duration / steps;

    let current = 0;

    const timer = setInterval(() => {
        current += increment;
        if (current >= number) {
            current = number;
            clearInterval(timer);
        }

        let displayValue = Math.floor(current).toString();
        if (hasPlus) displayValue = '+' + displayValue;
        if (hasPercent) displayValue += '%';

        element.textContent = displayValue;
    }, stepDuration);
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

                if (pathname.includes('construction')) category = 'construction';
                else if (pathname.includes('law-firm') || pathname.includes('legal')) category = 'legal';
                else if (pathname.includes('healthcare') || pathname.includes('dentist')) category = 'healthcare';
                else if (pathname.includes('real-estate')) category = 'real-estate';
                else if (pathname.includes('plumber')) category = 'plumbing';
                else if (pathname.includes('architect')) category = 'architecture';
                else if (pathname.includes('roofer') || pathname.includes('roofing')) category = 'roofing';
                else if (pathname.includes('about')) category = 'about';

                faq.render(faqContainer, category);
            } catch (error) {
                console.error('Error initializing FAQ component:', error);
            }
        }
    }
}

// Global function for FAQ toggle
function toggleFAQ(index) {
    const faqAnswer = document.getElementById(`faq-${index}`);
    const faqQuestion = faqAnswer ? faqAnswer.previousElementSibling : null;

    if (faqAnswer && faqQuestion) {
        const isOpen = faqAnswer.style.maxHeight && faqAnswer.style.maxHeight !== '0px';

        // Close all other FAQs first
        document.querySelectorAll('.faq-answer').forEach(answer => {
            if (answer !== faqAnswer) {
                answer.style.maxHeight = '0px';
                const question = answer.previousElementSibling;
                if (question) question.classList.remove('active');
            }
        });

        if (isOpen) {
            faqAnswer.style.maxHeight = '0px';
            faqQuestion.classList.remove('active');
        } else {
            faqAnswer.style.maxHeight = faqAnswer.scrollHeight + 'px';
            faqQuestion.classList.add('active');
        }
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