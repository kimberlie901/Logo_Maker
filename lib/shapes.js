class Shape{

// defines class Shape 
// constructor will initialized color and set color value
    constructor(shapeColor, LogoName) {
    this.shapeColor = shapeColor;
    this.shapeText = LogoName;
    }
}
// defines circle class with SVG dimensions 
 class Circle extends Shape {
    constructor(shapeColor, LogoName) {
        super(shapeColor, LogoName)
    }
    render() {
        return `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.shapeColor}"/>`
    }
 }
// defines square class with SVG dimensions
 class Square extends Shape {
    constructor(shapeColor, LogoName) {
        super(shapeColor, LogoName)
    }
    render() {
        return `<rect x="50" width="200" height="200" fill="${this.shapeColor}"/>`
    }
 }
// defines polygon(triangle) class with svg dimensions
 class Triangle extends Shape {
    constructor(shapeColor, LogoName) {
        super(shapeColor, LogoName)
    }
    render() {
        return `<polygon height="100%" width="100%" points="0,200 300,200, 150,0" fill="${this.shapeColor}"/>`
    }
 };

module.exports = {Circle, Square, Triangle};