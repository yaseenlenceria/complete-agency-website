// Navigation and UI functionality
document.addEventListener('DOMContentLoaded', function() {
    initializeGlobalNavigation();
    initializeNavigation();
    initializeAnimations();
    initializeDynamicComponents();
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
    document.querySelectorAll('.dropdown > a').forEach(dropdownToggle => {
        dropdownToggle.addEventListener('click', (e) => {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                const dropdown = dropdownToggle.parentElement;
                dropdown.classList.toggle('active');
            }
        });
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
                            target.scrollIntoView({
                                behavior: 'smooth'
                            });
                        }
                    } catch (error) {
                        console.log('Invalid selector:', href);
                    }
                }
            });
        }
    });
}

function initializeAnimations() {
    // Add loading class
    document.body.classList.add('loaded');

    // Initialize scroll animations
    initializeScrollAnimations();

    // Initialize counter animations for hero stats
    initializeCounterAnimations();

    // Initialize image loading
    initializeImageLoading();
}

function initializeScrollAnimations() {
    // Create intersection observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                
                // Animate counters when they come into view
                if (entry.target.classList.contains('stat-item')) {
                    animateCounter(entry.target.querySelector('.stat-number'));
                }
            }
        });
    }, observerOptions);

    // Add scroll animation classes and observe elements
    const animateElements = document.querySelectorAll(`
        .service-card, 
        .why-choose-item, 
        .industry-card, 
        .problem-card, 
        .benefit-card, 
        .process-step,
        .stat-card,
        .feature-item,
        .testimonial-card,
        .case-study-card
    `);

    animateElements.forEach((el, index) => {
        // Add appropriate animation class based on element type and position
        if (index % 3 === 0) {
            el.classList.add('scroll-animate-left');
        } else if (index % 3 === 1) {
            el.classList.add('scroll-animate');
        } else {
            el.classList.add('scroll-animate-right');
        }
        
        scrollObserver.observe(el);
    });

    // Special handling for specific sections
    document.querySelectorAll('.section-header').forEach(header => {
        header.classList.add('scroll-animate');
        scrollObserver.observe(header);
    });
}

function initializeCounterAnimations() {
    // Counter animation for hero stats
    const heroStats = document.querySelectorAll('.hero-stats .stat-number');
    heroStats.forEach((stat, index) => {
        setTimeout(() => {
            animateCounter(stat);
        }, 1000 + (index * 200));
    });
}

function animateCounter(element) {
    if (!element || element.dataset.animated) return;
    
    const target = parseInt(element.dataset.count || element.textContent);
    if (isNaN(target)) return;

    element.dataset.animated = 'true';
    let current = 0;
    const increment = target / 60; // 60 frames for smooth animation
    const duration = 2000; // 2 seconds
    const stepTime = duration / 60;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        
        // Add suffix for percentage or plus sign
        const value = Math.floor(current);
        if (element.dataset.count === '94') {
            element.textContent = value + '%';
        } else if (element.dataset.count === '500') {
            element.textContent = value + '+';
        } else if (element.dataset.count === '15') {
            element.textContent = value + '+';
        } else {
            element.textContent = value;
        }
    }, stepTime);
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
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        if (question) {
            question.addEventListener('click', () => {
                const answer = question.nextElementSibling;
                if (answer) {
                    const isActive = answer.classList.contains('active');

                    // Close all other answers
                    document.querySelectorAll('.faq-answer').forEach(ans => {
                        ans.classList.remove('active');
                    });

                    // Toggle current answer
                    if (!isActive) {
                        answer.classList.add('active');
                    }
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

// Add CSS for animations if not already added
if (!document.querySelector('#dynamic-animations')) {
    const animationStyle = document.createElement('style');
    animationStyle.id = 'dynamic-animations';
    animationStyle.textContent = `
        @keyframes slideInUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideInLeft {
            from { opacity: 0; transform: translateX(-30px); }
            to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInRight {
            from { opacity: 0; transform: translateX(30px); }
            to { opacity: 1; transform: translateX(0); }
        }
        .animate-in { animation: slideInUp 0.8s ease-out forwards; }
        .navbar { transition: transform 0.3s ease; }
        .nav-menu.active { transform: translateX(0) !important; }
        @media (max-width: 768px) {
            .nav-menu { transform: translateX(-100%); transition: transform 0.3s ease; }
        }
    `;
    document.head.appendChild(animationStyle);
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