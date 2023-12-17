
// TODO: Include packages needed for this application
// DEPENDENCIES
const inquirer = require('inquirer');
const fs = require('fs');

// const generateReadme = ();

// TODO: Create an array of questions for user input
const questions = [
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
  {
    type: 'input',
    name: 'installation',
    message: 'Provide installation instructions',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Provide usage...',
  },
  {
    type: 'input',
    name: 'contribution',
    message: 'Contribution....',
  },
  {
    type: 'input',
    name: 'test',
    message: 'Test Instructions....',
  },
  {
    type: 'input',
    name: 'github',
    message: 'What is your github profile name: ',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email: ',
  },
  {
    type: 'checkbox',
    message: 'Which license do you have',
    name: 'license',
    choices: ['MIT License', 'GNU General Public License (GPL)', 'Apache Licence 2.0', 'None'],
  },

];

// TODO: Create a function to write README file
function writeToFile(filename, data) {
    fs.writeFile(filename, data, "utf8", (error) =>  error ? console.error(error) : console.log('Success!'));
}

// TODO: Create a function to initialize app
function init() {
  
        inquirer.prompt (questions)
          // .prompt([
           
          //   {
          //     type: 'input',
          //     name: 'title',
          //     message: 'What is the title of your project?',
          //   },
          //   {
          //     type: 'input',
          //     name: 'description',
          //     message: 'Give the description of your project?',
          //   },
        
          // ])
          .then((answer) => {
            const {
              title, 
              description, 
              installation, 
              usage, 
              contribution, 
              test,
              github,
<<<<<<< HEAD
              email,
=======
              email, 
>>>>>>> ad13181be24ff287bbc0f2b27e46997ddf3b3e8e
              license
            } = answer;

           console.log(answer);
           templateREADME = 

<<<<<<< HEAD
templateREADME = 
`# ${title} ${license}
=======
`# ${title}        ${license}
>>>>>>> ad13181be24ff287bbc0f2b27e46997ddf3b3e8e

## Description                          
${description}           
           
## Installation
${installation}
           
## Usage
${usage}

## Contributing 
${contribution}  

## Tests 
${test}

## Questions
For any additional questions, contact me at: 
\n Github: https://github.com/${github} 
\n Email: ${email}`
          //  ## License
           
           

           
           

           
                  //  ## Table of Contents   

                    
                    writeToFile('README.md', templateREADME);
                    // console.log(templateREADME);
        })
        
};


// Function call to initialize app
init();


// let readmeContent = `# ${answers.title}\n\n${answers.description}\n\n`;