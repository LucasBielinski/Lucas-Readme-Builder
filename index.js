// calls programs
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// questions for user input
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
    choices: ["MIT", "GNU GPLv3", "Apache License 2.0", "None"],
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

// writes the read me file
function writeToFile(title, data) {
  // sets file name
  const fileName = `${title.toUpperCase()}.md`;
  // takes in data from generat markdown
  fs.writeFile(fileName, generateMarkdown(data), (err) =>
    err ? console.log(err) : console.log("success")
  );
}

// intialize app
function init() {
  // calls answers
  inquirer.prompt(questions).then((answers) => {
    console.log(answers);
    // picks from license array
    answers.license = answers.license[0];
    console.log(answers);
    // takes anwers from inquire
    writeToFile(answers.project, answers);
  });
}

// Function call to initialize app
init();
