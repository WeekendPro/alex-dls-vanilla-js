/*
## INSTRUCTIONS

Complete the tasks below. 
Use node to run the tests in the test file found in this directory.

## TASKS

- Update `getLength` with a function that takes an array and returns its length.
- Update `getFirstElement` with a function that takes an array and returns the first element.
- Update `getLastElement` with a function that takes an array and returns the last element.
- Update `addItem` with a function that takes an array and an item, and adds the item to the end of the array (use .push()). Return the new array.
- Update `removeAndReturnLastItem` with a function that takes an array and removes the last item (use .pop()). Return the removed item.
- Update `getSum` with a function that takes an array of numbers and returns their sum. (Use a loop)
- Update `getAverage` with a function that takes an array of numbers and returns their average.
- Update `getSumFromOneToN` with a function that takes a number N and returns the sum of all numbers from 1 to N. (Use a loop)
- Update `getNumbersFromOneToN` with a function that takes a number N and returns an array of all numbers from 1 to N. (Use a loop)
- Update `getEvenNumbersFromOneToN` with a function that takes a number N and returns an array of all even numbers from 1 to N. (Use a loop and if)
- Update `getOddNumbersFromOneToN` with a function that takes a number N and returns an array of all odd numbers from 1 to N. (Use a loop and if)
- Update `getLargestNumber` with a function that takes an array of numbers and returns the largest number in the array. (Use a loop)
- Update `getSmallestNumber` with a function that takes an array of numbers and returns the smallest number in the array. (Use a loop)
*/

// ---------------------------- //
// Fix the code below this line //
// ---------------------------- //

const getLength = (array) => array.length
const getFirstElement = (array) => array[0]
const getLastElement = (array) => array[array.length-1]
const addItem = (array, item) => {
	array.push(item)
	return array
}
const removeAndReturnLastItem = (array) => array.pop()
const getSum = (array) => {
	let sum = 0 
	for (let i = 0; i<array.length; i++ ){
		sum += array[i]
	}
	return sum
};
const getAverage = (array) => getSum (array) / array.length
const getSumFromOneToN = (n) => {
	let sum = 0 
	for (let i =1; i<=n; i++ ){
		sum += i
	}
	return sum
};
const getNumbersFromOneToN = (n) => {
	let array = []
	for (let i = 1; i<=n; i++) {
		array.push(i)
	}
	return array 
};
const getEvenNumbersFromOneToN = (n) => {
	let array = []
	for (let i = 1; i <= n; i++) 
	 if(i%2 === 0) {
		array.push (i)
	 }
	 return array
};
const getOddNumbersFromOneToN = (n) => {
	let array = []
	for (let i = 1; i <= n; i++)
	 if(i % 2 !== 0) {
		array.push (i)
	 }
	 return array
}
;
const getLargestNumber = (array) => {
	let largest = array[0]
	for (let i = 1; i < array.length; i++) 
		if (array[i] > largest) {
			largest = array[i]
		}
	return largest
};
const getSmallestNumber = (array) => {
	let smallest = array[0]
	for (let i = 1; i < array.length; i++) 
		if (array[i] < smallest) {
			smallest = array[i]
		}
	return smallest
};

// ------------------------------- //
// Don't edit code below this line //
// ------------------------------- //

let solution = {};

try {
	solution = {
		getLength,
		getFirstElement,
		getLastElement,
		addItem,
		removeAndReturnLastItem,
		getSum,
		getAverage,
		getSumFromOneToN,
		getNumbersFromOneToN,
		getEvenNumbersFromOneToN,
		getOddNumbersFromOneToN,
		getLargestNumber,
		getSmallestNumber,
	};
} catch (error) {
	console.error(error);
}

export default solution;
