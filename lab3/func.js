
function showDetailsOld(event) {
	// here we get the btn by event.target property
	let orderNumber = event.target.parentNode.parentNode.id;
	console.dir(orderNumber);
}

function showDetailsNew(orderNumber) {
	return function () {
		console.dir(orderNumber);
		localStorage.setItem("orderNumber", orderNumber);
	}
}

// get all rows nodes as array
let rows = document.querySelectorAll('#orders tr');
// console.dir(rows);

for (let i = 0; i < rows.length; i++) {
	const row = rows[i];
	let orderNumber = row.querySelector('#orderNumber').innerHTML;

	let btn = row.querySelector('button');
	btn.addEventListener('click', showDetailsNew(orderNumber) );
}






