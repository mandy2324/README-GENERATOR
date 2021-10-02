// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const displayQuestions = () => {
    return inquirer.prompt([{
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
            name: 'projectName',
            message: 'What is your project name?',
        }, {
            type: 'input',
            name: 'projectDescription',
            message: 'please write a short description of your project?',
        }, {
            type: 'list',
            name: 'license',
            message: 'What kind of license should your project have?',
            choices: [
                'MIT',
                'APACHE2.0',
                'GPL3.0',
                'BSD3',
                'None'
            ]
        }, {
            type: 'input',
            name: 'installDependencies',
            message: 'What command should be run to install dependecies?',
        }, {
            type: 'input',
            name: 'runTests',
            message: 'What command should be run to run tests?',
        }, {
            type: 'input',
            name: 'repoUsage',
            message: 'What does the user need to know about about using the repo?',
        }, {
            type: 'input',
            name: 'contribution',
            message: 'What does the user need to know about about contributing to the repo?',
        }
    ]);
};
// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

const generateReadme = ({ username, email, projectName, projectDescription, license, installDependencies, runTests, repoUsage, contribution }) => `
# ${projectName}
![Github license](https://img.shields.io/badge/license-${license}-red.svg) 

## Description 
${projectDescription}

## Table of contents 

* [installation](#installation)
* [usage](#usage)
* [license](#license)
* [contributing](#contributing)
* [tests](#tests)
* [questions](#questions)

## Installation

to install necessary dependencies, run the following command:

\`\`\`
${installDependencies}
\`\`\`

## Usage:
${repoUsage}

## Contributing:
${contribution}

## Tests:
\`\`\`
${runTests}
\`\`\`

## Questions: 

If you have any questions about this repo, open an issue or contact me directly at ${email}.
You can find more info about me at [${username}](https://github.com/${username}).
`;

// TODO: Create a function to initialize app
const init = () => {
    displayQuestions()
        .then((answers) => fs.writeFileSync('README.md', generateReadme(answers)))
        .then(() => console.log('Successfully wrote to README.md'))
        .catch((err) => console.error(err));
};

// Function call to initialize app
init();