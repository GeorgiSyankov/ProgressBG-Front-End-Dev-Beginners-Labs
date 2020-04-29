function foo() {
	var x = 1;
	console.log(` x in foo: ${x}`);
}


foo();

console.log(`x in main: ${x}`);
console.log(`foo in main: ${foo}`); //




// GLOBAL:
// foo: <function>
// scope : 9

// FOO:
	// x

//CONSOLE:
// x in foo: 1