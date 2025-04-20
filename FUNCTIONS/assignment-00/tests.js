import solution from './solution.js';

function runTests() {
	const {
		getSum = () => {},
		getDifference = () => {},
		getProduct = () => {},
		getQuotient = () => {},
		getRemainder = () => {},
		getPower = () => {},
	} = solution;

	const sumTestCases = [
		{
			a: 1,
			b: 2,
			expected: 3,
		},
		{
			a: 0,
			b: 0,
			expected: 0,
		},
		{
			a: 10,
			b: 5,
			expected: 15,
		},
		{
			a: 33,
			b: -41,
			expected: -8,
		},
		{
			a: -6,
			b: 810,
			expected: 804,
		},
		{
			a: 99999,
			b: 1,
			expected: 100000,
		},
	];

	console.log('\n\x1b[1m   Tests for `getSum` \n\x1b[0m');
	for (const { a, b, expected } of sumTestCases) {
		const result = getSum(a, b);
		const isCorrect = result === expected;
		const base = `called "getSum" with ${a} and ${b},`;
		const pass = `✅ ${base} got ${result}`;
		const fail = `❌ ${base} expected ${expected} but got ${result}`;
		console.log(isCorrect ? pass : fail);
	}

	const differenceTestCases = [
		{
			a: 1,
			b: 2,
			expected: -1,
		},
		{
			a: 0,
			b: 0,
			expected: 0,
		},
		{
			a: 10,
			b: 5,
			expected: 5,
		},
		{
			a: 33,
			b: -41,
			expected: 74,
		},
		{
			a: -6,
			b: 810,
			expected: -816,
		},
		{
			a: 99999,
			b: 1,
			expected: 99998,
		},
	];

	console.log('\n\x1b[1m   Tests for `getDifference` \n\x1b[0m');

	for (const { a, b, expected } of differenceTestCases) {
		const result = getDifference(a, b);
		const isCorrect = result === expected;
		const base = `called "getDifference" with ${a} and ${b},`;
		const pass = `✅ ${base} got ${result}`;
		const fail = `❌ ${base} expected ${expected} but got ${result}`;
		console.log(isCorrect ? pass : fail);
	}

	const productTestCases = [
		{
			a: 1,
			b: 2,
			expected: 2,
		},
		{
			a: 0,
			b: 0,
			expected: 0,
		},
		{
			a: 10,
			b: 5,
			expected: 50,
		},
		{
			a: 33,
			b: 5.5,
			expected: 181.5,
		},
		{
			a: -6,
			b: 200,
			expected: -1200,
		},
		{
			a: 99999,
			b: 1,
			expected: 99999,
		},
	];

	console.log('\n\x1b[1m   Tests for `getProduct` \n\x1b[0m');

	for (const { a, b, expected } of productTestCases) {
		const result = getProduct(a, b);
		const isCorrect = result === expected;
		const base = `called "getProduct" with ${a} and ${b},`;
		const pass = `✅ ${base} got ${result}`;
		const fail = `❌ ${base} expected ${expected} but got ${result}`;
		console.log(isCorrect ? pass : fail);
	}

	const quotientTestCases = [
		{
			a: 1,
			b: 2,
			expected: 0.5,
		},
		{
			a: 10,
			b: 5,
			expected: 2,
		},
		{
			a: 33,
			b: 5.5,
			expected: 6,
		},
		{
			a: 750,
			b: 100,
			expected: 7.5,
		},
		{
			a: 99999,
			b: 1,
			expected: 99999,
		},
	];

	console.log('\n\x1b[1m   Tests for `getQuotient` \n\x1b[0m');

	for (const { a, b, expected } of quotientTestCases) {
		const result = getQuotient(a, b);
		const isCorrect = result === expected;
		const base = `called "getQuotient" with ${a} and ${b},`;
		const pass = `✅ ${base} got ${result}`;
		const fail = `❌ ${base} expected ${expected} but got ${result}`;
		console.log(isCorrect ? pass : fail);
	}

	const remainderTestCases = [
		{
			a: 1,
			b: 2,
			expected: 1,
		},
		{
			a: 10,
			b: 5,
			expected: 0,
		},
		{
			a: 33,
			b: 5,
			expected: 3,
		},
		{
			a: 750,
			b: 100,
			expected: 50,
		},
		{
			a: 99999,
			b: 1,
			expected: 0,
		},
	];

	console.log('\n\x1b[1m   Tests for `getRemainder` \n\x1b[0m');

	for (const { a, b, expected } of remainderTestCases) {
		const result = getRemainder(a, b);
		const isCorrect = result === expected;
		const base = `called "getRemainder" with ${a} and ${b},`;
		const pass = `✅ ${base} got ${result}`;
		const fail = `❌ ${base} expected ${expected} but got ${result}`;
		console.log(isCorrect ? pass : fail);
	}

	const powerTestCases = [
		{
			a: 1,
			b: 2,
			expected: 1,
		},
		{
			a: 12,
			b: 3,
			expected: 1728,
		},
		{
			a: 3,
			b: 5,
			expected: 243,
		},
		{
			a: 750,
			b: 2,
			expected: 562500,
		},
		{
			a: 10,
			b: 5,
			expected: 100000,
		},
		{
			a: 99999,
			b: 1,
			expected: 99999,
		},
	];

	console.log('\n\x1b[1m   Tests for `getPower` \n\x1b[0m');

	for (const { a, b, expected } of powerTestCases) {
		const result = getPower(a, b);
		const isCorrect = result === expected;
		const base = `called "getPower" with ${a} and ${b},`;
		const pass = `✅ ${base} got ${result}`;
		const fail = `❌ ${base} expected ${expected} but got ${result}`;
		console.log(isCorrect ? pass : fail);
	}
}

runTests();
