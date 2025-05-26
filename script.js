
// Mobile Navigation
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const dropdowns = document.querySelectorAll('.dropdown');

    // Mobile menu toggle
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (navMenu.classList.contains('active')) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    });

    // Dropdown functionality for mobile
    dropdowns.forEach(dropdown => {
        const dropdownLink = dropdown.querySelector('a');
        const dropdownMenu = dropdown.querySelector('.dropdown-menu');
        
        if (dropdownLink && dropdownMenu) {
            dropdownLink.addEventListener('click', function(e) {
                if (window.innerWidth <= 768) {
                    e.preventDefault();
                    dropdownMenu.classList.toggle('active');
                }
            });
        }
    });

    // Smooth scrolling for anchor links
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href && href !== '#' && href.length > 1) {
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

    // Grid animations on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe grid items for animations
    const gridItems = document.querySelectorAll('.service-card, .why-choose-item, .industry-card, .benefit-card, .problem-card');
    gridItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(item);
    });

    // Form handling
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const name = formData.get('name');
            const email = formData.get('email');
            const service = formData.get('service');
            const message = formData.get('message');
            
            // Basic validation
            if (!name || !email || !message) {
                alert('Please fill in all required fields.');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address.');
                return;
            }
            
            // Show success message
            alert('Thank you for your message! We will get back to you within 24 hours.');
            this.reset();
        });
    }

    // Statistics counter animation
    const statNumbers = document.querySelectorAll('.stat-number, .hero-stats .stat-number');
    const countUp = (element, target) => {
        const increment = target / 100;
        let current = 0;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            
            if (target >= 1000) {
                element.textContent = Math.floor(current / 1000) + 'k+';
            } else if (target >= 100) {
                element.textContent = Math.floor(current) + '+';
            } else {
                element.textContent = Math.floor(current) + '%';
            }
        }, 20);
    };

    const statsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.textContent.replace(/[^\d]/g, ''));
                if (target > 0) {
                    countUp(entry.target, target);
                    statsObserver.unobserve(entry.target);
                }
            }
        });
    }, { threshold: 0.5 });

    statNumbers.forEach(stat => {
        statsObserver.observe(stat);
    });

    // Navbar scroll effect
    let lastScrollTop = 0;
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scrolling down
            navbar.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up
            navbar.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    });

    // Add loading class removal for better performance
    document.body.classList.add('loaded');

    // Hero image loading
    const heroImages = document.querySelectorAll('.hero-image img, .floating-card');
    heroImages.forEach(img => {
        if (img.complete) {
            img.style.opacity = '1';
        } else {
            img.addEventListener('load', function() {
                this.style.opacity = '1';
            });
        }
    });

    // Grid layout improvements
    function adjustGridLayouts() {
        const grids = document.querySelectorAll('.services-grid, .why-choose-grid, .industries-grid');
        
        grids.forEach(grid => {
            const items = grid.children;
            const itemCount = items.length;
            
            // Adjust grid columns based on item count and screen size
            if (window.innerWidth > 1024) {
                if (itemCount % 3 === 0 || itemCount >= 6) {
                    grid.style.gridTemplateColumns = 'repeat(3, 1fr)';
                } else if (itemCount % 2 === 0 || itemCount === 4) {
                    grid.style.gridTemplateColumns = 'repeat(2, 1fr)';
                } else {
                    grid.style.gridTemplateColumns = 'repeat(3, 1fr)';
                }
            } else if (window.innerWidth > 768) {
                grid.style.gridTemplateColumns = 'repeat(2, 1fr)';
            } else {
                grid.style.gridTemplateColumns = '1fr';
            }
        });
    }

    // Initial grid adjustment
    adjustGridLayouts();

    // Readjust on window resize
    window.addEventListener('resize', adjustGridLayouts);

    // Performance optimization for scroll events
    let ticking = false;
    function updateScrollEffects() {
        // Update any scroll-based effects here
        ticking = false;
    }

    window.addEventListener('scroll', function() {
        if (!ticking) {
            requestAnimationFrame(updateScrollEffects);
            ticking = true;
        }
    });
});

// Add CSS class for loaded state
const style = document.createElement('style');
style.textContent = `
    .loaded .service-card,
    .loaded .why-choose-item,
    .loaded .industry-card {
        transition: all 0.3s ease;
    }
    
    .navbar {
        transition: transform 0.3s ease;
    }
    
    .hero-image img,
    .floating-card {
        opacity: 0;
        transition: opacity 0.5s ease;
    }
    
    @media (max-width: 768px) {
        .services-grid,
        .why-choose-grid,
        .industries-grid {
            gap: 1rem !important;
        }
        
        .service-card,
        .why-choose-item,
        .industry-card {
            margin-bottom: 1rem;
        }
    }
`;
document.head.appendChild(style);
