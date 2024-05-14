const input = document.querySelector('#input-value');

export const message = 'HEllo';

export const btn = document.querySelector('button');

export let event = btn.addEventListener('click', () => {
  const title = document.createElement('h1');
  title.classList.add('head');
  title.textContent = 'Test';
  container.appendChild(title);
});