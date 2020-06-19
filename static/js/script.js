/* jslint browser */

const numberButton = document.querySelector('.numberButton');
let randomNumber = Math.floor(Math.random() * 100);
let userNumber = 0;

const inputNumber = () => {
    userNumber = parseInt(document.querySelector('#number').value);
    if  (userNumber < 1 || userNumber >= 100) {
        alert(`${userNumber} is not allowed. Please enter a whole between 0 and 100`); 
    } else if (userNumber < randomNumber) {
        alert(`${userNumber} is too low`);
    } else if (userNumber > randomNumber) {
        alert(`${userNumber} is too high`);
    } else {
        alert(`You are correct. Well done. The number was ${userNumber}`);
        window.location.reload();
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

