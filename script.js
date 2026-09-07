const menuButton = document.querySelector('.menu-button');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileClose = document.querySelector('.mobile-close');
const mobileLinks = [...mobileMenu.querySelectorAll('a')];
const background = [...document.querySelectorAll('header, main, footer')];
function openMenu(){
  mobileMenu.inert = false;
  mobileMenu.classList.add('open');
  mobileMenu.setAttribute('aria-hidden','false');
  menuButton.setAttribute('aria-expanded','true');
  background.forEach(el => { el.inert = true; });
  document.body.style.overflow = 'hidden';
  mobileClose.focus();
}
function closeMenu(){
  background.forEach(el => { el.inert = false; });
  menuButton.focus();
  mobileMenu.inert = true;
  mobileMenu.classList.remove('open');
  mobileMenu.setAttribute('aria-hidden','true');
  menuButton.setAttribute('aria-expanded','false');
  document.body.style.overflow = '';
}
menuButton.addEventListener('click', openMenu);
mobileClose.addEventListener('click', closeMenu);
mobileLinks.forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', e => {
  if(!mobileMenu.classList.contains('open')) return;
  if(e.key === 'Escape') closeMenu();
  if(e.key === 'Tab'){
    const last = mobileLinks[mobileLinks.length-1];
    if(e.shiftKey && document.activeElement === mobileClose){ e.preventDefault(); last.focus(); }
    else if(!e.shiftKey && document.activeElement === last){ e.preventDefault(); mobileClose.focus(); }
  }
});
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){ entry.target.classList.add('visible'); observer.unobserve(entry.target); }
  });
}, {threshold:.08});
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
document.getElementById('year').textContent = new Date().getFullYear();
