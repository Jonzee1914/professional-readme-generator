// Packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");
const licenses = require("./utils/licenseTypes.js");

// Create an array of license types to display badges
let licensesList = generateLicensesNameList(licenses);

function generateLicensesNameList(licenses){
    licensesNameList = []
    licenses.forEach(license => {
      licensesNameList.push(license.licenseName)
    })
    return licensesNameList
}

// Array of questions for user input
const questions = [
    { 
        type: "input", 
        name: "title", 
        message: "What is your project title?", 
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter your project name');
                return false;
            }
        }
    },
    {
        type: "input",
        name: "description",
        message: "Please provide a general description of the project:",
        validate: aboutInput => {
            if (aboutInput) {
                return true;
            } else {
                console.log('Please give a description of your project')
                return false;
            }
        }
    },
    {
        type: "input",
        name: "usage",
        message: "How is the project used?",
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('Please describe the use of your project')
                return false;
            }
        }
    },
    {
        type: "list",
        name: "license",
        message: "Select your project Licence:",
        choices: [...licensesList],
    },
    {
        type: 'confirm',
        name: 'confirmInstall',
        message: 'Does your project need special instructions on how to install?',
        default: true
    },
    {
        type: "input",
        name: "installation",
        message: "What are the installation instructions for your project?",
        when: ({ confirmInstall }) => {
            if (confirmInstall) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'confirmCredit',
        message: 'Did your project include any collaborators/contributors',
        default: true
    },
    {
        type: "input",
        name: "credit",
        message: "Please list any collaborators/contributors:",
        when: ({ confirmCredit }) => {
            if (confirmCredit) {
                return true;
            } else {
                return false
            }
        }
    },
    {
        type: 'confirm',
        name: 'confirmContribute',
        message: 'Will your project be open to contributions?',
        default: true
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Please explain how to contribue to this project:',
        when: ({ confirmContribute }) => {
            if (confirmContribute) {
                return true
            } else {
                return false
            }
        }
    },
    {
        type: 'confirm',
        name: 'confirmTest',
        message: 'Will your project need testing instructions?',
        default: true
    },
    {
        type: "input",
        name: "tests",
        message: "Provide your project testing instructions:",
        when: ({ confirmTest }) => {
            if (confirmTest) {
                return true;
            } else {
                return false
            }
        }
    },
    {
        type: "input",
        name: "gitHub",
        message: "Provide your Github username:",
        validate: gitHubInput => {
            if (gitHubInput) {
                return true;
            } else {
                console.log('Please enter your GitHub username');
                return false;
            }
        }
    },
    {
        type: "input",
        name: "email",
        message: "Provide your email address:",
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter your email adress');
                return false;
            }
        }
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

// Function to initialize app
function init() {
    return inquirer.prompt([...questions]);
}

// Function call to initialize app
init()
.then((data) => {
    writeToFile("README", data)
});
