let x = 1;

function foo() {
	let x = 9;
	console.log(`x in foo: ${x}`);
}
foo();


console.log(`x in global: ${x}`);

// GLOBAL:
// foo = {....}
// x = 1


// foo :
// x = 9















