//variables established by the document.querySelector() function
var title = document.querySelector("#title");
var start = document.querySelector("#start");
var timer = document.querySelector("#timer");
var instruction = document.querySelector("#instruction");
var question = document.querySelector("#question");
var answers = document.querySelector("#answers");
var questionAnswerOne = document.querySelector("#q-answer-one");
var questionAnswerTwo = document.querySelector("#q-answer-two");
var questionAnswerThree = document.querySelector("#q-answer-three");
var questionAnswerFour = document.querySelector("#q-answer-four");
var submitScore = document.querySelector("#submit-score");
var nameSpan = document.querySelector("#name-span");
var nameInput = document.querySelector("#name-input");
var highScorePage = document.querySelector("#high-score-page");
var msgDiv = document.querySelector("#msg");
var score = 0;
var time = 50;
//initial display for the webpage
timer.textContent = ("Score : " + time);
question.style.display = "none";
answers.style.display = "none";
highScorePage.style.display = "none";
//questions for the quiz
var questions = [
    { q: 'A very useful tool used during development and debugging for printing content to the debugger is:', a1: 'javascript', a2: 'terminal/bash', a3: 'for loops', a4: 'console.log'},
    { q: 'Commonly used data typed DO NOT include:', a1: 'strings', a2: 'booleans', a3: 'alerts', a4: 'numbers' },
    { q: 'The condition in an if/else statement is enclosed with ____', a1: 'quotes', a2: 'curly brackets', a3: 'parenthesis', a4: 'square brackets'},
    { q: 'Arrays in Javascript can be used to store', a1: 'numbers and strings', a2: 'other arrays', a3: 'booleans', a4: 'all of the above'},
    { q: 'String values must be inclosed within ____ when being assigned to variables', a1: 'commas', a2: 'curly brackets', a3: 'quotes', a4: 'parenthesis'}
];
//function to start the quiz
function startQuiz() {
    //establishing the initial time display -1 second for no lag
    var time = 49;
    //setting our countdown
    var timeInterval = setInterval(function () {
      timer.textContent = ("Score : " + time);
      time--;
      if (time===0 || time<0) {
        timer.textContent = ("Score : " + time)
        clearInterval(timeInterval);
        highScore();

      }
    
    }, 1000);
    //hiding the start screen elements
    title.style.display = "none";
    start.style.display = "none";
    instruction.style.display = "none";
    //revealing the question section of the quiz
    question.style.display = "block";
    answers.style.display = "block";
    //displays the first sequence of questions and answers
    question.textContent = (questions[0].q)
    questionAnswerOne.textContent = (questions[0].a1)
    questionAnswerTwo.textContent = (questions[0].a2)
    questionAnswerThree.textContent = (questions[0].a3)
    questionAnswerFour.textContent = (questions[0].a4)
    //EventListener for a click event initiated by the answer buttons
    questionAnswerOne.addEventListener("click", function(){
        time = time - 10;
        questionTwo()
    });
    questionAnswerTwo.addEventListener("click", function(){
        time = time - 10;
        questionTwo()
    });
    questionAnswerThree.addEventListener("click", function(){
        time = time - 10;
        questionTwo()
    });
    questionAnswerFour.addEventListener("click", function(){
        questionTwo()
    });

//function for second question
function questionTwo () {
    //Q&A second sequence
    question.textContent = (questions[1].q)
    questionAnswerOne.textContent = (questions[1].a1)
    questionAnswerTwo.textContent = (questions[1].a2)
    questionAnswerThree.textContent = (questions[1].a3)
    questionAnswerFour.textContent = (questions[1].a4)
    //click event functions
    questionAnswerOne.addEventListener("click", function(){
        questionThree()
    });
    questionAnswerTwo.addEventListener("click", function(){
        questionThree()
    });
    questionAnswerThree.addEventListener("click", function(){
       time = time + 10;
       questionThree()
    });
    questionAnswerFour.addEventListener("click", function(){
        time = time - 10;
        questionThree()
    });
}
//Q3 function
function questionThree () {
    //Q&A third sequence
    question.textContent = (questions[2].q)
    questionAnswerOne.textContent = (questions[2].a1)
    questionAnswerTwo.textContent = (questions[2].a2)
    questionAnswerThree.textContent = (questions[2].a3)
    questionAnswerFour.textContent = (questions[2].a4)
    //click event functions
    questionAnswerOne.addEventListener("click", function(){
        questionFour()
    });
    questionAnswerTwo.addEventListener("click", function(){
        questionFour()
    });
    questionAnswerThree.addEventListener("click", function(){
        time = time - 10;
       questionFour()
    });
    questionAnswerFour.addEventListener("click", function(){
        questionFour()
    });
}
//Q4 function
function questionFour () {
    question.textContent = (questions[3].q)
    questionAnswerOne.textContent = (questions[3].a1)
    questionAnswerTwo.textContent = (questions[3].a2)
    questionAnswerThree.textContent = (questions[3].a3)
    questionAnswerFour.textContent = (questions[3].a4)

    questionAnswerOne.addEventListener("click", function(){
        questionFive();
    });
    questionAnswerTwo.addEventListener("click", function(){
        questionFive();
    });
    questionAnswerThree.addEventListener("click", function(){
        questionFive();
    });
    questionAnswerFour.addEventListener("click", function(){
        time = time + 30;
        questionFive();
    });
}
//Q5 function
function questionFive () {
    question.textContent = (questions[4].q)
    questionAnswerOne.textContent = (questions[4].a1)
    questionAnswerTwo.textContent = (questions[4].a2)
    questionAnswerThree.textContent = (questions[4].a3)
    questionAnswerFour.textContent = (questions[4].a4)
    
    questionAnswerOne.addEventListener("click", function(){
        highScore ();
    });
    questionAnswerTwo.addEventListener("click", function(){
        highScore ();
    });
    questionAnswerThree.addEventListener("click", function(){
        time = time + 30;
        highScore ();
    });
    questionAnswerFour.addEventListener("click", function(){
        highScore ();
    });
}
//function to reveal the high score page
function highScore () {
    question.style.display = "none";
    answers.style.display = "none";
    highScorePage.style.display = "block";
    clearInterval(timeInterval);
}
//function to recieve the name of the user's high score
function getHighScore() {
    var name = localStorage.getItem("name");
    if (name === null) {
        window.alert("Please enter your name!");
        return;
    }
  
    nameSpan.textContent = name;
  }
  
  getHighScore();
  
  function displayMessage(type, message) {
    msgDiv.textContent = message;
    msgDiv.setAttribute("class", type);
}
//function to store the high score and prevent null input
submitScore.addEventListener("click", function (event) {
    event.preventDefault();
  
    var name = document.querySelector("#name").value;
  
    if (name === "") {
      window.alert("Please enter your name!");
    } else {
  
      localStorage.setItem("name", name + "  //  " + (timer.textContent));
      getHighScore();
    }}
);}
