// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./Develop/utils/generateMarkdown');
// const Choice = require('inquirer/lib/objects/choice');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the Title of your project?(Required)',
        validate: titleInput => {
            if(titleInput){
                return true;
            }
            else {
                console.log('Please enter a title for your project!')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please enter a description for your project.(Required)',
        validate: descInput => {
            if(descInput) {
                return true;
            }
            else {
                console.log('Please enter a description for your project.')
                return false; 
            }
        }
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
        message: 'Please choose the license for your project.(Required)',
        choices: ['MIT', 'Apache 2.0', 'IBM Public License Version 1.0', 'Mozilla Public License 2.0', 'None'],
        validate: licenseCheck => {
            if(licenseCheck){
                return true; 
            }
            else{
                console.log('A license choice is required. Please choose a license.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please enter your GitHub username.(Required)',
        validate: gitInput =>{
            if(gitInput){
                return true;
            }
            else{
                console.log('Please enter your GitHub username.');
                return false;
            }
        }
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
        fs.writeFile('./Develop/dist/README.md', generateMarkdown(answers), err =>{
            if (err){
                console.log(err)
                return;
            }
            else{
                console.log('Readme succesfully generated!');
            }
        })
        // console.log(answers)
    });
}

promptUser();
