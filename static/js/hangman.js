const startButton = document.querySelector('.start-btn');
const selectedWord = document.querySelector('.word');
const letterKeys = document.querySelectorAll('.key')
let random = [];
let randomArray = [];
let score = 0;
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
        randomArray.push(blankDiv);
    };
    console.log(random);
}

letterKeys.forEach(letterKey => {
    letterKey.addEventListener("click", () => {
        let key = letterKey.innerText;
        console.log(randomArray);
        let len = randomArray.length;
        if(random.includes(key)){
            let letterPosition = random.indexOf(key);
            if(randomArray[letterPosition].classList.contains('letterColour')){
                alert("you already selected that letter");    
            } else {
                let letter = document.createTextNode(key)
                randomArray[letterPosition].classList.add('letterColour');
                randomArray[letterPosition].appendChild(letter);
                score=score+1;
                alert(`Your score is now ${score}`);
            }
        }
    });
});

startButton.addEventListener('click', printSpaces);

