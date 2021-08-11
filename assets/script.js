var timerEl = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");
var scoreCounter = document.querySelector(".score-counter");
var userInfo = document.querySelector(".user-info");
var qBlock = document.getElementById("question-block");
var isGameOver = false;

var timer;
var timerCount;
scoreCounter = 0;
var gameIsOver;

startButton.onclick = init;

// init function
function init() {
  startGame();
}

// Start Game when button is clicked
function startGame() {
  // Prevents start Button from be being clicked while game has already started
  // startButton.disabled = true;
  timerCount = 30;
  startButton.setAttribute("style", "display: none;");
  qBlock.setAttribute("style", "display: block"); // <-- Set it to block
  getQuestionValue();
  renderQuestions();
  isGameOver = false;
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
    number: 1,
    correct:
      "There are 7 lightsaber forms.The forms are Shii-Cho, Makashi, Soresu, Shien/Djem, Niman, and Juyo/Vaapad.",
  },
  {
    question: "Who commissioned the clone army?",
    choiceA: "General Grevious",
    choiceB: "Count Dooku",
    choiceC: "Sifo-Dyas",
    choiceD: "Darth Sidious",
    number: 3,
    correct: "Sifo-Dyas commissioned the clone army.",
  },
  {
    question: "Who is Clone Force 99 named after",
    choiceA: "Captain Rex",
    choiceB: "Clone 99",
    choiceC: "Ashoka Tano",
    choiceD: "Boba Fett",
    number: 2,
    correct: "Clone Force 99 are named after defective Clone 99.",
  },
  {
    question: "Who lives on the planet Dagobah?",
    choiceA: "Obi Wan Kenobi",
    choiceB: "Luke Skywalker",
    choiceC: "Chewbacca",
    choiceD: "Yoda",
    number: 4,
    correct: "Yoda lived on Dagobah to avoid being found by the new empire.",
  },
  {
    question: "Who is the original owner of the Millenium Falcon?",
    choiceA: "Han Solo",
    choiceB: "Chewbacca",
    choiceC: "Lando Calrissian",
    choiceD: "Jabba the Hutt",
    number: 3,
    correct:
      "Lando Calrissian was the original owner of the Millenium Falcon after he lent it to Han and Chewy.",
  },
];

var questionAnswers = ["a", "c", "b", "d", "c"];
var currentQuestionDisplay = [];
var currentQuestion = 0;

// function to select object "questions" out of the array
function getQuestionValue() {
  currentQuestionDisplay = [];
  currentQuestionDisplay.push(questionsArray[currentQuestion]);
  console.log("Here");
}

// renderQuestions function ... displays questions and choices to users
function renderQuestions() {
  console.log(currentQuestionDisplay);
  document.getElementById("question-display").innerHTML =
    currentQuestionDisplay[0].question;
  document.getElementById("choice1").innerHTML =
    currentQuestionDisplay[0].choiceA;
  document.getElementById("choice2").innerHTML =
    currentQuestionDisplay[0].choiceB;
  document.getElementById("choice3").innerHTML =
    currentQuestionDisplay[0].choiceC;
  document.getElementById("choice4").innerHTML =
    currentQuestionDisplay[0].choiceD;
  // document.getElementById("show-answer").innerHTML = "Answer: ";
}

// Matches button 1 to questionArray's object's number, which corresponds to correct choice
// If choice A is correct + 100 points
function button1Click() {
  var tempAnswer = questionsArray[currentQuestion].number;
  if (tempAnswer == 1) {
    scoreCounter += 100;
    console.log(scoreCounter);
    document.getElementById("score-display").innerHTML = scoreCounter;
    console.log(currentQuestionDisplay[0].correct);
    document.getElementById("show-answer").innerHTML =
      "Correct: " + currentQuestionDisplay[0].correct;
  } else {
    timerCount = timerCount - 5;
    document.getElementById("show-answer").innerHTML =
      "Incorrect: " + currentQuestionDisplay[0].correct;
    scoreCounter += 0;
    if (timerCount == 0) {
      gameOver();
    }
  }

  currentQuestion += 1;
  if (currentQuestion < questionsArray.length) {
    getQuestionValue();
    renderQuestions();
  } else {
    gameOver();
    clearInterval(timerCount);
  }
}

// Matches button 2 to questionArray's object's number, which corresponds to correct choice
// If choice B is correct + 100 points
function button2Click() {
  var tempAnswer = questionsArray[currentQuestion].number;
  if (tempAnswer == 2) {
    scoreCounter += 100;
    console.log(scoreCounter);
    document.getElementById("score-display").innerHTML = scoreCounter;
    console.log(currentQuestionDisplay[0].correct);
    document.getElementById("show-answer").innerHTML =
      "Correct: " + currentQuestionDisplay[0].correct;
  } else {
    timerCount = timerCount - 5;
    document.getElementById("show-answer").innerHTML =
      "Incorrect: " + currentQuestionDisplay[0].correct;
    scoreCounter += 0;
    if (timerCount == 0) {
      gameOver();
    }
  }

  currentQuestion += 1;
  if (currentQuestion < questionsArray.length) {
    getQuestionValue();
    renderQuestions();
  } else {
    gameOver();
    clearInterval(timerCount);
  }
}

