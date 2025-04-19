/*
-Write a function that's called multiplier, it multiplies two numbers by each other
-Write a function that's called curryTimesThree, it calls multiplier, it takes one argument 
and always provides a number 3 as the second argument to multiplier
-Write a function that multiplies incoming numbers by 19 and use multiplier 
-Write a function that multiplies incoming numbers by 10 and then adds 5, use multiplier, but add 5 separately
-Write an adder function takes two numbers and adds them
-Do line 6 with multiplier and adder, care about PEMDAS 
*/

function multiplier(numberOne, numberTwo) {
	const result = numberOne * numberTwo;
	return result;
}

function curryTimesThree(numberThree) {
	const result = multiplier(numberThree, 3);
	return result;
}

function timesNineteen(numberFour) {
	const result = multiplier(numberFour, 19);
	return result;
}

function multiplierAddFive(numberFive) {
	const result = multiplier(numberFive, 10);
	const endResult = result + 5;
	return endResult;
}

function adder(numberSix, numberSeven) {
	const result = numberSix + numberSeven;
	return result;
}

function multiplierPlusAdder(numberEight) {
	const result = multiplier(numberEight, 10);
	const endResult = adder(result, 5);
	return endResult;
}
