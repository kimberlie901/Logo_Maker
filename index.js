/** Acceptance Criteria
 * GIVEN a command-line application that accepts user input
 * WHEN I am prompted for text 
 * THEN I can enter up to three characters 
 * WHEN I am prompted for the text color 
 * THEN I can enter a color keyword (OR a hexadecimal number)
 * WHEN I am prompted for a shape 
 * THEN I am presented with a list of shapes to choose from: circle, triangle, and square
 * WHEN I am prompted for the shape's color 
 * THEN I can enter a color keyword (OR a hexadecimal number)
 * WHEN I have entered input for all the prompts
 * THEN an SVG file is created namedd "logo.svg"
 * AND the output text "Generated logo.svg" is printed in the command line
 * WHEN I open the "logo.svg" file in a browser
 * THEN I am shown a 300x200 pixel image that matches the criteria I entered 
 */


// packages needed for application 

const inquirer = require("inquirer");

const fs = require("fs");

const path = require("path");

const generateSVG = require("./lib/generateSvg"); 


// array of questions for user input

const questions = [
    {
        type: "input",
        name: "logoName",
        message: "Enter up to (3) chacters for the text.",
    },
    {
        type: "input",
        name: "textColor",
        message: "Enter a color keyword or a hexadecimal number for the color of the text.",
    },
    {
        type: "list",
        name: "textShape",
        message: "Choose a shape for the logo.",
        choices: ["CIRCLE", "SQUARE", "TRIANGLE"]
    },
    {
        type: "input",
        name: "shapeColor",
        message: "Enter a color keyword or a hexadecimal number for the color of the shape.",
    }
]



// TODO: Create a function to initialize logo
function init() {
    inquirer.prompt(questions)
        .then((answers) => {
            console.log("Generating Your SVG Logo");
            writeToFile("./lib/generateSvg.js",generateSVG({...answers}));
        })    
};


// Function call to initialize logo
init();
