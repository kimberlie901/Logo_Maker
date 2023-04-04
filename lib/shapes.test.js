const {circle, square, triangle} = require("../lib/shapes");

//test for shapes

describe("circle"), () => {
    it("renders circle"), () => {
        const testCircle = new circle;
        testCircle.shapeColor = "pink"
        const renderString = '<circle cx="50" cy="50" r="40" fill="${this.color}"/>'
    expect(newCircle.render()).toEqual(renderString);
 }
}

describe("square"), () => {
    it("renders square"), () => {
        const testSquare = new square;
        testSquare.shapeColor = "pink"
        const renderString = '<rect x="50" y="20" width="150" height="150" fill="${this.color}"/>'
    expect(newSquare.render()).toEqual(renderString);
 }
}

describe("triangle"), () => {
    it("renders triangle"), () => {
        const testTriangle = new triangle;
        testTriangle.shapeColor = "pink"
        const renderString = '<polygon points="200,10 250,190, 160,210" fill="${this.color}"/>'
    expect(newTriangle.render()).toEqual(renderString);
 }
}