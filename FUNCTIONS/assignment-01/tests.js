import solution from './solution.js';

function runTests() {
	const {
		isPositive = () => {},
		isNegative = () => {},
		isZero = () => {},
		isEven = () => {},
		isOdd = () => {},
		getLarger = () => {},
		getSmaller = () => {},
		isEqual = () => {},
		isNotEqual = () => {},
		isGreaterThan = () => {},
		isLessThan = () => {},
		isGreaterThanOrEqual = () => {},
		isLessThanOrEqual = () => {},
	} = solution;

	const isPositiveTestCases = [
		{
			number: 1,
			expected: true,
		},
		{
			number: 0,
			expected: false,
		},
		{
			number: -1,
			expected: false,
		},
	];

	const isNegativeTestCases = [
		{
			number: 1,
			expected: false,
		},
		{
			number: 0,
			expected: false,
		},
		{
			number: -1,
			expected: true,
		},
	];

	const isZeroTestCases = [
		{
			number: 0,
			expected: true,
		},
		{
			number: 1,
			expected: false,
		},
		{
			number: -1,
			expected: false,
		},
	];

	const isEvenTestCases = [
		{
			number: 2,
			expected: true,
		},
		{
			number: 1,
			expected: false,
		},
		{
			number: 3,
			expected: false,
		},
	];

	const isOddTestCases = [
		{
			number: 1,
			expected: true,
		},
		{
			number: 2,
			expected: false,
		},
		{
			number: 3,
			expected: true,
		},
	];

	const getLargerTestCases = [
		{
			a: 1,
			b: 2,
			expected: 2,
		},
		{
			a: 2,
			b: 1,
			expected: 2,
		},
		{
			a: 1,
			b: 1,
			expected: 1,
		},
	];

	const getSmallerTestCases = [
		{
			a: 1,
			b: 2,
			expected: 1,
		},
	];

	const isEqualTestCases = [
		{
			a: 1,
			b: 1,
			expected: true,
		},
		{
			a: 1,
			b: 2,
			expected: false,
		},
	];

	const isNotEqualTestCases = [
		{
			a: 1,
			b: 1,
			expected: false,
		},
		{
			a: 1,
			b: 2,
			expected: true,
		},
	];

	const isGreaterThanTestCases = [
		{
			a: 1,
			b: 2,
			expected: false,
		},
		{
			a: 2,
			b: 1,
			expected: true,
		},
	];

	const isLessThanTestCases = [
		{
			a: 1,
			b: 2,
			expected: true,
		},
		{
			a: 2,
			b: 1,
			expected: false,
		},
	];

	const isGreaterThanOrEqualTestCases = [
		{
			a: 1,
			b: 2,
			expected: false,
		},
	];

	const isLessThanOrEqualTestCases = [
		{
			a: 1,
			b: 2,
			expected: true,
		},
		{
			a: 2,
			b: 1,
			expected: false,
		},
	];

	console.log('\n\x1b[1m   Tests for `isPositive` \n\x1b[0m');
	for (const { number, expected } of isPositiveTestCases) {
		const result = isPositive(number);
		const isCorrect = result === expected;
		const base = `isPositive with ${number}`;
		const pass = `✅ ${base} returned ${result}`;
		const fail = `❌ ${base} expected ${expected} but got ${result}`;
		console.log(isCorrect ? pass : fail);
	}

	console.log('\n\x1b[1m   Tests for `isNegative` \n\x1b[0m');
	for (const { number, expected } of isNegativeTestCases) {
		const result = isNegative(number);
		const isCorrect = result === expected;
		const base = `isNegative with ${number}`;
		const pass = `✅ ${base} returned ${result}`;
		const fail = `❌ ${base} expected ${expected} but got ${result}`;
		console.log(isCorrect ? pass : fail);
	}

	console.log('\n\x1b[1m   Tests for `isZero` \n\x1b[0m');
	for (const { number, expected } of isZeroTestCases) {
		const result = isZero(number);
		const isCorrect = result === expected;
		const base = `isZero with ${number}`;
		const pass = `✅ ${base} returned ${result}`;
		const fail = `❌ ${base} expected ${expected} but got ${result}`;
		console.log(isCorrect ? pass : fail);
	}

	console.log('\n\x1b[1m   Tests for `isEven` \n\x1b[0m');
	for (const { number, expected } of isEvenTestCases) {
		const result = isEven(number);
		const isCorrect = result === expected;
		const base = `isEven with ${number}`;
		const pass = `✅ ${base} returned ${result}`;
		const fail = `❌ ${base} expected ${expected} but got ${result}`;
		console.log(isCorrect ? pass : fail);
	}

	console.log('\n\x1b[1m   Tests for `isOdd` \n\x1b[0m');
	for (const { number, expected } of isOddTestCases) {
		const result = isOdd(number);
		const isCorrect = result === expected;
		const base = `isOdd with ${number}`;
		const pass = `✅ ${base} returned ${result}`;
		const fail = `❌ ${base} expected ${expected} but got ${result}`;
		console.log(isCorrect ? pass : fail);
	}

	console.log('\n\x1b[1m   Tests for `getLarger` \n\x1b[0m');
	for (const { a, b, expected } of getLargerTestCases) {
		const result = getLarger(a, b);
		const isCorrect = result === expected;
		const base = `getLarger with ${a} and ${b}`;
		const pass = `✅ ${base} returned ${result}`;
		const fail = `❌ ${base} expected ${expected} but got ${result}`;
		console.log(isCorrect ? pass : fail);
	}

	console.log('\n\x1b[1m   Tests for `getSmaller` \n\x1b[0m');
	for (const { a, b, expected } of getSmallerTestCases) {
		const result = getSmaller(a, b);
		const isCorrect = result === expected;
		const base = `getSmaller with ${a} and ${b}`;
		const pass = `✅ ${base} returned ${result}`;
		const fail = `❌ ${base} expected ${expected} but got ${result}`;
		console.log(isCorrect ? pass : fail);
	}

	console.log('\n\x1b[1m   Tests for `isEqual` \n\x1b[0m');
	for (const { a, b, expected } of isEqualTestCases) {
		const result = isEqual(a, b);
		const isCorrect = result === expected;
		const base = `isEqual with ${a} and ${b}`;
		const pass = `✅ ${base} returned ${result}`;
		const fail = `❌ ${base} expected ${expected} but got ${result}`;
		console.log(isCorrect ? pass : fail);
	}

	console.log('\n\x1b[1m   Tests for `isNotEqual` \n\x1b[0m');
	for (const { a, b, expected } of isNotEqualTestCases) {
		const result = isNotEqual(a, b);
		const isCorrect = result === expected;
		const base = `isNotEqual with ${a} and ${b}`;
		const pass = `✅ ${base} returned ${result}`;
		const fail = `❌ ${base} expected ${expected} but got ${result}`;
		console.log(isCorrect ? pass : fail);
	}

	console.log('\n\x1b[1m   Tests for `isGreaterThan` \n\x1b[0m');
	for (const { a, b, expected } of isGreaterThanTestCases) {
		const result = isGreaterThan(a, b);
		const isCorrect = result === expected;
		const base = `isGreaterThan with ${a} and ${b}`;
		const pass = `✅ ${base} returned ${result}`;
		const fail = `❌ ${base} expected ${expected} but got ${result}`;
		console.log(isCorrect ? pass : fail);
	}

	console.log('\n\x1b[1m   Tests for `isLessThan` \n\x1b[0m');
	for (const { a, b, expected } of isLessThanTestCases) {
		const result = isLessThan(a, b);
		const isCorrect = result === expected;
		const base = `isLessThan with ${a} and ${b}`;
		const pass = `✅ ${base} returned ${result}`;
		const fail = `❌ ${base} expected ${expected} but got ${result}`;
		console.log(isCorrect ? pass : fail);
	}

	console.log('\n\x1b[1m   Tests for `isGreaterThanOrEqual` \n\x1b[0m');
	for (const { a, b, expected } of isGreaterThanOrEqualTestCases) {
		const result = isGreaterThanOrEqual(a, b);
		const isCorrect = result === expected;
		const base = `isGreaterThanOrEqual with ${a} and ${b}`;
		const pass = `✅ ${base} returned ${result}`;
		const fail = `❌ ${base} expected ${expected} but got ${result}`;
		console.log(isCorrect ? pass : fail);
	}

	console.log('\n\x1b[1m   Tests for `isLessThanOrEqual` \n\x1b[0m');
	for (const { a, b, expected } of isLessThanOrEqualTestCases) {
		const result = isLessThanOrEqual(a, b);
		const isCorrect = result === expected;
		const base = `isLessThanOrEqual with ${a} and ${b}`;
		const pass = `✅ ${base} returned ${result}`;
		const fail = `❌ ${base} expected ${expected} but got ${result}`;
		console.log(isCorrect ? pass : fail);
	}
}

runTests();
