const {Circle, Square, Triangle} = require("./shapes");

//test for shapes

describe("Test", () => {
    describe("Circle", () => {
        describe("Render Method", () => {
            test("renders circle", () => {
                const testCircle = new Circle();
                testCircle.shapeColor = "pink";
                const renderString = `<circle cx="50" cy="50" r="40" fill="${testCircle.color}"/>`;
                expect(testCircle.render()).toEqual(renderString);
            });
        });
    });
});

describe("Test", () => {
    describe("Square", () => {
        describe("Render Method", () => {
            test("renders square", () => {
                const testSquare = new Square();
                testSquare.shapeColor = "pink";
                const renderString = `<rect x="50" y="20" width="150" height="150" fill="${testSquare.color}"/>`;
                expect(testSquare.render()).toEqual(renderString);
            });
        });
    });
});
  
describe("Test", () => {
    describe("Triangle", () => {
        describe("Render Method", () => {
            test("renders triangle", () => {
                const testTriangle = new Triangle();
                testTriangle.shapeColor = "pink";
                const renderString = `<polygon points="200,10 250,190, 160,210" fill="${testTriangle.color}"/>`;
                expect(testTriangle.render()).toEqual(renderString);
            });
        });
    });
});