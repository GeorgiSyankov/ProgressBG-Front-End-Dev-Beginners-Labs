
function showDetailsOld(event) {
	// here we get the btn by event.target property
	let orderNumber = event.target.parentNode.parentNode.id;
	console.dir(orderNumber);
}

function showDetailsNew(orderNumber) {
	return function (event) {
		// to share a value between pages we can use:
		// 1. global variable (bad practice);
		// 2. add it in URL query string (too complicated, and mainly used for client-server communication)
		// 3. cookies (mainly used for client-server communication)
		// 4. local storage/session storage (best for new browsers: https://caniuse.com/#search=local%20storage)

		localStorage.setItem("orderNumber", orderNumber);

		// demo with window.open:
		if(event.target.tagName === 'BUTTON'){
			window.open('pages/details.html', "_blank");
		}
	}
}

// get all rows nodes as array
let rows = document.querySelectorAll('#orders tr');
// console.dir(rows);

for (let i = 0; i < rows.length; i++) {
	const row = rows[i];

	// get orderNumber from <td id="orderNumber">3307</td>
	let orderNumber = row.querySelector('#orderNumber').innerHTML;

	let btn = row.querySelector('button');
	btn.addEventListener('click', showDetailsNew(orderNumber) );
}






