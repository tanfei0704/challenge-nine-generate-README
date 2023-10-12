// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // Map license names to badge URLs
  const licenseBadgeUrls = {
    'GNU AGPLv3': 'https://img.shields.io/badge/License-AGPL%20v3-blue.svg',
    'GNU GPLv3': 'https://img.shields.io/badge/License-GPLv3-blue.svg',
    'GNU LGPLv3': 'https://img.shields.io/badge/License-LGPL%20v3-blue.svg',
    'Mozilla Public License 2.0': 'https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg',
    'Apache License 2.0': 'https://img.shields.io/badge/License-Apache%202.0-blue.svg',
    'MIT License': 'https://img.shields.io/badge/License-MIT-yellow.svg',
    'Boost Software License 1.0': 'https://img.shields.io/badge/License-Boost%201.0-lightblue.svg',
    'The Unlicense': 'https://img.shields.io/badge/license-Unlicense-blue.svg',
  };
  // Check if the provided license is in the mapping
  if (license in licenseBadgeUrls) {
    return `![License Badge](${licenseBadgeUrls[license]})`;
  } else {
    console.error(`License '${license}' not found in badge mapping.`);
    return '';
  }
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  // Check if a license is provided
  if (license) {
    return `[${license}](https://opensource.org/licenses/${license})`;
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  // Check if a license is provided
  if (license) {
    return `## License\n\nThis project is licensed under the [${license}](${renderLicenseLink(license)}) license.`;
  } else {
    return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(response) {
  
  const licenseBadge = renderLicenseBadge(response.license);

  return `## Project Title : ${response.title}

 ${licenseBadge}
  
 ## Description 
  
 ${response.description}

 ## Table of Content

 [Description](#description)\n
 [Installation](#installation)\n
 [Usage](#usage)\n
 [Tests](#tests)

 ## Installation

 ${response.installation}

 ## Usage
  
 ${response.usage}

 ## Contributing
  
 ${response.contributing}

 ## Tests
  
 ${response.tests}

 ${renderLicenseSection(response.license)}

 ## Questions?

 If you have any questions, please contact me with ${response.concern}
 `;
 }


module.exports = generateMarkdown;
