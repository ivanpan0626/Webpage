const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');

const mobileMenu = () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

const highlightMenu = () => {
  const elem = document.querySelector('.highlight');
  const introMenu = document.querySelector('#intro-page');
  const projectMenu = document.querySelector('#project-page');
  //const aboutmeMenu = document.querySelector('#aboutme-page');
  let scrollPos = window.scrollY;
  // console.log(scrollPos);

  /*if (window.innerWidth > 960 && scrollPos < 600) {
    introMenu.classList.add('highlight');
    projectMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 1400) {
    projectMenu.classList.add('highlight');
    introMenu.classList.remove('highlight');
    aboutmeMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 2345) {
    aboutmeMenu.classList.add('highlight');
    projectMenu.classList.remove('highlight');
    return;
  }*/

  /*if ((elem && window.innerWIdth < 960 && scrollPos < 600) || elem) {
    elem.classList.remove('highlight');
  }
};*/

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

const hideMobileMenu = () => {
  const menuBars = document.querySelector('.is-active');
  if (window.innerWidth <= 768 && menuBars) {
    menu.classList.toggle('is-active');
    menuLinks.classList.remove('active');
  }
};

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);
