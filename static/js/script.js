const selectedWord = document.querySelector('.word');
const letterKeys = document.querySelectorAll('.key');
const result = document.querySelector('.score #count');

const overlay= document.querySelector('#overlay');
const popup = document.querySelector('.popup');
const popupWord = document.querySelector('.popup-word');
const popupHeading = document.querySelector('.popup-heading');
const playBtn = document.querySelector('.btn-play');
const quitBtn = document.querySelector('.btn-quit');


let randomWord = '';
let random = [];
let randomArray = [];
let letterPosition = [];
let score = 0;
let key = '';
let letter = '';
let len = 0;
let man = 10;


const wordArray = ['evening', 'remember','chimney', 'flower', 'shallow', 'monkey', 'answer', 'continue', 'direction', 'excuse', 'fraction', 'furniture', 'mention', 'station', 'strange',
'thirsty', 'throne', 'understand', 'visitor', 'whenever', 'avenue', 'caution', 'century', 'daughter', 'exercise', 'genius', 'glacier', 'icicle', 'position', 'unlikely', 'value', 'vegetable', 'tomorrow', 'unusual', 'argue', 'people', 'borrow', 'amount', 'unlock', 'wonder', 'write', 'seashore', 'cough', 'thistle', 'knight', 'cereal', 'guest', 'further', 'lamb', 'island'];


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
    wordArray.splice(wordArray.indexOf(randomWord), 1);
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

//hides the popup and opaque overlay. 
const addHide = () => {
    overlay.classList.add('hide');
    popup.classList.add('hide');
}

quitBtn.addEventListener('click', () => {
    addHide();
})

playBtn.addEventListener('click', () =>{
    addHide();
    randomArray = [];
    clearMan();
    printSpaces();
});


const checkScore = () => {
    len = randomArray.length;
    let word = random.join('');
    popupWord.textContent = word;
    if(score === len || man === 0){
        overlay.classList.remove('hide');
        popup.classList.remove('hide');
        if(score === len) {
            popupHeading.textContent = 'Well Done'; 
        } else if(man === 0){
            popupHeading.textContent = 'Hard Luck';
            updateWord();
        }
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
        }
    });
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
        ctx.closePath();
    } else 
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
};

//fill in letter(s) at corresponding index in randomArray 
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
    //delay caling check score until letter is added
    setTimeout(() => {
        checkScore();
    }, 750);
}

//completes the word if Game Over!
const updateWord = () => {
    for(let i=0; i<randomArray.length; i++){
        for(let j=0; j<random.length; j++){
            if(!randomArray[i].hasChildNodes()){
                let letterDiv = document.createElement('div');
                letter = document.createTextNode(random[i]);
                randomArray[i].appendChild(letterDiv);
                letterDiv.classList.add('letterColour');
                letterDiv.appendChild(letter);
            }
        }
    }
}

//deletes the drawing and clears the canvas. Code copied from here: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/clearRect
const clearMan = () => {
    let remove = document.querySelector('#man');
    const ctx = remove.getContext('2d');
    ctx.clearRect(0, 0, remove.width, remove.height);
}

printSpaces();