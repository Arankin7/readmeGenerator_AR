// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
const Choice = require('inquirer/lib/objects/choice');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the Title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please enter a description for your project.'
    },
    {
        type: 'input',
        name: 'instructions',
        message: 'Please enter instructions for your project.'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please enter any usage information about your project.'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Please enter the guidelines for contributing to your project.'
    },
    {
        type: 'input',
        name: 'test',
        message: 'Please enter instructions on how to test your project.'
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Please chose the license for your project.',
        choices: ['MIT', 'Apache', 'GNU General Public License', 'Mozilla Public License']
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please enter your GitHub username.'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email adress.'
    }
];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}
const promptUser = () =>{
    return inquirer.prompt(questions)
    .then(answers =>{
        fs.writeFile('./dist/README.md', generateMarkdown(answers), err =>{
            if (err){
                console.log(err)
                return;
            }
            else{
                console.log('Readme succesfully generated!');
            }
        })
        console.log(answers)
    });
}



// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
promptUser();
