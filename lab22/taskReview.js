var frutsData = [
    ["apple", "orange", "cherry",],
    [1.2, 2.0, 3.5]
];

for (let i = 0; i < fruitsData.length; i++) {

   // console.log(fruitsData[i].length);

   	for (let j = 0; j < fruitsData[i].length; j++){

		let count = 1 ;
		// console.log( fruitsData[i+count]);

        console.log(fruitsData[i][j] + ' = ' +fruitsData[i+count][j]   ); // undefined[0]
		// count --;

	   }

    console.log();

}