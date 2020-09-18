const start = document.getElementById("start")
const quiz = document.getElementById("quiz")
const question = document.getElementById("question")
const choiceA = document.getElementById("A")
const choiceB = document.getElementById("B")
const choiceC = document.getElementById("C")
const counter = document.getElementById("counter")
const timeGauge = document.getElementById("timeGauge")
const progress = document.getElementById("progress")
const scoreDiv = document.getElementById("scoreContainer")




//create our questions 
let questions = [

   {
        question : "Suicide is the 10th leading cause of death overall in the United States.",
        choiceA : "True",
        choiceB : "False",
        choiceC : "I Have No Idea",
        correct : "A"
    },
    {
        question : "Suicide is the _____ leading cause of death among young people ages 15 to 24 around the world.",
        choiceA : "2nd",
        choiceB : "4th",
        choiceC : "10th",
        correct : "A"
    },
    {
        question : "Females are ______ more likely to attempt suicide than males.",
        choiceA : "not",
        choiceB : "3 times",
        choiceC : "5 times",
        correct : "B"
    },
    {
        question : "Males are ______ more likely to die by suicide than females.",
        choiceA : "not",
        choiceB : "2 times",
        choiceC : "4 times",
        correct : "C"
    },
    {
        question : "Firearms accounted for more than half of all suicide deaths.",
        choiceA : "True",
        choiceB : "False",
        choiceC : "I have no Idea",
        correct : "A" 
    },
    {
        question : "LGB kids are ______ more likely to attempt suicide than straight kids at some point in their life.",
        choiceA : "not",
        choiceB : "3 times",
        choiceC : "5 times",
        correct : "B"

    },
    {
        question : "Approximately, _______ Americans die by suicide every day.",
        choiceA : "33",
        choiceB : "42",
        choiceC : "123",
        correct : "C"
    },
    {
        question : "80%-90% of people that seek treatment for depression recover from therapy and/or medications.",
        choiceA : "True",
        choiceB : "False",
        choiceC : "I have no idea",
        correct : "A"
    },
    {
        question : "9 out of 10 people who attempt suicide and survive will not die by suicide at a later date.",
        choiceA : "True",
        choiceB : "False",
        choiceC : "I have no idea",
        correct : "A"
    },
]

//variables
const lastQuestionIndex = questions.length-1;
let runningQuestionIndex = 0;
let count = 0;
const questionTime = 10; // 10 seconds for every question
const gaugeWidth = 150; //150 pixels
const gaugeUnit = gaugeWidth / questionTime;
let TIMER;
let score = 0;

// function that renders question
function questionRender() {
    let q = questions[runningQuestionIndex];

    question.innerHTML = "<p>" + q.question + "</p>"
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
}
start.addEventListener("click", startQuiz );

//start quiz

//start quiz function
function startQuiz(){
    start.style.display = "none";
    questionRender();
    quiz.style.display = "block"
    progressRender();
    renderCounter();
    TIMER = setInterval(renderCounter, 1000); //1000ms = 1s
}

//function that renders progress
function progressRender() {
    for(let qIndex = 0; qIndex <= lastQuestionIndex; qIndex++){
        progress.innerHTML += "<div class='prog' id=" + qIndex +"> </div>";
    }
}

// function that creates counter
function renderCounter(){
    if (count <= questionTime ){
        counter.innerHTML = count;
        timeGauge.style.width = count * gaugeUnit + "px";
        count++;
    } else{
        count = 0;
        answerIsWrong();
        if(runningQuestionIndex < lastQuestionIndex){
            runningQuestionIndex++
            questionRender();
        } else{
            //end the quiz and show the score
            clearInterval(TIMER);
            scoreRender();
        }
    }}


// function that checks answer
function checkAnswer(answer){
    if (answer == questions[runningQuestionIndex].correct){
        // answer is correct
        score++
        //change progress color to green
        answerIsCorrect();
    } else{
        //answer is incorrect
        //change progress color to red
        answerIsWrong();

    }
    count = 0;
    if (runningQuestionIndex < lastQuestionIndex){
        runningQuestionIndex++;
        questionRender();
    }else{
        clearInterval(TIMER);
        scoreRender();
    }
}

//function that changes color to green when answer is correct 
function answerIsCorrect(){
    document.getElementById(runningQuestionIndex).style.backgroundColor = "#0f0"
}

//function that changes color to red when asnwer is incorrect 
function answerIsWrong(){
    document.getElementById(runningQuestionIndex).style.backgroundColor = "#f00"
}

//function that renders the score
function scoreRender(){
    scoreDiv.style.display = "block";
    //calculate the percent of questions correctly answered
    let scorePerCent = Math.round(100 * score / questions.length);
    //choose the image based on the scorePerCent
    let img = (scorePerCent >= 80) ? "smile.png" :
              (scorePerCent >= 60) ? "flat.png" :
              (scorePerCent < 60) ? "frown.png" :
              "smile.png";
    scoreDiv.innerHTML = "<img src=" + img +">";
    scoreDiv.innerHTML = "<p>"+ scorePerCent +"%</p>";
}
























