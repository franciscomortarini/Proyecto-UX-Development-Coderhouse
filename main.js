const button = document.querySelector('button');
const nav = document.querySelector('nav');
button.addEventListener('click', () => {
    nav.classList.add('navslide')
};

function openNav () {
    header.classList.add("menu-open)";
  }
  
  
  function closeNav () {
    header.classList.remove("menu-open");
  }