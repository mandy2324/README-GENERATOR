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
            type: 'input',
            name: 'license',
            message: 'What kind of license should your project have?',
            choices: [
                'Mit',
                'Apache 2.0',
                'GPL 3.0',
                'BSD 3',
                'none'
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

const generateReadme = ({ username, email, projectName, projectDescription, license, installDependencies, runTests, repoUsage, contribution }) =>
    `
    # ${projectName}
    ![Github liscense](${username}) 
    ${email}


    ## Description 
    ${projectDescription}

    ## table of contents 

    *  [installation] (#installation)
    *  [usage] (#usage)
    *  [license](#license)
    *  [contributing] (#contributing)
    *  [tests] (#tests)
    * [questions] (#questions)
    
    ## installation

    to install necessary dependencies, run the following commands:
    ${installDependencies}

    ## Usage:
    ${repoUsage}

    ## License:
    ${license}

    ## Contributing:
    ${contribution}

    ## Tests:
    ${runTests}


    
    
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