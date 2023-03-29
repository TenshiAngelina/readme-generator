// Returns a license badge based on which license is passed in
// If there is no license, returns an empty string
function renderLicenseBadge(license) {
  switch(license) {
    case 'MIT':
      return '![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)';
    case 'Apache 2.0':
      return '![Apache 2.0 License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)';
    case 'GPL 3.0':
      return '![GPL 3.0 License](https://img.shields.io/badge/License-GPLv3-blue.svg)';
    case 'BSD 3':
      return '![BSD 3 License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)';
    case 'Unlicense':
      return '![Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)';
    default:
      return '';
  }
}

// Returns the license link
// If there is no license, returns an empty string
function renderLicenseLink(license) {
  switch(license) {
    case 'MIT':
      return '[MIT License](https://opensource.org/licenses/MIT)';
    case 'Apache 2.0':
      return '[Apache 2.0 License](https://opensource.org/licenses/Apache-2.0)';
    case 'GPL 3.0':
      return '[GPL 3.0 License](https://www.gnu.org/licenses/gpl-3.0.en.html)';
    case 'BSD 3':
      return '[BSD 3 License](https://opensource.org/licenses/BSD-3-Clause)';
    case 'Unlicense':
      return '[The Unlicense](https://unlicense.org/)';
    default:
      return '';
  }
}

// Returns the license section of README
// If there is no license, returns an empty string
function renderLicenseSection(license) {
  if(license) {
    return `This project is licensed under the ${license} license. Click [here](${renderLicenseLink(license)}) for more information.`;
  } else {
    return '';
  }
}

// Generates markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  ${renderLicenseBadge(data.license)}

## Description

  ${data.description}
  - ${data.descMotivation}
  - ${data.descWhy}
  - ${data.descProblem}
  - ${data.descLearn}

## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)

## Installation

  ${data.installation}

## Usage

  ${data.usage}

  ## Credits

  ${data.credits}

##License

  ${renderLicenseSection(data.license)}

`;
}

module.exports = generateMarkdown;
