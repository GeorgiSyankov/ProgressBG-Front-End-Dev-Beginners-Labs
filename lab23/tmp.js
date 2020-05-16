let students = ["Ivan", "Pesho", "Maria"];
let scores = [5, 6, 3];



function getHigherScoreIndex(scores) {

   return scores.indexOf(Math.max(...scores));
}

function logHigherScore (students, maxIndex) {
   console.log(`${students[maxIndex]} has the highest score: ${scores[maxIndex]}`);

};

let maxIndex = getHigherScoreIndex(scores);

logHigherScore(students, maxIndex)


