// Container for elemnts to display on screen
const container = document.querySelector('.container');

// Selecting Button
const button = document.querySelector('.btn-start');

// Selecting and hiding input field
let inputs = document.getElementById('input-value');
inputs.style.display = 'none';

// Selecting <p> block with question for user
const nameQuestion = document.querySelector('.prompt');

// Variables to track indexes and mouse clicks
let index = 0;

let clicks = 0;

let inputIndex = 0;

let personData = [];

// Arrays holding questions for users, and placeholders for input fields
const promptList = ['', 'What\'s Your Name?', 'How Much Do You Weigh?', 'How Tall Are You?', 'How Old Are You?', 'Want To Gain Or Lose Weight?'];

const inputText = ['', 'Papasote', '420lbs', '4\'9', '69', 'Lose/Gain'];


function displayScreen() {
    // Function for when button is clicked
    button.addEventListener('click', (e) => {
        e.preventDefault();

        // Click counter
        clicks += 1;

        // Making input field visible again along with changing button class and its text
        inputs.style.display = 'block';
        
        button.classList.remove('.btn-start');
        button.classList.add('btn-submit');
        button.textContent = 'Submit';

        // Going through each element in the promptlist array and changing the question given to user after each click
        index = (index + 1) % promptList.length;
        nameQuestion.textContent = promptList[index];

        // Once the button is clicked 7 times, the elements are hidden, the data is stored, and user is taken to next page
        if (clicks === 6) {
            nameQuestion.style.display = 'none';
            inputs.style.display = 'none';
            button.textContent = 'Next';

        }

        if (clicks === 7) {
            let dataString = JSON.stringify(personData);
            localStorage.setItem('personData', dataString);
            window.location.href = 'info.html';
        }

        // Going through each array element in inputIndex after each click
        inputIndex = (inputIndex + 1) % inputText.length;
       
        // After the mouse is clicked once, the data will begin to be pushed into a new array
        if (clicks > 1) {
            personData.push(inputs.value);
            inputs.placeholder = inputText[inputIndex];
        }

        // After each click, input field is cleared, and elements are appended to container
        inputs.value = '';

        container.append(inputs);
        container.insertBefore(inputs, button);
        console.log(personData);
        console.log(clicks);
    });

}

displayScreen();
