import solution from './solution.js';

function runTests() {
	const {
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
	} = solution;

	const getTypeTestCases = [
		{
			value: 'Hello, world!',
			expected: 'string',
		},
		{
			value: 42,
			expected: 'number',
		},
		{
			value: true,
			expected: 'boolean',
		},
		{
			value: undefined,
			expected: 'undefined',
		},
		{
			value: null,
			expected: 'object',
		},
		{
			value: NaN,
			expected: 'number',
		},
		{
			value: {},
			expected: 'object',
		},
		{
			value: [],
			expected: 'object',
		},
		{
			value: function () {},
			expected: 'function',
		},
	];

	console.log('\n\x1b[1m   Tests for `getType` \n\x1b[0m');

	for (const { value, expected } of getTypeTestCases) {
		const result = getType(value);
		const isCorrect = result === expected;
		const base = `called "getType" with ${value},`;
		const pass = `✅ ${base} got ${result}`;
		const fail = `❌ ${base} expected ${expected} but got ${result}`;
		console.log(isCorrect ? pass : fail);
	}

	const isStringTestCases = [
		{
			value: 'Hello, world!',
			expected: true,
		},
		{
			value: 42,
			expected: false,
		},
		{
			value: true,
			expected: false,
		},
		{
			value: undefined,
			expected: false,
		},
		{
			value: null,
			expected: false,
		},
		{
			value: NaN,
			expected: false,
		},
		{
			value: {},
			expected: false,
		},
		{
			value: [],
			expected: false,
		},
		{
			value: function () {},
			expected: false,
		},
	];

	console.log('\n\x1b[1m   Tests for `isString` \n\x1b[0m');

	for (const { value, expected } of isStringTestCases) {
		const result = isString(value);
		const isCorrect = result === expected;
		const base = `called "isString" with ${value},`;
		const pass = `✅ ${base} got ${result}`;
		const fail = `❌ ${base} expected ${expected} but got ${result}`;
		console.log(isCorrect ? pass : fail);
	}

	const isNumberTestCases = [
		{
			value: 'Hello, world!',
			expected: false,
		},
		{
			value: 42,
			expected: true,
		},
		{
			value: true,
			expected: false,
		},
		{
			value: undefined,
			expected: false,
		},
		{
			value: null,
			expected: false,
		},
		{
			value: NaN,
			expected: true,
		},
		{
			value: {},
			expected: false,
		},
		{
			value: [],
			expected: false,
		},
		{
			value: function () {},
			expected: false,
		},
	];

	console.log('\n\x1b[1m   Tests for `isNumber` \n\x1b[0m');

	for (const { value, expected } of isNumberTestCases) {
		const result = isNumber(value);
		const isCorrect = result === expected;
		const base = `called "isNumber" with ${value},`;
		const pass = `✅ ${base} got ${result}`;
		const fail = `❌ ${base} expected ${expected} but got ${result}`;
		console.log(isCorrect ? pass : fail);
	}

	const isBooleanTestCases = [
		{
			value: 'Hello, world!',
			expected: false,
		},
		{
			value: 42,
			expected: false,
		},
		{
			value: true,
			expected: true,
		},
		{
			value: undefined,
			expected: false,
		},
		{
			value: null,
			expected: false,
		},
		{
			value: NaN,
			expected: false,
		},
		{
			value: {},
			expected: false,
		},
		{
			value: [],
			expected: false,
		},
		{
			value: function () {},
			expected: false,
		},
	];

	console.log('\n\x1b[1m   Tests for `isBoolean` \n\x1b[0m');

	for (const { value, expected } of isBooleanTestCases) {
		const result = isBoolean(value);
		const isCorrect = result === expected;
		const base = `called "isBoolean" with ${value},`;
		const pass = `✅ ${base} got ${result}`;
		const fail = `❌ ${base} expected ${expected} but got ${result}`;
		console.log(isCorrect ? pass : fail);
	}

	const isUndefinedTestCases = [
		{
			value: 'Hello, world!',
			expected: false,
		},
		{
			value: 42,
			expected: false,
		},
		{
			value: true,
			expected: false,
		},
		{
			value: undefined,
			expected: true,
		},
		{
			value: null,
			expected: false,
		},
		{
			value: NaN,
			expected: false,
		},
		{
			value: {},
			expected: false,
		},
		{
			value: [],
			expected: false,
		},
		{
			value: function () {},
			expected: false,
		},
	];

	console.log('\n\x1b[1m   Tests for `isUndefined` \n\x1b[0m');

	for (const { value, expected } of isUndefinedTestCases) {
		const result = isUndefined(value);
		const isCorrect = result === expected;
		const base = `called "isUndefined" with ${value},`;
		const pass = `✅ ${base} got ${result}`;
		const fail = `❌ ${base} expected ${expected} but got ${result}`;
		console.log(isCorrect ? pass : fail);
	}

	const isNullTestCases = [
		{
			value: 'Hello, world!',
			expected: false,
		},
		{
			value: 42,
			expected: false,
		},
		{
			value: true,
			expected: false,
		},
		{
			value: undefined,
			expected: false,
		},
		{
			value: null,
			expected: true,
		},
		{
			value: NaN,
			expected: false,
		},
		{
			value: {},
			expected: false,
		},
		{
			value: [],
			expected: false,
		},
	];

	console.log('\n\x1b[1m   Tests for `isNull` \n\x1b[0m');

	for (const { value, expected } of isNullTestCases) {
		const result = isNull(value);
		const isCorrect = result === expected;
		const base = `called "isNull" with ${value},`;
		const pass = `✅ ${base} got ${result}`;
		const fail = `❌ ${base} expected ${expected} but got ${result}`;
		console.log(isCorrect ? pass : fail);
	}

	const getOppositeBooleanTestCases = [
		{
			value: true,
			expected: false,
		},
		{
			value: false,
			expected: true,
		},
	];

	console.log('\n\x1b[1m   Tests for `getOppositeBoolean` \n\x1b[0m');

	for (const { value, expected } of getOppositeBooleanTestCases) {
		const result = getOppositeBoolean(value);
		const isCorrect = result === expected;
		const base = `called "getOppositeBoolean" with ${value},`;
		const pass = `✅ ${base} got ${result}`;
		const fail = `❌ ${base} expected ${expected} but got ${result}`;
		console.log(isCorrect ? pass : fail);
	}

	const isBothTrueTestCases = [
		{
			value1: true,
			value2: true,
			expected: true,
		},
		{
			value1: true,
			value2: false,
			expected: false,
		},
		{
			value1: false,
			value2: true,
			expected: false,
		},
		{
			value1: false,
			value2: false,
			expected: false,
		},
	];

	console.log('\n\x1b[1m   Tests for `isBothTrue` \n\x1b[0m');

	for (const { value1, value2, expected } of isBothTrueTestCases) {
		const result = isBothTrue(value1, value2);
		const isCorrect = result === expected;
		const base = `called "isBothTrue" with ${value1} and ${value2},`;
		const pass = `✅ ${base} got ${result}`;
		const fail = `❌ ${base} expected ${expected} but got ${result}`;
		console.log(isCorrect ? pass : fail);
	}

	const isEitherTrueTestCases = [
		{
			value1: true,
			value2: true,
			expected: true,
		},
		{
			value1: true,
			value2: false,
			expected: true,
		},
		{
			value1: false,
			value2: true,
			expected: true,
		},
		{
			value1: false,
			value2: false,
			expected: false,
		},
	];

	console.log('\n\x1b[1m   Tests for `isEitherTrue` \n\x1b[0m');

	for (const { value1, value2, expected } of isEitherTrueTestCases) {
		const result = isEitherTrue(value1, value2);
		const isCorrect = result === expected;
		const base = `called "isEitherTrue" with ${value1} and ${value2},`;
		const pass = `✅ ${base} got ${result}`;
		const fail = `❌ ${base} expected ${expected} but got ${result}`;
		console.log(isCorrect ? pass : fail);
	}

	const isAbsoluteTestCases = [
		{
			value: -5,
			expected: 5,
		},
		{
			value: 5,
			expected: 5,
		},
		{
			value: 0,
			expected: 0,
		},
	];

	console.log('\n\x1b[1m   Tests for `isAbsolute` \n\x1b[0m');

	for (const { value, expected } of isAbsoluteTestCases) {
		const result = isAbsolute(value);
		const isCorrect = result === expected;
		const base = `called "isAbsolute" with ${value},`;
		const pass = `✅ ${base} got ${result}`;
		const fail = `❌ ${base} expected ${expected} but got ${result}`;
		console.log(isCorrect ? pass : fail);
	}

	const getCurrentDateTestCases = [
		{
			expected: new Date(),
		},
	];

	console.log('\n\x1b[1m   Tests for `getCurrentDate` \n\x1b[0m');

	for (const { expected } of getCurrentDateTestCases) {
		const result = getCurrentDate();
		const isCorrect = result?.toISOString() === expected.toISOString();
		const base = `called "getCurrentDate",`;
		const pass = `✅ ${base} got ${result}`;
		const fail = `❌ ${base} expected ${expected} but got ${result}`;
		console.log(isCorrect ? pass : fail);
	}

	const getCurrentYearTestCases = [
		{
			expected: new Date().getFullYear(),
		},
	];

	console.log('\n\x1b[1m   Tests for `getCurrentYear` \n\x1b[0m');

	for (const { expected } of getCurrentYearTestCases) {
		const result = getCurrentYear();
		const isCorrect = result === expected;
		const base = `called "getCurrentYear",`;
		const pass = `✅ ${base} got ${result}`;
		const fail = `❌ ${base} expected ${expected} but got ${result}`;
		console.log(isCorrect ? pass : fail);
	}

	const getCurrentMonthTestCases = [
		{
			expected: new Date().getMonth(),
		},
	];

	console.log('\n\x1b[1m   Tests for `getCurrentMonth` \n\x1b[0m');

	for (const { expected } of getCurrentMonthTestCases) {
		const result = getCurrentMonth();
		const isCorrect = result === expected;
		const base = `called "getCurrentMonth",`;
		const pass = `✅ ${base} got ${result}`;
		const fail = `❌ ${base} expected ${expected} but got ${result}`;
		console.log(isCorrect ? pass : fail);
	}

	const getCurrentDayTestCases = [
		{
			expected: new Date().getDate(),
		},
	];

	console.log('\n\x1b[1m   Tests for `getCurrentDay` \n\x1b[0m');

	for (const { expected } of getCurrentDayTestCases) {
		const result = getCurrentDay();
		const isCorrect = result === expected;
		const base = `called "getCurrentDay",`;
		const pass = `✅ ${base} got ${result}`;
		const fail = `❌ ${base} expected ${expected} but got ${result}`;
		console.log(isCorrect ? pass : fail);
	}
}

runTests();
