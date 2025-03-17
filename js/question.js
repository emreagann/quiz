function Question(questionText, choices, correctAnswer) {
    this.questionText = questionText;
    this.choices = choices;
    this.correctAnswer = correctAnswer;
}
Question.prototype.checkAnswer = function(answer) {
    return answer === this.correctAnswer;
}

