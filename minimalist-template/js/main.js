// @Fn/js/main

/**
 * Main JavaScript file for the minimalist template
 * Contains theme toggling and other utility functions
 */

// Initialize when DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // @Fn/js/main#initThemeToggle
    initThemeToggle();
    initNavigationHighlight();
});

/**
 * Initialize theme toggle functionality
 * Switches between light and dark themes
 */
function initThemeToggle() {
    const themeToggleBtn = document.getElementById('theme-toggle');
    
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', function() {
            const htmlElement = document.documentElement;
            
            if (htmlElement.getAttribute('data-bs-theme') === 'dark') {
                htmlElement.setAttribute('data-bs-theme', 'light');
                htmlElement.classList.add('light-theme');
                localStorage.setItem('theme', 'light');
            } else {
                htmlElement.setAttribute('data-bs-theme', 'dark');
                htmlElement.classList.remove('light-theme');
                localStorage.setItem('theme', 'dark');
            }
        });
    }
    
    // Load saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.documentElement.setAttribute('data-bs-theme', 'light');
        document.documentElement.classList.add('light-theme');
    }
}

/**
 * Highlights the current page in the navigation
 * Based on the current URL path
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
