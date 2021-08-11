var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");
var scoreList = document.querySelector(".score-list");
var scoreCounter = document.querySelector(".score-counter");
var userInfo = document.querySelector(".user-info");
var qBlock = document.getElementById("question-block");

var timer;
var timerCount;
var isCorrect = false;
var userInitials;
scoreCounter = 0;
var usersAnsers = "";

startButton.onclick = init;

// init function
function init() {
  startGame();
}

// Start Game when button is clicked
function startGame() {
  timerCount = 30;
  // Prevents start Button from be being clicked while game has already started
  // startButton.disabled = true;
  startButton.classList.add("hide");
  startButton.classList.remove("show");
  qBlock.style.display = "block"; // <-- Set it to block
  getQuestionValue();
  renderQuestions();
  startTimer();
}

// Questions
var questionsArray = [
  {
    question: "How many lightsaber forms are there?",
    choiceA: 7,
    choiceB: 8,
    choiceC: 9,
    choiceD: 10,
    number: 0,
    // correct:
    //   "A. There are 7 lightsaber forms.The forms are Shii-Cho, Makashi, Soresu, Shien/Djem, Niman, and Juyo/Vaapad.",
  },
  {
    question: "Who commissioned the clone army?",
    choiceA: "General Grevious",
    choiceB: "Count Dooku",
    choiceC: "Sifo-Dyas",
    choiceD: "Darth Sidious",
    number: 1,
    // correct: "C. Sifo-Dyas commissioned the clone army.",
  },
  {
    question: "Who is Clone Force 99 named after",
    choiceA: "Captain Rex",
    choiceB: "Clone 99",
    choiceC: "Ashoka Tano",
    choiceD: "Boba Fett",
    number: 2,
    // correct: "B. Clone Force 99 are named after defective Clone 99.",
  },
  {
    question: "Who lives on the planet Dagobah?",
    choiceA: "Obi Wan Kenobi",
    choiceB: "Luke Skywalker",
    choiceC: "Chewbacca",
    choiceD: "Yoda",
    number: 3,
    // correct: "D. Yoda lived on Dagobah to avoid being found by the new empire.",
  },
  {
    question: "Who is the original owner of the Millenium Falcon?",
    choiceA: "Han Solo",
    choiceB: "Chewbacca",
    choiceC: "Lando Calrissian",
    choiceD: "Jabba the Hutt",
    number: 4,
    // correct:
    // "C. Lando Calrissian was the original owner of the Millenium Falcon after he lent it to Han and Chewy.",
  },
];

var questionAnswers = ["a", "c", "b", "d", "c"];
var currentQuestionDisplay = [];
var currentQuestion = 0;

// function to select object "questions" out of the array
function getQuestionValue() {
  currentQuestionDisplay.push(questionsArray[currentQuestion]);
  console.log(currentQuestion);
}

// renderQuestions function ... displays questions to users
// randomly choose question from array and assign it to a variable
function renderQuestions() {
  console.log(currentQuestionDisplay);
  document.getElementById("questionDisplay").innerHTML =
    currentQuestionDisplay[0].question;
  document.getElementById("choice1").innerHTML =
    currentQuestionDisplay[0].choiceA + " forms";
  document.getElementById("choice2").innerHTML =
    currentQuestionDisplay[0].choiceB + " forms";
  document.getElementById("choice3").innerHTML =
    currentQuestionDisplay[0].choiceC + " forms";
  document.getElementById("choice4").innerHTML =
    currentQuestionDisplay[0].choiceD + " forms";
}

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
  document.getElementById("questionDisplay").innerHTML = "Game Over";
  document.getElementById("choice1").classList.add("hide");
  document.getElementById("choice2").classList.add("hide");
  document.getElementById("choice3").classList.add("hide");
  document.getElementById("choice4").classList.add("hide");

  // Allows start button to be clicked
  startButton.classList.add("show");
  startButton.classList.remove("hide");

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

// stores initials and score counter to localstorage
function setScore() {
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
