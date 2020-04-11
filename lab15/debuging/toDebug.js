let userInput = document.querySelector('input[type="number"]');
let output = document.querySelector('.output');
let btnTest = document.querySelector('.test');


btnTest.addEventListener("click", function(){
	let x = userInput.value;
	output.innerHTML = (x % 2) &&  "ODD" || "EVEN";
})