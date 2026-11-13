// Shared site script: dark mode and footer year, used on every page
document.addEventListener('DOMContentLoaded', function () {
    const body = document.body;
    const toggle = document.getElementById('darkModeToggle');

    // Apply the saved preference as soon as the page loads
    function applyTheme(isDark) {
        body.classList.toggle('dark-mode', isDark);
        if (toggle) {
            toggle.setAttribute('aria-pressed', String(isDark));
        }
    }

    applyTheme(localStorage.getItem('darkMode') === 'true');

    // Toggle and save the choice so it carries across pages
    if (toggle) {
        toggle.addEventListener('click', function () {
            const isDark = !body.classList.contains('dark-mode');
            applyTheme(isDark);
            localStorage.setItem('darkMode', String(isDark));
        });
    }

    // Keep the footer year current
    const year = document.getElementById('year');
    if (year) {
        year.textContent = new Date().getFullYear();
    }
});