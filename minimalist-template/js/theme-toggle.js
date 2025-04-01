// @C/ui/ThemeToggle

/**
 * Theme toggle component for controlling light/dark theme
 * Only used on the homepage
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
});

/**
 * Initialize theme toggle functionality with improved persistence
 * Switches between light and dark themes
 */
function initThemeToggle() {
    const themeToggleBtn = document.getElementById('theme-toggle');
    
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', function() {
            toggleTheme();
        });
    }
    
    // Load saved theme preference on page load
    loadSavedTheme();
}

/**
 * Toggle between light and dark themes
 * Updates HTML attributes and localStorage
 */
function toggleTheme() {
    const htmlElement = document.documentElement;
    const currentTheme = htmlElement.getAttribute('data-bs-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    // Use the setTheme function from main.js for consistency
    setTheme(newTheme);
    
    // Update button text
    const themeToggleBtn = document.getElementById('theme-toggle');
    if (themeToggleBtn) {
        themeToggleBtn.textContent = `Switch to ${newTheme === 'dark' ? 'Light' : 'Dark'} Theme`;
    }
    
    // Dispatch event for components that might need to react to theme changes
    document.dispatchEvent(new CustomEvent('themeChanged', { 
        detail: { theme: newTheme } 
    }));
}

/**
 * Load theme from localStorage on page load
 */
function loadSavedTheme() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    
    // Use the setTheme function from main.js
    if (typeof setTheme === 'function') {
        setTheme(savedTheme);
    } else {
        // Fallback if main.js hasn't loaded yet
        const htmlElement = document.documentElement;
        htmlElement.setAttribute('data-bs-theme', savedTheme);
        if (savedTheme === 'light') {
            htmlElement.classList.add('light-theme');
        } else {
            htmlElement.classList.remove('light-theme');
        }
    }
}