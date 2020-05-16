// function foo() {
// 	console.log(`foo`);

// 	return function () {
// 		console.log(`bar`);
// 	};
// }

// console.log( foo()() );


// function foo() {
// 	return function () {

// 	};
// }

// let bar = foo();
// bar();



function foo(f) {
	// var f =
	// console.log( f );
	f();
}

let bar =  function () {
	console.log(`bar`);
};

foo( bar() );
//'bar'


