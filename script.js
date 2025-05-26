// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navbar = document.querySelector('.navbar');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
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

        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navbar.contains(e.target) && navMenu.classList.contains('active')) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.classList.remove('nav-open');
            }
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href && href !== '#' && href.length > 1) {
                e.preventDefault();
                try {
                    const target = document.querySelector(href);
                    if (target) {
                        // Close mobile menu if open
                        if (hamburger && navMenu) {
                            hamburger.classList.remove('active');
                            navMenu.classList.remove('active');
                            document.body.classList.remove('nav-open');
                        }
                        
                        setTimeout(() => {
                            target.scrollIntoView({
                                behavior: 'smooth',
                                block: 'start'
                            });
                        }, 100);
                    }
                } catch (error) {
                    console.warn('Invalid selector:', href);
                }
            }
        });
    });

    // Enhanced Parallax effect for hero images
    let ticking = false;
    function updateParallax() {
        const scrolled = window.pageYOffset;
        const heroImages = document.querySelectorAll('.hero-image img, .service-hero img');

        heroImages.forEach(img => {
            if (img) {
                const speed = 0.3;
                img.style.transform = `translateY(${scrolled * speed}px)`;
            }
        });

        ticking = false;
    }

    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(updateParallax);
            ticking = true;
        }
    });

    // Add animation classes when elements come into view
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observe elements for animation
    document.querySelectorAll('.service-card, .why-choose-item, .industry-card, .benefit-card, .problem-card').forEach(el => {
        observer.observe(el);
    });

    // Contact form submission
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Show loading state
            const submitBtn = this.querySelector('button[type="submit"]');
            if (submitBtn) {
                const originalText = submitBtn.textContent;
                submitBtn.textContent = 'Sending...';
                submitBtn.disabled = true;

                // Simulate form submission
                setTimeout(() => {
                    alert('Thank you for your inquiry! We will contact you within 24 hours.');
                    this.reset();
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                }, 2000);
            }
        });
    }

    // Dropdown menu functionality
    document.querySelectorAll('.dropdown').forEach(dropdown => {
        const dropdownMenu = dropdown.querySelector('.dropdown-menu');
        const dropdownLink = dropdown.querySelector('a');

        if (window.innerWidth > 768) {
            dropdown.addEventListener('mouseenter', function() {
                this.classList.add('active');
            });

            dropdown.addEventListener('mouseleave', function() {
                this.classList.remove('active');
            });
        } else {
            // Mobile dropdown handling
            if (dropdownLink) {
                dropdownLink.addEventListener('click', function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    if (dropdown) {
                        dropdown.classList.toggle('active');
                        
                        // Close other dropdowns
                        document.querySelectorAll('.dropdown').forEach(otherDropdown => {
                            if (otherDropdown !== dropdown) {
                                otherDropdown.classList.remove('active');
                            }
                        });
                    }
                });
            }
        }
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.dropdown')) {
            document.querySelectorAll('.dropdown').forEach(dropdown => {
                dropdown.classList.remove('active');
            });
        }
    });

    // Handle window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            document.querySelectorAll('.dropdown').forEach(dropdown => {
                dropdown.classList.remove('active');
            });
        }
    });

    // Stats counter animation
    function animateStats() {
        const stats = document.querySelectorAll('.stat-number');
        stats.forEach(stat => {
            const text = stat.textContent;
            const target = parseInt(text.replace(/[^\d]/g, ''));
            let current = 0;
            const increment = target / 60;
            const suffix = text.replace(/[\d\s]/g, '');

            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    stat.textContent = target + suffix;
                    clearInterval(timer);
                } else {
                    stat.textContent = Math.floor(current) + suffix;
                }
            }, 30);
        });
    }

    // Trigger stats animation when in view
    const statsElements = document.querySelectorAll('.hero-stats, .results-stats');
    statsElements.forEach(statsSection => {
        if (statsSection) {
            const statsObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        animateStats();
                        statsObserver.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.5 });
            statsObserver.observe(statsSection);
        }
    });

    // Floating elements animation
    const floatingElements = document.querySelectorAll('.animate-float, .animate-bounce-1, .animate-bounce-2, .animate-bounce-3');
    floatingElements.forEach((element, index) => {
        element.style.animationDelay = `${index * 0.2}s`;
    });

    // Add loading effect to buttons
    document.querySelectorAll('.btn-primary, .btn-secondary').forEach(btn => {
        btn.addEventListener('click', function(e) {
            if (!this.classList.contains('loading')) {
                this.classList.add('loading');
                setTimeout(() => {
                    this.classList.remove('loading');
                }, 2000);
            }
        });
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