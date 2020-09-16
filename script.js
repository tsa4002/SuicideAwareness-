function startQuiz(){
    alert('Here We Go!!!!')
var questions = [
    {
        prompt: "How many Americans die by suicide every day? \n a) 123 \n b) 50 \n c) 400",

        answer: "a"
    },

    { 
        prompt: "True or false, depression affects 20-25% of Americans ages 18+ in a given year? \n True \n False",
        answer: "true" 
    },

    {
        prompt: "How many Americans die from suicide every year? \n a) 1000 \n b) 4,650 \n c) 44,965",
        answer: "c"

    }
]
var score = 0


for(var i = 0; i < questions.length; i++) {
    var response = window.prompt(questions[i].prompt);
    if(response==questions[i].answer){
        score++;
        alert('CORRECT!')


    } else {
        alert('WRONG!')
    }

}
alert('You Got ' + score + ' of ' + questions.length +' Questions Correct!')
};
