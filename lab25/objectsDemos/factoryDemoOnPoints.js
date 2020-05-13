function pointFactory (x,y) {
	let obj = {};

	obj.x = x;
	obj.y = y;

	return obj;
}

let points = [
	pointFactory(1,2),
	pointFactory(3,4)
]

console.dir(points);












