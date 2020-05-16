// Ivan => 4
// Maria => 5
// Asen =>6

// student1:
// 	// properties:
// 	name: Ivan
// 	score: 4
// 	//methods:
// 	greet:'ivan -4'

// student1:
// 	name: Maria
// 	score:5
// 	greet:'maria - 5'


let student1Arr = [
	'Ivan',
	4,
	function () {
		console.log(`Hello`);
	},
	[1,3]
];

console.log( student1Arr[0] );


let student1 = {
	'name': 'Ivan',
	'score': 4,
	'greet': function () {
		console.log(`greet`);
	}
}


console.log( student1.name );


