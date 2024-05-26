let nav_toggle = document.querySelector('.nav_toggle');
let nav_toggle_icon = document.querySelector('.nav_toggle ion-icon');
let nav_menu = document.querySelector('.nav_menu');

nav_toggle.addEventListener('click', () => {
  nav_menu.classList.toggle('active');
  nav_toggle_icon.setAttribute('name',
    nav_menu.classList.contains('active') ? 'close-outline' : 'menu-outline'
  );
});


document.addEventListener("DOMContentLoaded", () => {
  const dropdownToggle = document.getElementById("dropdownToggle");
  const dropdownMenu = document.getElementById("dropdownMenu");
  const arrow = document.getElementById("arrow");

  dropdownToggle.addEventListener("click", () => {
    dropdownMenu.style.display =
      dropdownMenu.style.display === "block" ? "none" : "block";
    arrow.classList.toggle("rotate");
  });

  // Optional: Close the dropdown if clicked outside of it
  document.addEventListener("click", (event) => {
    if (!event.target.closest(".dropdown")) {
      dropdownMenu.style.display = "none";
      arrow.classList.remove("rotate");
    }
  });
});
