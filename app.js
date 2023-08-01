const rectangleBtn = document.getElementById("btnRectangle");
const rectangleHeight = document.getElementById("rectangleHeight");
const rectangleWidth = document.getElementById("rectangleWidth");
const squareLength = document.getElementById("sqruareLength");
const squareBtn = document.getElementById("btnSquare");
const circleBtn = document.getElementById("btnCircle");
const circleRadius = document.getElementById("circleRadius");
const triangleHeight = document.getElementById("triangleHeight");
const btnTriangle = document.getElementById("btnTriangle");
const shapeDiv = document.getElementById("shapeDiv");
const shapeStat = document.getElementById("shapeStat");
const heightStat = document.getElementById("heightStat");
const statWidth = document.getElementById("statWidth");
const statArea = document.getElementById("statArea");
const statPerimeter = document.getElementById("statPerimeter");
const statRadius = document.getElementById("statRadius");

class Shape {
	constructor() {
		this.div = document.createElement("div");
		shapeDiv.append(this.div);
	}
}

rectangleBtn.addEventListener("click", () => console.log("working"));
squareBtn.addEventListener("click", () => console.log("working"));
circleBtn.addEventListener("click", () => console.log("working"));
btnTriangle.addEventListener("click", () => console.log("working"));
