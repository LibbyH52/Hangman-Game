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
            alert(`Your score is now ${score}`);   
            console.log(randomArray[letterPosition[j]])
            console.log(randomArray);
        }
    }
    console.log(letterPosition)
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
            alert("That letter is incorrect. Please choose another one!");
        }
    });
});



startButton.addEventListener('click', printSpaces);

