function studentFactory(name,age,skills) {
	let obj = {};

	obj.name = name;
	obj.age = age;
	obj.skills = skills;

	return obj;
}

let o1 = studentFactory('ada', 23, ['HTML', 'CSS','Python']); // + age:23
let o2 = studentFactory('pesho',31, ['HTML', 'CSS','Python']); // + age: 31

console.log( o1 );
console.log( o2 );


// let o = {
// 	'name':'ada',
// 	'age': 23
// }





// let student1 = {
// 	'name': 'ivan',
// 	'address': {
// 		'country' : 'Bulgaria',
// 		'zip' : 1504
// 	},
// 	'skills': ['HTML', 'CSS','Python'],
// 	'age': 23
// }

// let student2 = {
// 	'name': 'maria',
// 	'address': {
// 		'country' : 'London',
// 		'zip' : 2308
// 	},
// 	'skills': ['HTML', 'JS'],
// 	'age': 21
// }