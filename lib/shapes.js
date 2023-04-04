class Shape{

    constructor() {
        this.color = "";
    }
    setColor(shapeColor) {
        this.color = color;
    }
}
 class circle extends Shape {
    render() {
        return '<circle cx="50" cy="50" r="40" fill="${this.color}"/>'
    }
 }

 class square extends Shape {
    render() {
        return '<rect x="50" y="20" width="150" height="150" fill="${this.color}"/>'
    }
 }

 class triangle extends Shape {
    render() {
        return '<polygon points="200,10 250,190, 160,210" fill="${this.color}"/>'
    }
 }