// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  var licenses = []; 

  if (license.includes('MIT')){
    console.log('MIT license');
    licenses += '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) ';
  }
   if (license.includes('Apache 2.0')){
    console.log('Apache');
    licenses += '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0) ';
  }
  if (license.includes('IBM Public License Version 1.0')){
    console.log('IBM');
    licenses += '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0) ';
  }
  if (license.includes('Mozilla Public License 2.0')){
    console.log('Mozilla');
    licenses += '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0) ';
  }
  else if (license.includes('None')){
    console.log('None');
    return '';
  }

  return licenses; 
}



// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const license = data.license;
  console.log(license);
  
  return `# ${data.title}

  ${renderLicenseBadge(license)}  

  ## Table of Contents
  * [Description](#description)
  * [Installation](#instructions)
  * [Usage](#usage)
  * [Contribution](#contribution)
  * [Testing](#test)
  * [License](#license)
  * [Contact](#contact)


  ## Description 
  ${data.description}

  ## Installation
  ${data.instructions}

  ## Usage
  ${data.usage}

  ## Contribution 
  ${data.contribution}

  ## Testing
  ${data.test}

  ## License
  ${data.license}

  ## Contact 
  - Github: [Github](https://github.com/${data.github})
  - Email: ${data.email}

`;
}

module.exports = generateMarkdown;
