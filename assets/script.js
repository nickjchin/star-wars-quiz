var multipleChoiceEl = document.querySelector(".multiple-choice");
var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");
var scoreList = document.querySelector(".score-list");
var scoreCounter = document.querySelector(".score-counter");
var userInfo = document.querySelector(".user-info");

var timer;
var timerCount;
var isCorrect = false;
var userInitials;
scoreCounter = 0;

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

// Start Game when button is clicked
function startGame() {
  timerCount = 30;
  // Prevents start Button from be being clicked while game has already started
  startButton.disabled = true;
  renderQuestions();
  startTimer();
}

// renderQuestions function ... displays questions to users
// function renderQuestions() {
    
// }

// function userInfo(){
//     // Display Score
//     // Created p tag to display congratulations message
//     var pTag = document.createElement("p");

//     // Set class attribute to gain styling
//     pTag.setAttribute("class", "medium-font");

//     pTag.innerHTML = "Congratulations! You scored " + scoreCounter + " points!";

//     // Initialized form elements to collect user's initials
//     var form  = document.createElement("form");
//     var label = document.createElement("label");
//     var input = document.createElement("input");
//     var submitButton = document.createElement("button");

//     // Set attributes to label
//     label.setAttribute("for", "Initials")

//     // Set attibutes to input
//     input.setAttribute("type",'text');
//     input.setAttribute("id", "initials");
//     input.setAttribute("value", "Enter Initials");

//     // Set attributes to button
//     submitButton.setAttribute("type", "submit");
//     submitButton.setAttribute("value", "Submit");
//     submitButton.innerHTML = "Submit";

//     // Append form elements to form
//     form.appendChild(label);
//     form.appendChild(input);
//     form.appendChild(submitButton);

//     // Append form and pTag to html
//     userInfo.appendChild(pTag);
//     userInfo.appendChild(form);
//  }

// Game Over Function ... Get user info for high score list
function gameOver() {
  multipleChoiceEl.textContent = "Game Over";

  // Allows start button to be clicked
  startButton.disabled = false;

  // Display Score
  // Created p tag to display congratulations message
  var pTag = document.createElement("p");

  // Set class attribute to gain styling
  pTag.setAttribute("class", "medium-font");

  pTag.innerHTML = "Congratulations! You scored " + scoreCounter + " points!";

  // Initialized form elements to collect user's initials
  var form = document.createElement("form");
  var label = document.createElement("label");
  var input = document.createElement("input");
  var submitButton = document.createElement("button");

  // Set attributes to label
  label.setAttribute("for", "Initials");

  // Set attibutes to input
  input.setAttribute("type", "text");
  input.setAttribute("id", "initials");
  input.setAttribute("value", "Enter Initials");

  // Set attributes to button
  submitButton.setAttribute("type", "submit");
  submitButton.setAttribute("value", "Submit");
  submitButton.innerHTML = "Submit";

  // Append form elements to form
  form.appendChild(label);
  form.appendChild(input);
  form.appendChild(submitButton);

  // Append form and pTag to html
  userInfo.appendChild(pTag);
  userInfo.appendChild(form);

  //  userInfo();
}

function setScore(){
    var initials = document.getElementById("#initials").value;
    localStorage.setItem(initials, scoreCounter);
}

// Timer Function
function startTimer() {
  timer = setInterval(function () {
    timerCount--;
    timerElement.textContent = timerCount;
    if (timerCount >= 0) {
      //Test to see if question is answered correctly
      if (isCorrect && timerCount > 0) {
        console.log("answer correct, next question");
        scoreCounter = scoreCounter + 10;
        console.log(
          "Your Current score is: " + scoreCounter + "at Time: " + timerCount
        );
        // Else if, question is incorrect and deduct 5 seconds
      } else if (isCorrect == false && timerCount > 0) {
        timerCount - 5;
        scoreCounter = scoreCounter + 0;
        console.log(
          "Your Current score is: " + scoreCounter + " at Time: " + timerCount
        );
        // Else if, timer = 0, game over
      } else if (timer == 0) {
        clearInterval(timer);
        gameOver();
      }
    }
  });
}
