const toggleBtn = document.querySelector(".theme-toggle");
const themeLink = document.getElementById("theme-link");

// Check and apply saved theme
window.onload = () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        themeLink.setAttribute("href", "dark.css");
    } else {
        themeLink.setAttribute("href", "light.css");
    }
};

document.addEventListener('DOMContentLoaded', function () {
    const themeToggle = document.getElementById('theme-toggle');
    const themeStyle = document.getElementById('theme-style');

    // Check if elements exist
    if (!themeToggle || !themeStyle) {
        console.error('Theme toggle or theme style link not found!');
        return;
    }

    // Check for saved theme in localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        themeStyle.href = savedTheme === 'dark' ? 'style.css' : 'light.css';
    } else {
        // Default to dark mode if no theme is saved
        themeStyle.href = 'style.css';
        localStorage.setItem('theme', 'dark');
    }

    // Toggle theme on image click
    themeToggle.addEventListener('click', function () {
        if (themeStyle.href.includes('style.css')) {
            themeStyle.href = 'light.css';
            localStorage.setItem('theme', 'light');
        } else {
            themeStyle.href = 'style.css';
            localStorage.setItem('theme', 'dark');
        }
    });
});
