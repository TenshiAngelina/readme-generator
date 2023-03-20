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
    message: "What is the description of your project",
    name: "description",
  },
  {
    type: "input",
    message: "Please, provide instructions and examples of use",
    name: "usage",
  }

];

// TODO: Create a function to write README file
function writeToFile(data) {
  fs.writeFile('README.md', data, function (err) {
    if (err) throw err;
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then(function(answers) {
    const templateReadme = generateMarkdown(answers);
    writeToFile(templateReadme);
  })
}

// Function call to initialize app
init();
