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
        return `<circle cx="50" cy="50" r="40" fill="${this.shapeColor}"/>`
    }
 }
// defines square class with SVG dimensions
 class Square extends Shape {
    constructor(shapeColor, LogoName) {
        super(shapeColor, LogoName)
    }
    render() {
        return `<rect x="50" y="20" width="150" height="150" fill="${this.shapeColor}"/>`
    }
 }
// defines polygon(triangle) class with svg dimensions
 class Triangle extends Shape {
    constructor(shapeColor, LogoName) {
        super(shapeColor, LogoName)
    }
    render() {
        return `<polygon points="200,10 250,190, 160,210" fill="${this.shapeColor}"/>`
    }
 };

module.exports = {Circle, Square, Triangle};