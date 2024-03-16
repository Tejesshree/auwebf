document.addEventListener("DOMContentLoaded", function () {
  const servicesItems = document.querySelectorAll(".services");

  servicesItems.forEach(function (item) {
    const dropdown = item.querySelector(".dropdown");

    item.addEventListener("mouseenter", function () {
      dropdown.style.display = "block";
    });

    item.addEventListener("mouseleave", function () {
      dropdown.style.display = "none";
    });
  });
});
