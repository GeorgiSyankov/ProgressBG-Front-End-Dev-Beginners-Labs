function foo() {
	let x = 1;
	console.log(` x in foo: ${x}`);
}

var x = 8;
foo();
console.log(`x in main: ${x}`);

// GLOBAL:
//  x = 8

// FOO:
// x : 1



