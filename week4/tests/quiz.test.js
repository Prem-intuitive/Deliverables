import { Quiz } from "../src/quiz.js";


const questions = [
  {
    question: "What is JavaScript?",
    options: [
      "Programming language",
      "Database",
      "Operating system",
      "Browser"
    ],
    answer: "Programming language"
  },
  {
    question: "Which keyword creates a constant?",
    options: [
      "let",
      "var",
      "const",
      "static"
    ],
    answer: "const"
  }
];


describe("Quiz class", () => {

  let quiz;


  beforeEach(() => {
    quiz = new Quiz(questions);
  });


  test("initializes with default values", () => {
    expect(quiz.currentQuestionIndex)
      .toBe(-1);

    expect(quiz.score)
      .toBe(0);
  });


  test("moves to the next question", () => {
    const question = quiz.nextQuestion();

    expect(question)
      .toEqual(questions[0]);

    expect(quiz.currentQuestionIndex)
      .toBe(0);
  });


  test("returns current question", () => {
    quiz.nextQuestion();

    expect(quiz.getCurrentQuestion())
      .toEqual(questions[0]);
  });


  test("checks correct answer and increases score", () => {
    quiz.nextQuestion();

    const result = quiz.checkAnswer(
      "Programming language"
    );

    expect(result)
      .toBe(true);

    expect(quiz.getScore())
      .toBe(1);
  });


  test("checks wrong answer and does not increase score", () => {
    quiz.nextQuestion();

    const result = quiz.checkAnswer(
      "Database"
    );

    expect(result)
      .toBe(false);

    expect(quiz.getScore())
      .toBe(0);
  });


  test("returns null after last question", () => {
    quiz.nextQuestion();
    quiz.nextQuestion();

    const question = quiz.nextQuestion();

    expect(question)
      .toBeNull();
  });


  test("returns total number of questions", () => {
    expect(quiz.getTotalQuestions())
      .toBe(2);
  });


  test("returns current question number", () => {
    quiz.nextQuestion();

    expect(quiz.getCurrentQuestionNumber())
      .toBe(1);
  });


  test("resets quiz state", () => {
    quiz.nextQuestion();
    quiz.checkAnswer("Programming language");


    quiz.reset();


    expect(quiz.currentQuestionIndex)
      .toBe(-1);

    expect(quiz.score)
      .toBe(0);
  });

});