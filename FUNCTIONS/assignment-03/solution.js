/*
## INSTRUCTIONS

Complete the tasks below. 
Use node to run the tests in the test file found in this directory.

## TASKS

- Update `getType` with a function that returns the type of a given value (use typeof).
- Update `isString` with a function that returns true if a value is a string, false otherwise.
- Update `isNumber` with a function that returns true if a value is a number, false otherwise.
- Update `isBoolean` with a function that returns true if a value is a boolean, false otherwise.
- Update `isUndefined` with a function that returns true if a value is undefined, false otherwise.
- Update `isNull` with a function that returns true if a value is null, false otherwise.
- Update `getOppositeBoolean` with a function that returns the opposite of a boolean value.
- Update `isBothTrue` with a function that returns true if BOTH of two boolean values are true, false otherwise.
- Update `isEitherTrue` with a function that returns true if EITHER of two boolean values is true, false otherwise.
- Update `isAbsolute` with a function that returns the absolute value of a number (e.g., -5 becomes 5, 5 stays 5).
- Update `getCurrentDate` with a function that returns the current date (use new Date()).
- Update `getCurrentYear` with a function that returns the current year.
- Update `getCurrentMonth` with a function that returns the current month (0-11).
- Update `getCurrentDay` with a function that returns the current day of the month (1-31).
*/

// ---------------------------- //
// Fix the code below this line //
// ---------------------------- //

const getType = (value) => typeof value;
const isString = (value) => typeof value === 'string';
const isNumber = (value) => typeof value === 'number';
const isBoolean = (value) => typeof value === 'boolean';
const isUndefined = (value) => typeof value === 'undefined';
const isNull = (value) => value === null;
const getOppositeBoolean = (value) => !value;
const isBothTrue = (bool1, bool2) => bool1 && bool2 === true;
const isEitherTrue = (bool1, bool2) => bool1 || bool2 === true;
const isAbsolute = (value) => Math.abs(value);
const getCurrentDate = () => new Date();
const getCurrentYear = () => new Date().getFullYear();
const getCurrentMonth = () => new Date().getMonth();
const getCurrentDay = () => new Date().getDate();

// ---------------------------- //
// Don't edit code below this line //
// ---------------------------- //

const solution = {};

try {
	solution = {
		getType,
		isString,
		isNumber,
		isBoolean,
		isUndefined,
		isNull,
		getOppositeBoolean,
		isBothTrue,
		isEitherTrue,
		isAbsolute,
		getCurrentDate,
		getCurrentYear,
		getCurrentMonth,
		getCurrentDay,
	};
} catch (error) {
	console.error(error);
}

export default solution;
