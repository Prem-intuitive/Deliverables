import { quizQuestions } from "./questions.js";
import { Quiz } from "./quiz.js";
import { Timer } from "./timer.js";

import {
    showQuizScreen,
    showResultScreen,
    renderQuestion,
    updateTimer,
    updateScore,
    disableOptions,
    getOptionButtons,
    enableNextButton,
    setNextButtonText
} from "./ui.js";


const startButton = document.querySelector("#start-btn");
const nextButton = document.querySelector("#next-btn");
const restartButton = document.querySelector("#restart-btn");

const quiz = new Quiz(quizQuestions);

const timer = new Timer((seconds) => {
    updateTimer(seconds);
});


const loadNextQuestion = () => {
    const question = quiz.nextQuestion();

    if (!question) {
        timer.stop();
        showResultScreen(quiz.getScore(), timer.getTime());
        return;
    }

    if (quiz.getCurrentQuestionNumber() === quiz.getTotalQuestions()) {
        setNextButtonText("Finish");
    }

    renderQuestion(question, quiz.getCurrentQuestionNumber(), quiz.getTotalQuestions());
};


startButton.addEventListener("click", () => {
    quiz.reset();
    timer.reset();

    showQuizScreen();
    timer.start();
    loadNextQuestion();
});


getOptionButtons().forEach(button => {
    button.addEventListener("click", () => {
        const isCorrect = quiz.checkAnswer(button.textContent);

        if (isCorrect) {
            button.classList.add("correct");
            updateScore(quiz.getScore());
        } else {
            button.classList.add("wrong");
        }

        disableOptions();
        enableNextButton();
    });
});

nextButton.addEventListener("click", () => {
    loadNextQuestion();
});

restartButton.addEventListener("click", () => {
    window.location.reload();
});