/*
## INSTRUCTIONS

Complete the tasks below. 
Use node to run the tests in the test file found in this directory.

## TASKS

- Update `reverseString` with a function that takes a string and returns a new string with the characters in reverse order. (Use a loop)
- Update `countCharacter` with a function that takes a string and a character, and counts how many times that character appears in the string. (Use a loop)
- Update `countVowels` with a function that takes a string and counts the number of vowels (a, e, i, o, u, case-insensitive) in it. (Use a loop and if) 
- Update `countConsonants` with a function that takes a string and counts the number of consonants (case-insensitive) in it. (Use a loop and if) 
- Update `reverseArray` with a function that takes an array and returns a new array with the same elements in reverse order. (Use a loop)
- Update `checkValueInArray` with a function that takes an array and a value, and returns true if the value exists in the array, false otherwise. (Use a loop) 
- Update `getPositiveNumbers` with a function that takes an array of numbers and returns a new array containing only the positive numbers. (Use a loop and if) 
- Update `getNegativeNumbers` with a function that takes an array of numbers and returns a new array containing only the negative numbers. 
- Update `getEvenNumbers` with a function that takes an array of numbers and returns a new array containing only the even numbers. 
- Update `getOddNumbers` with a function that takes an array of numbers and returns a new array containing only the odd numbers.
- Update `convertToUppercase` with a function that takes an array of strings and returns a new array with all strings converted to uppercase.
- Update `convertToLowercase` with a function that takes an array of strings and returns a new array with all strings converted to lowercase.
- Update `doubleNumbers` with a function that takes an array of numbers and returns a new array where each number is doubled.
- Update `squareNumbers` with a function that takes an array of numbers and returns a new array where each number is squared.
  */

// ---------------------------- //
// Fix the code below this line //
// ---------------------------- //

const reverseString = (string) => {
	let reverse =  ''
		for (let i = string.length-1; i>=0; i--) {
			reverse += string[i]
		}	
return reverse
};
const countCharacter = (string, character) => {
	let count = 0
	for (let i =0; i < string.length; i++) {
		if (string[i] === character) {
			count ++
		}
	}
	return count
};
const countVowels = (string) => {
	let count = 0
	const vowels = "aeiou"
	for (let i =0; i<string.length; i++) {
		const char = string[i].toLowerCase()
		if (vowels.includes(char)) {
			count++
		}
	}
	return count
};
const countConsonants = (string) => {
	let count = 0
	const vowels = "aeiou"

	for (let i=0; i<string.length;i++){
		const char = string[i].toLowerCase()
		if (char >= 'a' && char <= 'z' && !vowels.includes(char)) {
      count++; 
	}
}
return count
};

const reverseArray = (numbers) => {
	const reverse = []
	for (let i = numbers.length-1; i>= 0; i--) {
		reverse.push(numbers[i])
	}
	return reverse
};

const checkValueInArray = (array, target) => {
	for (let i = 0; i < array.length; i++) {
		if (array[i] === target) {
			return true
		}
	}
	 return false
};
const getPositiveNumbers = (numbers) => {
	const positives = []
	for (let i = 0; i > numbers.length; i++) {
		if (numbers[i] >= 0) {
			positives.push(numbers[i])
		}
	}
	return positives
};
const getNegativeNumbers = (numbers) => {
	const negatives = []
	for (let i = 0; i < numbers.length;  i++) {
		if (numbers[i] < 0) {
			negatives.push(numbers[i])
		}
	}
	return negatives
};
const getEvenNumbers = (numbers) => {
	const evens = []
	for (let i = 0; i < numbers.length; i++) {
		if (numbers[i] % 2 === 0) {
			evens.push(numbers[i])
		}
	}
	return evens
};
const getOddNumbers = (numbers) => {
	const odds = []
	for (let i = 0; i < numbers.length; i++) {
		if (numbers[i] % 2 !== 0) {
			odds.push(numbers[i])
		}
	}
	return odds
};
const convertToUppercase = (strings) => {
	const uppercase = [];
  for (let i = 0; i < strings.length; i++) {
    uppercase.push(strings[i].toUpperCase());
  }
  return uppercase;
};
const convertToLowercase = (strings) => {
	const lowercase = [];
  for (let i = 0; i < strings.length; i++) {
    lowercase.push(strings[i].toLowerCase());
  }
  return lowercase;
};
const doubleNumbers = (numbers) => {
	const double = [];
  for (let i = 0; i < numbers.length; i++) {
    double.push(numbers[i] * 2);
  }
  return double;
};
const squareNumbers = (numbers) => {
	const square = [];
  for (let i = 0; i < numbers.length; i++) {
    square.push(numbers[i] ** 2);
  }
  return square;
};

// ------------------------------- //
// Don't edit code below this line //
// ------------------------------- //

let solution = {};

try {
	solution = {
		reverseString,
		countCharacter,
		countVowels,
		countConsonants,
		reverseArray,
		checkValueInArray,
		getPositiveNumbers,
		getNegativeNumbers,
		getEvenNumbers,
		getOddNumbers,
		convertToUppercase,
		convertToLowercase,
		doubleNumbers,
		squareNumbers,
	};
} catch (error) {
	console.error(error);
}

export default solution;
