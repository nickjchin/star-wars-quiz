var multipleChoiceEl = document.querySelector(".multiple-choice");
var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");
var scoreList = document.querySelector(".score-list");
var scoreCounter = document.querySelector(".score-counter");

var timer;
var timerCount;
var isAnswered = false;
var isCorrect = false;
var scoreCounter = 0;

// questions
// 1. how many lightsaber forms are there?
// 1a. 7, ....
// 2. how many is clone force 99 named after
// 2a. Clone 99
// 3. Who commissioned the clone army
// 3a. syfodius
// 4. Who lives on degoba
// 4a. Yoda
// 5. Who is the origin owner of the Millenium Falcon
// 5a. Lando



// Timer Function
function startTimer(){
timer = setInterval(function(){
    timerCount--; 
    timerElement.textContent = timerCount;
    if(timerCount >= 0){
        //Test to see if question is answered correctly
       if () 
    }
})
}