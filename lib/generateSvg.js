// function to generate svg with data from the prompt
class generateSVG {
    constructor () {
        this.text = ""
        this.shape = ""
    }
    render() {
        return `<svg width="300" height="200" version="1.1 font-size="45" font-family="Verdana" xmlns="http://www.w3.org/2> ${this.shape}${this.text}</svg>`;
    }

    setShape(shape) {
        this.shape = shape.render();
    }
}
module.exports = generateSVG