// TASK: define function which log the power of given number

function power(x, y) {
	// number = 3
    console.log(`The power ${x} is ${x**y}`)
}

// power(2, 3); // The power of 2 is 8
// power(2, 4); // The power of 2 is 16
// power(2, 5); // The power of 2 is 32


function showParams(x,y) {
	// var x=2,y
	console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);
	console.log(`x = ${x}`);
	console.log(`y = ${y}`);
	console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);
}

// let res = showParams(2,3);

// showParams(2,3);
// showParams(2); // ?
// showParams(2,3,4); // ?


// pure function:
function add(x,y) {
	return x;
}

let res = add(2,3) + add(1,2);
console.log( res ); // undefined + undefined










