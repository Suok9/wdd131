const products = [
  { id: "product1", name: "Phone" },
  { id: "product2", name: "Laptop" },
  { id: "product3", name: "Headphones" },
  { id: "product4", name: "Smartwatch" },
  { id: "product5", name:"Flashdrive"}
];


document.addEventListener("DOMContentLoaded", () => {
  const select = document.getElementById("productName");
  products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.name;
    option.textContent = product.name;
    select.appendChild(option);
  });

  
  document.getElementById("year").textContent = new Date().getFullYear();
  document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;
});