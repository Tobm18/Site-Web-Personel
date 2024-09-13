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

// Alternance
const alternanceLinks = document.querySelectorAll('a[href="#alternance"]');
alternanceLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector("#alternance");
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
    const vh = Math.max(
      document.documentElement.clientHeight || 0,
      window.innerHeight || 0
    );
    const offsetWithVh = offset - 0.12 * vh; // 12vh
    const duration = 1;

    window.scrollTo({
      top: offsetWithVh,
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
    const vh = Math.max(
      document.documentElement.clientHeight || 0,
      window.innerHeight || 0
    );
    const offsetWithVh = offset - 0.12 * vh; // 12vh
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
    const offsetWithVh = offset - 0.09 * vh; // 9vh
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
    boutonTop.style.display = "none"; 
  } else {
    boutonTop.style.display = "block"; 
  }
});

// Change color top bar

const topMenu = document.querySelector(".menu-inline");
const topMenuPhone = document.querySelector(".banner");
const navPhone = document.querySelector("#sideNav");

window.addEventListener("scroll", () => {
  if (window.scrollY >= window.innerHeight * 1.99) {
    topMenu.style.background = "var(--blue1)";
  } else {
    topMenu.style.background = "var(--grey)";
  }
});

window.addEventListener("scroll", () => {
  if (window.scrollY >= window.innerHeight * 1.99) {
    topMenuPhone.style.background = "var(--blue1)";
    navPhone.style.background = "rgb(55 84 108 / 85%)";
  } else {
    topMenuPhone.style.background = "var(--grey)";
    navPhone.style.background = "rgb(18 18 18 / 80%)";
  }
});

// Scroll accueil

document.addEventListener("DOMContentLoaded", () => {
  let isScrolling = false;
  let lastScrollY = window.scrollY; // Variable pour stocker la position de défilement précédente
  let isNavClick = false; // Variable pour suivre si un lien de navigation a été cliqué

  const preventScroll = (event) => {
    event.preventDefault();
  };

  const disableScroll = () => {
    // Désactiver le scroll manuel tout en conservant la barre de défilement visible
    window.addEventListener("wheel", preventScroll, { passive: false });
    window.addEventListener("touchmove", preventScroll, { passive: false });
  };

  const enableScroll = () => {
    // Réactiver le scroll manuel
    window.removeEventListener("wheel", preventScroll, { passive: false });
    window.removeEventListener("touchmove", preventScroll, { passive: false });
  };

  // Ajouter un écouteur d'événements pour les clics sur les liens de navigation
  document.querySelectorAll("a[href^='#']").forEach(link => {
    link.addEventListener("click", () => {
      isNavClick = true;
      setTimeout(() => {
        isNavClick = false;
      }, 1000); // Désactiver le drapeau après 1 seconde
    });
  });

  window.addEventListener("scroll", () => {
    if (isNavClick) return; // Ne pas exécuter si un lien de navigation a été cliqué

    const vh = Math.max(
      document.documentElement.clientHeight || 0,
      window.innerHeight || 0
    );

    const currentScrollY = window.scrollY; 
    const scrollDown = currentScrollY > lastScrollY;
    lastScrollY = currentScrollY; 

    // Réinitialiser le drapeau si la page est tout en haut
    if (window.scrollY === 0) {
      isScrolling = false; 
      enableScroll(); 
      return; 
    }

    if (isScrolling) return; // Ne pas exécuter si l'animation est en cours

    if (currentScrollY < vh && scrollDown) {
      // Scroll vers le bas quand on est en haut de la page
      isScrolling = true;
      disableScroll(); 

      const target = document.querySelector("#alternance");
      const offset = target.getBoundingClientRect().top + window.scrollY;
      const offsetWithVh = offset - 0.1 * vh; // 10vh
      const duration = 1;

      gsap.to(window, {
        duration: duration,
        scrollTo: {
          y: offsetWithVh,
          autoKill: false,
        },
        ease: "power4.inOut",
        onComplete: () => {
          enableScroll();
        },
      });
    }
  });
});