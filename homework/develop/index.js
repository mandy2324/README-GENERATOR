// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [{
        type: 'input',
        name: 'username',
        message: 'What is your Github username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your Email address?',
    },
    {
        type: 'input',
        name: 'project-name',
        message: 'What is your project name?',
    }, {
        type: 'input',
        name: 'project-description',
        message: 'please write a short description of your project?',
    }, {
        type: 'input',
        name: 'liscence',
        message: 'What kind of liscence should your project have?',
        options: ['Mit', 'Apache 2.0', 'GPL 3.0', 'BSD 3', 'none']
    }, {
        type: 'input',
        name: 'install-dependencies',
        message: 'What command should be run to install dependecies?',
    }, {
        type: 'input',
        name: 'run-tests',
        message: 'What command should be run to run tests?',
    }, {
        type: 'input',
        name: 'repo-usage',
        message: 'What does the user need to know about about using the repo?',
    }, {
        type: 'input',
        name: 'contribution',
        message: 'What does the user need to know about about contributing to the repo?',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();