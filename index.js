

// TODO: Include packages needed for this application

// DEPENDENCIES
const inquirer = require('inquirer');
const fs = require('fs');

const generateReadme = ()

    



// TODO: Create an array of questions for user input
const questions = [];





// TODO: Create a function to write README file
function writeToFile(fileName, data) {
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
           templateHTML = `<!DOCTYPE html>
                    <html lang="en">
                    <head>
                        <meta charset="UTF-8">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <title>Mini Project</title>
                    </head>
        
                    <body>
                    <h3>${name}</h3>
                        
                    </body>
                    </html>`
                    
                    writeToFile('README.md', templateHTML);
                    console.log(templateHTML);
        })
        
        }




// Function call to initialize app
init();


