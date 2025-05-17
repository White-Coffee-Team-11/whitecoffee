document.addEventListener("DOMContentLoaded", () => {
  const burger = document.getElementById("burger");
  const menu = document.querySelector(".mobile-menu");

  if (!burger || !menu) return;

  burger.addEventListener("click", () => {
    burger.classList.toggle("open");
    menu.classList.toggle("active");
  });
});
