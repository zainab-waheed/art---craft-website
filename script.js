// Cart functionality
let cart = [];
const cartCount = document.getElementById("cartCount");

document.querySelectorAll(".add-to-cart").forEach(button => {
  button.addEventListener("click", () => {
    const productName = button.getAttribute("data-name");
    cart.push(productName);
    cartCount.textContent = cart.length;
    alert(productName + " added to cart!");
  });
});


// Smooth scrolling is handled by CSS (scroll-behavior: smooth)
// Background Slider
const homeSection = document.querySelector(".home-section");
const images = [
  "assets/back.jpg",
  "assets/back3.jpg"
];
let currentIndex = 0;

// Show image function
function showImage(index) {
  homeSection.style.backgroundImage = `url(${images[index]})`;
  homeSection.style.backgroundRepeat = "no-repeat";
  homeSection.style.backgroundPosition = "center";
  homeSection.style.backgroundSize = "cover";
}

// Next/Prev buttons
document.querySelector(".next").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
});

document.querySelector(".prev").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
});

// Initialize first image
showImage(currentIndex);
// Enable Bootstrap tooltips
document.addEventListener("DOMContentLoaded", function () {
  let tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  let tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
  })
});
