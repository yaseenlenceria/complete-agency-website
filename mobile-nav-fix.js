
// Enhanced Mobile Navigation Fix Script
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        // Toggle mobile menu function
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
            document.body.classList.add('mobile-nav-open');
        }

        function closeMobileMenu() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.classList.remove('mobile-nav-open');
            
            // Close all dropdowns
            document.querySelectorAll('.dropdown').forEach(dropdown => {
                dropdown.classList.remove('active');
            });
        }

        // Hamburger click events
        hamburger.addEventListener('click', toggleMobileMenu);
        hamburger.addEventListener('touchstart', function(e) {
            e.preventDefault();
            toggleMobileMenu();
        });

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

        // Close menu when clicking outside on mobile
        document.addEventListener('click', function(e) {
            if (window.innerWidth <= 768 && 
                navMenu.classList.contains('active') && 
                !navMenu.contains(e.target) && 
                !hamburger.contains(e.target)) {
                closeMobileMenu();
            }
        });

        // Close menu when window is resized to desktop
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768) {
                closeMobileMenu();
            }
        });
    }
});
