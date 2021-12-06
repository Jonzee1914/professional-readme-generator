// Functions to return a license badge based on which license is passed in
// If there is no license, return an empty string
const licenses = require("./licenseTypes.js");

function renderLicenseBadge(licenses, licenseName){
  if(licenseName === "None") {
    return "";
  }
  let index = licenses.findIndex( license => license.licenseName == licenseName)
  let licenseBadge = licenses[index].licenseBadge
  return licenseBadge
}

// Function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license){
    if(license === "None"){
    return "";
  }
  return `* [License](#license)`
}

// Functions to return link for other "when" sections
const installCheck = check => {
  if (!check) {
    return '';
  } else {
    return `* [Installation](#installation)`
  }
}
const creditCheck = check => {
  if (!check) {
    return '';
  } else {
    return `* [Credits](#credits)`
  }
}
const contributeCheck = check => {
  if (!check) {
    return '';
  } else {
    return `* [Contributions](#contributions)`
  }
}
const testCheck = check => {
  if (!check) {
    return '';
  } else {
    return `* [Testing](#testing)`
  }
}

// Function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license === "None"){
    return "";
  }
  return `## License
  This project is covered under the ${license} License.`
}

// Functions that return the when base sections
const renderInstall = installText => {
  if (!installText) {
    return ''
  } else {
    return `## Installation
  ${installText}
  `
  }
}
const renderCredit = creditText => {
  if (!creditText) {
    return ''
  } else {
    return `## Credits
  ${creditText}
  `
  }
}
const renderContribute = contributeText => {
  if (!contributeText) {
    return ''
  } else {
    return `## Contributions
  ${contributeText}
  `
  }
}
const renderTesting = testText => {
  if (!testText) {
    return ''
  } else {
    return `## Testing
  ${testText}
  `
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(licenses,data.license)}
  ## Description 
  ${data.description}
  ## Table of Contents
  * [Usage](#usage)
  ${installCheck(data.installation)}
  ${creditCheck(data.credit)}
  ${renderLicenseLink(data.license)}
  ${contributeCheck(data.contribution)}
  ${testCheck(data.testing)}
  * [Questions](#questions)
  ## Usage
  ${data.usage}
  ${renderInstall(data.installation)} 
  ${renderCredit(data.credit)}
  ${renderLicenseSection(data.license)}
  ${renderContribute(data.contribution)}
  ${renderTesting(data.tests)}
  ## Questions
  Any questions? Checkout my [Github profile](https://github.com/${data.github})
  or email me @ [${data.email}](mailto:${data.email})
  `;
}


module.exports = generateMarkdown;
