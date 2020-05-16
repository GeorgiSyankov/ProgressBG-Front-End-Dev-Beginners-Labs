let sdudentNameInput = document.querySelector('[name="sdudentName"]');
let sdudentScoreInput = document.querySelector('[name="sdudentScore"]');
let btnEnter = document.querySelector('.btnEnter');
let btnAction = document.querySelector('.btnAction');


let names = [];
let scores = [];

function getHigherScoreIndex(scores) {

	return scores.indexOf(Math.max(...scores));
}

function logHigherScore (students, maxIndex) {
	console.log( `maxIndex: ${maxIndex}` );
	console.log( `students: ${students}` );
	console.log( `scores: ${scores}` );

	console.log(`${students[maxIndex]} has the highest score: ${scores[maxIndex]}`);

};


function addStudent() {
	let studentName = sdudentNameInput.value;
	let studentScore = sdudentScoreInput.value;

	// Ivan => 4
	// Maria => 5
	// Asen =>6
	// console.log( `${studentName} - ${studentScore} `);
	names.push(studentName);
	scores.push(studentScore)
}

function doSomethingWithData() {
	let maxIndex = getHigherScoreIndex(scores);
	logHigherScore(names, maxIndex);
}



btnEnter.addEventListener('click', addStudent );
btnAction.addEventListener('click', doSomethingWithData );





