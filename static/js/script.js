/* jslint browser */

const numberButton = document.querySelector('.numberButton');
let randomNumber = Math.floor(Math.random() * 101);
let userNumber = 0;

/*Function to inform user if guess is to high or too low comparing it  randomNumber*/
const inputNumber = () => {
    userNumber = parseInt(document.querySelector('#number').value);
    if(isNaN(userNumber)){
        document.querySelector('#number').value = '';
        alert('Please enter a valid number');
    } else {
        if  (userNumber < 1 || userNumber > 100) {
            alert(`${userNumber} is not allowed. Please enter a whole between 0 and 100`); 
        } else if (userNumber < randomNumber) {
            alert(`${userNumber} is too low`);
        } else if (userNumber > randomNumber) {
            alert(`${userNumber} is too high`);
        } else if (userNumber === randomNumber){
            alert(`Well done. The number was ${userNumber}`);
            window.location.reload();
        }
    }
   /*Clears input field*/  
    document.querySelector('#number').value = '';
};

/*Function to allow user to continue inputting numbers until guess is correct*/
const checkNumber = () => {
    randomNumber = Math.floor(Math.random() * 100);
    while (userNumber !== randomNumber) {
        inputNumber;
    }
};

numberButton.addEventListener('click', inputNumber);

