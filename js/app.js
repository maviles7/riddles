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
let RiddleAns; //tracking answer to current riddle 
let score; //checking to see if players score is correct & track 
let winner; //did player get 2/3 answers correctly 
let playerInput; 

/*----- Cached Element References - things that need to reference the DOM elements -----*/

const riddle = document.querySelector('.riddle'); // accessing riddle in HTML
const playerAnswer = document.getElementById('answer'); // accessing answer inputed into textbox from player


const submitBtn = document.getElementById('submit'); 
const resetBtn = document.getElementById('reset'); 

/*----------- Event Listeners ----------*/


/*-------------- Functions -------------*/
init(); 

function init() {
    currentRiddleIdx = 0;  
    score = 0; 
    winner = false; 
    render(); 
}; 

// function to render riddles on the page 
function renderRiddles() {
    currentRiddle = RIDDLESANDANSWERS[RIDDLE_KEYS[currentRiddleIdx]].riddle; 
    console.log(currentRiddleIdx); 
    riddle.innerHTML = currentRiddle; 
}

// function to render score 
function renderScore() {
    console.log(currentRiddle)
    RiddleAns = RIDDLESANDANSWERS[RIDDLE_KEYS[currentRiddleIdx]].answer; 
    console.log(RiddleAns); 
    // if statement to compare playerInput to currentRiddleAns
}

function render() {
    renderRiddles(); 
    renderScore(); 
}; 
 
