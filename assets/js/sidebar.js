
        let isMobileNavOpen = false;

        function toggleMobileNav() {
            const sidebar = document.getElementById('mobileSidebar');
            const overlay = document.getElementById('mobileOverlay');
            const toggleBtn = document.querySelector('.mobile_nav_toggle');
            
            if (!isMobileNavOpen) {
                openMobileNav();
            } else {
                closeMobileNav();
            }
        }

        function openMobileNav() {
            const sidebar = document.getElementById('mobileSidebar');
            const overlay = document.getElementById('mobileOverlay');
            const toggleBtn = document.querySelector('.mobile_nav_toggle');
            
            sidebar.classList.add('active');
            overlay.classList.add('active');
            toggleBtn.classList.add('active');
            document.body.style.overflow = 'hidden';
            isMobileNavOpen = true;
        }

        function closeMobileNav() {
            const sidebar = document.getElementById('mobileSidebar');
            const overlay = document.getElementById('mobileOverlay');
            const toggleBtn = document.querySelector('.mobile_nav_toggle');
            
            sidebar.classList.remove('active');
            overlay.classList.remove('active');
            toggleBtn.classList.remove('active');
            document.body.style.overflow = 'auto';
            isMobileNavOpen = false;

            // Close all submenus
            const allSubmenus = document.querySelectorAll('.mobile_submenu');
            const allLinks = document.querySelectorAll('.mobile_nav_link');
            
            allSubmenus.forEach(submenu => submenu.classList.remove('active'));
            allLinks.forEach(link => link.classList.remove('active'));
        }

        function toggleSubmenu(event, submenuId) {
            event.preventDefault();
            
            const submenu = document.getElementById(submenuId);
            const link = event.currentTarget;
            
            // Close other open submenus
            const allSubmenus = document.querySelectorAll('.mobile_submenu');
            const allLinks = document.querySelectorAll('.mobile_nav_link');
            
            allSubmenus.forEach(sub => {
                if (sub.id !== submenuId) {
                    sub.classList.remove('active');
                }
            });
            
            allLinks.forEach(l => {
                if (l !== link) {
                    l.classList.remove('active');
                }
            });
            
            // Toggle current submenu
            submenu.classList.toggle('active');
            link.classList.toggle('active');
        }

        // Close nav when clicking on submenu links
        document.addEventListener('click', function(event) {
            if (event.target.classList.contains('mobile_submenu_link')) {
                // Small delay to see the click effect
                setTimeout(() => {
                    closeMobileNav();
                }, 200);
            }
        });

        // Handle window resize
        window.addEventListener('resize', function() {
            if (window.innerWidth > 991 && isMobileNavOpen) {
                closeMobileNav();
            }
        });

        // Prevent scroll on touch devices when nav is open
        document.addEventListener('touchmove', function(event) {
            if (isMobileNavOpen && !event.target.closest('.mobile_sidebar')) {
                event.preventDefault();
            }
        }, { passive: false });
