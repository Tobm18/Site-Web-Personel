var conteneurs = document.querySelectorAll(".conteneur");
conteneurs.forEach(function(conteneur) {
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

/*
const imgDivs = document.querySelectorAll('.front');
const containerDivs = document.querySelectorAll('.container-3d');

imgDivs.forEach((imgDiv, index) => {
    const destinationDiv = containerDivs[index];
    // Copy width
    destinationDiv.style.width = getComputedStyle(imgDiv).width;
    // Copy height
    destinationDiv.style.height = getComputedStyle(imgDiv).height;
});

const backDivs = document.querySelectorAll('.back');

imgDivs.forEach((imgDiv, index) => {
    const destinationDiv = backDivs[index];
    // Copy width
    destinationDiv.style.width = getComputedStyle(imgDiv).width;
    // Copy height
    destinationDiv.style.height = getComputedStyle(imgDiv).height;
});
*/