// TODO: Include packages needed for this application
const fs = require("fs"); //call for fs
const inquirer = require("inquirer"); //call for inquirer
const generateMarkdown = require("./utils/generateMarkdown.js")

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is the title of your project?",
    name: "title",
  },
  {
    type: "input",
    message: "Provide a short description of your project",
    name: "description",
  },
  {
    type: "input",
    message: "What was your motivation?",
    name: "descMotivation",
  },
  {
    type: "input",
    message: "Why did you build this project?",
    name: "descWhy",
  },
  {
    type: "input",
    message: "What problem does it solve?",
    name: "descProblem",
  },
  {
    type: "input",
    message: "What did you learn?",
    name: "descLearn",
  },
  {
    type: "input",
    message: "What are the steps required to install your project?",
    name: "installation",
  },
  {
    type: "input",
    message: "Please, provide instructions and examples of use",
    name: "usage",
  },
  {
    type: "input",
    message: "List your collaborators, any third party assets, and/or links to the tutorials followed if it's the case, press enter if this doesn't apply",
    name: "credits",
  },
  {
    type: "list",
    message: "Choose a license for your project",
    name: "license",
    choices: [
      "MIT",
      "Apache 2.0",
      "GPL 3.0",
      "BSD 3",
      "Unlicense",
      "None",
    ],
  },
];

// Writes README file
function writeToFile(data) {
  fs.writeFile('README_generated.md', data, function (err) {
    if (err) throw err;
  });
}

// Initialize app
function init() {
  inquirer.prompt(questions).then(function(answers) {
    const templateReadme = generateMarkdown(answers);
    writeToFile(templateReadme);
  })
}

// Function call to initialize app
init();
