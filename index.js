

// TODO: Include packages needed for this application

// DEPENDENCIES
const inquirer = require('inquirer');
const fs = require('fs');

// const generateReadme = ();

    



// TODO: Create an array of questions for user input
const questions = [];





// TODO: Create a function to write README file
function writeToFile(filename, data) {
    fs.writeFile(filename, data, "utf8", (error) =>  error ? console.error(error) : console.log('Success!'));
}





// TODO: Create a function to initialize app
function init() {
  
        inquirer
          .prompt([
            {
              type: 'input',
              name: 'name',
              message: 'What is your name?',
            },

        
          ])
          .then((answer) => {
            const {name} = answer;
           console.log(answer);
           templateREADME = `# README GENERATOR


           ## Description
           ${name}
           
           ## Table of Contents
           
           
           ## Installation
           
           
           ## Usage
           
           
           ## License
           
           
           ## Contributing
           
           
           ## Tests
           
           
           ## Questions`
                    
                    writeToFile('README.md', templateREADME);
                    console.log(templateREADME);
        })
        
        }




// Function call to initialize app
init();


