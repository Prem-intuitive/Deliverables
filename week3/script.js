const startButton = document.querySelector("#start-btn");
const startScreen = document.querySelector("#start-screen");
const quizScreen = document.querySelector("#quiz-screen");
const resultScreen = document.querySelector("#result-screen");
const questionNumberElement = document.querySelector("#question-number");
const timerElement = document.querySelector("#timer");
const scoreElement = document.querySelector("#score");
const options = document.querySelector("#options").querySelectorAll(".option-btn");
const nextButton = document.querySelector("#next-btn");
const finalScoreElement = document.querySelector("#final-score");
const finalTimeElement = document.querySelector("#time-taken");
const restartButton = document.querySelector("#restart-btn");

const quizData = [
  {
    question: "Which keyword is used to declare a variable that cannot be reassigned?",
    options: [
      "let",
      "var",
      "const",
      "static"
    ],
    answer: "const"
  },
  {
    question: "Which data type is used to store true or false values?",
    options: [
      "String",
      "Boolean",
      "Number",
      "Object"
    ],
    answer: "Boolean"
  },
  {
    question: "Which loop is best used when the number of iterations is known beforehand?",
    options: [
      "while",
      "do...while",
      "for",
      "foreach"
    ],
    answer: "for"
  },
  {
    question: "Which DOM method is used to select an element by its ID?",
    options: [
      "querySelectorAll()",
      "getElementById()",
      "getElementsByClassName()",
      "queryElements()"
    ],
    answer: "getElementById()"
  },
  {
    question: "What does an array store in JavaScript?",
    options: [
      "A single value only",
      "A collection of values",
      "Only numbers",
      "Only objects"
    ],
    answer: "A collection of values"
  }
];

const totalQuestions = quizData.length;

let currentQuestionIndex = -1;
let timeTaken = 0;
let score = 0;

const startQuiz = () => {
  startScreen.classList.add("hidden");
  quizScreen.classList.remove("hidden");

  const timer =setInterval(() => {
    timeTaken++;
    let minutes = Math.floor(timeTaken / 60).toString().padStart(2, '0');
    let seconds = (timeTaken % 60).toString().padStart(2, '0');
    timerElement.textContent = `${minutes} : ${seconds}`;
  }, 1000);

  options.forEach((button, index) => {
    button.addEventListener("click", () => {
      if (button.textContent === quizData[currentQuestionIndex].answer) {
        button.classList.add("correct");
        score++;
        scoreElement.textContent = score;
      } else {
        button.classList.add("wrong");
      }
      options.forEach(button => button.disabled = true);
      nextButton.disabled = false;
    });
  });
    
  updateQuestion();
}


startButton.addEventListener("click", startQuiz);

const updateQuestion = () => {
  currentQuestionIndex++;
  if (currentQuestionIndex >= quizData.length - 1) {
    nextButton.textContent = "Finish";
  }

  if (currentQuestionIndex >= quizData.length) {
    clearInterval(timer);
    quizScreen.classList.add("hidden");
    resultScreen.classList.remove("hidden");
    finalScoreElement.textContent = score;
    let minutes = Math.floor(timeTaken / 60).toString().padStart(2, '0');
    let seconds = (timeTaken % 60).toString().padStart(2, '0');
    finalTimeElement.textContent = `${minutes} : ${seconds}`;
    return;
  }

  nextButton.disabled = true;
  questionNumberElement.textContent = `Question ${currentQuestionIndex + 1} of ${totalQuestions}`;
  options.forEach(button => {
    button.classList.remove("correct", "wrong");
  });
  let questionElement = document.querySelector("#question");
  questionElement.textContent = quizData[currentQuestionIndex].question;

  options.forEach((button, index) => {
    button.disabled = false;
    button.textContent = quizData[currentQuestionIndex].options[index];
  });
}

nextButton.addEventListener("click", updateQuestion);
restartButton.addEventListener("click", () => { window.location.reload(); });