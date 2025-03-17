const questions =[
    new Question("1.What is the capital of Texas?", {a:"Dallas", b:"Houston", c:"Austin",d: "San Antonio"}, "c"),
     new Question("2.What is name of the Elon Musk's car brand?", {a:"Tesla", b:"Toyota", c:"Hyundai",d: "Mitsubishi"}, "a"),
     new Question("3.Which city has coastlines on both the Aegean Sea and the Sea of Marmara?", {a:"Izmir", b:"Balikesir", c:"Mugla",d: "Canakkale"}, "d"),
     new Question("4.Which country's cuisine does the noodle belong to?", {a:"Chinese", b:"Korean", c:"Japanese",d: "Vietnamese"}, "a"),
    ];
    const quiz = new Quiz(questions);
    const ui = new UI();
    quiz.questionIndex += 1;
    ui.startButton.addEventListener("click",function(){
        startTimer(10);
        startTimerLine();
        ui.quizBox.classList.add("active");
        ui.buttonBox.classList.remove("active");
        ui.getQuestion(quiz.getQuestion());
            ui.showQuestionNumber(quiz.questionIndex+1, quiz.questions.length);
            ui.nextButton.classList.remove("show"); 
    })
    ui.nextButton.addEventListener("click", function() {
        if(quiz.questions.length != quiz.questionIndex){
            startTimer(10);
            startTimerLine();
            ui.getQuestion(quiz.getQuestion());
            ui.showQuestionNumber(quiz.questionIndex+1, quiz.questions.length);
        }
        else{
            ui.scoreBox.classList.add("active")
            ui.quizBox.classList.remove("active")
            ui.showScore(quiz.correctAnswer, quiz.questions.length);
        }
    });
function optionSelected(e){
    clearInterval(counter);
    clearInterval(counterLine);
    let selectedElement = e.target;
    if(selectedElement.nodeName == "SPAN"){
        selectedElement = selectedElement.parentElement;
    }
    const answer = e.target.textContent[0];
    const question = q.getQuestion();
    if(question.checkAnswer(answer)){
        quiz.correctAnswer += 1;
        selectedElement.classList.add("correct");
        selectedElement.insertAdjacentHTML("beforeend",ui.correctIcon);
    }
    else{
        selectedElement.classList.add("wrong");
        selectedElement.insertAdjacentHTML("beforeend",ui.wrongIcon);
    }
    ui.nextButton.classList.add("show");
    quiz.questionIndex += 1;
    ui.disableAllOptions();
}
UI.quitButton.addEventListener("click", function(){
    window.location.reload();
});
UI.replayButton.addEventListener("click", function(){
    quiz.questionIndex = 0;
    quiz.correctAnswer = 0;
    ui.startButton.click();
    ui.scoreBox.classList.remove("active");
});
let counter;
function startTimer(time){
counter = setInterval(timer,1000);
function timer(){
    ui.timeSecond.textContent = time;
time--;
if(time < 0){
    clearInterval(counter);
    ui.timeText.textContent = "Time is over!";
    ui.disableAllOptions();
    quiz.questionIndex += 1;
    ui.nextButton.classList.add("show");

}
}
}
let counterLine;
function startTimerLine(){
    let line_width = 0;
    counterLine = setInterval(timer,20);
    function timer(){
        line_width += 1;
        ui.timeLine.style.width= line_width + "px";
        if(line_width > 549){
            clearInterval(counterLine);
        }
    }
}