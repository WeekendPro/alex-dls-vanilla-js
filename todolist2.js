/*  To do list
    - function that prints out every number between 1-10 
    - function that takes in a number and prints out every number from 1-number that it takes in (take in positive number greater than or equal to 1)
    - function that does the same thing as above but prints out the numbers in reverse 
    - function called times 2, will take in any number and multiply it by 2, and will print that number
    - function that takes in a number and a name, and prints out a sentence that says "Hi my name is (name) and I am (number) years old

    - all five of these functions should return 
*/

function printNumbersBetweenOneAndTen() {
  for (let number = 1; number <= 100; number += 1) {
    console.log(number);
  }
}

printNumbersBetweenOneAndTen();

function printNumbersBetweenOneAndFive(number) {
  for (let i = 1; i <= number; i++) {
    console.log(i);
  }
}

printNumbersBetweenOneAndFive(5);

function printNumbersBetweenOneAndFiveReverse(number) {
  for (let i = 5; i >= number; i--) {
    console.log(i);
  }
}

printNumbersBetweenOneAndFiveReverse(1);

function timesTwo(number) {
  let result = number * 2;
  console.log(result);
}

timesTwo(3);

function nameAndAge(name, age) {
  console.log("Hi, my name is " + name + " and my age is " + age + ".");
}
nameAndAge("Alexandra", 17);