// Matches button 3 to questionArray's object's number, which corresponds to correct choice
// If choice C is correct + 100 points
function button3Click() {
  var tempAnswer = questionsArray[currentQuestion].number;
  if (tempAnswer == 3) {
    scoreCounter += 100;
    console.log(scoreCounter);
    document.getElementById("score-display").innerHTML = scoreCounter;
    console.log(currentQuestionDisplay[0].correct);
    document.getElementById("show-answer").innerHTML =
      "Correct: " + currentQuestionDisplay[0].correct;
  } else {
    timerCount = timerCount - 5;
    document.getElementById("show-answer").innerHTML =
      "Incorrect: " + currentQuestionDisplay[0].correct;
    scoreCounter += 0;
    if (timerCount == 0) {
      gameOver();
      clearInterval(timerCount);
    }
  }

  currentQuestion += 1;
  if (currentQuestion < questionsArray.length) {
    getQuestionValue();
    renderQuestions();
  } else {
    gameOver();
    clearInterval(timerCount);
  }
}

// Matches button 4 to questionArray's object's number, which corresponds to correct choice
// If choice D is correct + 100 points
function button4Click() {
  var tempAnswer = questionsArray[currentQuestion].number;
  if (tempAnswer == 4) {
    scoreCounter += 100;
    console.log(scoreCounter);
    document.getElementById("score-display").innerHTML = scoreCounter;
    console.log(currentQuestionDisplay[0].correct);
    document.getElementById("show-answer").innerHTML =
      "Correct: " + currentQuestionDisplay[0].correct;
  } else {
    timerCount = timerCount - 5;
    document.getElementById("show-answer").innerHTML =
      "Incorrect: " + currentQuestionDisplay[0].correct;
    scoreCounter += 0;
    if (timerCount == 0) {
      gameOver();
    }
  }

  currentQuestion += 1;
  if (currentQuestion < questionsArray.length) {
    getQuestionValue();
    renderQuestions();
  } else {
    gameOver();
    clearInterval(timerCount);
  }
}

// Timer Function
function startTimer() {
  console.log(isGameOver);
  if (isGameOver == false) {
    console.log(currentQuestion);
    timerCount = 30;
    var counter = setInterval(timer, 1000);
    function timer() {
      timerCount = timerCount - 1;
      if (timerCount < 0) {
        clearInterval(timerCount);
        return;
      } else if (timerCount == 0) {
        clearInterval(timerCount);
        gameOver();
        return;
      }
      timerEl.innerHTML = timerCount;
    }
  } else {
    console.log(isGameOver);
    return;
  }
}

// Stop function
function stopTimer() {
  clearInterval(timerCount);
  timerCount = 0;
}

// Game Over Function ... Get user info for high score list
function gameOver() {
  stopTimer();
  isGameOver = true;

  timerEl.innerHTML = "0";

  document.getElementById("question-display").innerHTML = "";
  // Hides Choices
  qBlock.setAttribute("style", "display: none");

  // Shows start button
  // startButton.setAttribute("style", "display: inline-block");

  // Resets Show correct/incorrect
  document.getElementById("show-answer").innerHTML = "";

  // Display Score
  // Created p tag to display congratulations message
  var pTag = document.createElement("p");

  // Set class attribute to gain styling
  pTag.setAttribute("class", "medium-font");
  pTag.setAttribute("id", "congrats-message");

  // Sets p tags text
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
  input.setAttribute("placeholder", "Enter Initials");
  input.setAttribute("class", "medium-font");

  // Set attributes to button
  submitButton.setAttribute("type", "submit");
  submitButton.setAttribute("value", "submit");
  submitButton.setAttribute("id", "add-score");
  submitButton.innerHTML = "Submit";

  // Append form elements to form
  form.appendChild(label);
  form.appendChild(input);
  form.appendChild(submitButton);

  // Append form and pTag to html
  userInfo.appendChild(pTag);
  userInfo.appendChild(form);

  // Get users info

  var addScoresButton = document.getElementById("add-score");

  addScoresButton.addEventListener("click", function (event) {
    event.preventDefault();
    var userInitials = document.getElementById("initials").value;
    var highscoresDisplay = document.getElementById("score-list").value;

    var userHighScoreInfo = { initials: userInitials, score: scoreCounter };

    if (userInitials === "") {
      input.setAttribute("placeholder", "Please Enter Initials!");
    }

    localStorage.setItem(
      "userHighScoreInfo",
      JSON.stringify(userHighScoreInfo)
    );
    startButton.onclick = init;
  });

  // if ((startButton.onclick = init)) {
  //   getElementById("question-display").setAttribute("style", "display: block");
  //   querySelector(".user-info").setAttribute("style", "display: none;");
  // }

  return;
}

// stores initials and score counter to localstorage
function setScore() {
  var initials = document.getElementById("#initials").value;
  localStorage.setItem(initials, scoreCounter);
}
