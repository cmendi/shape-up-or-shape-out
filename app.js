const rectangleBtn = document.getElementById("btnRectangle");
const squareBtn = document.getElementById("btnSquare");
const circleBtn = document.getElementById("btnCircle");
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
		this.div.addEventListener("click", () => {
			this.describe();
		});
		this.div.addEventListener("dblclick", () => {
			this.div.remove();
			this.deleteStats();
		});
	}

	position() {
		this.x = Math.floor(Math.random() * (600 - this.width));
		this.y = Math.floor(Math.random() * (600 - this.height));
	}

	style() {
		this.div.style.position = "absolute";
		this.div.style.backgroundColor = this.color;
		this.div.style.width = this.width + "px";
		this.div.style.height = this.height + "px";
		this.div.style.left = this.x + "px";
		this.div.style.top = this.y + "px";
		this.div.style.border = "2px solid black";
		this.div.style.borderRadius = this.radius + "px";
	}

	draw() {
		shapeDiv.append(this.div);
	}

	describe() {
		shapeStat.value = this.name;
		heightStat.value = this.height;
		statWidth.value = this.width;
		statArea.value = this.area;
		statPerimeter.value = this.perimeter;
		statRadius.value = this.radius;
	}

	deleteStats() {
		shapeStat.value = "";
		heightStat.value = "";
		statWidth.value = "";
		statArea.value = "";
		statPerimeter.value = "";
		statRadius.value = "";
	}
}

class Rectangle extends Shape {
	constructor(height, width) {
		super();
		this.name = "rectangle";
		this.height = height;
		this.width = width;
		this.color = "green";
		this.area = height * width;
		this.perimeter = (height + width) * 2;
		this.radius = "N/A";
		this.position();
		this.style();
		this.draw();
	}
}
class Square extends Shape {
	constructor(sideLength) {
		super();
		this.name = "square";
		this.height = sideLength;
		this.width = sideLength;
		this.color = "red";
		this.area = sideLength * sideLength;
		this.perimeter = (sideLength + sideLength) * 2;
		this.radius = "N/A";
		this.position();
		this.style();
		this.draw();
	}
}
class Circle extends Shape {
	constructor(radius) {
		super();
		this.radius = radius;
		this.name = "circle";
		this.height = radius * 2;
		this.width = radius * 2;
		this.color = "purple";
		this.area = Math.PI * radius * radius;
		this.perimeter = 2 * Math.PI * 2;
		this.position();
		this.style();
		this.draw();
	}
}
class Triangle extends Shape {
	constructor(height) {
		super();
		this.name = "triangle";
		this.height = height;
		this.width = height;
		this.color = "yellow";
		this.area = 0.5 * height * height;
		this.perimeter = 3 * height;
		this.radius = "N/A";
		this.position();
		this.style();
		this.draw();
	}

	style() {
		this.div.style.position = "absolute";
		this.div.style.width = 0 + "px";
		this.div.style.height = 0 + "px";
		this.div.style.left = this.x + "px";
		this.div.style.top = this.y + "px";
		this.div.style.borderLeft = this.height / 2 + "px solid transparent";
		this.div.style.borderRight = this.height / 2 + "px solid transparent";
		this.div.style.borderBottom = this.height + "px solid yellow";
	}
}

rectangleBtn.addEventListener("click", (e) => {
	const rectangleHeight = document.getElementById("rectangleHeight").value;
	const rectangleWidth = document.getElementById("rectangleWidth").value;
	if (rectangleHeight <= 400 && rectangleWidth <= 400) {
		new Rectangle(rectangleHeight, rectangleWidth);
	} else {
		alert("Enter a pixel value between 1 and 400");
	}

	e.preventDefault();
});
squareBtn.addEventListener("click", (e) => {
	const squareLength = document.getElementById("sqruareLength").value;
	if (squareLength <= 400) {
		new Square(squareLength);
	} else {
		alert("Enter a pixel value between 1 and 400");
	}
	e.preventDefault();
});
circleBtn.addEventListener("click", (e) => {
	const circleRadius = document.getElementById("circleRadius").value;
	if (circleRadius <= 200) {
		new Circle(circleRadius);
	} else {
		alert("Enter a pixel value between 1 and 200");
	}
	e.preventDefault();
});
btnTriangle.addEventListener("click", (e) => {
	const triangleHeight = document.getElementById("triangleHeight").value;
	if (triangleHeight <= 200) {
		new Triangle(triangleHeight);
	} else {
		alert("Enter a pixel value between 1 and 600");
	}
	e.preventDefault();
});
