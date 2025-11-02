// ====== Fetch hamburger and menu elements ======
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

// ====== Toggle active class on click ======
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  menu.classList.toggle('active');
});
