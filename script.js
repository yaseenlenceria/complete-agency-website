// Navigation and UI functionality
document.addEventListener('DOMContentLoaded', function() {
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
        anchor.addEventListener('click', function (e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}

function initializeAnimations() {
    // Add loading class
    document.body.classList.add('loaded');

    // Stats animation
    const stats = document.querySelectorAll('.stat-number');
    if (stats.length > 0) {
        animateStats();
    }

    // Initialize intersection observer for animations
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
    document.querySelectorAll('.service-card, .why-choose-item, .industry-card, .problem-card, .benefit-card, .process-step').forEach(el => {
        observer.observe(el);
    });
}

function animateStats() {
    const stats = document.querySelectorAll('.stat-number');
    stats.forEach(stat => {
        const target = parseInt(stat.textContent);
        if (isNaN(target)) return;

        let current = 0;
        const increment = target / 100;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            stat.textContent = Math.floor(current);
        }, 20);
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
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            const isActive = answer.classList.contains('active');

            // Close all other answers
            document.querySelectorAll('.faq-answer').forEach(ans => {
                ans.classList.remove('active');
            });

            // Toggle current answer
            if (!isActive) {
                answer.classList.add('active');
            }
        });
    });
}

// Form handling
function handleContactForm(event) {
    event.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
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