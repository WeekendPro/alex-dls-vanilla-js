/*
## INSTRUCTIONS

Complete the tasks below. 
Use node to run the tests in the test file found in this directory.

## TASKS

- Update `getGreeting` with a function that takes a name (string) and returns a greeting like "Hello, [Name]!".
- Update `getLength` with a function that returns the length of a given string.
- Update `getFirstCharacter` with a function that returns the first character of a string.
- Update `getLastCharacter` with a function that returns the last character of a string.
- Update `concatenateStrings` with a function that concatenates (joins) two strings together.
- Update `convertToUppercase` with a function that converts a string to uppercase.
- Update `convertToLowercase` with a function that converts a string to lowercase.
- Update `isEmpty` with a function that returns true if a string is empty, false otherwise.
- Update `getCharacterAtIndex` with a function that takes a string and a number N, and returns the character at the Nth index.
*/

// ---------------------------- //
// Fix the code below this line //
// ---------------------------- //

const getGreeting = (name) => 'Hello,' + ' ' + name + '!';
const getLength = (sentence) => sentence.length;
const getFirstCharacter = (character) => character.charAt(0);
const getLastCharacter = (character) => character.charAt(character.length - 1);
const concatenateStrings = (str1, str2) => str1 + str2;
const convertToUppercase = (string) => string.toUpperCase();
const convertToLowercase = (string) => string.toLowerCase();
const isEmpty = (string) => string.length === 0;
const getCharacterAtIndex = (string, N) => string.charAt(N);

// ------------------------------- //
// Don't edit code below this line //
// ------------------------------- //

let solution = {};

try {
	solution = {
		getGreeting,
		getLength,
		getFirstCharacter,
		getLastCharacter,
		concatenateStrings,
		convertToUppercase,
		convertToLowercase,
		isEmpty,
		getCharacterAtIndex,
	};
} catch (error) {
	console.error(error);
}

export default solution;
