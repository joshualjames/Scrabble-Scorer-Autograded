// This assignment is inspired by a problem on Exercism (https://exercism.org/tracks/javascript/exercises/etl) that demonstrates Extract-Transform-Load using Scrabble's scoring system. 

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
   let word = input.question("Let's play some scrabble! Enter a word: ");
   // let allowedChars = "abcdefghijklmnopqrstuvwxyz".split('');
   let splitWord = word.split('');
   // for (letter of splitWord) {
   //    console.log(splitWord);
   //    if (!allowedChars.includes(letter)) {
//TBD
   //    }
   // }
   // console.log(splitWord);
   return splitWord.join('');
};

let simpleScorer = function (word) {
   let scoredWord = [];
   scoredWord = word.toUpperCase().split('');
   let totalScore = 0;
   for (i in scoredWord) {
      console.log(`Points for '${scoredWord[i]}': 1`);
      totalScore += 1;
   }
   return totalScore;
};

let vowelBonusScorer = function (word) {
   let scoredWord = [];
   scoredWord = word.toUpperCase().split('');
   let totalScore = 0;
   for (i in scoredWord) {
      if (scoredWord[i] === 'A' || scoredWord[i] === 'E' || scoredWord[i] === 'I' || scoredWord[i] === 'O' || scoredWord[i] === 'U') {
         console.log(`Points for '${scoredWord[i]}': 3`);
         totalScore += 3;
      } else {
         console.log(`Points for '${scoredWord[i]}': 1`);
         totalScore += 1;
      }
   }
   return totalScore;
};

let scrabbleScorer = function (word) {
   let scoredWord = [];
   scoredWord = word.toLowerCase().split('');
   let totalScore = 0;
   for (i in scoredWord) {
      console.log(newPointStructure);
      totalScore += newPointStructure[scoredWord[i]];
      console.log(`Points for '${scoredWord[i]}': ${newPointStructure[scoredWord[i]]}`)
   }
   return totalScore;
};

let simpleScoringMethod = {
   name: 'Simple Score',
   description: 'Each letter is worth 1 point.',
   scorerFunction: simpleScorer
};

let oldScoringMethod = {
   name: 'Scrabble',
   description: 'The traditional scoring algorithm.',
   scorerFunction: oldScrabbleScorer
};

let newScrabbleMethod = {
   name: 'New Scrabble Scoring Method',
   description: 'An updated Scrabble scoring algorithm.',
   scorerFunction: scrabbleScorer
}

let bonusVowelMethod = {
   name: 'Bonus Vowels',
   description: 'Vowels are 3 pts, consonants are 1 pt.',
   scorerFunction: vowelBonusScorer
}
const scoringAlgorithms = [simpleScoringMethod, bonusVowelMethod, newScrabbleMethod];

function scorerPrompt() {
   console.log(`Which scoring algorithm would you like to use?
   
   0 - ${scoringAlgorithms[0].name}: ${scoringAlgorithms[0].description}
   1 - ${scoringAlgorithms[1].name}: ${scoringAlgorithms[1].description}
   2 - ${scoringAlgorithms[2].name}: ${scoringAlgorithms[2].description}`);

   userSelection = input.question('Enter 0, 1, or 2: ');
   userSelection = Number(userSelection);
   while ((userSelection) < 0 || (userSelection) > 2){
      userSelection = input.question('Invalid input. Please select using integers 0, 1, or 2. ');
   }
   if ((userSelection) === 0) {
      return scoringAlgorithms[0];
   } else if ((userSelection) === 1) {
      return scoringAlgorithms[1];
   } else ((userSelection) === 2); 
   return scoringAlgorithms[2];
}

let alphaObj = {};

function transform(obj) {
   for (i in obj) {
      for (j = 0; j < obj[i].length; j++) {
         alphaObj[(obj[i][j]).toLowerCase()] = Number(i);
      }
   }
   return alphaObj;
};

let newPointStructure = transform(oldPointStructure);

function runProgram() {
   let word = initialPrompt();
   const algorithmSelection = scorerPrompt();
   console.log(`Score for ${word}:
${algorithmSelection.scorerFunction(word)}`);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScorer: simpleScorer,
   vowelBonusScorer: vowelBonusScorer,
   scrabbleScorer: scrabbleScorer,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};
