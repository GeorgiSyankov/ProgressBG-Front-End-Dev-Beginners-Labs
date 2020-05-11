
// let arr = [24, 22, 18, 56, 21];

// let max = arr[0];
// for (let i = 0; i < arr.length; i++) {
// 	const el = arr[i];
// 	if( el >= max){
// 		max = el
// 	}
// }

// console.log(`max: ${max}`);




let students = [
	["male",24,"Ivan","Ivanov"],
	["female",22,"Maria","Petrova"],
	["male",18,"Georgi","Georgiev"],
	["male",21,"Nikolai","Nikolov"]
];



// let oldStudent = [];
let max = students[0][1];
let maxIndex;

for (let i = 0; i < students.length; i++){
	const studentAge = students[i][1];

	if (studentAge >= max){
		max = studentAge;
		// oldStudent = students[i];
		maxIndex = i;
	}
}

// console.log(`The oldest student is ${oldStudent[2]} ${oldStudent[3]}. He is ${oldStudent[1]} years old.`);
// console.log(`The oldest student is ${students[maxIndex][2]} ${students[maxIndex][3]}. He is ${students[maxIndex][1]} years old.`);

