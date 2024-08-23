// Retrieving Stored Data and converting it back to an array
let getData = localStorage.getItem('personData');

let stringToArray = JSON.parse(getData);

// Selecting container, h1, and p tag
const container = document.querySelector('.container');

const title = document.createElement('h1');

const guide = document.querySelector('.guide');

// Button creation
const guideButton = document.createElement('button');
guideButton.classList.add('btn-guide');
guideButton.textContent = 'Next';

// Variables to keep track of clicks, index in arrays, and variable for form
let clicks = 0;

let index = 0;

let choiceForm= '';

let choiceIndex = -1;

// Class Object
class person {
    constructor(name, weight, height, age, goal) {
        this.name = name,
        this.weight = weight,
        this.height = height,
        this.age = age,
        this.goal = goal
    };
   }

const user = new person(...stringToArray);

// Arrays holding strings that will be shown to user, along with choices for users down the line
const infoArray = ['', `It Seems Like You Want To ${user.goal} Weight ${user.name}`, 'We Can Help You With That!', `But First I Need To Know How Much You Want To ${user.goal}`, 'Choose Your Ideal Goal:', 'Great! Let\'s Get This Show On The Road!'];
const choiceArray = ['Lose 2lbs/Week', 'Lose 1lbs/Week', 'Lose 0.5lbs/Week', 'Maintain Weight', 'Gain 0.5lbs/Week', 'Gain 1lbs/Week', 'Gain 2lbs/Week'];

// Adding title and button to container, along with changing the position of the p tag
container.append(title, guideButton);
title.insertAdjacentElement('afterend', guide);

// Filling in what the title and p tag will display when page is first loaded
title.textContent = user.name + "'s" + ' ' + 'Meal Plan';
guide.textContent = `Welcome To Your Personalized Meal Plan ${user.name}`;

// Function controlling what is displayed after each click
function userAdvice() {
    guideButton.addEventListener('click', (e) => {
        e.preventDefault();

        // Keeping track of clicks
        clicks += 1;

        // Going through each elment in array and using it as the text for p tag
        index = (index + 1) % infoArray.length;
        guide.textContent = infoArray[index];

        // After 4 clicks, a series of options are generated for the user to choose from
        if (clicks === 4) {

            choiceForm = document.createElement('form');

            choiceArray.forEach((option) => {
                const choiceLabel = document.createElement('label');
                choiceLabel.textContent = option;

                const choice = document.createElement('input');
                choice.classList.add('btn-radio');
                choice.type = 'radio';
                choice.name = 'weight';

                choiceForm.append(choiceLabel, choice);
                container.append(choiceForm);
            });
        }

        console.log(clicks);
    });
}
userAdvice();
console.log(user);
