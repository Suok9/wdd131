
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", () => {
    
    navMenu.classList.toggle("show");

    
    if (navMenu.classList.contains("show")) {
        menuToggle.textContent = "✖";
    } else {
        menuToggle.textContent = "☰";
    }
});


document.getElementById("currentyear").textContent = new Date().getFullYear();

document.getElementById("lastModified").textContent = `Last modified: ${document.lastModified}`;