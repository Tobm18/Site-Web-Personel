const texts = [
  "Étudiant en BUT-2 Réseaux et Télécommunications à l'université Nice Côte d'Azur",
  "Apprentis technicien informatique chez ProBTP"
];
let currentIndex = 0;
const textElement = document.getElementById("alternating-text");

function typeText(text, callback) {
  let index = 0;
  textElement.innerHTML = "";
  const interval = setInterval(() => {
    textElement.innerHTML += text[index];
    index++;
    if (index === text.length) {
      clearInterval(interval);
      if (callback) callback();
    }
  }, 50); // Adjust typing speed here
}

function startAlternatingText() {
  typeText(texts[currentIndex], () => {
    setTimeout(() => {
      currentIndex = (currentIndex + 1) % texts.length;
      startAlternatingText();
    }, 5000); // Wait 5 seconds before changing text
  });
}

document.addEventListener("DOMContentLoaded", startAlternatingText);