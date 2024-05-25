const chooseName = localStorage.getItem('first-name');

const chooseWeight = localStorage.getItem('weight');

document.querySelector('#title').textContent = chooseName;

document.querySelector('.info'). textContent = chooseWeight;