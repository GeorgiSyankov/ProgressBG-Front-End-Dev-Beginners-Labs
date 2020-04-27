// let x = 5;

// let userName = 'jhdshfdjhfdsj'; // string

// let numbers =  [1,2,3,'b',];    // array

// console.log( typeof(numbers) );


// RAM:
// x -> 1 cell

// numbers =>
	// 1
	// 2
	// 3


// let emptyArray = [];
// let emptyString = '';


/* -------------------------------------------------------------------------- */
/*                             why we need arrays                             */
/* -------------------------------------------------------------------------- */
// Imagine next task:
// Log in console next 5 fruits: "apple", "banana", "strawberry", "banana", "orange"
/* -------------------------------------------------------------------------- */
// we can use separate variables (not efficient way):

// let fruit1 = 'apple';
// let fruit2 = 'banana';

// // ...
// let fruit5 = 'orange';

// console.log( fruit1 );
// console.log( fruit2 );
// console.log( fruit3 );
// console.log( fruit4 );
// console.log( fruit5 );
/* -------------------------------------------------------------------------- */
// with array:

// let fruits = ["apple", "banana", "strawberry", "banana", "orange", 'a','b'];
// // console.log( fruits[2] );


// for (let index = 0; index < fruits.length; index++) {
// 	const element = fruits[index];

// 	console.log( element );
// }




/* -------------------------------------------------------------------------- */
/*                                 array demos                                */
/* -------------------------------------------------------------------------- */
// let numbers = [1,2,3];
// console.log( numbers[30] + 3); // u
// console.log( numbers );
// console.log( numbers.length );

// numbers[4] = 9; // [1,2,3,-,9]
// console.log( numbers.length );

// console.log( numbers );

// numbers['a'] = 'a';
// numbers['b'] = 'b';
// numbers[-1] = -1;
// console.log( numbers.length ); //5


// numbers[ numbers.length -1 ] = 4;
// console.log( numbers );


// // arr.push(element1[, ...[, elementN]])
// numbers.push( [4,5] );
// console.log( numbers ); // [ 1,2,3,[4,5] ]
// console.log(numbers.length);


// let arr = [2,3];

// if( arr.length == 0 ){ // arr = []
// 	console.log(`Empty array`);
// }else{
// 	console.log( arr[0] ** 2);
// 	console.log( arr );
// };

// Empty array
// 4
// [2,3]

// log in console each element of numbers powered by 2:
// let numbers = [1,2,3];

// console.log( numbers[0] ** 2);
// console.log( numbers[1] ** 2);
// console.log( numbers[2] ** 2);


// console.log( numbers[i] ** 2);



// for(let i=0; i<numbers.length; i++){
// 	console.log( numbers[i] ** 2);
// }

// 1
// 4
// 9

// 0 1 4


// log in console sum of the array elements:
let numbers = [1,2,3,4];

// let i = 3;
// console.log( numbers[++i] ); // numbers[4]= undefined
// console.log(`i = ${i}`); //

// 2
//


// var sum = 0; // sum: undefined
// for (var i =0; i< numbers.length; i++) {
// 	sum += numbers[i];

// 	// sum = sum + numbers[i];
// }

// console.log(`The sum of numbers is: ${sum}`);





/* -------------------------------------------------------------------------- */
/*                               array of arrays                              */
/* -------------------------------------------------------------------------- */
// let arr = [
// 	1,
// 	[2,3,'a'],
// 	[4,5]
// ];

// TODO: explain why 2[1] is undefined
// console.log( arr[ 2[1] ] );

// let x = arr[2]; // x = [4,5]
// console.log( x[1] );

// console.log( arr[2][1] ); // 5
// console.log( arr[1][2] );

// let n = 2;
// console.log( n[1] ); // undefined ? TODO





















