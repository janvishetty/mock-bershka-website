// Dark / Light Mode Toggle
const themeToggle = document.getElementById("themeToggle");
const body = document.body;

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");
  themeToggle.textContent = body.classList.contains("dark") ? "🌙" : "☀️";
});

// Search Filter
const searchInput = document.getElementById("searchInput");
const productCards = document.querySelectorAll(".product-card");

searchInput.addEventListener("keyup", (e) => {
  const searchText = e.target.value.toLowerCase();

  productCards.forEach((card) => {
    const name = card.querySelector(".product-name").textContent.toLowerCase();
    card.style.display = name.includes(searchText) ? "block" : "none";
  });
});

// Shop Now button scroll
const shopBtn = document.querySelector(".shop-btn");
shopBtn.addEventListener("click", () => {
  document.getElementById("productGrid").scrollIntoView({ behavior: "smooth" });
});
