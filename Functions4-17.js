/*  To do list
    - function that prints out every number between 1-10 
    - function that takes in a number and prints out every number from 1-number that it takes in (take in positive number greater than or equal to 1)
    - function that does the same thing as above but prints out the numbers in reverse 
    - function called times 2, will take in any number and multiply it by 2, and will print that number
    - function that takes in a number and a name, and prints out a sentence that says "Hi my name is (name) and I am (number) years old

*/

function printNumbersBetweenOneAndTen() {
	for (let i = 1; i <= 10; i++) {
		console.log(i);
	}
}

function printNumbersBetweenOneAndN(number) {
	for (let i = 1; i <= number; i++) {
		console.log(i);
	}
}

function printNumbersBetweenOneAndNReverse(number) {
	for (let i = number; i >= 1; i--) {
		console.log(i);
	}
}

function timesTwo(number) {
	const result = number * 2;
	console.log(result);
}

function nameAndAge(name, age) {
	const output = 'Hi, my name is ' + name + ' and my age is ' + age + '.';
	console.log(output);
}

//printNumbersBetweenOneAndTen();
//printNumbersBetweenOneAndN(3);
//printNumbersBetweenOneAndNReverse(9);
//timesTwo(3);
//nameAndAge ("Alexandra",17)
