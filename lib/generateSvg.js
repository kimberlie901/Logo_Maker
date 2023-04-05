// function to generate svg with data from the prompt

function generateSVG(data) {

    let shape = new userLogo (data.textColor, data.shapeColor).getShape(data.shape);
    writeToFile("./ex")
}
