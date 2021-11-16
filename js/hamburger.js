const burger = document.getElementById('burger');
const nav = document.getElementById('nav');
const active = 'active';

function toggleMenu() {
    nav.classList.toggle(active);
    nav.setAttribute('aria-expanded', nav.classList.contains(active));
    
}

burger.addEventListener('click', toggleMenu);
