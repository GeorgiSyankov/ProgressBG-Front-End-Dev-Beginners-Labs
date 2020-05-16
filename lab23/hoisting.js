console.log( x ); // undefined


foo(); // 'foo'

bar(); // error

let x;
x = 5;


function foo() {
	console.log(`foo`);
}

let bar = function () {
	console.log(`bar`);
}

// GLOBAL:
// x:undefined
// foo: {code}
// bar: undefined
