var conteneurs = document.querySelectorAll(".conteneur");
conteneurs.forEach(function (conteneur) {
  conteneur.onclick = cardAction;
});

function cardAction() {
  var card = this.querySelector(".card");
  if (card.classList.contains("rotate")) {
    goFront(card);
  } else {
    goBack(card);
  }
}

function goBack(card) {
  card.classList.add("rotate");
}

function goFront(card) {
  card.classList.remove("rotate");
}
