document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.querySelector('.menu-icon');
    const navMenu = document.querySelector('nav ul.menu');

    menuIcon.addEventListener('click', function () {
        navMenu.classList.toggle('show');
    });
});