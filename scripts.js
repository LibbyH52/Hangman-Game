/* jslint browser */
const numberButton = document.querySelector('.numberButton');
let randomNumber = Math.floor(Math.random() * 100);
let userNumber = 0;

const inputNumber = () => {
    'use strict'
    userNumber = document.querySelector('#number').value;
    'use strict'
    if (userNumber < randomNumber) {
        alert(`${userNumber} is too low`);
    } else if (userNumber > randomNumber) {
        alert(`${userNumber} is too high`);
    } else {
        alert(`${userNumber} is correct`);
    }
    document.querySelector('#number').value = '';
};

const checkNumber = () => {
    randomNumber = Math.floor(Math.random() * 100);
    while (userNumber !== randomNumber) {
        inputNumber;
    }
};

numberButton.addEventListener('click', inputNumber);

