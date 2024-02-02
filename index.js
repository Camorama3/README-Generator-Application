const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Enter the project title:',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter a project description:',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Enter installation instructions:',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Enter usage information:',
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Enter in names of people who contributed to this project:',
        },
        {
            type: 'input',
            name: 'guidelines',
            message: 'Enter in guidelines on how to use the application:',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Enter test guidelines for testing the application:',
        },
        {
            type: 'input',
            name: 'license',
            message: 'Enter a license for the project:',
        },
        {
            type: 'input',
            name: 'githubUsername',
            message: 'Enter your github username:',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter a work email where questions for the app can be sent:',
        },
    ])

    .then((answers) => {
        const readmeContent = `
# ${answers.title}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Description
${answers.description}

## Installation
${answers.installation || 'No installation instructions provided.'}

## Usage
${answers.usage || 'No usage information provided.'}

## License
[![License](https://img.shields.io/badge/License-${answers.license}-brightgreen.svg)](https://opensource.org/licenses/${answers.license})
This application is covered under the [${answers.license}](https://opensource.org/licenses/${answers.license}) license.

## Contributing
${answers.contributing || 'No contributing guidelines provided.'}

## Tests
${answers.tests || 'No test instructions provided.'}

## Questions
For additional questions, please contact me:
- GitHub: [${answers.githubUsername}](https://github.com/${answers.githubUsername})
- Email: [${answers.email}](mailto:${answers.email})
`;

        fs.writeFileSync('README.md', readmeContent);
        console.log('README.md generated successfully!');
    })
    .catch((error) => {
        console.error('Error:', error);
    });
