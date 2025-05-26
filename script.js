
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

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return; // Skip empty anchors
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Navbar scroll behavior
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (navbar) {
            if (scrollTop > lastScrollTop && scrollTop > 100) {
                navbar.classList.add('hidden');
                navbar.classList.remove('scrolled');
            } else {
                navbar.classList.remove('hidden');
                navbar.classList.add('scrolled');
            }
        }
        
        lastScrollTop = scrollTop;
    });

    // Form submission handling
    const contactForms = document.querySelectorAll('form');
    contactForms.forEach(form => {
        form.addEventListener('submit', function(e) {
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
    });

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
            // Mobile dropdown toggle
            if (dropdownLink) {
                dropdownLink.addEventListener('click', function(e) {
                    e.preventDefault();
                    dropdown.classList.toggle('active');
                });
            }
        }
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

    // Add loaded class after page loads
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
        
        // Fade in hero images
        const heroImages = document.querySelectorAll('.hero-image img, .floating-card');
        heroImages.forEach(img => {
            img.style.opacity = '1';
        });
    });

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

// Add CSS for animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes slideInLeft {
        from {
            opacity: 0;
            transform: translateX(-30px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }

    @keyframes slideInRight {
        from {
            opacity: 0;
            transform: translateX(30px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }

    @keyframes pulse {
        0%, 100% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.05);
        }
    }

    @keyframes glow {
        0%, 100% {
            box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);
        }
        50% {
            box-shadow: 0 8px 25px rgba(59, 130, 246, 0.6);
        }
    }

    @keyframes float {
        0%, 100% {
            transform: translateY(0px);
        }
        50% {
            transform: translateY(-20px);
        }
    }

    .animate-in {
        animation: slideInUp 0.8s ease-out forwards;
    }

    .service-card:nth-child(1) { animation-delay: 0.1s; }
    .service-card:nth-child(2) { animation-delay: 0.2s; }
    .service-card:nth-child(3) { animation-delay: 0.3s; }

    .why-choose-item:nth-child(odd) {
        animation: slideInLeft 0.8s ease-out;
    }

    .why-choose-item:nth-child(even) {
        animation: slideInRight 0.8s ease-out;
    }

    .industry-card:hover .industry-icon {
        animation: pulse 0.6s ease-in-out;
    }

    .btn-primary:hover {
        animation: glow 0.3s ease-in-out;
    }

    .hero::after {
        animation: float 20s linear infinite;
    }

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

    .nav-menu.active {
        transform: translateX(0) !important;
    }

    @media (max-width: 768px) {
        .nav-menu {
            transform: translateX(-100%);
            transition: transform 0.3s ease;
        }
    }
`;
document.head.appendChild(style);
