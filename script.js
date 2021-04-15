var question = document.querySelector('#question');
var choices = Array.from(document.querySelectorAll('.choice-text'));
var progressText = document.querySelector('#progressText');
var scoreText = document.querySelector('#score');
var startBtn = document.querySelector("#startBtn");

//Write start quiz function, hide greetings div, display questions
var quiz = function() {
    
    let timer = setInterval(function() {
        if (countdown == 10) {
            document.getElementById('time-remaining').style.color = "yellow";
        }
        if (countdown == 0) {
            clearInterval(timer);
            mainPopulate(endFile, endScreen);
            document.getElementById('statement').innerText = "Time's up!";
            clearMessage();
        }
        if (countdownStop == true) {
            clearInterval(timer);
            countdownStop == false;
        }
        document.getElementById('time-remaining').innerText = countdown;
        countdown--;
        }, 1000);
}

//Display timer and start countdown when button pressed

//Start time
let timeRemaining = 60;

var questions = [
    {
        question:'Which of the following is NOT true about anonymous functions?',
        answerA:'They are created using the function operator or arrow syntax.',
        answerB:'They dont have a name.',
        answerC:'They are most commonly used as a callback function.',
        answerD:'They are NOT created at runtime.',
        correctAnswer:'d'
    },
    {
        question:'Which of the following is an example of something that JavaScript can add to a website?',
        answerA:'Highlight text.',
        answerB:'Create multiple paragraphs of content on a website.',
        answerC:'Animate content on the website so that it grows larger when a user clicks on it.',
        answerD:'Add a static image to a website.',
        correctAnswer:'c'
    },
    {
        question:'Which of the following statements correctly describes const?',
        answerA:'const is not used to declare variables, it is a method.',
        answerB:'const is used in ES6 to declare a variable that is block scoped and may be reassigned.',
        answerC:'const is used in ES6 to declare a variable that is block scoped and may NOT be reassigned.',
        answerD:'const is used in ES5 to declare a variable that is globally scoped and may be reassigned.',
        correctAnswer:'c'
    },
    {
        question:'What does the term Scope refer to?',
        answerA:'It refers to the naming convention of variables in a program.',
        answerB:'It defines the data type of the value that a variable contains.',
        answerC:'It refers to the length of the data that a variable contains.',
        answerD:'It refers to the visibility of variables in different contexts.',
        correctAnswer:'d'
    },
];

//Add questions to the page

//For loop to latch onto HTML
for(var i=0; i < questions.length; i++){
    var response = window.prompt(question[i].prompt);
    if (response == questions[i].answer){
        score++;
        alert("Correct!");
    } else {
        alert("Wrong!");
 
    }
}

//When question is answered, move onto the next questions

//Notify when wrong answer, subtract time from the clock

//Finish quiz and give final score

//Game is over when questions are over or timer reaches 0

//Even listener to write initials and store in local storage

$inputButton.addEventListener("click", function(e) {
    e.preventDefault();
    loadScore();
    let initials = $nameInput.value;
    let saveObj = {
        initials: initials,
        score: score
    };
    saveFiles.push(saveObj);
    console.log(saveFiles);
    saveScore();

startBtn.addEventListener("click", startQuiz);