/*-------------- Constants -------------*/

//object w/property of ra1 -> ra1 also has a property of riddle 
const LEVELONE = {
    ra1: {riddle: 'I am an odd number. Take away a letter and I become even. What number am I?', answer: 'seven'}, 
    ra2: {riddle: 'I am a word of three letters. Add two more and the less of me there is. What word am I?', answer: 'few'}, 
    ra3: {riddle: 'The more of me there is, the less you can see. What am I?', answer: 'darkness'}   
}; 

//creating an array from LEVELONE to track riddles via index 
const LEVELONE_KEYS = Object.keys(LEVELONE); 

/*---------- Variables (state) ---------*/

let currentRiddleIdx; //tracking current riddle index in RIDDLE_KEYS 
let riddleAns; //tracking answer to current riddle 
let score; //checking to see if players score is correct & track 
let winner; //did player get 2/3 answers correctly 
let playerAns; //player's answer 
let timer; 
let count; 

/*----- Cached Element References - things that need to reference the DOM elements -----*/

const riddle = document.querySelector('.riddle'); // accessing riddle in HTML
const playerInput = document.getElementById('answer'); // accessing answer inputed into textbox from player


const submitBtn = document.getElementById('submit'); 
const resetBtn = document.getElementById('reset'); 

const eogMessage = document.getElementById('eogMessage'); 

const countdownMsg = document.getElementById('countdown'); 
const outoftimeMsg = document.getElementById('outoftime'); 

const instructions = document.querySelector('.instructions'); 

/*----------- Event Listeners ----------*/

submitBtn.addEventListener('click', handleSubmit); 
resetBtn.addEventListener('click', init); 

/*-------------- Functions -------------*/
init(); 

function init() {
    currentRiddleIdx = 0;  
    score = 0; 
    winner = false; 
    playerAns = ''; 
    count = 10; 
    countdownMsg.innerText = 10; 
    timer = setInterval(runGame, 1000); 
    instructions.style.visibility = 'visible'; 
    riddle.style.visibility = 'visible'; 
    playerInput.style.visibility = 'visible'; 
    submitBtn.style.visibility = 'visible'; 
    eogMessage.style.visibility = 'hidden'; 
    outoftimeMsg.style.visibility = 'hidden'; 
    render(); 
}; 


function runGame() {
    count--; 
    console.log(count); 
    countdownMsg.innerText = count; 
    if (count === 0) {
        clearInterval(timer);
        instructions.style.visibility = 'hidden';
        riddle.style.visibility = 'hidden'; 
        playerInput.style.visibility = 'hidden'; 
        submitBtn.style.visibility = 'hidden';  
        outoftimeMsg.style.visibility = 'visible'; 
        outoftimeMsg.innerText = 'Looks like you are out of time. The Riddler is walking free, but keep trying to send him back to Arkham.'; 
    }
}

function handleSubmit(event) { 
    playerAns = playerInput.value.toLowerCase(); 
    checkAnswers(); 
    checkWinner(); 
    // add 1 to currentRiddleIdx to move onto next question: 
    currentRiddleIdx++;  
    playerInput.value = ''; 
    render(); 
    ; 
}

function checkAnswers() {
    // adding +1 to score if answer if correct 
    riddleAns = LEVELONE[LEVELONE_KEYS[currentRiddleIdx]].answer;
    if (playerAns === riddleAns) {
        score += 1; 
    }; ; 
}

function checkWinner() {
    if (currentRiddleIdx + 1 < LEVELONE_KEYS.length) {
        return; 
    }
    if (score >= 2) { 
        winner = true;  
        eogMessage.style.visibility = 'visible'; 
        eogMessage.innerText = "Congratulations! You've answered enough riddles correctly and send The Riddler back to Arkham. Gotham is save for now."; 
        instructions.style.visibility = 'hidden';
        countdownMsg.style.visibility = 'hidden' 
        clearInterval(timer); 
    } else {
        eogMessage.style.visibility = 'visible'; 
        eogMessage.innerText = "Oh no. Not quite enough brain power to send The Riddler back Arkham. He is free to reek havoc on Gotham. Try again to save Gotham.";
        instructions.style.visibility = 'hidden'; 
        countdownMsg.style.visibility = 'hidden' 
        outoftimeMsg.style.visibility = 'hidden'
        clearInterval(timer); 
    }; 
}

// function to render riddles on the page 
function renderRiddles() {
    if (currentRiddleIdx >= LEVELONE_KEYS.length) {
        //making submit button & textbox disappear
        playerInput.style.visibility = 'hidden'; 
        submitBtn.style.visibility = 'hidden'; 
        riddle.style.visibility = 'hidden'; 
        outoftimeMsg.style.visibility = 'hidden'
        return; 
    }
    currentRiddle = LEVELONE[LEVELONE_KEYS[currentRiddleIdx]].riddle; 
    riddle.innerHTML = currentRiddle; 
}

function render() {
    renderRiddles(); 
}; 

// get timer to count down 
// why does reset game not clear the TB? 
// try to make it mobile friendly 
