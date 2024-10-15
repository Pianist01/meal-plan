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

// Variables to keep track of clicks, index in arrays, and variable for form and to create elements
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

let tableTitleIndex = 0;

let selectIndex = 0;

let choiceArrayIndex = 0;

let chooseGoal;

let foodIndex = 0;

let gainFoodLinks;

let linkIndex = 0;

let gainIndex = 0;

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
const choiceArray = ['--Choose How Much You Want To Lose Or Gain--', 'Lose 2 Pounds/Week', 'Lose 1 Pound/Week', 'Lose 0.5 Pounds/Week', 'Maintain Weight', 'Gain 0.5 Pounds/Week', 'Gain 1 Pound/Week', 'Gain 2 Pounds/Week'];
const gainFoodArray = ['Double Double Cheeseburger(610 Calories)', 'Costco Pepperoni Pizza(760 Calories)', 'McDonalds Combo Meal(1200 Calories)', 'Wingstop 10 Piece Meal(1700 Calories)'];
const loseFoodArray = ['Chicken With Potatoes(500 Calories)', 'Ground Turkey With Potatoes(650 Calories)', 'Chicken Salad(400 Calories)', 'Eggs With Chicken(550 Calories)'];
const gainFoodLinksArray = ['https://www.in-n-out.com/menu#doubledouble', 'https://www.costcobusinessdelivery.com/kirkland-signature-pepperoni-pizza%2C-thin-crust%2C-4-ct.product.100264489.html', 'https://www.mcdonalds.com/us/en-us/meal/5-dollar-mcdouble-meal.html', 'https://www.wingstop.com/menu'];
const loseFoodLinksArray = ['https://urbanplates.com/order/item/?store_id=009&service_type_id=2&menu_id=42&category_id=16&item_id=500&category_name=Plates', 'https://shop.sprouts.com/search?search_term=turkey', 'https://urbanplates.com/order/item/?store_id=009&service_type_id=2&menu_id=42&category_id=17&item_id=443&category_name=Salads', 'https://www.yummytummyaarthi.com/chicken-egg-scramble-recipe/'];

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
const tableArrayTitles = ['Maintain Weight', 'Lose 0.5 Pounds/Week', 'Lose 1 Pound/Week', 'Lose 2 Pounds/Week', 'Gain 0.5 Pounds/Week', 'Gain 1 Pound/Week', 'Gain 2 Pounds/Week'];

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

            const dropDownChoice = document.createElement('select');
            dropDownChoice.classList.add('select-form');

            if(user.goal === 'Lose') {
                choiceArray.splice(5,3);
            } else if(user.goal === 'Gain') {
                choiceArray.splice(1, 3);
                console.log(choiceArray);
            }

            choiceArray.forEach((option, selectIndex) => {
                const choiceLabel = document.createElement('option');
                choiceLabel.classList.add(`option-${selectIndex}`);
                choiceLabel.textContent = option;



                console.log(choiceLabel);

              dropDownChoice.addEventListener('click', () => {
                guideButton.disabled = false;
              });

              dropDownChoice.addEventListener('change', function(){
                chooseGoal = this.value;
                console.log(chooseGoal);
              });

              dropDownChoice.append(choiceLabel);
            
                // choiceLabel.append(choice);
                choiceForm.append(dropDownChoice);
                container.append(choiceForm);
                container.insertBefore(choiceForm, guideButton);
            });
        }

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
                    newContainer.style.background = 'linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(125,86,53,1) 73%, rgba(68,118,161,1) 100%)';
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
    tableHeadData.classList.add('table-h1');
    tableHeadData.textContent = `Here's How Many Calories You Need To ${user.goal} Weight`;
    let tableRow = document.createElement('tr');
    tableRow.classList.add('cell-row');
    let tableHeadRow = document.createElement('tr');
    const tableBody = document.createElement('tbody');

    let tableData = document.createElement('td');
    tableData.classList.add('cell-data');

    const maintainWeightData = document.createElement('td');
    maintainWeightData.classList.add('maintain-weight');
    maintainWeightData.textContent = maintainWeight;
    tableRow.append(maintainWeightData);
    tableBody.append(tableRow);

    const maintainWeightTitle = document.createElement('td');
    maintainWeightTitle.classList.add(`celltitle-0`);
    maintainWeightTitle.textContent = 'Calories To Maintain Weight';
    tableBody.classList.add('cell-box');
    tableRow.append(maintainWeightTitle);
    tableBody.append(tableRow);

    if(user.goal === 'Gain') {
        maintainWeightTitle.style.display = 'block';
    }


    if(chooseGoal === 'Lose 1 Pound/Week') {
        const tableCellOne = document.createElement('td');
        tableCellOne.classList.add(`celldata-1`);
        tableCellOne.textContent = losePound;
        tableBody.classList.add('cell-box');
        console.log(tableCellOne);
        tableRow.append(tableCellOne);
        tableBody.append(tableRow)
    } else if(chooseGoal === 'Lose 0.5 Pounds/Week') {
        const tableCellTwo = document.createElement('td');
        tableCellTwo.classList.add(`celldata-2`)
        tableCellTwo.textContent = loseHalf;
        tableBody.classList.add('cell-box');
        tableRow.append(tableCellTwo);
        tableBody.append(tableRow);
        console.log(tableCellTwo);
    } else if(chooseGoal === 'Lose 2 Pounds/Week') {
        const tableCellThree = document.createElement('td');
        tableCellThree.classList.add(`celldata-3`)
        tableCellThree.textContent = loseTwoPounds;
        tableBody.classList.add('cell-box');
        tableRow.append(tableCellThree);
        tableBody.append(tableRow);
    } else if(chooseGoal === 'Maintain Weight') {
        maintainWeightData;
        // maintainWeightTitle.style.display = 'none';
        maintainWeightTitle.style.gridRowStart = '1';
        maintainWeightTitle.style.gridRowEnd = '1';
            if(user.goal === 'Gain') {
                maintainWeightTitle.style.display = 'block';
            } else if(user.goal === 'Lose') {
                maintainWeightTitle.style.display = 'block';
            }
    } else if(chooseGoal === 'Gain 0.5 Pounds/Week') {
        const tableCellFour = document.createElement('td');
        tableCellFour.classList.add(`celldata-4`);
        tableCellFour.textContent = gainHalf;
        tableBody.classList.add('cell-box');
        tableRow.append(tableCellFour);
        tableBody.append(tableRow);
    } else if(chooseGoal === 'Gain 1 Pound/Week') {
        const tableCellFive = document.createElement('td');
        tableCellFive.classList.add(`celldata-5`);
        tableCellFive.textContent = gainPound;
        tableBody.classList.add('cell-box');
        tableRow.append(tableCellFive);
        tableBody.append(tableRow);
    } else if(chooseGoal === 'Gain 2 Pounds/Week') {
        const tableCellSix = document.createElement('td');
        tableCellSix.classList.add(`celldata-6`);
        tableCellSix.textContent = gainTwoPounds;
        tableBody.classList.add('cell-box');
        tableRow.append(tableCellSix);
        tableBody.append(tableRow);
    }

    console.log(tableBody);

    // Need to filter out from tableArray, the one that matches the option selected

    if(tableArrayTitles.includes(chooseGoal)) {
        const cellTitle = document.createElement('td');
        cellTitle.classList.add(`celltitle-${tableTitleIndex += 1}`);
        cellTitle.textContent = `Calories To ${chooseGoal}`;

        if(chooseGoal === 'Maintain Weight') {
            cellTitle.style.display = 'none';
        }
        tableRow.append(cellTitle);
        tableBody.append(tableRow);

    }

    tableHeadRow.append(tableHeadData);
    tableHead.append(tableHeadRow);

    calorieTable.append(tableHead, tableBody);


    newContainer.append(mainTitle, calorieTable);
}
userAdvice();
console.log(user);

function foodToEat() {
    const foodTitle = document.createElement('h2');
    foodTitle.classList.add('food-header');
    foodTitle.textContent = 'Here\'s Some Foods You Should Eat!';

    const foodSection = document.createElement('section');
    foodSection.classList.add('foodcontent-box');

    const foodBody = document.createElement('div');
    foodBody.classList.add('food-container');

    if(user.goal === 'Gain') {

            gainFoodArray.forEach((food) => {
                const gainFoodInfo = document.createElement('p');
                gainFoodInfo.classList.add(`foodphrase-${foodIndex += 1}`);
                gainFoodInfo.textContent = food;
                foodBody.append(gainFoodInfo);
                console.log(gainFoodInfo);
            });

    } else if(user.goal === 'Lose') {
        loseFoodArray.forEach((food) => {
            const loseFoodInfo = document.createElement('p');
            loseFoodInfo.classList.add(`losefoodphrase-${foodIndex += 1}`);
            loseFoodInfo.textContent = food;
            foodBody.append(loseFoodInfo);
            console.log(loseFoodInfo);
        });
    }

    foodSection.append(foodBody);

    newContainer.append(foodTitle, foodSection);
}
foodToEat();
