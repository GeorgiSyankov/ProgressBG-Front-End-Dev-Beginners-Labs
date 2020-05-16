const fs = require('fs');

let file1 = 'file1.html';
let file2 = 'file2.txt';


function blockingRead(fileName) {
	const data = fs.readFileSync(fileName, 'utf8');
	// blocks here until file is read
	// console.log(`Sync data read:`);

	return data;
}

function nonBlockingRead(fileName, callback) {
	const data = fs.readFile(fileName, 'utf8', callback);

	// console.log(`Sync data read:`);

	return data;
}

function doSomethingWIthData(err, data) {
	console.log(data.toUpperCase());
}

console.log(`1`);

nonBlockingRead(file1, doSomethingWIthData); // 10s

console.log(`2`);



// // get the content of file1: 10s
// let content1;

// // get the content of file2: 5s
// let content2;

