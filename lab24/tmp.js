let students = ["Ivan", "Pesho", "Maria"];
let scores = [5, 4, 6];



let higScore;

function getHigherScoreIndex(scores){
	for (let i = 0; i < scores.length; i++){
		higScore = scores[1][1];
		if (higScore > scores){
		}
	}
	// console.log(`Maria has the hiest score: ${higScore}`);
	return higScore
}

let res = getHigherScoreIndex(scores);
console.log(`res: ${res}`);


// показва че undefined.

// TASK: дефинирайте функция 'getHigherScoreIndex()', която да връща индекса на най-големият елемент от масива scores.

// TASK: като използвате функцията getHigherScoreIndex() изпишета в конзолата:
// Maria has the hiest score: 6


