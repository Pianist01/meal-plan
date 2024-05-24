
// export function generateTitle() {
//   const btn = document.querySelector('button');
//   btn.addEventListener('click', () => {
//   const input = document.getElementById('#input-value').value;
//   const container = document.querySelector('#container');
//   const title = document.createElement('h1');
//   title.classList.add('head');
//   title.textContent = input;
//   container.appendChild(title);
//   });
// }

const container = document.querySelector('.container');

const firstName = document.getElementById('input-value');

const btn = document.querySelector('button');



function makeTitle() {
  btn.addEventListener('click', (e) => {
    e.preventDefault();

    const userName = firstName.value;
  
    localStorage.setItem('first-name', userName);

    window.location.href = 'plan.html';
  });
}

makeTitle();