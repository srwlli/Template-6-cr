// @Fn/js/main

/**
 * Main JavaScript file for the minimalist template
 * Contains theme toggling and other utility functions
 */

// Initialize when DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Only initialize theme toggle on the index page
    const path = window.location.pathname;
    if (path.endsWith('index.html') || path === '/minimalist-template/' || path === '/') {
        initThemeToggle();
    }
    // Always load theme preference for consistency across pages
    loadSavedTheme();
    initNavigationHighlight();
});

/**
 * Initialize theme toggle functionality
 * Switches between light and dark themes
 * @C/ui/ThemeToggle
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
            
            // Call setTheme helper to ensure consistent theme application
            setTheme(newTheme);
            
            // Update button text after theme change
            themeToggleBtn.textContent = `Switch to ${newTheme === 'dark' ? 'Light' : 'Dark'} Theme`;
            
            // Dispatch event for components that might need to react to theme changes
            document.dispatchEvent(new CustomEvent('themeChanged', { 
                detail: { theme: newTheme } 
            }));
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
    
    // Save preference
    localStorage.setItem('theme', theme);
}

/**
 * Load theme from localStorage on page load
 * This ensures theme consistency across all pages
 */
function loadSavedTheme() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
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
