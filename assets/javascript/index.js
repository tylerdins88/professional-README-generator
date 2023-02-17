// TODO: Include packages needed for this application
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        question: "What is your project title?",
        name: "title"
    },
    {
        type: "input",
        question: "What would you like the description to say?",
        name: "description"
    },
    {
        type: "input",
        question: "What are the installation instructions?",
        name: "instructions"
    },
    {
        type: "input",
        question: "What is the usage information?",
        name: "usage"
    },
    {
        type: "input",
        question: "What are the contribution guidelines?",
        name: "contribution"
    },
    {
        type: "input",
        question: "What are the test instructions?",
        name: "test"
    },
    {
        type: "list",
        question: "Which licences would you like to include?",
        name: "license",
        choices: ["Apache 2.0", "GNU v3.0", "MIT", "BSD 2-Clause", "Boost Software 1.0", "Creative Commons Zero v1",
            "Eclipse Public License", "BSD 3-New", "GNU Affero", "GNU General", "GNU Lesser", "Mozilla", "The Unlicense"]
    },
    {
        type: "input",
        question: "What is your GitHub username?",
        name: "github"
    },
    {
        type: "input",
        question: "What is your email address?",
        name: "email"
    },
    {
        type: "input",
        question: "Would you like a table of contents for the README.md?",
        name: "contents"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
