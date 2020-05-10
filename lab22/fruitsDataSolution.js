var fruitsData = [
	["apple", "orange", "cherry"],
 	[1.2,      2.0,      3.5],
];

let rows = fruitsData.length;
let cols = fruitsData[0].length;


for(let j = 0; j < cols; j++) {
	console.log( `${fruitsData[0][j]} : ${fruitsData[1][j]}` );
}




