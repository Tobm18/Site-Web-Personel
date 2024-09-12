document.addEventListener("DOMContentLoaded", () => {
  const link = document.getElementById("bounce-link");

  setInterval(() => {
    link.classList.add("bounce");
    setTimeout(() => {
      link.classList.remove("bounce");
    }, 1500); // Durée de l'animation
  }, 4000); // Intervalle 
});