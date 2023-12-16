

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
              name: 'title',
              message: 'What is the title of your project?',
            },
            {
              type: 'input',
              name: 'description',
              message: 'Give the description of your project?',
            },
        
          ])
          .then((answer) => {
            const {title, description} = answer;
           console.log(answer);
           templateREADME = 

`# ${title}

## Description                          
${description}`           
           
          //  ## Table of Contents
           
           
          //  ## Installation
           
           
          //  ## Usage
           
           
          //  ## License
           
           
          //  ## Contributing
           
           
          //  ## Tests
           
           
          //  ## Questions`
                    
                    writeToFile('README.md', templateREADME);
                    // console.log(templateREADME);
        })
        
        }




// Function call to initialize app
init();


