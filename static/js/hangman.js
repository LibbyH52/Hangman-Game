const startButton = document.querySelector('.start-btn');
const selectedWord = document.querySelector('.word');

const wordArray = ['princess', 'unicorn', 'fixes', 'zebras', 'airport', 'yaught', 'naughty', 'hangers', 'handshake', 'milkshake'];

//picks a random word from wordArray and splits it
const chooseRandomWord = () => {
    let randomWord = wordArray[Math.floor(Math.random() * wordArray.length)];
    random = randomWord.split('');
}

startButton.addEventListener('click', function() {
       printWord();
});

//removes any existing content in 'div.word'
const deleteWord = () => {
    document.querySelector('.word').innerHTML = '';
}

//prints the contents of random to the screen
const printWord = () => {
    deleteWord();
    chooseRandomWord();
    for(let i=0; i< random.length; i++){
        console.log(random[i]);
        let letterDiv = document.createElement('div');
        letter = document.createTextNode(random[i]);
        letterDiv.classList.add('letter');
        letterDiv.appendChild(letter);
        selectedWord.appendChild(letterDiv);
    };
}