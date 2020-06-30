const startButton = document.querySelector('.start-btn');
const selectedWord = document.querySelector('.word');
const letterKeys = document.querySelectorAll('.key')
let letter = '';
let random = [];
let letterPosition = -1;
let blankDiv;

const wordArray = ['princess', 'unicorn', 'fixes', 'zebras', 'airport', 'yaught', 'naughty', 'hangers', 'handshake', 'milkshake'];


//removes any existing content in 'div.word'
const deleteWord = () => {
    document.querySelector('.word').innerHTML = '';
}

//picks a random word from wordArray and splits it
const chooseRandomWord = () => {
    let randomWord = wordArray[Math.floor(Math.random() * wordArray.length)];
    random = randomWord.split('');
}

//prints empty boxes to the screen
const printSpaces = () => {
    deleteWord();
    chooseRandomWord();
    for(let i=0; i< random.length; i++){
        blankDiv = document.createElement('div');
        blankDiv.classList.add('blank');
        selectedWord.appendChild(blankDiv);
    };
    console.log(random);
}

letterKeys.forEach(letterKey => {
    letterKey.addEventListener("click", () => {
        let key = letterKey.innerText;
        var randomArray = document.querySelectorAll('div .blank');
        console.log(randomArray);
        let i=0;
        if(random.includes(key)){
                let letter = document.createTextNode(key)
                letterPosition = random.indexOf(key);
                blankDiv.classList.add('letterColour');
                randomArray[letterPosition].appendChild(letter);
                console.log(blankDiv);
                console.log(letterPosition);
        }
    });
});

startButton.addEventListener('click', printSpaces);

