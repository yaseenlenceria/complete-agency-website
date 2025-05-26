// Enhanced Navigation and Website Functionality
document.addEventListener('DOMContentLoaded', function() {

    // Navigation functionality
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const body = document.body;
    let lastScrollTop = 0;
    const navbar = document.querySelector('.navbar');

    // Mobile menu toggle
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
            body.classList.toggle('nav-open');
        });

        // Close menu when clicking on a link
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
                body.classList.remove('nav-open');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
                body.classList.remove('nav-open');
            }
        });
    }

    // Dropdown functionality for mobile
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => {
        const dropdownToggle = dropdown.querySelector('a');
        if (dropdownToggle) {
            dropdownToggle.addEventListener('click', function(e) {
                if (window.innerWidth <= 768) {
                    e.preventDefault();
                    dropdown.classList.toggle('active');
                }
            });
        }
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Navbar scroll effect
    if (navbar) {
        window.addEventListener('scroll', function() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            if (scrollTop > 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }

            lastScrollTop = scrollTop;
        });
    }

    // Initialize dynamic components
    if (typeof LiveStatsComponent !== 'undefined') {
        const liveStatsContainer = document.getElementById('live-stats');
        if (liveStatsContainer) {
            new LiveStatsComponent('live-stats');
        }
    }

    if (typeof CurrentlyWorkingComponent !== 'undefined') {
        const currentlyWorkingContainer = document.getElementById('currently-working');
        if (currentlyWorkingContainer) {
            new CurrentlyWorkingComponent('currently-working');
        }
    }

    if (typeof PerformanceGraphComponent !== 'undefined') {
        const performanceGraphContainer = document.getElementById('performance-graph');
        if (performanceGraphContainer) {
            new PerformanceGraphComponent('performance-graph');
        }
    }

    // Image lazy loading
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));

    // Animation on scroll
    const animateElements = document.querySelectorAll('.service-card, .why-choose-item, .industry-card, .problem-card');
    const animationObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                animationObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    animateElements.forEach(el => animationObserver.observe(el));
});

    // Safe smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (!targetId || targetId === '#' || targetId === '' || targetId === '#!' || targetId.length <= 1) {
                e.preventDefault();
                return;
            }

            try {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    e.preventDefault();
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            } catch (error) {
                console.log('Invalid selector:', targetId);
                e.preventDefault();
            }
        });
    });

    // Simple navbar scroll behavior
    let ticking = false;

    function updateNavbar() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (navbar) {
            if (scrollTop > 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }

        lastScrollTop = scrollTop;
        ticking = false;
    }

    window.addEventListener('scroll', function() {
        if (!ticking) {
            requestAnimationFrame(updateNavbar);
            ticking = true;
        }
    });

    // Form submission handling
    const contactForms = document.querySelectorAll('form');
    if (contactForms.length > 0) {
        contactForms.forEach(form => {
            if (form) {
                form.addEventListener('submit', function(e) {
                    e.preventDefault();

                    const submitBtn = this.querySelector('button[type="submit"]');
                    if (submitBtn) {
                        const originalText = submitBtn.textContent;
                        submitBtn.textContent = 'Sending...';
                        submitBtn.disabled = true;

                        setTimeout(() => {
                            alert('Thank you for your inquiry! We will contact you within 24 hours.');
                            this.reset();
                            submitBtn.textContent = originalText;
                            submitBtn.disabled = false;
                        }, 2000);
                    }
                });
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
            if (dropdownLink) {
                dropdownLink.addEventListener('click', function(e) {
                    e.preventDefault();
                    dropdown.classList.toggle('active');
                });
            }
        }
    });

    // Add loaded class after page loads
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');

        // Fade in hero images
        const heroImages = document.querySelectorAll('.hero-image img, .floating-card');
        heroImages.forEach(img => {
            img.style.opacity = '1';
        });
    });

    // Intersection Observer for animations
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

    // Observe elements for animation
    document.querySelectorAll('.service-card, .why-choose-item, .industry-card, .benefit-card').forEach(el => {
        observer.observe(el);
    });

    // Image lazy loading
    const images = document.querySelectorAll('img[loading="lazy"]');
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    }

    // Performance graph animation
    const graphBars = document.querySelectorAll('.bar');
    if (graphBars.length > 0) {
        const graphSection = document.querySelector('.performance-graph');
        if (graphSection) {
            const graphObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            graphBars.forEach((bar, index) => {
                                const height = bar.dataset.height || '100px';
                                setTimeout(() => {
                                    bar.style.height = height;
                                }, index * 200);
                            });
                        }, 500);
                        graphObserver.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.5 });

            graphObserver.observe(graphSection);
        }
    }

    // Stats counter animation
    const statNumbers = document.querySelectorAll('.stat-number');
    statNumbers.forEach(stat => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const target = parseInt(entry.target.textContent.replace(/[^0-9]/g, ''));
                    const duration = 2000;
                    const step = target / (duration / 16);
                    let current = 0;

                    const timer = setInterval(() => {
                        current += step;
                        if (current >= target) {
                            current = target;
                            clearInterval(timer);
                        }
                        entry.target.textContent = Math.floor(current) + (entry.target.textContent.includes('%') ? '%' : '+');
                    }, 16);

                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        observer.observe(stat);
    });

    // FAQ functionality
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');

        if (question && answer) {
            question.addEventListener('click', () => {
                const isActive = item.classList.contains('active');

                // Close all other items
                faqItems.forEach(otherItem => {
                    otherItem.classList.remove('active');
                    const otherAnswer = otherItem.querySelector('.faq-answer');
                    if (otherAnswer) otherAnswer.classList.remove('active');
                });

                // Toggle current item
                if (!isActive) {
                    item.classList.add('active');
                    answer.classList.add('active');
                }
            });
        }
    });

    // Testimonial carousel (if exists)
    const testimonialCarousel = document.querySelector('.testimonials-carousel');
    if (testimonialCarousel) {
        let currentSlide = 0;
        const slides = testimonialCarousel.querySelectorAll('.testimonial-slide');
        const totalSlides = slides.length;

        function showSlide(index) {
            slides.forEach((slide, i) => {
                slide.style.display = i === index ? 'block' : 'none';
            });
        }

        function nextSlide() {
            currentSlide = (currentSlide + 1) % totalSlides;
            showSlide(currentSlide);
        }

        if (totalSlides > 1) {
            showSlide(0);
            setInterval(nextSlide, 5000); // Auto-advance every 5 seconds
        }
    }

    // Page-specific functionality
    if (window.location.pathname.includes('contact')) {
        // Contact page specific code
        const serviceSelect = document.querySelector('select[name="service"]');
        const budgetField = document.querySelector('input[name="budget"]');

        if (serviceSelect && budgetField) {
            serviceSelect.addEventListener('change', function() {
                if (this.value === 'enterprise-seo') {
                    budgetField.placeholder = '£5,000+ per month';
                } else if (this.value === 'local-seo') {
                    budgetField.placeholder = '£1,000-£3,000 per month';
                } else {
                    budgetField.placeholder = 'Your budget range';
                }
            });
        }
    }
});

// Add CSS for animations if not already added
if (!document.querySelector('#dynamic-animations')) {
    const style = document.createElement('style');
    style.id = 'dynamic-animations';
    style.textContent = `
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
    document.head.appendChild(style);
}