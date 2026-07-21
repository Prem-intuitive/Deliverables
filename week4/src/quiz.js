export class Quiz {
    constructor(questions) {
        this.questions = questions;
        this.currentQuestionIndex = -1;
        this.score = 0;
    }

    nextQuestion() {
        this.currentQuestionIndex++;

        if (this.currentQuestionIndex >= this.questions.length) {
            return null;
        }

        return this.getCurrentQuestion();
    }

    getCurrentQuestion() {
        return this.questions[this.currentQuestionIndex];
    }

    checkAnswer(answer) {
        const currentQuestion = this.getCurrentQuestion();

        if (!currentQuestion) {
            return false;
        }

        if (currentQuestion.answer === answer) {
            this.score++;
            return true;
        }

        return false;
    }

    getScore() {
        return this.score;
    }

    getCurrentQuestionNumber() {
        return this.currentQuestionIndex + 1;
    }

    getTotalQuestions() {
        return this.questions.length;
    }

    reset() {
        this.currentQuestionIndex = -1;
        this.score = 0;
    }
}