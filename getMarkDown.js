function getMarkDown(answers) {

    // getting github info for credits
    const creditUsersStr = `${answers.credits}`
    const creditUsersArr = creditUsersStr.split(",");
    var creditResult;

    for (let i = 0; i < creditUsersArr.length; i++) {
        var creditGitName = creditUsersArr[i];
        var creditResult = `[${creditGitName}](https://github.com/${creditGitName})\r\n`;
    };

    return `
    # ${answers.projectTitle}
    
    ## Description
    ${answers.projectDescription}

    ## Deployed Project
    [Linked here](${answers.deployedPath})

    ## Table of Contents
    - [Description](#description)
    - [Deployed Project](#deployed)
    - [Installation](#installation)
    - [Usage](#usage)
    - [Credits](#credits)
    - [License](#license)

    ## Installation
    ${answers.installation}

    ## Usage
    ${answers.instructions}
    \`\`\`
    ${answers.instructionsExample}
    \`\`\`

    ## Credits
    ${creditResult}

    ## License
    This project is licensed under the ${answers.licenseName} license.
   ` ;
};

module.exports = getMarkDown;