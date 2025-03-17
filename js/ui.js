function UI(){
    this.quizBox = document.querySelector(".quiz-box");
    this.buttonBox = document.querySelector(".button-box");
    this.scoreBox = document.querySelector(".score-box");
    this.body = document.querySelector("#quiz-box #body");
    this.correctIcon = "<i class='bi bi-check-circle'></i>";
    this.wrongIcon = "<i class='bi bi-x-circle'></i>";
    this.startButton = document.querySelector(".btn-start")
    this.nextButton = document.querySelector(".btn-next");
    this.replayButton = document.querySelector(".btn-replay");
    this.quitButton = document.querySelector(".btn-quit");
    this.timeText = document.querySelector(".time-text");
    this.timeSecond = document.querySelector(".time-second");
    this.timeLine = document.querySelector(".time-line");
}
UI.prototype.getQuestion = function(question){
    this.body.innerHTML = "";
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    const title = document.createElement("h5");
    title.classList.add("question-title");
    title.textContent = question.questionText;
    const optionList = document.createElement("div");
    optionList.classList.add("option-list");
    for(let [key,value] of Object.entries(question.choices)){
        const option = document.createElement("div");
        option.classList.add("option");
        option.addEventListener("click",optionSelected)
        const span = document.createElement("span");
        span.textContent = key + ") " + value;
        option.appendChild(span);
        optionList.appendChild(option);
    }
    cardBody.appendChild(title);
    cardBody.appendChild(optionList);
    this.body.appendChild(cardBody);
}
UI.prototype.disableAllOptions = function(){
    const options = document.querySelectorAll(".option");
    options.forEach(option => {
        option.classList.add("disabled");
    });
}
UI.prototype.showQuestionNumber = function(questionIndex, totalQuestions){
    const tag = `<span class="badge text-bg-danger">${questionIndex} / ${totalQuestions}</span>`;
    document.querySelector(".question-index").innerHTML = tag;
}
UI.prototype.showScore = function(correctAnswer, totalQuestions){
    const tag = `In total,you gave ${correctAnswer} correct answers in ${totalQuestions} questions`;
    document.querySelector(".score-text").innerHTML = tag;
}