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

const reverseString = () => {};
const countCharacter = () => {};
const countVowels = (str) => {};
const countConsonants = (str) => {};
const reverseArray = () => {};
const checkValueInArray = () => {};
const getPositiveNumbers = () => {};
const getNegativeNumbers = () => {};
const getEvenNumbers = () => {};
const getOddNumbers = () => {};
const convertToUppercase = () => {};
const convertToLowercase = () => {};
const doubleNumbers = () => {
	return [84, 22, 58, 198, 620];
};
const squareNumbers = (numbers) => {
	return numbers.map((number) => number * number);
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
