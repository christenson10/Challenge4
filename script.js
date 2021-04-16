var quizQuestions = document.getElementById('#quizQuestion');
var choices = Array.from(document.getElementById('.choice-text'));
var progressText = document.getElementById('#progressText');
var timer = document.getElementById("timer");
var scoreText = document.getElementById('#score');
var startBtn = document.getElementById("#startBtn");

//Display timer and start countdown when button pressed
function startQuiz() {
    greeting.display = "none";
    timer.textContent = "Time: 60";
    startBtn.display = "none";

    countdown();
}

//Write start quiz function, hide greetings div, display questions
// var quiz = function() {
    
//     let timer = setInterval(function() {
//         if (countdown == 10) {
//             document.getElementById('time-remaining').style.color = "yellow";
//         }
//         if (countdown == 0) {
//             clearInterval(timer);
//             mainPopulate(endFile, endScreen);
//             document.getElementById('statement').innerText = "Time's up!";
//             clearMessage();
//         }
//         if (countdownStop == true) {
//             clearInterval(timer);
//             countdownStop == false;
//         }
//         document.getElementById('time-remaining').innerText = countdown;
//         countdown--;
//         }, 1000);
// }


// Timer and countdown function from 60, continue to show question if time is still left
function countdown() {
    setInterval(function()) {
        if (time>=0) {
            seconds = seconds--;
        } else {
            clearInterval("timer");
    }, 1000)

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


// Quiz questions and answer
const quizQuestions = [
    {
        question:'Which of the following is NOT true about anonymous functions?',
        options:['They are created using the function operator or arrow syntax.', 'They dont have a name.', 'They are most commonly used as a callback function.', 'They are NOT created at runtime.'] 
        correctAnswer: 'They are NOT created at runtime.',
    },
    {
        question:'Which of the following is an example of something that JavaScript can add to a website?',
        options:['Highlight text.', 'Create multiple paragraphs of content on a website.', 'Animate content on the website so that it grows larger when a user clicks on it.', 'Add a static image to a website.'],
        correctAnswer:'Animate content on the website so that it grows larger when a user clicks on it.',
    },
    {
        question:'Which of the following statements correctly describes const?',
        option:['const is not used to declare variables, it is a method.', 'const is used in ES6 to declare a variable that is block scoped and may be reassigned.', 'const is used in ES6 to declare a variable that is block scoped and may NOT be reassigned.', 'const is used in ES5 to declare a variable that is globally scoped and may be reassigned.'],
        correctAnswer:'const is used in ES6 to declare a variable that is block scoped and may NOT be reassigned.',
    },
    {
        question:'What does the term Scope refer to?',
        option:['It refers to the naming convention of variables in a program.', 'It defines the data type of the value that a variable contains.', 'It refers to the length of the data that a variable contains.', 'It refers to the visibility of variables in different contexts.'],
        correctAnswer:'It refers to the visibility of variables in different contexts.',
    },
];

//Add questions to the page
function showQuestions () {

}



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