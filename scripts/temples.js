const currentYear = document.getElementById("current-year");
const year = new Date().getFullYear();

currentYear.innerHTML = `${year}`;

const lastModified = document.getElementById("last-modified");
const date = new Date(document.lastModified);

lastModified.innerHTML = `Last Modification: ${date}`;

//To add functionality to the hamburger menu, we will first select the navigation and menu id/classes.
const mainnav = document.querySelector(".navigation");
const hambutton = document.querySelector("#menu");

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
});
