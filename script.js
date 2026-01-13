const menuToggle = document.getElementById("menuToggle");
const breadcrumbs = document.getElementById("breadcrumbs");

menuToggle.addEventListener("click", () => {
  breadcrumbs.style.display =
    breadcrumbs.style.display === "block" ? "none" : "block";
});
