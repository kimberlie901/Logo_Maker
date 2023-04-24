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
        return `<svg width="300" height="200" version="1.1" font-size="60" font-family="Verdana" xmlns="https://www.w3.org/2000/svg"> ${this.shape.render()}<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}"> ${this.text}</text></svg>`;
    }

    setShape(shape) {
        this.shape = shape
    }
}
module.exports = generateSVG