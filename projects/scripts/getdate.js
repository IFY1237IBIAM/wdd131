document.addEventListener('DOMContentLoaded', () => {
    // Set the current year
    const currentYear = new Date().getFullYear();
    document.getElementById('current-year').textContent = currentYear;

    // Set the last modified date
    const lastModified = document.lastModified;
    document.getElementById('last-modified').textContent = lastModified;

    // Hamburger menu functionality
    const menuIcon = document.getElementById('menu-icon');
    const navMenu = document.querySelector('header nav ul');

    menuIcon.addEventListener('click', () => {
        navMenu.classList.toggle('visible');
        if (navMenu.classList.contains('visible')) {
            menuIcon.innerHTML = '&times;'; // Change to 'X'
        } else {
            menuIcon.innerHTML = '&#9776;'; // Change back to hamburger icon
        }
    });
});
