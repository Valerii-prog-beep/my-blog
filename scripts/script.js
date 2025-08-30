const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('#nav'); // Исправлено!

menuButton.addEventListener('click', function() {
  nav.classList.toggle('visible');
});

    