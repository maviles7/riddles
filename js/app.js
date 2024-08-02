/*-------------- Constants -------------*/

const RIDDLESANDANSWERS = {
    'Riddle 1: I am an odd number. Take away a letter and I become even. What number am I?': 'seven',
    'Riddle 2: I am a word of three letters. Add two more and the less of me there will be. What word am I?': 'few',
    'Riddle 3: The more of me there is, the less you can see. What am I?' : 'darkness',    
}; 

/*---------- Variables (state) ---------*/

let answer; //storing players answer 
let score; //checking to see if players score is correct & track 
let winner; //did player get 2/3 answers correctly 

/*----- Cached Element References - things that need to reference the DOM elements -----*/

const riddle1 = document.getElementById('r1'); 
const riddle2 = document.getElementById('r2'); 
const riddle3 = document.getElementById('r3'); 

const answer1 = document.getElementById('a1')
const answer2 = document.getElementById('a2')
const answer3 = document.getElementById('a3')

const submitBtn = document.getElementById('submit'); 
const resetBtn = document.getElementById('reset'); 

/*----------- Event Listeners ----------*/

/*-------------- Functions -------------*/
init(); 

function init() {

}; 



function render() {

}; 

// function to render riddles on the page 
// function to submit answers