const selectedWord = document.querySelector('.word');
const letterKeys = document.querySelectorAll('.key');
const result = document.querySelector('.score #count');
let randomWord = '';
let random = [];
let randomArray = [];
let letterPosition = [];
let score = 0;
let key = '';
let letter = '';
let len = 0;
let man = 10;


const wordArray = ['princess', 'unicorn','fixes', 'zebras', 'airport', 'yacht', 'naughty', 'hangers', 'handshake', 'milkshake', 'flexible', 'fridge', 'photograph', 'surfboards', 'bananas',
'carrot', 'parsnip', 'blackcurrants', 'aubergine', 'broccoli', 'spinach', 'steak', 'sausages', 'chocolate', 'biscuit', 'yoghurt', 'blueberries', 'raspberries', 'grapes', 'watermelon', 'television', 'telephone', 'studio', 'visual', 'horoscope', 'nonesense', 'beautiful', 'picky', 'alphabet', 'pasta', 'helicopter', 'motorcycle', 'universal', 'bicycle', 'bathroom', 'bedroom', 'kitchen', 'cooker', 'saucepan', 'ketchup'];


//removes any existing content in 'div.word'. To be completed later for resetting game
const deleteWord = () => {
    letterKeys.forEach(letterKey => {
        letterKey.removeEventListener("click", checkLetter);
        letterKey.classList.remove('chosen');
    });
    selectedWord.innerHTML = '';
}

//picks a random word from wordArray and splits it
const chooseRandomWord = () => {
    //chooses random word from array
    randomWord = wordArray[Math.floor(Math.random() * wordArray.length)];
    random = randomWord.split('');
    console.log(random);
}

//prints empty boxes to the screen
const printSpaces = () => {
    //deletes any word currently on screen
    deleteWord();
    chooseRandomWord();
    score = 0;
    man = 10;
    checkLetter;
    for(let i=0; i< random.length; i++){
        let blankDiv = document.createElement('div');
        blankDiv.classList.add('blank');
        selectedWord.appendChild(blankDiv);
        randomArray.push(blankDiv);
    };
}

const playAgain = () => {
    confirm("Do you want to play another game? ");
    if(confirm){
        document.location.reload();
    }
}

//checks if the user has found all the letters or if the man has been fully drawn
const checkScore = () => {
    len = randomArray.length;
    let word = random.join('');
    if(score === len){
        alert(`Well done the word was ${word}`); 
        playAgain();
    } else if(man === 0){
        alert(`Game over! The word was ${word}`);
        updateWord();
        playAgain();
    } 
}

