
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
    templeName: "Bern Switzerland Temple",
    location: "Bern, Switzerland",
    dedicated: "1953, august, 5",
    area: 35546,
    imageUrl:

"https://churchofjesuschristtemples.org/bern-switzerland-temple/photographs/"  
  },
  {
    templeName: "Porto Alegre Temple",
    location: "Porto Alegre, Brazil",
    dedicated: "1998, May, 2",
    area: 10700,
    imageUrl:
 "https://churchofjesuschristtemples.org/porto-alegre-brazil-temple/photographs/"
    },
  {
    templeName: "Campinas Brazil Temple",
    location: "Campinas, Brazil",
    dedicated: "1998, May, 1",
    area: 48100,
    imageUrl:
 "https://churchofjesuschristtemples.org/campinas-brazil-temple/photographs/"

  }
];

function displayTemples(templeList) {
    const container = document.getElementById("templesContainer");
    container.innerHTML = ""; // Clear previous content

    templeList.forEach(temple => {
        const templeCard = document.createElement("div");
        templeCard.classList.add("temple-card");

        templeCard.innerHTML = `
            <h2>${temple.templeName}</h2>
            <p><strong>Location:</strong> ${temple.location}</p>
            <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
            <p><strong>Area:</strong> ${temple.area} sq ft</p>
            <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
        `;

        container.appendChild(templeCard);
    });
}

// Initial display
displayTemples(temples);

function filterTemples(filterType) {
    let filteredTemples;
    switch (filterType) {
        case "old":
            filteredTemples = temples.filter(temple => parseInt(temple.dedicated.split(",")[0]) < 1900);
            break;
        case "new":
            filteredTemples = temples.filter(temple => parseInt(temple.dedicated.split(",")[0]) > 2000);
            break;
        case "large":
            filteredTemples = temples.filter(temple => temple.area > 90000);
            break;
        case "small":
            filteredTemples = temples.filter(temple => temple.area < 10000);
            break;
        default:
            filteredTemples = temples; // Show all temples
    }
    displayTemples(filteredTemples);
}

document.getElementById("old").addEventListener("click", () => filterTemples("old"));
document.getElementById("new").addEventListener("click", () => filterTemples("new"));
document.getElementById("large").addEventListener("click", () => filterTemples("large"));
document.getElementById("small").addEventListener("click", () => filterTemples("small"));
document.getElementById("home").addEventListener("click", () => displayTemples(temples));




document.getElementById("currentyear").textContent = new Date().getFullYear();

document.getElementById("lastModified").textContent = `Last modified: ${document.lastModified}`;