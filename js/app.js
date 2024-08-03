/*-------------- Constants -------------*/

//object w/property of ra1 -> ra1 also has a property of riddle 
const RIDDLESANDANSWERS = {
    ra1: {riddle: 'I am an odd number. Take away a letter and I become even. What number am I?', answer: 'seven'}, 
    ra2: {riddle: 'I am a word of three letters. Add two more and the less of me there will be. What word am I?', answer: 'few'}, 
    ra3: {riddle: 'The more of me there is, the less you can see. What am I?', answer: 'darkness'}   
}; 

//creating an array from RIDDLESANDANSWERS to track riddles via index 
const RIDDLE_KEYS = Object.keys(RIDDLESANDANSWERS); 
//console.log(RIDDLE_KEYS); 

/*---------- Variables (state) ---------*/

let currentRiddleIdx; //tracking current riddle index in RIDDLE_KEYS 
let riddleAns; //tracking answer to current riddle 
let score; //checking to see if players score is correct & track 
let winner; //did player get 2/3 answers correctly 
let playerAns; //player's answer
//let endGame; //have all 3 riddles been asked & the game is over

/*----- Cached Element References - things that need to reference the DOM elements -----*/

const riddle = document.querySelector('.riddle'); // accessing riddle in HTML
const playerInput = document.getElementById('answer'); // accessing answer inputed into textbox from player


const submitBtn = document.getElementById('submit'); 
const resetBtn = document.getElementById('reset'); 

/*----------- Event Listeners ----------*/

submitBtn.addEventListener('click', handleSubmit); 

/*-------------- Functions -------------*/
init(); 

function init() {
    currentRiddleIdx = 0;  
    score = 0; 
    winner = false; 
    playerAns = ''; 
    render(); 
}; 

function handleSubmit(event) { 
    playerAns = playerInput.value; 
    //console.log(playerAns);  
    checkAnswers(); 
    // add 1 to currentRiddleIdx to move onto next question 
    //checkEndGame(); 
    currentRiddleIdx++;  
    render(); 
    ; 
}

/*
function checkEndGame() {
    for (let i = 0; i < currentRiddleIdx.length; i++) {
        console.log(currentRiddleIdx)
        currentRiddleIdx++; 
    }
}
*/

function checkAnswers() {
    // adding +1 to score if answer if correct 
    riddleAns = RIDDLESANDANSWERS[RIDDLE_KEYS[currentRiddleIdx]].answer;
    if (playerAns === riddleAns) {
        score += 1; 
        console.log(score); 
    }; ; 
}

function checkWinner() {
    if (score >= 2) { 
        winner = true; 
    }; 
}

// function to render riddles on the page 
function renderRiddles() {
    if (currentRiddleIdx >= RIDDLE_KEYS.length) {
        //riddle.innerText = score; 
        return; 
    }
    currentRiddle = RIDDLESANDANSWERS[RIDDLE_KEYS[currentRiddleIdx]].riddle; 
    //console.log(currentRiddleIdx); 
    riddle.innerHTML = currentRiddle; 
}

function render() {
    renderRiddles(); 
    //renderCorrectAnswers(); 
}; 

 
// weekend goals: 
// score!!! -> starts at 0, so correct is 1? 
// flowing through questions w/approrpiate score 
// iterate through questions to end game


//things to do: 
// score if correct answer 
// end after 3rd riddle 
// win or loss logic - check to see if score if >2 
// win or loss message 
