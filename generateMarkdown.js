// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

    switch (license) {
      case 'MIT License':
          return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
    
    default:
      return '';
    
    }

    

};








// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answer) {
  const licenseBadge = renderLicenseBadge(answer.license);

  return `# ${answer.title} ${licenseBadge}

  ## Description                          
  ${answer.description}           
             
  ## Installation
  ${answer.installation}
             
  ## Usage
  ${answer.usage}
  
  ## Contributing 
  ${answer.contribution}  
  
  ## Tests 
  ${answer.test}
  
  ## Questions
  For any additional questions, contact me at: 
  \n Github: https://github.com/${answer.github} 
  \n Email: ${answer.email}`
;
};

module.exports = {
  renderLicenseBadge,
  generateMarkdown
};
