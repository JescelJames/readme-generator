// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

    switch (license) {
      case 'MIT License': 
          return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
      
      case 'GNU General Public License (GPL)':
          return '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)';
      
      case 'Apache License 2.0': 
          return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
      
      default:
          return '';
    }
};


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  
  switch (license) {
    case 'MIT License': 
        return 'https://mit-license.org/';
    
    case 'GNU General Public License (GPL)':
        return 'https://www.gnu.org/licenses/gpl-3.0.en.html';
    
    case 'Apache License 2.0': 
        return 'https://www.apache.org/licenses/LICENSE-2.0';
    
    default:
        return '';
  }
};


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}



// TODO: Create a function to generate markdown for README
function generateMarkdown(answer) {

  const licenseBadge = renderLicenseBadge(answer.license);
  const licenseLink = renderLicenseLink(answer.license);
  
  return `# ${answer.title}   ${licenseBadge}


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
  \n Email: ${answer.email}
  
## License
This project is licensed under the ${answer.license}. 
\n For more information, go to ${licenseLink}`
;
};

module.exports = {
  renderLicenseBadge,
  generateMarkdown
};