//if letterKey is in the random word the letter(s) are pushed in to an array and the addLetter function is called. 
const checkLetter = letterKeys.forEach(letterKey => {
    letterKey.addEventListener("click", () => {
        letterPosition = [];
        key = letterKey.innerText;
        letterKey.classList.add('chosen');
        if(random.includes(key)){
            for(let i=0; i<random.length; i++){
                if(key === random[i]){
                    letterPosition.push(i);
                }
            } 
                addLetter();
            } else {
                man -= 1;
                drawMan();
                alert(`${key} is incorrect. Please choose another one! \nYou have ${man} guesses left.`);
            }
    }); 
    
    //starts drawing the hangman if wrong key is selected
    const drawMan = () => {
        let canvas = document.querySelector('#man'); 
        if(man === 9){
            var ctx = canvas.getContext('2d');
            ctx.strokeStyle = "#de425b";
            ctx.lineWidth = 4;
            ctx.beginPath();
            ctx.moveTo(50,25);
            ctx.lineTo(150,25);
            ctx.stroke();
            ctx.closePath();
        } else if(man === 8){
            var ctx = canvas.getContext('2d');
            ctx.strokeStyle = "#de425b";
            ctx.lineWidth = 4;
            ctx.beginPath();
            ctx.moveTo(149,24);
            ctx.lineTo(149,100);
            ctx.stroke();
            ctx.closePath();} else 
        if(man === 7){
            var ctx = canvas.getContext('2d');
            ctx.strokeStyle = "#de425b";
            ctx.lineWidth = 4;
            ctx.beginPath();
            ctx.arc(150, 150, 50, 0, Math.PI * 2, true);
            ctx.stroke();
            ctx.closePath();
        } else if(man === 6){
            var ctx = canvas.getContext('2d');
            ctx.strokeStyle = "#de425b";
            ctx.lineWidth = 4;
            ctx.beginPath();
            ctx.moveTo(150,200);
            ctx.lineTo(150,330);
            ctx.stroke();
            ctx.closePath();
        } else if(man === 5){
            var ctx = canvas.getContext('2d');
            ctx.strokeStyle = "#de425b";
            ctx.lineWidth = 4;
            ctx.beginPath();
            ctx.moveTo(150,330);
            ctx.lineTo(85,400);
            ctx.stroke();
            ctx.closePath();
        } else if(man === 4){
            var ctx = canvas.getContext('2d');
            ctx.strokeStyle = "#de425b";
            ctx.lineWidth = 4;
            ctx.beginPath();
            ctx.moveTo(150,330);
            ctx.lineTo(215,400);
            ctx.stroke();
            ctx.closePath();
        } else if(man === 3){
            var ctx = canvas.getContext('2d');
            ctx.strokeStyle = "#de425b";
            ctx.lineWidth = 4;
            ctx.beginPath();
            ctx.moveTo(150,235);
            ctx.lineTo(210,185);
            ctx.stroke();
            ctx.closePath();
        } else if(man === 2){
            var ctx = canvas.getContext('2d');
            ctx.strokeStyle = "#de425b";
            ctx.lineWidth = 4;
            ctx.beginPath();
            ctx.moveTo(150,235);
            ctx.lineTo(90,185);
            ctx.stroke();
            ctx.closePath();} 
        else if(man === 1){
            var ctx = canvas.getContext('2d');
            ctx.lineWidth = 4;
            ctx.beginPath();
            ctx.arc(130, 135, 5, 0, Math.PI*2, true);
            ctx.fillStyle = "#de425b";
            ctx.fill();
            ctx.closePath();
        
            ctx.fillStyle = "#de425b";
            ctx.lineWidth = 4;
            ctx.beginPath();
            ctx.arc(170, 135, 5, 0, Math.PI*2, true);
            ctx.fillStyle = "#de425b";
            ctx.fill();
            ctx.closePath();
        } else if (man === 0){
            var ctx = canvas.getContext('2d');
            ctx.strokeStyle = "#de425b";
            ctx.lineWidth = 4;
            ctx.beginPath();
            ctx.arc(150, 175, 20, 0, Math.PI, true);
            ctx.stroke();
            ctx.closePath();
        }
        checkScore();
    }
});

//fills in letter(s) at corresponding index in randomArray 
const addLetter = () => {
    for(let i=0; i<letterPosition.length; i++){
        if(randomArray[letterPosition[i]].hasChildNodes()) {
            alert("you already selected that letter"); 
        } else {
            let letterDiv = document.createElement('div');
            letter = document.createTextNode(key); 
            randomArray[letterPosition[i]].appendChild(letterDiv);
            letterDiv.classList.add('letterColour');
            letterDiv.appendChild(letter);
            score=score+1; 
        }
    }
    checkScore();
}

//completes the word if Game Over!
const updateWord = () => {
    for(let i=0; i<randomArray.length; i++){
        for(let j=0; j<random.length; j++){
            if(!randomArray[i].hasChildNodes()){
                let letterDiv = document.createElement('div');
                letter = document.createTextNode(random[i]);
                console.log(letter); 
                randomArray[i].appendChild(letterDiv);
                letterDiv.classList.add('letterColour');
                letterDiv.appendChild(letter);
            }
        }
    }
}

printSpaces();