const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
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

startBtn.addEventListener("click", startQuiz);

// var quizQuestions = [
//     {
//         question:'Which of the following is NOT true about anonymous functions?',
//         a:'They are created using the function operator or arrow syntax.',
//         b:'They don't have a name.',
//         c:'They are most commonly used as a callback function.',
//         d:'They are NOT created at runtime.',
//         correctAnswer:'d'
//     },
//     {
//         question:'Which of the following is an example of something that JavaScript can add to a website?',
//         a:'Highlight text.',
//         b:'Create multiple paragraphs of content on a website.',
//         c:'Animate content on the website so that it grows larger when a user clicks on it.',
//         d:'Add a static image to a website.',
//         correctAnswer:'c'
//     },
//     {
//         question:'Which of the following statements correctly describes const?',
//         a:'const is not used to declare variables, it is a method.',
//         b:'const is used in ES6 to declare a variable that is block scoped and may be reassigned.',
//         c:'const is used in ES6 to declare a variable that is block scoped and may NOT be reassigned.',
//         d:'const is used in ES5 to declare a variable that is globally scoped and may be reassigned.',
//         correctAnswer:'c'
//     },
//     {
//         question:'What does the term Scope refer to?',
//         a:'It refers to the naming convention of variables in a program.',
//         b:'It defines the data type of the value that a variable contains.',
//         c:'It refers to the length of the data that a variable contains.',
//         d:'It refers to the visibility of variables in different contexts.',
//         correctAnswer:'d'
//     },
// ];

//Add questions to the page

//For loop to latch onto HTML

//When question is answered, move onto the next questions

//Notify when wrong answer, subtract time from the clock

//Finish quiz and give final score

//Game is over when questions are over or timer reaches 0

//Even listener to write initials and store in local storage
