// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
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

    // Add scroll effect to navbar
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                navbar.style.background = 'rgba(255, 255, 255, 0.98)';
                navbar.style.backdropFilter = 'blur(15px)';
            } else {
                navbar.style.background = 'rgba(255, 255, 255, 0.98)';
                navbar.style.backdropFilter = 'blur(15px)';
            }
        });
    }

    // Graph animation for performance section
    function animateGraph() {
        const bars = document.querySelectorAll('.bar');
        const values = [30, 45, 60, 75, 90, 100]; // percentage heights

        bars.forEach((bar, index) => {
            setTimeout(() => {
                bar.style.height = values[index] + '%';
            }, index * 200);
        });
    }

    // Trigger graph animation when section comes into view
    const graphSection = document.querySelector('.performance-graph');
    if (graphSection) {
        const observerGraph = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateGraph();
                }
            });
        }, { threshold: 0.5 });

        observerGraph.observe(graphSection);
    }

    // Counter animation for stats
    function animateCounters() {
        const counters = document.querySelectorAll('.stat-number');

        counters.forEach(counter => {
            const target = parseInt(counter.textContent.replace(/[^\d]/g, ''));
            const increment = target / 60; // 60 frames for 1 second animation
            let current = 0;

            const updateCounter = () => {
                if (current < target) {
                    current += increment;
                    counter.textContent = Math.round(current) + '+';
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = target + '+';
                }
            };

            updateCounter();
        });
    }

    // Trigger counter animation when section comes into view
    const statsSection = document.querySelector('.hero-stats');
    if (statsSection) {
        const observerStats = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounters();
                }
            });
        }, { threshold: 0.5 });

        observerStats.observe(statsSection);
    }

    // Form submission handling
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get form data
            const formData = new FormData(this);
            const formObject = {};
            formData.forEach((value, key) => {
                formObject[key] = value;
            });

            // Show success message (you can replace this with actual form submission)
            alert('Thank you for your message! We will get back to you within 24 hours.');

            // Reset form
            this.reset();
        });
    }

    // Add loading animation to CTA buttons
    document.querySelectorAll('.btn-primary').forEach(button => {
        if (button) {
            button.addEventListener('click', function(e) {
                if (this.href && this.href.includes('contact')) {
                    this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading...';
                    setTimeout(() => {
                        this.innerHTML = '<i class="fas fa-rocket"></i> Get FREE SEO Audit';
                    }, 1000);
                }
            });
        }
    });

    // Mobile dropdown functionality
    document.querySelectorAll('.dropdown > a').forEach(link => {
        if (link) {
            link.addEventListener('click', function(e) {
                if (window.innerWidth <= 768) {
                    e.preventDefault();
                    const dropdown = this.parentElement;
                    const dropdownMenu = dropdown.querySelector('.dropdown-menu');

                    if (dropdownMenu) {
                        // Toggle dropdown
                        dropdownMenu.classList.toggle('active');

                        // Close other dropdowns
                        document.querySelectorAll('.dropdown-menu').forEach(menu => {
                            if (menu !== dropdownMenu) {
                                menu.classList.remove('active');
                            }
                        });
                    }
                }
            });
        }
    });

    // Enhanced scroll animations
    const observerFade = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    // Add fade-in animation to cards and sections
    document.querySelectorAll('.service-card, .why-choose-item, .industry-card, .problem-card').forEach(el => {
        if (el) {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observerFade.observe(el);
        }
    });

    // SEO Performance Graph Animation (for service pages)
    function initServicePageGraph() {
        const graphBars = document.querySelectorAll('.graph-bars .bar');
        if (graphBars.length > 0) {
            const performanceData = [25, 40, 60, 80, 95, 100]; // Sample data

            graphBars.forEach((bar, index) => {
                setTimeout(() => {
                    bar.style.height = performanceData[index] + '%';
                    bar.setAttribute('data-value', performanceData[index] + '%');
                }, index * 300);
            });
        }
    }

    // Initialize service page graph when visible
    const serviceGraph = document.querySelector('.performance-graph');
    if (serviceGraph) {
        const serviceGraphObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    initServicePageGraph();
                    serviceGraphObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });

        serviceGraphObserver.observe(serviceGraph);
    }

    // Lazy loading for images
    document.querySelectorAll('img').forEach(img => {
        if (img) {
            img.loading = 'lazy';
        }
    });

    // Add smooth hover effects to buttons
    document.querySelectorAll('.btn-primary, .btn-secondary').forEach(button => {
        if (button) {
            button.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-2px)';
            });

            button.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
            });
        }
    });
});