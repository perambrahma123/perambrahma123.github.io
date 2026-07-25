// --- UPDATE YOUR RESUME LINK HERE ---
const NEW_RESUME_LINK = "PASTE_YOUR_LINK_HERE"; 

document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Navigation
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // 2. Resume Download/Open Handle
    const resumeBtn = document.getElementById('downloadResume');
    resumeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        showToast('Opening Resume...');
        setTimeout(() => {
            window.open(NEW_RESUME_LINK, '_blank');
        }, 1000);
    });

    // 3. Theme Toggle
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = themeToggle.querySelector('i');
    
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        themeIcon.className = newTheme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
        localStorage.setItem('theme', newTheme);
    });

    // 4. Scroll Progress & Back to Top
    const backToTop = document.getElementById('backToTop');
    window.addEventListener('scroll', () => {
        const scrollProgress = document.querySelector('.scroll-progress');
        const scrollable = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (window.scrollY / scrollable) * 100;
        scrollProgress.style.width = progress + '%';

        if (window.pageYOffset > 300) {
            backToTop.classList.add('show');
        } else {
            backToTop.classList.remove('show');
        }
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // 5. GitHub Stats Fetching
    fetchGitHubStats();
});

// Toast Function
function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3000);
}

// Certification Slider Logic (rotateCertifications)
let currentCertIndex = 0;
function rotateCertifications(direction) {
    const container = document.querySelector('.certifications-container');
    const cards = document.querySelectorAll('.certification-card');
    const cardWidth = cards[0].offsetWidth + 32;
    currentCertIndex = (currentCertIndex + direction + cards.length) % cards.length;
    container.style.transform = `translateX(-${currentCertIndex * cardWidth}px)`;
}

async function fetchGitHubStats() {
    const username = 'perambrahma123';
    try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        const data = await response.json();
        document.getElementById('repoCount').textContent = data.public_repos;
        document.getElementById('starCount').textContent = '5+'; // Static or calculated
    } catch (e) {
        console.log("Error fetching GitHub data");
    }
}