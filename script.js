const button = document.getElementById('logoButton');
const buttonText = document.getElementById('buttonText');

let active = false;

button?.addEventListener('click', () => {
  active = !active;
  button.classList.toggle('is-active', active);
  buttonText.textContent = active ? '¡Listo!' : 'Iniciar';
});
