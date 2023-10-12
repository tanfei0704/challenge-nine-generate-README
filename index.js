// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown.js')


// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    message: "What is your GitHub username? ",
    name: 'username',
},
{
    type: 'input',
    message: "What is the name of your GitHub repo?",
    name: 'repo',
},
{
    type: 'input',
    message: "What is the title of your project?",
    name: 'title',
},
{
    type: 'input',
    message: "Please write a short description of your project",
    name: 'description',
},
{
    type: 'list',
    message: "Choose a license for your project.",
    choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
    name: 'license'
},
{
    type: 'input',
    message: "what command should be run to install dependencies?",
    name: 'installation'
},
{
    type: 'input',
    message: "Provide instructions and examples of your project in use for the Usage section.",
    name: 'usage'
},
{
    type: 'input',
    message: "What does the user need to know about using the repo?",
    name: 'module'
},
{
    type: 'input',
    message: "Is there other developers contribute to your project?",
    name: 'contributing'
},
{
    type: 'input',
    message: "If applicable, provide any tests written for your application and provide examples on how to run them.",
    name: 'tests'
},
{
    type: 'input',
    message: "Do you have contact info for other questions?",
    name: 'concern'
}];


// TODO: Create a function to write README file
function writeToFile(response) {
    fs.writeFile('README.md', generateMarkdown(response), function(err) {
        if (err) {
            console.error('Error generating README:', err);
        } else {
            console.log('Your README.md is successfully generated!');
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then(function(response) {
            writeToFile(response);
            console.log('Initialization complete.');
        })
        .catch(function(err) {
            console.error('Error during initialization:', err);
        });
}

// Function call to initialize app
init();

