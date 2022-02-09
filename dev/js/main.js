const navSlide = () => {
  const burger = document.querySelector(".menu-burger");
  const nav = document.querySelector(".navslide");

  // ajoute une classe au click sur les element seletionner ci-dessus
  burger.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
  nav.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
};

const navColorChanging = () => {
  let posScrollPre = window.pageYOffset;

  window.onscroll = function () {
    let posScrollNow = window.pageYOffset;
    let topPage = (window.scrollY = 0);
    const preNav = document.querySelector(".pre-nav");
    const nav = document.querySelector("nav");

    if (posScrollPre < posScrollNow) {
      nav.classList.add("active");
      preNav.classList.add("active");
    } else if (posScrollNow == topPage) {
      nav.classList.remove("active");
      preNav.classList.remove("active");
      nav.style.background = "background:rgba(255, 255, 255, 0.199)";
    }

    posScrollPre = posScrollNow;
  };
};

// AU CAS OU ON A PLUSIEURS FONCTIONS
const app = () => {
  navSlide();
  navColorChanging();
};
// APPEL DE LA FONCTION APP POUR EFFECTUER TOUTES NOS FONCTIONS
app();
