# Week 4 - Modular JavaScript Quiz App

## Objective

Refactor the interactive quiz application into a modular JavaScript project using ES6+ features, Node.js, NPM, and Jest for unit testing.

## Technologies Used

* HTML5
* CSS3
* JavaScript (ES6+)
* Node.js
* NPM
* Jest

## Features

* Modular JavaScript architecture using ES modules
* Interactive multiple-choice quiz
* Dynamic question rendering
* Score tracking
* Quiz timer functionality
* Next question navigation
* Quiz restart functionality
* Result summary with score and completion time
* Unit tests for core application logic and utilities

## ES6+ Concepts Covered

* `let` and `const`
* Arrow functions
* Template literals
* Destructuring
* Classes
* JavaScript modules (`import` / `export`)
* Array methods and modern JavaScript syntax

## Project Structure
```text
week4/
│
├── src/
│ ├── main.js # Application entry point
│ ├── quiz.js # Quiz logic and state management
│ ├── questions.js # Quiz question data
│ ├── timer.js # Timer functionality
│ ├── utils.js # Reusable utility functions
│ └── ui.js # DOM manipulation and UI updates
│
├── tests/
│ ├── quiz.test.js # Quiz class tests
│ ├── timer.test.js # Timer tests
│ └── utils.test.js # Utility function tests
│
├── index.html
├── style.css
├── jest.config.js
├── package.json
└── package-lock.json
```

## Testing

Unit tests are written using Jest.

Run tests:

```bash
npm test
```

Run tests with coverage:

```bash
npm run test:coverage
```
 The project maintains the required test coverage threshold (60%+).

## Learning Outcomes

* Building maintainable applications using JavaScript modules
* Organizing code into reusable components
* Using Node.js and NPM for project tooling
* Writing and executing unit tests with Jest
* Improving code reliability through test coverage

## Author

Prem