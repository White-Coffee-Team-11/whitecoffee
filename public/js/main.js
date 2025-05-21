console.log("JS loaded");

const url = "https://fuhivjttnnnmjsbwnrcn.supabase.co";
const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ1aGl2anR0bm5ubWpzYnducmNuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc3OTczNTUsImV4cCI6MjA2MzM3MzM1NX0.x_2Eu1hHj-x_7TacO5SopIqOrc8030A1NXhpY8GeL2k";

fetch(`${url}/rest/v1/bestseller_products`, {
  method: "GET",
  headers: {
    apikey: key,
    Authorization: `Bearer ${key}`,
  },
})
  .then((res) => res.json())
  .then((items) => showData(items));

function showData(products) {
  const grid = document.querySelector(".product-grid");
  const counter = document.querySelector(".products-flex p");
  if (!grid || !counter) return;

  counter.textContent = `${products.length} products`;

  grid.innerHTML = products
    .map(
      (product) => `
      <div class="card">
        <div class="image-wrapper">
          <a href="#">
            <img src="${product.image}" alt="${product.name}" class="main-img" />
            <img src="${product.hoverimage}" alt="${product.name} side" class="hover-img" />
          </a>
        </div>
        <div class="card-info">
          <a href="#"><h3>${product.name}</h3></a>
          <p>${product.price},00 kr</p>
          <button>ADD TO CART</button>
        </div>
      </div>
    `
    )
    .join("");
}
