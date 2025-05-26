// Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // Smooth scrolling for anchor links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href && href !== '#' && href.length > 1) {
                e.preventDefault();
                try {
                    const target = document.querySelector(href);
                    if (target) {
                        target.scrollIntoView({
                            behavior: 'smooth'
                        });
                    }
                } catch (error) {
                    console.warn('Invalid selector:', href);
                    // Handle pages that don't have the target section
                    if (href.includes('#')) {
                        const baseUrl = href.startsWith('#') ? 'index.html' : '';
                        if (baseUrl) {
                            window.location.href = baseUrl + href;
                        }
                    }
                }
            }
        });
    });

    // Form submission
    const contactForms = document.querySelectorAll('.contact-form');
    contactForms.forEach(contactForm => {
        if (contactForm) {
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();

                // Show success message
                const formData = new FormData(this);
                const button = this.querySelector('button[type="submit"]');
                
                if (button) {
                    const originalText = button.textContent;

                    button.textContent = 'Sending...';
                    button.disabled = true;

                    // Simulate form submission
                    setTimeout(() => {
                        button.textContent = 'Message Sent!';
                        button.style.backgroundColor = '#10b981';

                        // Reset form
                        this.reset();

                        setTimeout(() => {
                            button.textContent = originalText;
                            button.disabled = false;
                            button.style.backgroundColor = '';
                        }, 3000);
                    }, 1500);
                }
            });
        }
    });

    // Animate elements on scroll
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

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.service-card, .benefit-card, .step, .award-item, .industry-item');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Performance graph animation
    const graphBars = document.querySelectorAll('.bar');
    if (graphBars.length > 0) {
        const heights = [120, 180, 240, 300, 350, 400];
        graphBars.forEach((bar, index) => {
            setTimeout(() => {
                bar.style.height = heights[index] + 'px';
            }, index * 200);
        });
    }

    // Statistics counter animation
    const statNumbers = document.querySelectorAll('.stat h3, .stat-item h3');
    if (statNumbers.length > 0) {
        statNumbers.forEach(stat => {
            if (stat && stat.textContent) {
                const target = parseInt(stat.textContent.replace(/[^\d]/g, ''));
                const suffix = stat.textContent.replace(/\d/g, '');

                if (target && target > 0) {
                    let current = 0;
                    const increment = target / 50;
                    const timer = setInterval(() => {
                        current += increment;
                        if (current >= target) {
                            current = target;
                            clearInterval(timer);
                        }
                        stat.textContent = Math.floor(current) + suffix;
                    }, 30);
                }
            }
        });
    }

    // Mobile menu improvements
    const dropdowns = document.querySelectorAll('.dropdown');
    if (dropdowns && dropdowns.length > 0) {
        dropdowns.forEach(dropdown => {
            if (dropdown) {
                const dropdownMenu = dropdown.querySelector('.dropdown-menu');
                const dropdownLink = dropdown.querySelector('a');
                if (dropdownMenu && dropdownLink) {
                    dropdownLink.addEventListener('click', function(e) {
                        if (window.innerWidth <= 768) {
                            e.preventDefault();
                            const isVisible = dropdownMenu.style.display === 'block';
                            // Close all other dropdowns
                            const allMenus = document.querySelectorAll('.dropdown-menu');
                            if (allMenus) {
                                allMenus.forEach(menu => {
                                    if (menu) menu.style.display = 'none';
                                });
                            }
                            // Toggle current dropdown
                            dropdownMenu.style.display = isVisible ? 'none' : 'block';
                        }
                    });
                }
            }
        });
    }

    // Close dropdowns when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.dropdown')) {
            document.querySelectorAll('.dropdown-menu').forEach(menu => {
                if (window.innerWidth <= 768) {
                    menu.style.display = 'none';
                }
            });
        }
    });

    // Add loading states for better UX
    const allImages = document.querySelectorAll('img');
    allImages.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });

        if (!img.complete) {
            img.style.opacity = '0';
            img.style.transition = 'opacity 0.3s ease';
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    }
});

// Add mobile menu styles dynamically
const style = document.createElement('style');
style.textContent = `
    @media (max-width: 768px) {
        .nav-menu {
            position: fixed;
            left: -100%;
            top: 70px;
            flex-direction: column;
            background-color: white;
            width: 100%;
            text-align: center;
            transition: 0.3s;
            box-shadow: 0 10px 27px rgba(0, 0, 0, 0.05);
            padding: 2rem 0;
        }

        .nav-menu.active {
            left: 0;
        }

        .nav-menu li {
            margin: 1rem 0;
        }

        .hamburger.active span:nth-child(2) {
            opacity: 0;
        }

        .hamburger.active span:nth-child(1) {
            transform: translateY(8px) rotate(45deg);
        }

        .hamburger.active span:nth-child(3) {
            transform: translateY(-8px) rotate(-45deg);
        }
    }
`;
document.head.appendChild(style);