const openButton = document.getElementById('open-letter');
const closeButton = document.getElementById('close-letter');
const dialog = document.getElementById('letter-dialog');
const scene = document.querySelector('.scene');

function openLetter() {
  dialog.hidden = false;
  scene.inert = true;
  document.body.style.overflow = 'hidden';
  requestAnimationFrame(() => dialog.classList.add('is-open'));
  closeButton.focus();
}

function closeLetter() {
  dialog.classList.remove('is-open');
  dialog.hidden = true;
  scene.inert = false;
  document.body.style.overflow = '';
  openButton.focus();
}

openButton.addEventListener('click', openLetter);
closeButton.addEventListener('click', closeLetter);
dialog.addEventListener('click', (event) => {
  if (event.target === dialog) closeLetter();
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && !dialog.hidden) closeLetter();
});
