document.querySelector('a[href="#Contact"]').addEventListener('click', function (e) {
    e.preventDefault(); // Empêche le comportement de lien par défaut

    const target = document.querySelector('#Contact');
    const offset = target.getBoundingClientRect().top + window.scrollY;
    const duration = 1000; // Durée de l'animation en millisecondes (1 seconde)

    window.scrollTo({
        top: offset,
        behavior: 'smooth', // Active l'animation en douceur
        duration: duration
    });
});