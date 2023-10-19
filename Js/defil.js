document.querySelector('a[href="#Contact"]').addEventListener('click', function (e) {
    e.preventDefault(); // Empecher le comportement de lien normal

    const target = document.querySelector('#Contact');
    const offset = target.getBoundingClientRect().top + window.scrollY;
    const duration = 1000; // Durée de l'animation en millisecondes

    window.scrollTo({
        top: offset,
        behavior: 'smooth', // Type d'annimation
        duration: duration
    });
});


document.querySelector('.menu-incolumn a[href="#Contact"]').addEventListener('click', function (e) {
    e.preventDefault(); 

    const target = document.querySelector('#Contact');
    const offset = target.getBoundingClientRect().top + window.scrollY;
    const duration = 1000; 
    window.scrollTo({
        top: offset,
        behavior: 'smooth', 
        duration: duration
    });
});


document.querySelector('a[href="#Top"]').addEventListener('click', function (e) {
    e.preventDefault();

    const target = document.querySelector('#Top');
    const offset = target.getBoundingClientRect().top + window.scrollY;
    const duration = 1000; 

    window.scrollTo({
        top: offset,
        behavior: 'smooth',
        duration: duration
    });
});


const boutonTop = document.querySelector('.bouton-top');

window.addEventListener('scroll', () => {
    if (window.scrollY === 0) {
        boutonTop.style.display = 'none'; // Cacher la fleche
    } else {
        boutonTop.style.display = 'block'; // Afficher la fleche
    }
});