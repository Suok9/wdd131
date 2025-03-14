// Select the menu toggle button and the navigation menu
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", () => {
    // Toggle the "show" class on the menu
    navMenu.classList.toggle("show");

    // Change icon between ☰ (open) and ✖ (close)
    if (navMenu.classList.contains("show")) {
        menuToggle.textContent = "✖";
    } else {
        menuToggle.textContent = "☰";
    }
});


// 2️⃣ Dynamic Footer Updates
document.getElementById("currentyear").textContent = new Date().getFullYear();

document.getElementById("lastModified").textContent = `Last modified: ${document.lastModified}`;