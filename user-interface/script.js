const toggleButton = document.getElementById('toggleDarkMode');
const body = document.body;
const darkModeIcon = document.getElementById('darkModeIcon');
const navbar = document.querySelector('header');

toggleButton.addEventListener('click', () => {
    const isDarkMode = body.classList.toggle('dark-mode');
    // Toggle between brightness-high and moon icons based on mode
    darkModeIcon.className = isDarkMode ? 'bi bi-brightness-high' : 'bi bi-moon';
    // Save dark mode preference to localStorage
    localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');
});

// Apply dark mode preference when the DOM content is loaded
document.addEventListener('DOMContentLoaded', applyDarkModePreference);

// Function to apply dark mode based on user preference
function applyDarkModePreference() {
    const darkModePreference = localStorage.getItem('darkMode');
    const bootstrapIcon = document.querySelector('.bi'); // Assuming Bootstrap icons have the 'bi' class

    if (darkModePreference === 'enabled') {
        body.classList.add('dark-mode');
        // Change the Bootstrap icon to light mode
        if (bootstrapIcon) {
            bootstrapIcon.classList.remove('bi-moon');
            bootstrapIcon.classList.add('bi-brightness-high');
        }
    } else {
        body.classList.remove('dark-mode');
        // Change the Bootstrap icon to dark mode
        if (bootstrapIcon) {
            bootstrapIcon.classList.remove('bi-brightness-high');
            bootstrapIcon.classList.add('bi-moon');
        }
    }
}

let prevScrollPos = window.pageYOffset;
window.addEventListener('scroll', function() {
    const currentScrollPos = window.pageYOffset;
    const navLinks = document.querySelectorAll('.nav-link');

    if (prevScrollPos > currentScrollPos) {
        navbar.style.top = "0";
        darkModeIcon.style.display = "block";

        navLinks.forEach(link => {
            link.style.display = "block";
        });
    } else {
        navbar.style.top = "-700px";
        darkModeIcon.style.display = "none";

        navLinks.forEach(link => {
            link.style.display = "none";
        });
    }
    prevScrollPos = currentScrollPos;
});