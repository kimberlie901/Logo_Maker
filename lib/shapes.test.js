const {Circle, Square, Triangle} = require("./shapes");

//test for shapes

describe("Test", () => {
    describe("Circle", () => {
        describe("Render Method", () => {
            test("renders circle", () => {
                const testCircle = new Circle();
                testCircle.shapeColor = "pink";
                const renderString = `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${testCircle.shapeColor}"/>`;
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
                const renderString = `<rect x="50" width="200" height="200" fill="${testSquare.shapeColor}"/>`;
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
                const renderString = `<polygon height="100%" width="100%" points="0,200 300,200, 150,0" fill="${testTriangle.shapeColor}"/>`;
                expect(testTriangle.render()).toEqual(renderString);
            });
        });
    });
});