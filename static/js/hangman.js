const startButton = document.querySelector('.start-btn');
const selectedWord = document.querySelector('.word');
const letterKeys = document.querySelectorAll('.key')
let random = [];
let randomArray = [];
let letterPosition = [];
let score = 0;
let key = '';
let letter = '';
let blankDiv;
let man = 0;

const wordArray = ['princess', 'unicorn', 'fixes', 'zebras', 'airport', 'yaught', 'naughty', 'hangers', 'handshake', 'milkshake', 'flexible', 'fridges', 'photograph', 'surfboard'];


//removes any existing content in 'div.word'
const deleteWord = () => {
    document.querySelector('.word').innerHTML = '';
}

//picks a random word from wordArray and splits it
const chooseRandomWord = () => {
    //deletes any word currently on screen
    deleteWord();
    //chooses random word from array
    let randomWord = wordArray[Math.floor(Math.random() * wordArray.length)];
    random = randomWord.split('');
}

//prints empty boxes to the screen
const printSpaces = () => {
    chooseRandomWord();
    for(let i=0; i< random.length; i++){
        blankDiv = document.createElement('div');
        blankDiv.classList.add('blank');
        selectedWord.appendChild(blankDiv);
        randomArray.push(blankDiv);
    };
    console.log(random);
}

const checkScore = () => {
    if(score === randomArray.length){
        let word = random.join('');
        alert(`Well done the word was ${word}`); 
        window.location.reload();
    } else if(man === 13){
        alert("You have had too many incorrect guesses. Game over!");
        window.location.reload();
    }
}

//adds class of letterColour to blankDiv 
const addLetter = () => {
    for(let j=0; j<letterPosition.length; j++){
        if(randomArray[letterPosition[j]].classList.contains('letterColour')) {
            console.log(randomArray[letterPosition]);
            alert("you already selected that letter"); 
        } else {
            letter = document.createTextNode(key);
            randomArray[letterPosition[j]].classList.add('letterColour');
            randomArray[letterPosition[j]].appendChild(letter);
            score=score+1;  
            console.log(randomArray[letterPosition[j]])
            console.log(randomArray);
            console.log(randomArray.length)
            console.log(score)
        }
    }
    checkScore();
}

//checks for presence of selected letter in the random word
letterKeys.forEach(letterKey => {
    letterKey.addEventListener("click", () => {
    letterPosition = [];
    key = letterKey.innerText;
    if(random.includes(key)){
        for(let i=0; i<random.length; i++){
            if(key === random[i]){
                letterPosition.push(i);
            }
        } 
            addLetter();
        } else {
            man += 1;
            alert("That letter is incorrect. Please choose another one!");
        }
    });
});



startButton.addEventListener('click', printSpaces);

