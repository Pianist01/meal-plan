// Retrieving Stored Data and converting it back to an array
let getData = localStorage.getItem('personData');

let stringToArray = JSON.parse(getData);

// Selecting container, h1, p tag, and body
const container = document.querySelector('.container');

const title = document.createElement('h1');
title.classList.add('meal-title');

const guide = document.querySelector('.guide');
guide.classList.add('meal-guide');

const body = document.querySelector('body');

const newContainer = document.createElement('div');

// Button creation
const guideButton = document.createElement('button');
guideButton.classList.add('btn-guide');
guideButton.textContent = 'Next';

// Variables to keep track of clicks, index in arrays, and variable for form
let clicks = 0;

let index = 0;

let choiceForm= '';

let choiceIndex = -1;

let choice;

let numberOfChoicesToShow;

let limitedChoice;

let colorIndex = 0;

let tableResult;

let tableIndex = 0;

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

if(user.name === 'Eden' || user.name === 'eden') {
    user.name = 'Ed en sito';
}

// Arrays holding strings that will be shown to user, along with choices for users down the line
const infoArray = ['', `It Seems Like You Want To ${user.goal} Weight ${user.name}`, 'We Can Help You With That!', `But First I Need To Know How Much You Want To ${user.goal}`, 'Choose Your Ideal Goal:', 'Great! Let\'s Get This Show On The Road!'];
const choiceArray = ['Lose 2lbs/Week', 'Lose 1lbs/Week', 'Lose 0.5lbs/Week', 'Maintain Weight', 'Gain 0.5lbs/Week', 'Gain 1lbs/Week', 'Gain 2lbs/Week'];

// Calorie Calculation Variables(These will be used later)
const maintainWeight = user.weight * 15;
const loseHalf = maintainWeight - 300;
const losePound = maintainWeight - 500;
const loseTwoPounds = maintainWeight - 1000;
const gainHalf = maintainWeight + 300;
const gainPound = maintainWeight + 500;
const gainTwoPounds = maintainWeight + 1000;

// Array Holding Variables Above And Titles For Each Cell 
const tableArray = [maintainWeight, loseHalf, losePound, loseTwoPounds, gainHalf, gainPound, gainTwoPounds];
const tableArrayTitles = ['Calories To Maintain Weight', 'Calories To Lose 0.5 Pounds/Week', 'Calories To Lose 1 Pound/Week', 'Calories To Lose 2 Pounds/Week', 'Calories To Gain 0.5 Pounds/Week', 'Calories To Gain 1 Pound/Week', 'Calories To Gain 2 Pounds/Week'];

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

            // container.style.gridTemplateRows = 'repeat(8, 1fr)';

            guideButton.disabled = true;

            guideButton.style.gridRowStart = '8';
            guideButton.style.gridRowEnd = '9';

            choiceForm = document.createElement('form');
            choiceForm.classList.add('form');

            choiceArray.forEach((option) => {
                const choiceLabel = document.createElement('label');
                choiceLabel.classList.add('input-label');
                choiceLabel.textContent = option;



                choice = document.createElement('input');
                choice.classList.add('btn-radio');
                choice.type = 'radio';
                choice.name = 'weight';

                console.log(choice);

                // COME BACK TO THIS CODE AFTER STYLING RADIO BUTTON LAYOUT

                // if (user.goal === 'Lose') {
                //     numberOfChoicesToShow = 4;
                //     const allChoices = document.querySelectorAll("input[type = 'radio']");
                //     allChoices.forEach((item, index) => {
                //         if (index >= numberOfChoicesToShow) {
                //             item.style.visibility = 'hidden';
                //             choiceLabel.style.visibility = 'hidden';
                //             console.log(item[index]);
                //         }
                //     });
                // }

              choice.addEventListener('click', () => {
                guideButton.disabled = false;
              });

            
                choiceLabel.append(choice);
                choiceForm.append(choiceLabel);
                container.append(choiceForm);
                container.insertBefore(choiceForm, guideButton);
            });
        }

        // Still Working on Code from 136-151 disregard

        if (clicks === 5) {
            choiceForm.style.display = 'none';
            guideButton.style.gridRowStart = '3';
            guideButton.style.gridRowEnd = '4';
        }

        if (clicks === 6) {
            title.style.display = 'none';
            guideButton.style.display = 'none';
            body.style.background = '#000';

            setTimeout(() => {
                const loadingBox = document.createElement('div');
                loadingBox.classList.add('loader');
                body.append(loadingBox);

                setTimeout(() => {
                    loadingBox.style.opacity = 0;
                    setTimeout(() => {
                        loadingBox.style.display = 'none';
                        container.style.display = 'none';
                    }, 0);
                }, 4000);

                setTimeout(() => {
                    newContainer.classList.add('new-container');
                    newContainer.style.background = 'linear-gradient(177.9deg, rgb(58, 62, 88) 3.6%, rgb(119, 127, 148) 105.8%)';
                    body.append(newContainer);
                    allInfo();
                }, 4000);
            }, 200);


        }

        console.log(clicks);
    });
}


// FUNCTION STILL WORK IN PROGRESS
function allInfo() {
    const mainTitle = document.createElement('h1');
    mainTitle.classList.add('new-title');
    mainTitle.textContent = `Welcome To Your Meal Plan ${user.name}`;

    const calorieTable = document.createElement('table');
    const tableHead = document.createElement('thead');
    tableHead.classList.add('table-title');
    const tableHeadData = document.createElement('th');
    tableHeadData.textContent = `Here's How Many Calories You Need To ${user.goal} Weight`;
    let tableRow = document.createElement('tr');
    tableRow.classList.add('cell-row');
    let tableHeadRow = document.createElement('tr');
    const tableBody = document.createElement('tbody');

    let tableData = document.createElement('td');
    tableData.classList.add('cell-data');


    // Going to have to fix this code: 210 - 215
    tableArray.forEach((cell, tableIndex) => {
        const tableCell = document.createElement('td');
        const cellTitle = document.createElement('td');
        cellTitle.classList.add(`celltitle-${tableIndex += 1}`);
        cellTitle.textContent = tableArrayTitles[tableIndex += 1];
        tableCell.classList.add(`celldata-${tableIndex += 1}`);
        tableCell.textContent = cell + ' Calories';
        tableBody.classList.add('cell-box');
        console.log(tableCell.classList);
        console.log(cellTitle.classList);
        tableRow.append(cellTitle, tableCell);
        tableBody.append(tableRow);
    });

    // tableRow.append(tableData);
    // tableBody.append(tableRow);

    tableHeadRow.append(tableHeadData);
    tableHead.append(tableHeadRow);

    calorieTable.append(tableHead, tableBody);


    newContainer.append(mainTitle, calorieTable);
}
userAdvice();
console.log(user);
