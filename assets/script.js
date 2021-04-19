var questions = document.getElementById("questions");
var timer = document.getElementById("time");
var scoreText = document.getElementById("score");
var startBtn = document.getElementById("startBtn");
var greeting = document.querySelector(".greeting");
var questionText = document.getElementById("questionText");
var quizQuestions = document.querySelector(".quizQuestions");

//Answers
var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");
var button4 = document.getElementById("button4");

// var questionArr = [{question:}]
var timeLeft = 60;

//Display timer and start countdown when button pressed
function startQuiz() {
  greeting.style.display = "none";
  timer.style.textContent = "Time: 60";
  console.log("hello");
  countdown();
  quizQuestions.style.display = "flex";
}

// Timer and countdown function from 60, continue to show question if time is still left
function countdown() {
  var timeLeft = 60;

  var timerInterval = setInterval(function () {
    if (timeLeft > 1) {
      timer.textContent = timeLeft + " seconds";
      timeLeft--;
    } else if (timeLeft === 1) {
      timer.textContent = timeLeft + " second";
      timeLeft--;
    } else {
      timer.textContent = "";
      clearInterval(timerInterval);
      displayMessage();
    }
  }, 1000);
  showQuestions();
}

// document.getElementById("timer").innerHTML = seconds;
// }
// if (seconds >0 ) { // so it doesn't go to -1
//    seconds--;
// } else {
//    clearInterval(timer);
//    alert("Quiz over!");
// }
// document.getElementById("timer").innerHTML= "0:" + seconds/1000;

// Quiz questions and answer, loop through questions. When question starts, change text content of page to give location of text content.
var questions = [
  {
    question: "Which of the following is NOT true about anonymous functions?",
    answers: [
      "They are created using the function operator or arrow syntax.",
      "They dont have a name.",
      "They are most commonly used as a callback function.",
      "They are NOT created at runtime.",
    ],
    correctAnswer: "They are NOT created at runtime.",
  },
  {
    question:
      "Which of the following is an example of something that JavaScript can add to a website?",
    answers: [
      "Highlight text.",
      "Create multiple paragraphs of content on a website.",
      "Animate content on the website so that it grows larger when a user clicks on it.",
      "Add a static image to a website.",
    ],
    correctAnswer:
      "Animate content on the website so that it grows larger when a user clicks on it.",
  },
  {
    question: "Which of the following statements correctly describes const?",
    answers: [
      "const is not used to declare variables, it is a method.",
      "const is used in ES6 to declare a variable that is block scoped and may be reassigned.",
      "const is used in ES6 to declare a variable that is block scoped and may NOT be reassigned.",
      "const is used in ES5 to declare a variable that is globally scoped and may be reassigned.",
    ],
    correctAnswer:
      "const is used in ES6 to declare a variable that is block scoped and may NOT be reassigned.",
  },
  {
    question: "What does the term Scope refer to?",
    answers: [
      "It refers to the naming convention of variables in a program.",
      "It defines the data type of the value that a variable contains.",
      "It refers to the length of the data that a variable contains.",
      "It refers to the visibility of variables in different contexts.",
    ],
    correctAnswer:
      "It refers to the visibility of variables in different contexts.",
  },
];

function showQuestions() {
  questionText.textContent = questions[nextQuestion].question;
  button1.textContent = questions[nextQuestion].answers[0];
  button2.textContent = questions[nextQuestion].answers[1];
  button3.textContent = questions[nextQuestion].answers[2];
  button4.textContent = questions[nextQuestion].answers[3];
}

//code click events for when button is clicked.
//compare text content of button to correct answer of the question
//display next question

var prevQuestion = questions.length - 1;
var nextQuestion = 0;
var score = 0;

function checkAnswer(buttonNum) {
  console.log(buttonNum);

  if (
    questions[nextQuestion].answers[buttonNum - 1] ==
    questions[nextQuestion].correctAnswer
  ) {
    score++;
    alert("Correct!");
  } else {
    alert("Incorrect!");
    timeLeft = timeLeft - 15;
  }
  if (nextQuestion < prevQuestion) {
    nextQuestion++;
    showQuestions();
  } else {
    timer.style.display = "none";
  }
}

//Notify when wrong answer, subtract time from the clock

//Game is over when questions are over or timer reaches 0
//Finish quiz and give final score

//Local storage for initials input and list
var initialsInput = document.getElementById("inputName");
var initialsList = document.querySelector("showScore");
var submit = document.getElementById("initialsButton");

//Event listener for high scores
submit.addEventListener("click", function () {
  localStorage.setItem("initialsInput", initialsInput.value);
  highScores();
});

//Scoreboard page
function highScores() {}

startBtn.addEventListener("click", startQuiz);
