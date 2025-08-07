document.addEventListener('DOMContentLoaded', () => {
            const pages = document.querySelectorAll('.page');
            const navLinks = document.querySelectorAll('.nav-links a');
            const logoLink = document.querySelector('.logo a');

            function showPageFromHash() {
                const hash = window.location.hash || '#home';
                
                // Convert hash to a valid element ID (e.g., #blockchain/smart-contracts -> blockchain-smart-contracts)
                const pageId = hash.substring(1).replace('/', '-');

                let pageFound = false;
                pages.forEach(page => {
                    if (page.id === pageId) {
                        page.classList.add('active');
                        pageFound = true;
                    } else {
                        page.classList.remove('active');
                    }
                });

                // If no specific page matches the hash, show the home page
                if (!pageFound) {
                    document.getElementById('home').classList.add('active');
                }

                // Update active state for main navigation links
                navLinks.forEach(link => {
                    const linkHash = link.getAttribute('href');
                    // A link is active if its hash is an exact match OR if the current hash starts with the link's hash (for sub-pages)
                    if (hash === linkHash || (linkHash !== '#home' && hash.startsWith(linkHash))) {
                        link.classList.add('active');
                    } else {
                        link.classList.remove('active');
                    }
                });
                
                // Scroll to the top of the page on navigation
                window.scrollTo(0, 0);
            }

            // Listen for hash changes (when a user clicks a link)
            window.addEventListener('hashchange', showPageFromHash);

            // Show the correct page on initial load
            showPageFromHash();
        });