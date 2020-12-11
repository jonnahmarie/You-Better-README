const inquirer = require("inquirer");
const fs = require("fs");
const axios = require("axios");
const markdown = require("./getMarkDown.js");

const promptUser = () =>
    inquirer.prompt([
        {
            type: "input",
            name: "projectTitle",
            message: "What is the name of your project?"
        },
        {
            type: "input",
            name: "projectDescription",
            message: "Provide a detailed description of what your project is about."
        },
        {
            type: "input",
            name: "installation",
            message: "What are the steps to install this project?"
        },
        {
            type: "input",
            name: "instructions",
            message: "Please provide instructions on how to use this project."
        },
        {
            type: "input",
            name: "instructionsExample",
            message: "Please type in an example of how to use this project."
        },
        {
            type: "input",
            name: "credits",
            message: "Who are your contributors, if any?"
        },
        {
            type: "input",
            name: "licenseName",
            message: "What is the name of the license that applies to your project?"
        },
        {
            type: "input",
            name: "userName",
            message: "What is your GitHub username?"
        },
        {
            type: "input",
            name: "deployedPath",
            message: "Please provide the URL linking to your deployed project."
        }
    ]);

promptUser()
    .then((answers) => writeFileAsync("getMarkDown.js"))

    // console.log(promptUser);

    