// function to generate svg with data from the prompt
class generateSVG {
    constructor(logoName, logoShape, textColor, shapeColor) {
        this.text = logoName
        this.shape = logoShape
        this.textColor = textColor

    }
    render() {
        console.log(this.shape)
        console.log(this.text)
        return `<svg width="300" height="200" version="1.1" font-size="45" font-family="Verdana" xmlns="https://www.w3.org/2000/svg"> ${this.shape.render()}<text x="50" y="50" fill="${this.textColor}"> ${this.text}</text></svg>`;
    }

    setShape(shape) {
        this.shape = shape
    }
}
module.exports = generateSVG