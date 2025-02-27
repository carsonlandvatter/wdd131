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

const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
      templeName: "Newport Beach California",
      location: "Newport Beach, California, United States",
      dedicated: "2003, August, 15",
      area: 17800,
      imageUrl: 
      "https://churchofjesuschristtemples.org/assets/img/temples/newport-beach-california-temple/newport-beach-california-temple-46818-main.jpg"
    },
    {
      templeName: "Salt Lake",
      location: "Salt Lake City, Utah, United States",
      dedicated: "1853, February, 14",
      area: 382207,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-15669-main.jpg"
    },
    {
      templeName: "Palmyra New York",
      location: "Palmyra, New York, United States",
      dedicated: "1999. May, 25",
      area: 10900,
      imageUrl: 
      "https://churchofjesuschristtemples.org/assets/img/temples/_temp/077-Palmyra-New-York-Temple.jpg"
    }
  ];

const templeContainer = document.getElementById("temple-container");

function filterTemples(filter) {
    let filteredTemples;

    switch (filter) {
        case "Old":
            filteredTemples = temples.filter(temple => {
                const year = parseInt(temple.dedicated.split(",")[0]);
                return year < 1900;
            })
            break;
        case "New":
            filteredTemples = temples.filter(temple => {
                const year = parseInt(temple.dedicated.split(",")[0]);
                return year > 2000;
            })
            break;
        case "Large":
            filteredTemples = temples.filter(temple => temple.area > 90000);
            break;
        case "Small":
            filteredTemples = temples.filter(temple => temple.area < 10000);
            break;
        default:
            filteredTemples = temples;
    }

    displayTemples(filteredTemples);
}

  function displayTemples(filteredList = temples) {
    templeContainer.innerHTML = "";

    filteredList.forEach(temple => {
    const card = document.createElement("figure");
    card.classList.add("temple-card")

    const img = document.createElement("img");
    img.src = temple.imageUrl;
    img.alt = `Image of ${temple.templeName}`;
    img.loading = "lazy";

    const caption = document.createElement("figcaption");
    caption.innerHTML = `
    <h3>${temple.templeName}</h3>
    <p><strong>Location:</strong> ${temple.location}</p>
    <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
    <p><strong>Area:</strong> ${temple.area.toLocaleString()}</p>
    `;
    card.appendChild(img);
    card.appendChild(caption);

    templeContainer.appendChild(card);
  });
}

navLinks.forEach(link => {
    link.addEventListener("click", event => {
        event.preventDefault();

        const sectionName = link.getAttribute("data-section");
        filterTemples(sectionName);

        headerTitle.textContent = sectionName;
        navMenu.classList.remove('open');
        menuButton.classList.remove('open');
    });
});

displayTemples();