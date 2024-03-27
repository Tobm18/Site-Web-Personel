var sidenav = document.getElementById("sideNav");
var openBtn = document.getElementById("openBtn");
var isNavOpen = false; // Variable pour suivre l'état du menu

// Ouvrir ou fermer le menu lors du clic sur le bouton
openBtn.addEventListener("click", function (event) {
  event.preventDefault();
  if (isNavOpen) {
    closeNav();
  } else {
    openNav();
  }
});

// Fermer le menu lors du clic en dehors du menu
document.addEventListener("click", function (event) {
  if (
    isNavOpen &&
    !sidenav.contains(event.target) &&
    !openBtn.contains(event.target)
  ) {
    closeNav();
  }
});

// Fermer le menu lors du défilement de la page
window.addEventListener("scroll", function () {
  if (isNavOpen) {
    closeNav();
  }
});

function openNav() {
  sidenav.classList.add("active");
  isNavOpen = true;
}

function closeNav() {
  sidenav.classList.remove("active");
  isNavOpen = false;
}
