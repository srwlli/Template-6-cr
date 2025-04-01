// @Fn/js/main

/**
 * Main JavaScript file for the minimalist template
 * Contains theme toggling and other utility functions
 */

// Initialize when DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Only initialize theme toggle on settings page
    if (window.location.pathname.endsWith('settings.html')) {
        initThemeToggle();
    }
    initNavigationHighlight();
});

/**
 * Initialize theme toggle functionality
 * Switches between light and dark themes
 */
function initThemeToggle() {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;
    
    // Load saved theme preference
    const savedTheme = localStorage.getItem('theme') || 'dark';
    htmlElement.setAttribute('data-bs-theme', savedTheme);
    if (savedTheme === 'light') {
        htmlElement.classList.add('light-theme');
    }
    
    if (themeToggleBtn) {
        // Update button text based on current theme
        themeToggleBtn.textContent = `Switch to ${savedTheme === 'dark' ? 'Light' : 'Dark'} Theme`;
        
        themeToggleBtn.addEventListener('click', function() {
            const currentTheme = htmlElement.getAttribute('data-bs-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            htmlElement.setAttribute('data-bs-theme', newTheme);
            if (newTheme === 'light') {
                htmlElement.classList.add('light-theme');
            } else {
                htmlElement.classList.remove('light-theme');
            }
            
            localStorage.setItem('theme', newTheme);
            themeToggleBtn.textContent = `Switch to ${newTheme === 'dark' ? 'Light' : 'Dark'} Theme`;
        });
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
