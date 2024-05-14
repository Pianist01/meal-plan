const input = document.querySelector('#input-value');

const container = document.querySelector('#maincontainer');

const btn = document.querySelector('button');

btn.addEventListener('click', () => {
  const title = document.createElement('h1');
  title.classList.add('head');
  title.textContent = 'Test';
  container.appendChild(title);
});