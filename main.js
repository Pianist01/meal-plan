const container = document.querySelector('.container');
const secondContainer = document.querySelector('.containertwo');
const thirdContainer = document.querySelector('.containerthree');

let firstName = document.getElementById('input-value');
firstName.style.opacity = '1';

const btn = document.querySelector('button');
btn.style.opacity = '1';

const nameQuestion = document.querySelector('.prompt');
nameQuestion.style.opacity = 1;

let count = 0;

function updateScreen() {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    count++;
    if (count === 1) {
      makeTitle();
      getWeight();
    } else if (count === 2) {
      getHeight();
    } else if (count === 3) {
      getAge();
    } else if (count === 4) {
      getGoal();
    } else if (count === 5) {
      window.location.href = 'plan.html';
    }
  });
}

updateScreen();

function makeTitle() {

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
}

// makeTitle();

// function fadeOut() {
//   btn.addEventListener('click', () => {
//     if (firstName.style.opacity === '1') {
//       firstName.style.opacity = '0';
//       firstName.style.transition = 'opacity 1500ms';
//     }

//     if (nameQuestion.style.opacity === '1') {
//       nameQuestion.style.opacity = '0';
//       nameQuestion.style.transition = 'opacity 1500ms';
//     }

//     if (btn.style.opacity === '1') {
//       btn.style.opacity = '0';
//       btn.style.transition = 'opacity 1500ms';
//     }
//   });
// }

// function fadeIn() {
//   btn.addEventListener('click', () => {
//     if (btn.style.opacity === '0') {
//       btn.style.opacity = '1';
//       btn.style.transition = 'opacity 1500ms';
//     }
//   });
// } 

// fadeOut();

function getWeight() {
    nameQuestion.textContent = 'How Much Do You Weigh?';
    if (nameQuestion.style.opacity === 0) {
      fadeIn();
    }
    firstName.value = '';
    firstName.placeholder = '500 lbs';

    let userWeight = firstName.value;

    localStorage.setItem('weight-info', userWeight);
}

// getWeight();

function getHeight() {
    nameQuestion.textContent = 'How tall are you?';
    firstName.value = '';
    firstName.placeholder = '3\'8';
}

function getAge() {
  nameQuestion.textContent = 'How old are you?';
  firstName.value = '';
  firstName.placeholder = '69';
}

function getGoal() {
  nameQuestion.textContent = 'Want to gain or lose weight?';
  firstName.value = '';
  firstName.placeholder = 'The choice is up to you!';
}

// function fadeOut(nameQuestion) {
//   nameQuestion.classList.add('fade-out');
//   firstName.classList.add('fade-out');
// }

// function fadeIn() {
//   nameQuestion.classList.remove('fade-out');
//   nameQuestion.classList.add('fade-in');
//   firstName.classList.remove('face-out');
//   firstName.classList.add('fade-in');
// }

// function fadeInNOut() {
//   let timer = setInterval(function() {
//     if (nameQuestion.style.opacity === 1) {
//       fadeOut();
//       clearInterval(timer);
//     } else if (nameQuestion.style.opacity === 0) {
//       fadeIn();
//       clearInterval(timer);
//     }
//   }, 5000);
// }
// getHeight();


// function getWeight() {
//   btn.addEventListener('click', (e) => {
//     e.preventDefault();

//     fadeIn();

//     // const secondContainer = document.querySelector('.containertwo');

//     const userWeight = document.createElement('p');
//     userWeight.classList.add('weightinfo');
//     userWeight.textContent = 'How Much Do You Weigh?';
    
//     const weight = document.createElement('input');
//     weight.classList.add('weight');
//     weight.placeholder = '500lbs';

//     // const submitTwo = document.createElement('button');
//     // submitTwo.classList.add('weightbtn');
//     // submitTwo.textContent = 'Submit';

//     container.append(userWeight, weight);
//     // submitTwo.addEventListener('click', () => {

//     //   let opacityTwo = 1
//     //   let intervalTwo = setInterval(function() {
//     //     if (opacityTwo > 0) {
//     //       opacityTwo -= 0.1;
//     //       secondContainer.style.opacity = opacityTwo;
//     //     } else {
//     //       clearInterval(intervalTwo);
//     //       secondContainer.style.display = 'none';
//     //     }
//     //   }, 50);
      
//     //   let weightValue = weight.value + ' lbs';

//     //   localStorage.setItem('weight', weightValue);

//     //   getHeight();
//     // });

//   });
// }

// getWeight();

// function getHeight() {
//   submitTwo.addEventListener('click', (e) => {
//     e.preventDefault();

//     const userHeight = document.createElement('p');
//     userHeight.classList.add('heightinfo');
//     userHeight.textContent = 'How Tall Are You?';

//     thirdContainer.append(userHeight);
//   });
// }