function solution() {
	//Write your code here
	let one = document.getElementById('one');
	let two = document.getElementById('two');
	let three = document.getElementById('three');
	let four = document.getElementById('four');
	let five = document.getElementById('five');
	let six = document.getElementById('six');
	let seven = document.getElementById('seven');
	let eight = document.getElementById('eight');
	let nine = document.getElementById('nine');
	let zero = document.getElementById('zero');
	let decimal = document.getElementById('decimal');
	let clear = document.getElementById('clear');
	let equals = document.getElementById('equals');
	let divide = document.getElementById('divide');
	let subtract = document.getElementById('subtract');
	let add = document.getElementById('add');
	let multiply = document.getElementById('multiply');
	let display = document.getElementById('display');

	// 	let expression = '';
	// 	let lastChar = '';
	// 	let newNumber = true;

	// 	function updateDisplay() {
	// 		display.textContent = expression || '0';
	// 	}

	// 	function isOperator(char) {
	// 		if (char === '+' || char === '-' || char === '*' || char === '/') {
	// 			return true;
	// 		}
	// 		return false;
	// 	}

	// 	function addToExpression(value) {
	// 		if (value === '.') {
	// 			let parts = expression.split('+');
	// 			parts = parts.flatMap((part) => part.split('-'));
	// 			parts = parts.flatMap((part) => part.split('*'));
	// 			parts = parts.flatMap((part) => part.split('/'));
	// 			let currentNumber = parts[parts.length - 1];
	// 			if (currentNumber.includes('.')) return;
	// 			if (currentNumber === '') {
	// 				expression += '0';
	// 				lastChar = '.';
	// 			}
	// 		}

	// 		let parts = expression.split('+');
	// 		let temp = [];

	// 		for (let i = 0; i < parts.length; i++) {
	// 			let minusParts = parts[i].split('-');
	// 			for (let j = 0; j < minusParts.length; j++) {
	// 				let multParts = minusParts[j].split('*');
	// 				for (let k = 0; k < multParts.length; k++) {
	// 					let divParts = multParts[k].split('/');
	// 					temp = temp.concat(divParts);
	// 				}
	// 			}
	// 		}
	// n
	// 		parts = temp;
	// 		const currentNumber = parts[parts.length - 1];

	// 		if (
	// 			(value === '1' ||
	// 				value === '2' ||
	// 				value === '3' ||
	// 				value === '4' ||
	// 				value === '5' ||
	// 				value === '6' ||
	// 				value === '7' ||
	// 				value === '8' ||
	// 				value === '9') &&
	// 			currentNumber === '0'
	// 		) {
	// 			expression = expression.slice(0, -1);
	// 		}

	// 		if (value === '0' && currentNumber === '0') {
	// 			return;
	// 		}

	// 		if (isOperator(value)) {
	// 			if (expression === '') return;
	// 			if (isOperator(lastChar)) {
	// 				expression = expression.slice(0, -1);
	// 			}
	// 		}

	// 		if (newNumber && !isOperator(value)) {
	// 			expression = '';
	// 			newNumber = false;
	// 		}

	// 		expression += value;
	// 		lastChar = value;
	// 		updateDisplay();
	// 	}
	// 	function calculate() {
	// 		try {
	// 			if (isOperator(expression[expression.length - 1])) {
	// 				expression = expression.slice(0, -1);
	// 			}
	// 			let parts = [];
	// 			let current = '';

	// 			for (let i = 0; i < expression.length; i++) {
	// 				let char = expression[i];
	// 				if (char === '+' || char === '-' || char === '*' || char === '/') {
	// 					parts.push(current);
	// 					parts.push(char);
	// 					current = '';
	// 				} else {
	// 					current += char;
	// 				}
	// 			}
	// 			if (current !== '') {
	// 				parts.push(current);
	// 			}

	// 			let result = parseFloat(parts[0]);

	// 			for (let i = 1; i < parts.length; i += 2) {
	// 				const operator = parts[i];
	// 				const nextNum = parseFloat(parts[i + 1]);

	// 				if (operator === '+') result += nextNum;
	// 				else if (operator === '-') result -= nextNum;
	// 				else if (operator === '*') result *= nextNum;
	// 				else if (operator === '/') {
	// 					if (nextNum === 0) {
	// 						display.textContent = 'Error';
	// 						expression = '';
	// 						return;
	// 					}
	// 					result /= nextNum;
	// 				}
	// 			}

	// 			result = Math.round(result * 100) / 100;
	// 			const roundedResult = Number(result.toFixed(2));
	// 			display.textContent = roundedResult.toString();
	// 			expression = roundedResult.toString();
	// 			newNumber = true;
	// 		} catch {
	// 			display.textContent = 'Error';
	// 			expression = '';
	// 		}
	// 	}

	// 	function resetCalculator() {
	// 		expression = '';
	// 		lastChar = '';
	// 		newNumber = true;
	// 		updateDisplay();
	// 	}
	const clickListener = (tacos) => {
		if (display.textContent === '0' ) { 
			if (tacos === '+' || tacos === '-' || tacos === '/' || tacos === '*'){
				return
			}
			display.textContent = tacos;
		} else if (false) {

			
		} else {
			display.textContent += tacos
		} 
	};

	if (one) one.addEventListener('click', () => clickListener('1'));

	if (two) two.addEventListener('click', () => clickListener('2'));

	if (three) three.addEventListener('click', () => clickListener('3'));

	if (four) four.addEventListener('click', () => clickListener('4'));

	if (five) five.addEventListener('click', () => clickListener('5'));

	if (six) six.addEventListener('click', () => clickListener('6'));

	if (seven) seven.addEventListener('click', () => clickListener('7'));

	if (eight) eight.addEventListener('click', () => clickListener('8'));

	if (nine) nine.addEventListener('click', () => clickListener('9'));

	if (zero) zero.addEventListener('click', () => clickListener('0'));

	if (decimal) decimal.addEventListener('click', () => clickListener('.'));

	if (add) add.addEventListener('click', () => clickListener('+'));

	if (subtract) subtract.addEventListener('click', () => clickListener('-'));

	if (divide) divide.addEventListener('click', () => clickListener('/'));

	if (multiply) multiply.addEventListener('click', () => clickListener('*'));

	// 	if (equals) equals.addEventListener('click', () => calculate());

	// 	if (clear) clear.addEventListener('click', () => resetCalculator());

	// 	updateDisplay();
}

if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', solution);
} else {
	Promise.resolve().then(() => {
		solution();
	});
}
export { solution };
