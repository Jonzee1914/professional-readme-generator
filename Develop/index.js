// Packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");

// Array of questions for user input
const questions = [
    { 
        type: "input", 
        name: "title", 
        message: "What is your project title?" 
    },
    {
        type: "input",
        name: "description",
        message: "Please provide a general description of the project:",
    },
    {
        type: "input",
        name: "usage",
        message: "How is the project used?",
    },
    {
        type: "input",
        name: "installation",
        message: "What are the installation instructions for your project?",
    },
    {
        type: "input",
        name: "credits",
        message: "Please list any collaborators:",
    },
    {
        type: "input",
        name: "tests",
        message: "Provide your project Test Instructions:",
    },
    {
        type: "list",
        name: "license",
        message: "Select your project Licence:",
        choices: [...LicensesNameList],
    },
    {
        type: "input",
        name: "github",
        message: "Provide your Github username:",
    },
    {
        type: "input",
        name: "email",
        message: "Provide your email address:",
    },
  ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(
        `./generated-readme/${fileName}.md`,
        generateMarkdown(data),
        (err) => {
          if (err) throw err;
          console.log(
            "README file has been generated! Check out in README.md in the folder 'generated-readme' to see the output!"
          );
        }
    );
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
