// Mobiel menu openen/sluiten
const toggle = document.querySelector('.nav-toggle');
const menu = document.getElementById('hoofdmenu');
if (toggle && menu) {
  toggle.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
  });
}

// Jaartal in de footer
const jaar = document.getElementById('jaar');
if (jaar) jaar.textContent = new Date().getFullYear();
