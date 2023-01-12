const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "what is your project name?",
    name: "project",
  },
  {
    type: "input",
    message: "provide a short description of your project",
    name: "description",
  },
  {
    type: "input",
    message: "how do you install this project?",
    name: "install",
  },
  {
    type: "input",
    message: "how do you use this project?",
    name: "use",
  },
  {
    type: "input",
    message: "please credit any collaborators or third party resources",
    name: "credits",
  },
  {
    type: "checkbox",
    message: "please choose a license",
    name: "license",
    choices: ["MIT", "GNU GPLv3", "Apache License 2.0"],
  },
  {
    type: "input",
    message: "add any badges you would like",
    name: "badges",
  },
  {
    type: "input",
    message: "what features does your project have?",
    name: "features",
  },
  {
    type: "input",
    message: "how can people contribute to your project?",
    name: "contribution",
  },
  {
    type: "input",
    message: "please insert any test that can be run for your project",
    name: "tests",
  },
  {
    type: "input",
    message: "please link your GitHub",
    name: "GitHub",
  },
  {
    type: "input",
    message: "what is your email?",
    name: "email",
  },
];

// TODO: Create a function to write README file
function writeToFile(title, data) {
  const fileName = `${title.toUpperCase()}.md`;
  fs.writeFile(fileName, generateMarkdown(data), (err) =>
    err ? console.log(err) : console.log("success")
  );
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    writeToFile(answers.project, answers);
  });
}

// Function call to initialize app
init();
