var m1 = [
	["apple", "orange", "cherry"],
	[1.2,      2.0,      3.5],
	["apple", "orange", "cherry"],
];

// let m2 = [];

let rows = m1.length;
let cols = m1[0].length;


// loop over columns
for (let j = 0; j < cols; j++) {
	let msg = '';
	// m2[] = []

	for (let i = 0; i < rows; i++) {
		msg += m1[i][j] + '-';
		// m2[][] = m1[i][j] + '-';

	}
	console.log( msg ); // 'apple' 1.2
}



