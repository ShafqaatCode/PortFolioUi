const toggleBtn = document.querySelector(".theme-toggle");
const themeLink = document.getElementById("theme-link");




document.addEventListener('DOMContentLoaded', function () {
    const themeToggle = document.getElementById('theme-toggle');
    const themeStyle = document.getElementById('theme-style');

   
    if (!themeToggle || !themeStyle) {
        console.error('Theme toggle or theme style link not found!');
        return;
    }

    
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        themeStyle.href = savedTheme === 'dark' ? 'style.css' : 'light.css';
    } else {
      
        themeStyle.href = 'style.css';
        localStorage.setItem('theme', 'dark');
    }


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

document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.getElementById('hamburger');
    const menu = document.getElementById('menu');

    hamburger.addEventListener('click', function () {
        menu.classList.toggle('active');
    });
});
