// @Fn/js/main

/**
 * Main JavaScript file for the minimalist template
 * Contains theme handling and other utility functions
 */

// Initialize when DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    loadSavedTheme();
    initNavigationHighlight();
});

/**
 * Set the theme for the application
 * @param {string} theme - Theme to set ('dark' or 'light')
 */
function setTheme(theme) {
    const htmlElement = document.documentElement;
    htmlElement.setAttribute('data-bs-theme', theme);
    if (theme === 'light') {
        htmlElement.classList.add('light-theme');
    } else {
        htmlElement.classList.remove('light-theme');
    }
    localStorage.setItem('theme', theme);
}

/**
 * Load theme from localStorage or system preference
 */
function loadSavedTheme() {
    const savedTheme = localStorage.getItem('theme');
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    const themeToApply = savedTheme || systemTheme;
    setTheme(themeToApply);
}

/**
 * Highlights the current page in the navigation
 */
function initNavigationHighlight() {
    const currentPath = window.location.pathname;
    const filename = currentPath.split('/').pop();

    if (filename) {
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            if (link.getAttribute('href') === filename) {
                link.classList.add('active');
            }
        });
    }
}

/**
 * Utility function to create an element with classes
 * @param {string} tag - HTML tag name
 * @param {string} className - CSS classes to add
 * @param {string} text - Text content for the element
 * @returns {HTMLElement} - The created element
 */
function createElement(tag, className, text) {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (text) element.textContent = text;
    return element;
}