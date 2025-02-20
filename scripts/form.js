const currentYear = new Date().getFullYear();
document.getElementById('currentYear').textContent = currentYear;

const lastModified = document.lastModified;
document.getElementById('lastModified').textContent = lastModified;

const products = [
    {id: "goggles", name: "Goggles"},
    {id: "mask", name: "Mask"},
    {id: "helmet", name: "Helmet"},
    {id: "jacket", name: "Jacket"},
    {id: "pants", name: "Pants"}
];

function populateProductDropdown() {
    const productSelect = document.getElementById("product");

    products.forEach(product => {
        let option = document.createElement("option");
        option.value = product.id;
        option.textContent = product.name;
        productSelect.appendChild(option);
    });
}

document.addEventListener("DOMContentLoaded", populateProductDropdown)

function updateReviewCounter() {
    let count = localStorage.getItem("reviewCount") || 0;
    count++;
    localStorage.setItem("reviewCount", count);
    alert(`Thanks! You've submitted ${count} review(s).`);
}

document.addEventListener("DOMContentLoaded", () => {
    const reviewForm = document.querySelector("form");

    reviewForm.addEventListener("submit", function (event) {
        event.preventDefault();
        updateReviewCounter();
        this.submit();
    });
});