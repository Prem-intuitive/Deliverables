import { formatTime } from "./utils.js";

const startScreen = document.querySelector("#start-screen");
const quizScreen = document.querySelector("#quiz-screen");
const resultScreen = document.querySelector("#result-screen");

const questionNumberElement = document.querySelector("#question-number");
const questionElement = document.querySelector("#question");
const timerElement = document.querySelector("#timer");
const scoreElement = document.querySelector("#score");

const options = document.querySelector("#options").querySelectorAll(".option-btn");

const nextButton = document.querySelector("#next-btn");

const finalScoreElement = document.querySelector("#final-score");
const finalTimeElement = document.querySelector("#time-taken");


export const showQuizScreen = () => {
    startScreen.classList.add("hidden");
    quizScreen.classList.remove("hidden");
};


export const showResultScreen = (score, time) => {
    quizScreen.classList.add("hidden");
    resultScreen.classList.remove("hidden");

    finalScoreElement.textContent = score;
    finalTimeElement.textContent = formatTime(time);
};


export const renderQuestion = (question, number, total) => {
    questionNumberElement.textContent = `Question ${number} of ${total}`;

    questionElement.textContent = question.question;

    options.forEach((button, index) => {
        button.textContent = question.options[index];
        button.disabled = false;

        button.classList.remove("correct", "wrong");
    });

    nextButton.disabled = true;
};


export const updateTimer = (seconds) => {
    timerElement.textContent = formatTime(seconds);
};


export const updateScore = (score) => {
    scoreElement.textContent = score;
};


export const disableOptions = () => {
    options.forEach(button => {
        button.disabled = true;
    });
};


export const getOptionButtons = () => options;


export const enableNextButton = () => {
    nextButton.disabled = false;
};


export const setNextButtonText = (text) => {
    nextButton.textContent = text;
};