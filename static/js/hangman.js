const startButton = document.querySelector('.start-btn');
const selectedWord = document.querySelector('.word');
let letter = '';
let random = [];

const wordArray = ['princess', 'unicorn', 'fixes', 'zebras', 'airport', 'yaught', 'naughty', 'hangers', 'handshake', 'milkshake'];


//removes any existing content in 'div.word'
const deleteWord = () => {
    document.querySelector('.word').innerHTML = '';
}

//prints empty boxes to the screen
const printSpaces = () => {
    deleteWord();
    chooseRandomWord();
    for(let i=0; i< random.length; i++){
        console.log(random[i]);
        let blankDiv = document.createElement('div');
        blankDiv.classList.add('blank');
        letter = document.createTextNode('*');
        blankDiv.appendChild(letter);
        selectedWord.appendChild(blankDiv);
    };
}


//picks a random word from wordArray and splits it
const chooseRandomWord = () => {
    let randomWord = wordArray[Math.floor(Math.random() * wordArray.length)];
    random = randomWord.split('');
}
