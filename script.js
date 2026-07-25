const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        });

        // Simple smooth scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Toast Notification Function
        function showToast(message) {
            const toast = document.getElementById('toast');
            if (!toast) {
                console.error('Toast element not found');
                return;
            }
            
            // Clear any existing timeout
            if (toast.timeoutId) {
                clearTimeout(toast.timeoutId);
            }
            
            // Set the message and show the toast
            toast.textContent = message;
            toast.classList.add('show');
            
            // Hide the toast after 3 seconds
            toast.timeoutId = setTimeout(() => {
                toast.classList.remove('show');
            }, 3000);
        }

    // Resume Download
    document.getElementById('downloadResume').addEventListener('click', (e) => {
        e.preventDefault();
            
            // Show initial toast
            showToast('Preparing resume for download...');
            
            // Wait 2 seconds then start download
            setTimeout(() => {
                try {
                    window.open('https://drive.google.com/uc?export=download&id=1BAIUjxLk3cM_KC3cdVjr2x3o5UBn0vJO', '_blank');
                    showToast('Download started!');
                } catch (error) {
                    showToast('Error starting download. Please try again.');
                    console.error('Download error:', error);
                }
            }, 2000);
        });

        let currentCertIndex = 0;
        const totalCerts = 4;
        const certsPerView = 2;
        let isAnimating = false;
        let autoSlideInterval; // Variable to store the interval

        function startAutoSlide() {
            // Clear any existing interval first
            if (autoSlideInterval) {
                clearInterval(autoSlideInterval);
            }
            
            // Set new interval for auto-sliding
            autoSlideInterval = setInterval(() => {
                if (!isAnimating) {
                    rotateCertifications(1); // Move to next slide
                }
            }, 3000); // 3 seconds interval
        }

        function stopAutoSlide() {
            if (autoSlideInterval) {
                clearInterval(autoSlideInterval);
                autoSlideInterval = null;
            }
        }

        function rotateCertifications(direction) {
            if (isAnimating) return;
            isAnimating = true;

            const container = document.querySelector('.certifications-container');
            const cardWidth = container.querySelector('.certification-card').offsetWidth + 32;
            const moveDistance = cardWidth * direction;

            // Calculate new position
            const currentTransform = new WebKitCSSMatrix(getComputedStyle(container).transform);
            const currentX = currentTransform.m41;
            const newX = currentX - moveDistance;

            // Apply smooth transition
            container.style.transform = `translateX(${newX}px)`;

            // Update current index
            currentCertIndex = (currentCertIndex + direction + totalCerts) % totalCerts;

            // Reset position after animation
            setTimeout(() => {
                if (Math.abs(newX) >= cardWidth * (totalCerts / 2)) {
                    container.style.transition = 'none';
                    container.style.transform = 'translateX(0)';
                    // Force reflow
                    container.offsetHeight;
                    container.style.transition = 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
                }
                isAnimating = false;
            }, 800);
        }

        // Initialize slider with auto-slide
        document.addEventListener('DOMContentLoaded', () => {
            const container = document.querySelector('.certifications-container');
            const cards = document.querySelectorAll('.certification-card');
            
            // Clone first two cards and append to end for infinite effect
            for (let i = 0; i < certsPerView; i++) {
                const clone = cards[i].cloneNode(true);
                container.appendChild(clone);
            }

            // Add hover effects to buttons
            const navButtons = document.querySelectorAll('.cert-nav-btn');
            navButtons.forEach(btn => {
                btn.addEventListener('mouseenter', () => {
                    if (!btn.disabled) {
                        btn.style.transform = 'translateY(-50%) scale(1.1)';
                        btn.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.25)';
                    }
                });
                
                btn.addEventListener('mouseleave', () => {
                    if (!btn.disabled) {
                        btn.style.transform = 'translateY(-50%) scale(1)';
                        btn.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)';
                    }
                });

                // Pause auto-slide when hovering over buttons
                btn.addEventListener('mouseenter', stopAutoSlide);
                btn.addEventListener('mouseleave', startAutoSlide);
            });

            // Pause auto-slide when hovering over the container
            container.addEventListener('mouseenter', stopAutoSlide);
            container.addEventListener('mouseleave', startAutoSlide);

            // Start auto-sliding
            startAutoSlide();
        });

        // Clean up interval when leaving the page
        window.addEventListener('beforeunload', () => {
            stopAutoSlide();
        });

        // Theme toggle functionality
        const themeToggle = document.getElementById('themeToggle');
        const themeIcon = themeToggle.querySelector('i');

        // Check for saved theme preference
        const savedTheme = localStorage.getItem('theme') || 'light';
        document.documentElement.setAttribute('data-theme', savedTheme);
        updateThemeIcon(savedTheme);

        // Theme toggle click handler
        themeToggle.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            updateThemeIcon(newTheme);
        });

        // Update theme icon
        function updateThemeIcon(theme) {
            themeIcon.className = theme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
        }

        // Add smooth transition when changing theme
        document.addEventListener('DOMContentLoaded', () => {
            // Remove transition class after initial load
        setTimeout(() => {
                document.body.classList.add('theme-transition');
            }, 100);
        });

        // Add scroll progress functionality
        window.addEventListener('scroll', () => {
            const scrollProgress = document.querySelector('.scroll-progress');
            const scrollable = document.documentElement.scrollHeight - window.innerHeight;
            const scrolled = window.scrollY;
            const progress = (scrolled / scrollable) * 100;
            scrollProgress.style.width = progress + '%';
        });

        // Enhanced scroll reveal animation
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                    if (entry.target.classList.contains('skill-progress')) {
                        const width = entry.target.getAttribute('data-width');
                        entry.target.style.width = width;
                    }
                }
            });
        }, observerOptions);

        document.querySelectorAll('.hidden, .skill-progress').forEach(el => observer.observe(el));

        // Smooth scroll with offset
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                    const headerOffset = 80;
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                        top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

        // Back to Top Button functionality
        const backToTopButton = document.getElementById('backToTop');

        // Show/hide button based on scroll position
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTopButton.classList.add('show');
            } else {
                backToTopButton.classList.remove('show');
            }
        });

        // Smooth scroll to top when clicked
        backToTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        // Timeline Animation
        const timelineItems = document.querySelectorAll('.timeline-item');
        const timelineObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                }
            });
        }, { threshold: 0.5 });

        timelineItems.forEach(item => timelineObserver.observe(item));

        // Simplified GitHub Stats
        async function fetchGitHubStats() {
            const username = 'perambrahma123';
            
            try {
                // Fetch user data
                const userResponse = await fetch(`https://api.github.com/users/${username}`);
                const userData = await userResponse.json();
                
                // Fetch repositories
                const reposResponse = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`);
                const reposData = await reposResponse.json();
                
                // Calculate total stars
                const totalStars = reposData.reduce((acc, repo) => acc + repo.stargargers_count, 0);
                
                // Update stats
                document.getElementById('repoCount').textContent = userData.public_repos;
                document.getElementById('starCount').textContent = totalStars;
                
                // For commit count and contributions, we'll use a reasonable estimate
                // since getting exact numbers would require more complex API calls
                document.getElementById('commitCount').textContent = '50+';
                document.getElementById('contributionCount').textContent = '100+';
                
            } catch (error) {
                console.error('Error fetching GitHub stats:', error);
                document.querySelectorAll('.stat-card h4').forEach(el => el.textContent = 'N/A');
            }
        }

        // Call GitHub stats when the section is visible
        const githubStatsSection = document.getElementById('github-stats');
        const githubStatsObserver = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                fetchGitHubStats();
                githubStatsObserver.unobserve(entries[0].target);
            }
        }, { threshold: 0.5 });

        githubStatsObserver.observe(githubStatsSection);

        // Helper function to get language colors
        function getLanguageColor(language) {
            const colors = {
                'JavaScript': '#f1e05a',
                'Python': '#3572A5',
                'Java': '#b07219',
                'HTML': '#e34c26',
                'CSS': '#563d7c',
                'TypeScript': '#2b7489',
                'PHP': '#4F5D95',
                'Ruby': '#701516',
                'C++': '#f34b7d',
                'C#': '#178600',
                'Go': '#00ADD8',
                'Rust': '#dea584',
                'Swift': '#ffac45',
                'Kotlin': '#F18E33',
                'Scala': '#c22d40',
                'Shell': '#89e051',
                'PowerShell': '#012456',
                'Vue': '#2c3e50',
                'React': '#61dafb',
                'Angular': '#b52e31',
                'Node.js': '#339933',
                'Dart': '#00B4AB',
                'Flutter': '#02569b',
                'R': '#198CE7',
                'MATLAB': '#e16737',
                'SQL': '#e38c00',
                'PL/SQL': '#dad8d8',
                'Assembly': '#6E4C13',
                'C': '#555555',
                'Objective-C': '#438eff',
                'Perl': '#0298c3',
                'Lua': '#000080',
                'Haskell': '#5e5086',
                'Clojure': '#db5855',
                'Elixir': '#6e4a7e',
                'Erlang': '#B83998',
                'F#': '#b845fc',
                'OCaml': '#3be133',
                'Racket': '#3c5caa',
                'Scheme': '#1e4aec',
                'D': '#ba595e',
                'Fortran': '#4d41b1',
                'Julia': '#a270ba',
                'Nim': '#ffc200',
                'Pascal': '#E3F171',
                'Ada': '#02f88c',
                'COBOL': '#773F17',
                'Lisp': '#3fb68b',
                'Prolog': '#74283c',
                'Smalltalk': '#596706',
                'Tcl': '#e4cc98',
                'VHDL': '#adb2cb',
                'Verilog': '#b2b7f8',
                'Apex': '#1797c0',
                'Visual Basic': '#945db7',
                'Groovy': '#e69f56',
                'Dockerfile': '#384d54',
                'Makefile': '#427819',
                'Batchfile': '#C1F12E',
                'TeX': '#3D6117',
                'Markdown': '#083fa1',
                'YAML': '#cb171e',
                'JSON': '#292929',
                'XML': '#f16529',
                'SVG': '#ff9900',
                'GraphQL': '#e10098',
                'WebAssembly': '#654ff0',
                'WebVTT': '#e6e6e6',
                'WebIDL': '#e6e6e6',
                'WebGL': '#e6e6e6',
                'WebC': '#e6e6e6',
                'WebAssembly Text Format': '#654ff0',
                'WebVTT': '#e6e6e6',
                'WebIDL': '#e6e6e6',
                'WebGL': '#e6e6e6',
                'WebC': '#e6e6e6',
                'Other': '#6e4a7e'
            };
            return colors[language] || colors['Other'];
        }

        // Update the skill bars animation
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                    const progressBar = entry.target;
                    const width = progressBar.getAttribute('data-width');
                    progressBar.style.width = width;
                    skillObserver.unobserve(progressBar);
                }
            });
        }, { threshold: 0.5 });

        // Observe all skill progress bars
        document.querySelectorAll('.skill-progress').forEach(progressBar => {
            skillObserver.observe(progressBar);
        });

        // Add minimal JavaScript to trigger animation on scroll
        document.addEventListener('DOMContentLoaded', function() {
            const skillsSection = document.querySelector('.skills-container');
            
            // Function to check if element is in viewport
            function isInViewport(element) {
                const rect = element.getBoundingClientRect();
                return (
                    rect.top >= 0 &&
                    rect.left >= 0 &&
                    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
                );
            }

            // Function to handle scroll
            function handleScroll() {
                if (isInViewport(skillsSection)) {
                    skillsSection.classList.add('visible');
                    // Remove scroll listener once animation is triggered
                    window.removeEventListener('scroll', handleScroll);
                }
            }

            // Add scroll listener
            window.addEventListener('scroll', handleScroll);
            // Check on initial load
            handleScroll();
        });