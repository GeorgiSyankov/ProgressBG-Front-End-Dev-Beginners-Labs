// let foo = function () {
// 	return 5;
// };

// function bar(f) {
// 	let res = f();
// 	console.log( `in foo: ${res+1}` );
// }

// // let x = 5;

// bar( foo );

// let res = foo();
// console.log(`res in main: ${res}`);


function bar( f ) {
	f();
};


bar( function() {
	console.log(`I'm foo`);
} )













