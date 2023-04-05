class Shape{

// defines class Shape 
// constructor will initialized color and set color value

    constructor() {
        this.color = "";
    }
    setColor(color) {
        this.color = (color);
    }
}
// defines circle class with SVG dimensions 
 class Circle extends Shape {
    render() {
        return `<circle cx="50" cy="50" r="40" fill="${this.color}"/>`
    }
 }
// defines square class with SVG dimensions
 class Square extends Shape {
    render() {
        return `<rect x="50" y="20" width="150" height="150" fill="${this.color}"/>`
    }
 }
// defines polygon(triangle) class with svg dimensions
 class Triangle extends Shape {
    render() {
        return `<polygon points="200,10 250,190, 160,210" fill="${this.color}"/>`
    }
 }

module.exports = {Circle, Square, Triangle};