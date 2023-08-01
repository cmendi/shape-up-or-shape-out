const rectangleBtn = document.getElementById("btnRectangle");
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
	}

	position() {
		this.x = Math.floor(Math.random() * (500 - this.width));
		console.log(this.x); // NaN? why is this not a number?
		this.y = Math.floor(Math.random() * (500 - this.height));
	}

	style() {
		this.div.style.backgroundColor = this.color;
		this.div.style.width = this.width;
		this.div.style.height = this.height;
		this.div.style.left = this.x;
		this.div.style.top = this.y;
		this.div.style.border = "2px solid black";
	}

	draw() {
		shapeDiv.append(this.div);
	}
}

class Rectangle extends Shape {
	constructor(height, width) {
		super();
		this.height = height + "px";
		this.width = width + "px";
		this.color = "red";
		this.style();
		this.position();
		this.draw();
	}
}

rectangleBtn.addEventListener("click", (e) => {
	const rectangleHeight = document.getElementById("rectangleHeight").value;
	const rectangleWidth = document.getElementById("rectangleWidth").value;
	new Rectangle(rectangleHeight, rectangleWidth);
	alert(rectangleHeight);
	e.preventDefault();
});
squareBtn.addEventListener("click", () => console.log("working"));
circleBtn.addEventListener("click", () => console.log("working"));
btnTriangle.addEventListener("click", () => console.log("working"));
