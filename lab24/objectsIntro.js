// ['first_name', 'lastname', years]
// let student1 = ['Pesho', 'Petrov', 34];
// let student2 = ['Maria', 'Popova', 23];
// let student50 = ['Asen', 'Asenov', 19];

// const studentGreet = function (student, n, y) {
// 	console.log(`Hello, I'm ${student[n]}, and I'm ${student[y]} years old`);
// };


// let student1 = ['Pesho', 'Petrov', 34];
let student1 = {
	'firstName': 'Pesho',
	'lastName':'Petrov',
	'years': 34,
	'address': {
		'country': 'Bulgaria',
		'zip': 1504
	},
	'greet':function(student, n, y) {
		// console.log(`Hello, I'm ${student[n]}, and I'm ${student[y]} years old`);

		console.log(`I'm student 1`);
	}
};

console.log( student1.address.zip );




// console.log( student1[0] );
console.log( student1['firstName'] );
console.log( student1.firstName );

// student1['greet']();
student1.greet();

// student1.address.country
// 'Pesho'.greet()



// GlOBAL:
// greet : <code>





// let student50 = {
// 	'firstName': 'Asen',
// 	'lastName':'Asenov',
// 	'years': 19,
// 	'greet':function(student, n, y) {
// 		console.log(`Hello, I'm ${student[n]}, and I'm ${student[y]} years old`);
// 	}

// };

// let teacher1 = {
// 	'firstName': 'TeacherName1',
// 	'lastName':'TF1',
// 	'years': 24,
// 	'greet':function (teacher) {
// 		console.log(`Gooda afternoon, I'm ${teacher[0]} ${teacher[1]} `);
// 	}
// };











