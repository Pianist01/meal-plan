const container = document.querySelector('.container');

let firstName = document.getElementById('input-value');

const btn = document.querySelector('button');



function makeTitle() {
  btn.addEventListener('click', (e) => {
    e.preventDefault();

    let total = '';

    let userName = firstName.value + '\'s Meal Plan';
    if (firstName.value === 'Eden') {
      let total = 'Edensito\'s Meal Plan';
      userName = total;
    } else if (firstName.value === 'eden') {
      let total = 'Edensito\'s Meal Plan';
      userName = total;
    }
  
    localStorage.setItem('first-name', userName);

    window.location.href = 'plan.html';
  });
}

function getWeight() {
  
}

makeTitle();