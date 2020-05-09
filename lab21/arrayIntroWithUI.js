let btnAdd = document.querySelector('.btnAdd');
let btnListUser = document.querySelector('.btnListUser');
let studentName = document.querySelector('.studentName');
let userNameInput = document.querySelector('[name="studentName"]');
let output = document.querySelector('.output');

// console.log('Hello');

let students = [];
function addStudentName() {
	students[students.length] = userNameInput.value;
	console.log( students );
}

btnAdd.addEventListener('click', addStudentName);
btnListUser.addEventListener('click', function(){

	for(let i=0; i<students.length; i++){
		if( students[i].length < 3){
			// console.log( students[i] );
			output.innerHTML += `<b>${students[i]}</b><br>`
		}
	}

})

// TASK: show in div.output only the names of the students which < 3 letters