// @C/ui/ThemeToggle

/**
 * Theme toggle component for controlling light/dark theme
 * Only used on the homepage
 */

document.addEventListener('DOMContentLoaded', function() {
    const themeToggleBtn = document.getElementById('theme-toggle');
    if (themeToggleBtn) {
        updateToggleButtonText(themeToggleBtn);
        themeToggleBtn.addEventListener('click', function() {
            toggleTheme(themeToggleBtn);
        });
    }
    // Always load theme preference for consistency across pages
    loadSavedTheme();
});

/**
 * Toggle between light and dark themes
 * @param {HTMLElement} button - The theme toggle button
 */
function toggleTheme(button) {
    const currentTheme = document.documentElement.getAttribute('data-bs-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    updateToggleButtonText(button);
    // Dispatch event for components that might need to react to theme changes
    document.dispatchEvent(new CustomEvent('themeChanged', { 
        detail: { theme: newTheme } 
    }));
}

/**
 * Update the toggle button text based on current theme
 * @param {HTMLElement} button - The theme toggle button
 */
function updateToggleButtonText(button) {
    const currentTheme = document.documentElement.getAttribute('data-bs-theme');
    button.textContent = `Switch to ${currentTheme === 'dark' ? 'Light' : 'Dark'} Theme`;
    button.setAttribute('aria-label', `Switch to ${currentTheme === 'dark' ? 'light' : 'dark'} theme`);
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