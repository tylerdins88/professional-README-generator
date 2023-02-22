// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generate = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is your project title?",
        name: "title"
    },
    {
        type: "input",
        message: "What would you like the description to say?",
        name: "description"
    },
    {
        type: "input",
        message: "Would you like a table of contents for the README.md?",
        name: "contents"
    },
    {
        type: "input",
        message: "What are the installation instructions?",
        name: "instructions"
    },
    {
        type: "input",
        message: "What is the usage information?",
        name: "usage"
    },
    {
        type: "list",
        message: "Which licences would you like to include?",
        name: "license",
        choices: ["Apache 2.0", "GNU v3.0", "MIT", "BSD 2-Clause", "Boost Software 1.0", "Creative Commons Zero v1",
            "Eclipse Public License", "BSD 3-New", "GNU Affero", "GNU General", "GNU Lesser", "Mozilla", "The Unlicense"]
    },
    {
        type: "input",
        message: "What are the contribution guidelines?",
        name: "contribution"
    },
    {
        type: "input",
        message: "What are the test instructions?",
        name: "test"
    },
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "github"
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, answers) {
    fileName = generate(answers);

    fs.writeFile("professional-README.md", fileName, (err) =>
        err ? console.log(err) : console.log("professional-README sucessfully generated!")
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            const fileName = "generate-README";
            const readMeResponse = writeToFile(fileName, answers)
        })
}

// Function call to initialize app
init();
