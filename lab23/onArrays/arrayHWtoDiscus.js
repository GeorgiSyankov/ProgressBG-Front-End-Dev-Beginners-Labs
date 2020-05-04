// TASK 1 : Given the array: numbersArr bellow, write the code (using a for loop) which will create two new arrays:
// evenNums - which elements will be the positive even numbers from numbersArr.
// oddNums - which elements will be the negative odd numbers from numbersArr.

// Note that the Zero is neither positive nor negative number!

// HINT: you can push a value in a array by using array.push(value) method.
function task1() {
	const numbersArr = [1, 6, -3, 5, 2, -8, 0, 4, 3];
	let oddNums = [];
	let evenNums = [];
	for (let i = 0; i < numbersArr.length; i++) {
		if (numbersArr[i] % 2 === 0 && numbersArr[i] !== 0) {
			evenNums.push(numbersArr[i]);
		} else {
			oddNums.push(numbersArr[i]);
		}
	}
	console.log(oddNums);
	console.log(evenNums);
}

// Task 2 - Two dimentional Array
// TASK: log in console using fruitsData and for loop:
// apple = 1.2,
// orange = 2.0,
// cherry = 3.5

function task2() {
	var fruitsData = [
		["apple", "orange", "cherry"],
		[1.2, 2.0, 3.5]
	];

	for (let i = 0; i < fruitsData.length; i++) {
		// console.log(fruitsData[i].length);

		for (let j = 0; j < fruitsData[i].length; j++) {
			let count = 1;

			console.log(fruitsData[i][j] + " = " + fruitsData[i + count][j]);
			count--;
		}
		console.log();
	}
}

// Задача 3

// Даден е масив, който съдържа информация за български владетели, и периода на тяхното управление.
// Всеки елемент на масива е масив със следните данни:
//  [<име>, <начална година на управление>, <крайна година на управление>]
function task3() {
	var rulers = [
		["асПАРуХ", 681, 700],
		["тЕРвеЛ", 700, 718],
		["СеВаР", 738, 753],
		["телЕРИГ", 766, 777],
		["каРДАм", 777, 803],
		["крум", 803, 814],
		["ОмурТАг", 814, 831]
	];

	// Изпишете в конзолата имената на онези български владетели, които са управлявали повече от 15 години.
	// Разбира се, искаме да видим имената изписани според конвенциите за имена на съществителни-собствени: за целта може да използвате върху всяко име функцията toCamelCaseCyr(), която връща подадения й низ в скобите конвертиран до CamelCase
	// Например:

	var yearsOfRule;
	for (let i = 0; i < rulers.length; i++) {
		// console.log(rulers[i]);

		// iep: тук не ти трябва втория цикъл - не използваш 'j' а и така имаш повторения в конзолата
		// for (let j = 0; j < rulers.length; j++) {
			// console.log(rulers[i][j]);

			yearsOfRule = rulers[i][2] - rulers[i][1];
			//  console.log(yearsOfRule);

			if (yearsOfRule > 15) {
				console.log(titleCase(rulers[i][0]));
			}
		// }
	}

	// function fro Title Case
	function titleCase(str) {
		str = str.toLowerCase().split(" ");
		for (var i = 0; i < str.length; i++) {
			str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
		}
		return str.join(" ");
	}
}


task3();