
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
 * Set theme and persist it to localStorage
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
    
    // Dispatch event for components that might need to react to theme changes
    document.dispatchEvent(new CustomEvent('themeChanged', { 
        detail: { theme } 
    }));
}

/**
 * Toggle between light and dark themes
 * @param {HTMLElement} button - The theme toggle button
 */
function toggleTheme(button) {
    const currentTheme = document.documentElement.getAttribute('data-bs-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    updateToggleButtonText(button);
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
    const savedTheme = localStorage.getItem('theme');
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    setTheme(savedTheme || systemTheme);
}
