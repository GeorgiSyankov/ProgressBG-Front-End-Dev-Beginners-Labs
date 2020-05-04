var fruitsData = [
	["apple", "orange", "cherry"],
	[1.2, 2.0, 3.5]
];

for (let  j = 0; j < fruitsData[0].length; j++) {
	for (let i = 0; i < fruitsData.length; i++) {
		console.log(fruitsData[i][j]);
	}
	console.log(`~~~`);
}