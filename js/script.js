/**
 * Kartik S Hegde - Minimalistic Portfolio Logic
 */

document.addEventListener('DOMContentLoaded', () => {

    // Set current year in footer
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Theme Toggling Logic
    const themeToggleBtn = document.getElementById('theme-toggle');
    const iconSun = document.getElementById('icon-sun');
    const iconMoon = document.getElementById('icon-moon');

    // Check for saved theme preference or use OS preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    // Determine initial theme
    const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');

    // Apply initial theme
    setTheme(initialTheme);

    // Toggle button click handler
    themeToggleBtn.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
    });

    /**
     * Set the theme and update icon + local storage
     * @param {string} theme - 'light' or 'dark'
     */
    function setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);

        if (iconSun && iconMoon) {
            if (theme === 'dark') {
                iconMoon.style.display = 'none';
                iconSun.style.display = 'block';
            } else {
                iconSun.style.display = 'none';
                iconMoon.style.display = 'block';
            }
        }
    }
});
