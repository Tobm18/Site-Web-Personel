gsap.registerPlugin(ScrollToPlugin);

// Accueil

document
  .querySelector('a[href="#Accueil"]')
  .addEventListener("click", function (e) {
    e.preventDefault(); // Empecher le comportement de lien normal

    const target = document.querySelector("#Accueil");
    const offset = target.getBoundingClientRect().top + window.scrollY;
    const duration = 1; // Durée de l'animation

    gsap.to(window, {
      duration: duration,
      scrollTo: {
        y: offset,
        autoKill: false,
      },
      ease: "power4.inOut",
    });
  });

document
  .querySelector('.menu-incolumn a[href="#Accueil"]')
  .addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector("#Accueil");
    const offset = target.getBoundingClientRect().top + window.scrollY;
    const duration = 1;
    gsap.to(window, {
      duration: duration,
      scrollTo: {
        y: offset,
        autoKill: false,
      },
      ease: "power4.inOut",
    });
  });

// Contact

document
  .querySelector('a[href="#Contact"]')
  .addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector("#Contact");
    const offset = target.getBoundingClientRect().top + window.scrollY;
    const duration = 1;

    window.scrollTo({
      top: offset,
      duration: duration,
      behavior: "smooth",
    });
  });

document
  .querySelector('.menu-incolumn a[href="#Contact"]')
  .addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector("#Contact");
    const offset = target.getBoundingClientRect().top + window.scrollY;
    const duration = 1;

    window.scrollTo({
      top: offset,
      duration: duration,
      behavior: "smooth",
    });
  });

// Réalisation

document
  .querySelector('a[href="#realisation"]')
  .addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector("#realisation");
    const offset = target.getBoundingClientRect().top + window.scrollY;
    const vh = Math.max(
      document.documentElement.clientHeight || 0,
      window.innerHeight || 0
    );
    const offsetWithVh = offset - 0.1 * vh; // 10vh
    const duration = 1;

    gsap.to(window, {
      duration: duration,
      scrollTo: {
        y: offsetWithVh,
        autoKill: false,
      },
      ease: "power4.inOut",
    });
  });

document
  .querySelector('.menu-incolumn a[href="#realisation"]')
  .addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector("#realisation");
    const offset = target.getBoundingClientRect().top + window.scrollY;
    const duration = 1;

    gsap.to(window, {
      duration: duration,
      scrollTo: {
        y: offset,
        autoKill: false,
      },
      ease: "power4.inOut",
    });
  });

// Timeline

document
  .querySelector('a[href="#About"]')
  .addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector("#About");
    const offset = target.getBoundingClientRect().top + window.scrollY;
    const vh = Math.max(
      document.documentElement.clientHeight || 0,
      window.innerHeight || 0
    );
    const offsetWithVh = offset - 0.09 * vh; // 10vh
    const duration = 1;

    gsap.to(window, {
      duration: duration,
      scrollTo: {
        y: offsetWithVh,
        autoKill: false,
      },
      ease: "power4.inOut",
    });
  });

document
  .querySelector('.menu-incolumn a[href="#About"]')
  .addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector("#About");
    const offset = target.getBoundingClientRect().top + window.scrollY;
    const duration = 1;

    gsap.to(window, {
      duration: duration,
      scrollTo: {
        y: offset,
        autoKill: false,
      },
      ease: "power4.inOut",
    });
  });

// Bouton Top

document
  .querySelector('a[href="#Top"]')
  .addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector("#Top");
    const offset = target.getBoundingClientRect().top + window.scrollY;
    const duration = 1000;

    window.scrollTo({
      top: offset,
      duration: duration,
      behavior: "smooth",
    });
  });

const boutonTop = document.querySelector(".bouton-top");

window.addEventListener("scroll", () => {
  if (window.scrollY === 0) {
    boutonTop.style.display = "none"; // Cacher la fleche
  } else {
    boutonTop.style.display = "block"; // Afficher la fleche
  }
});

// Change color top bar

const topMenu = document.querySelector(".menu-inline");
const topMenuPhone = document.querySelector(".banner");

window.addEventListener("scroll", () => {
  if (window.scrollY === 0) {
    topMenu.style.background = "rgba(0, 0, 0, 0.25)";
  } else {
    topMenu.style.background = "rgb(34 34 34)";
  }
});

window.addEventListener("scroll", () => {
  if (window.scrollY === 0) {
    topMenuPhone.style.background = "rgba(0, 0, 0, 0.7)";
  } else {
    topMenuPhone.style.background = "rgb(34 34 34)";
  }
});
