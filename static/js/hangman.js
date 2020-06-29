const startButton = document.querySelector('.start-btn');
const selectedWord = document.querySelector('.word');
const letterKeys = document.querySelectorAll('.key')
let letter = '';
let random = [];

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
        console.log(random[i]);
        let blankDiv = document.createElement('div');
        blankDiv.classList.add('blank');
        letter = document.createTextNode(random[i]);
        blankDiv.appendChild(letter);
        selectedWord.appendChild(blankDiv);
    };
}

letterKeys.forEach(letterKey => {
    letterKey.addEventListener("click", () => {
        let letter = letterKey.innerText;
        if(random.includes(letter)){
            console.log(random.indexOf(letter));
        }
        console.log(random);
    });
});

startButton.addEventListener('click', printSpaces);

