function Point(a,b){
	// this = {}
	this.x = a;
	this.y = b;
	// return this
}
Point.prototype.alabala = 'iva';
Point.prototype.drawLine = function (arams) {
	console.log(`x: ${this.x}, y: ${this.y}`);
}

let p1 = new Point(1,2);
let p2 = new Point(3,4);
p1.drawLine();





let strObj = new String('ada');




// let points = [
// 	Point(1,2),
// 	Point(3,4)
// ]

// console.dir(points);
// console.dir(points);
// console.dir(points);
// console.dir(points);
// console.dir(points);
// console.dir(points);
// console.dir(points);
// console.dir(points);
// console.dir(points);
// console.dir(points);
// console.dir(points);
// console.dir(points);

