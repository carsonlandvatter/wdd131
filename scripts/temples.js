const currentYear = new Date().getFullYear();
document.getElementById('currentYear').textContent = currentYear;

const lastModified = document.lastModified;
document.getElementById('lastModified').textContent = lastModified;

const menuButton = document.querySelector('.menu-button');
const navMenu = document.querySelector('.nav-menu');
const closeButton = document.getElementById('closeButton');

menuButton.addEventListener('click', () => {
    navMenu.classList.toggle('open');
    menuButton.classList.toggle('open');
});

closeButton.addEventListener('click', () => {
    navMenu.classList.toggle('open');
    menuButton.classList.toggle('open');
})

const navLinks = document.querySelectorAll(".nav-menu a");
const headerTitle = document.querySelector("main h2");

navLinks.forEach(link => {
    link.addEventListener("click", event => {
        event.preventDefault();

        const sectionName = link.getAttribute("data-section");

        headerTitle.textContent = sectionName;

        navMenu.classList.remove('open');
        menuButton.classList.remove('open');
    })
})