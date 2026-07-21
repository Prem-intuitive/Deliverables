export default {
  testEnvironment: "node",
  testRunner: "jest-circus",
  collectCoverageFrom: [
    "src/**/*.js",
    "!src/main.js",
    "!src/ui.js"
  ]
};