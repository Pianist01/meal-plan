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

    // window.location.href = 'plan.html';
  });
}

makeTitle();

function nameFadeOut() {
  btn.addEventListener('click', () => {
    let opacity = 1;
  let interval = setInterval(function() {
    if (opacity > 0) {
      opacity -= 0.1;
      container.style.opacity = opacity;
    } else {
      clearInterval(interval);
      container.style.display = 'none';
    }
  }, 50);
  });
}

nameFadeOut();

function getWeight() {
  btn.addEventListener('click', (e) => {
    e.preventDefault();

    const secondContainer = document.querySelector('.containertwo');

    const userWeight = document.createElement('p');
    userWeight.classList.add('weightinfo');
    userWeight.textContent = 'How Much Do You Weigh?'
    
    const weight = document.createElement('input');
    weight.classList.add('weight');
    weight.placeholder = '500lbs';

    const submitTow = document.createElement('button');
    submitTow.classList.add('weightbtn');
    submitTow.textContent = 'Submit';

    secondContainer.append(userWeight, weight, submitTow);


    submitTow.addEventListener('click', () => {
      
      let weightValue = weight.value + ' lbs';

      localStorage.setItem('weight', weightValue);
      window.location.href = 'plan.html';
    });

  });
}

getWeight();