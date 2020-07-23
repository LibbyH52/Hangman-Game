const startButton = document.querySelector('.start-btn');
const selectedWord = document.querySelector('.word');
const letterKeys = document.querySelectorAll('.key');
const result = document.querySelector('.score #count');
let random = [];
let randomArray = [];
let letterPosition = [];
let score = 0;
let key = '';
let letter = '';
let len = 0;
let man = 10;
let word = random.join('');


const wordArray = ['princess', 'unicorn','fixes', 'zebras', 'airport', 'yacht', 'naughty', 'hangers', 'handshake', 'milkshake', 'flexible', 'fridge', 'photograph', 'surfboards', 'bananas',
'carrot', 'parsnip', 'blackcurrants', 'aubergine', 'broccoli', 'spinach', 'steak', 'sausages', 'chocolate', 'biscuit', 'yoghurt', 'blueberries', 'raspberries', 'grapes', 'watermelon', 'television', 'telephone', 'studio', 'visual', 'horoscope', 'nonesense', 'beautiful', 'picky', 'alphabet', 'pasta', 'helicopter', 'motorcycle', 'universal', 'bicycle', 'bathroom', 'bedroom', 'kitchen', 'cooker', 'saucepan', 'ketchup'];

console.log(wordArray.length);

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
    console.log(random);
}

//prints empty boxes to the screen
const printSpaces = () => {
    chooseRandomWord();
    for(let i=0; i< random.length; i++){
        let blankDiv = document.createElement('div');
        blankDiv.classList.add('blank');
        selectedWord.appendChild(blankDiv);
        randomArray.push(blankDiv);
    };
}

const checkScore = () => {
    len = randomArray.length;
    if(score === len){
        alert(`Well done the word was ${word}`); 
    } else if(man === 0){
        alert("You have had too many incorrect guesses. Game over!");
    }
}

//adds class of letterColour to blankDiv 
const addLetter = () => {
    for(let j=0; j<letterPosition.length; j++){
        if(randomArray[letterPosition[j]].hasChildNodes()) {
            alert("you already selected that letter"); 
        } else {
            letter = document.createTextNode(key); 
            let letterDiv = document.createElement('div');
            randomArray[letterPosition[j]].appendChild(letterDiv);
            letterDiv.classList.add('letterColour');
            letterDiv.appendChild(letter);
            score=score+1;  
        }
    }
    checkScore();
}

startButton.addEventListener('click', ()  => {
        printSpaces();

//checks for presence of selected letter in the random word
const checkLetter = letterKeys.forEach(letterKey => {
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
            } else if(man=== 0) {
                    alert(`Game Over. The word was ${word}`)
            } else {
                result.innerHTML = '';
                man -= 1;
                drawMan();
                let hangman = document.createTextNode(man);
                result.appendChild(hangman);
                alert(`That letter is incorrect. Please choose another one! \nYou have ${man} guesses left.`);
            }
        });
    }); 
    
    const drawMan = () => {
        let canvas = document.querySelector('#man');         
        if(man === 9){
            var ctx = canvas.getContext('2d');
            ctx.beginPath();
            ctx.moveTo(10,25);
            ctx.lineTo(125,25);
            ctx.stroke();
            ctx.closePath();
        } else if(man === 8){
            var ctx = canvas.getContext('2d');
            ctx.beginPath();
            ctx.moveTo(125,25);
            ctx.lineTo(125,75);
            ctx.stroke();
            ctx.closePath();} else 
        if(man === 7){
            var ctx = canvas.getContext('2d');
            ctx.beginPath();
            ctx.arc(125, 115, 40, 0, Math.PI * 2, true);
            ctx.stroke();
            ctx.closePath();
        } else if(man === 6){
            var ctx = canvas.getContext('2d');
            ctx.beginPath();
            ctx.moveTo(125,155);
            ctx.lineTo(125,255);
            ctx.stroke();
            ctx.closePath();
        } else if(man === 5){
            var ctx = canvas.getContext('2d');
            ctx.beginPath();
            ctx.moveTo(125,255);
            ctx.lineTo(85,305);
            ctx.stroke();
            ctx.closePath();
        } else if(man === 4){
            var ctx = canvas.getContext('2d');
            ctx.beginPath();
            ctx.moveTo(125,255);
            ctx.lineTo(165,305);
            ctx.stroke();
            ctx.closePath();
        } else if(man === 3){
            var ctx = canvas.getContext('2d');
            ctx.beginPath();
            ctx.moveTo(125,175);
            ctx.lineTo(165,205);
            ctx.stroke();
            ctx.closePath();
        } else if(man === 2){
            var ctx = canvas.getContext('2d');
            ctx.beginPath();
            ctx.moveTo(125,175);
            ctx.lineTo(85,205);
            ctx.stroke();
            ctx.closePath();} 
        else if(man === 1){
            var ctx = canvas.getContext('2d');
            ctx.beginPath();
            ctx.arc(125, 145, 15, 0, Math.PI, true);
            ctx.stroke();
            ctx.closePath();
        } 
        else if (man === 0){
            var ctx = canvas.getContext('2d');
            ctx.beginPath();
            ctx.arc(110, 105, 5, 0, Math.PI*2, true);
            ctx.stroke();
            ctx.closePath();

            ctx.beginPath();
            ctx.arc(140, 105, 5, 0, Math.PI*2, true);
            ctx.stroke();
            ctx.closePath();
        }
    }
});

