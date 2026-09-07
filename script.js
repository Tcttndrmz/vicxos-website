const menuButton = document.querySelector('.menu-button');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileClose = document.querySelector('.mobile-close');
const mobileLinks = [...document.querySelectorAll('.mobile-menu a')];
const modal = document.querySelector('.video-modal');
const modalVideo = modal.querySelector('video');
const modalClose = document.querySelector('.modal-close');

function openMenu(){
  mobileMenu.classList.add('open');
  mobileMenu.setAttribute('aria-hidden','false');
  menuButton.setAttribute('aria-expanded','true');
  document.body.style.overflow = 'hidden';
}
function closeMenu(){
  mobileMenu.classList.remove('open');
  mobileMenu.setAttribute('aria-hidden','true');
  menuButton.setAttribute('aria-expanded','false');
  document.body.style.overflow = '';
}
menuButton?.addEventListener('click', openMenu);
mobileClose?.addEventListener('click', closeMenu);
mobileLinks.forEach(link => link.addEventListener('click', closeMenu));

const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
},{threshold:.12});

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

document.querySelectorAll('.video-card').forEach(card => {
  card.addEventListener('click', async () => {
    const src = card.dataset.video;
    modal.classList.remove('missing');
    modal.classList.add('open');
    modal.setAttribute('aria-hidden','false');
    document.body.style.overflow = 'hidden';
    modalVideo.src = src;
    try {
      await modalVideo.play();
    } catch {
      modal.classList.add('missing');
    }
  });
});

function closeVideo(){
  modal.classList.remove('open','missing');
  modal.setAttribute('aria-hidden','true');
  modalVideo.pause();
  modalVideo.removeAttribute('src');
  modalVideo.load();
  document.body.style.overflow = '';
}
modalClose?.addEventListener('click', closeVideo);
modal?.addEventListener('click', e => { if(e.target === modal) closeVideo(); });

document.addEventListener('keydown', e => {
  if(e.key === 'Escape'){
    closeMenu();
    if(modal.classList.contains('open')) closeVideo();
  }
});

document.getElementById('year').textContent = new Date().getFullYear();
