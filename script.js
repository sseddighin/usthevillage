const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
const mobileViewport = window.matchMedia('(max-width: 760px)');

function setMenu(open) {
  menuButton.setAttribute('aria-expanded', String(open));
  navigation.dataset.collapsed = String(mobileViewport.matches && !open);
}

menuButton.hidden = false;
setMenu(false);
menuButton.addEventListener('click', () => {
  setMenu(menuButton.getAttribute('aria-expanded') !== 'true');
});
mobileViewport.addEventListener('change', () => setMenu(false));
navigation.addEventListener('click', (event) => {
  if (event.target.closest('a')) setMenu(false);
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
    setMenu(false);
    menuButton.focus();
  }
});

document.querySelectorAll('[data-interest]').forEach((link) => {
  link.addEventListener('click', () => {
    document.querySelector('#contact-interest').textContent =
      `Interested in ${link.dataset.interest.toLowerCase()}? We’d love to connect.`;
  });
});
document.querySelector('#year').textContent = new Date().getFullYear();
