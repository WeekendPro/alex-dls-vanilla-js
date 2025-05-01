import solution from './solution.js';
import { handleTestCases } from '../utils.js';
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
			expectedOutput: 'string',
		},
		{
			value: 42,
			expectedOutput: 'number',
		},
		{
			value: true,
			expectedOutput: 'boolean',
		},
		{
			value: undefined,
			expectedOutput: 'undefined',
		},
		{
			value: null,
			expectedOutput: 'object',
		},
		{
			value: NaN,
			expectedOutput: 'number',
		},
		{
			value: {},
			expectedOutput: 'object',
		},
		{
			value: [],
			expectedOutput: 'object',
		},
		{
			value: function () {},
			expectedOutput: 'function',
		},
	];

	handleTestCases({
		tests: getTypeTestCases,
		func: getType,
		params: ['value'],
	});

	const isStringTestCases = [
		{
			value: 'Hello, world!',
			expectedOutput: true,
		},
		{
			value: 42,
			expectedOutput: false,
		},
		{
			value: true,
			expectedOutput: false,
		},
		{
			value: undefined,
			expectedOutput: false,
		},
		{
			value: null,
			expectedOutput: false,
		},
		{
			value: NaN,
			expectedOutput: false,
		},
		{
			value: {},
			expectedOutput: false,
		},
		{
			value: [],
			expectedOutput: false,
		},
		{
			value: function () {},
			expectedOutput: false,
		},
	];

	handleTestCases({
		tests: isStringTestCases,
		func: isString,
		params: ['value'],
	});

	const isNumberTestCases = [
		{
			value: 'Hello, world!',
			expectedOutput: false,
		},
		{
			value: 42,
			expectedOutput: true,
		},
		{
			value: true,
			expectedOutput: false,
		},
		{
			value: undefined,
			expectedOutput: false,
		},
		{
			value: null,
			expectedOutput: false,
		},
		{
			value: NaN,
			expectedOutput: true,
		},
		{
			value: {},
			expectedOutput: false,
		},
		{
			value: [],
			expectedOutput: false,
		},
		{
			value: function () {},
			expectedOutput: false,
		},
	];

	handleTestCases({
		tests: isNumberTestCases,
		func: isNumber,
		params: ['value'],
	});

	const isBooleanTestCases = [
		{
			value: 'Hello, world!',
			expectedOutput: false,
		},
		{
			value: 42,
			expectedOutput: false,
		},
		{
			value: true,
			expectedOutput: true,
		},
		{
			value: undefined,
			expectedOutput: false,
		},
		{
			value: null,
			expectedOutput: false,
		},
		{
			value: NaN,
			expectedOutput: false,
		},
		{
			value: {},
			expectedOutput: false,
		},
		{
			value: [],
			expectedOutput: false,
		},
		{
			value: function () {},
			expectedOutput: false,
		},
	];

	handleTestCases({
		tests: isBooleanTestCases,
		func: isBoolean,
		params: ['value'],
	});

	const isUndefinedTestCases = [
		{
			value: 'Hello, world!',
			expectedOutput: false,
		},
		{
			value: 42,
			expectedOutput: false,
		},
		{
			value: true,
			expectedOutput: false,
		},
		{
			value: undefined,
			expectedOutput: true,
		},
		{
			value: null,
			expectedOutput: false,
		},
		{
			value: NaN,
			expectedOutput: false,
		},
		{
			value: {},
			expectedOutput: false,
		},
		{
			value: [],
			expectedOutput: false,
		},
		{
			value: function () {},
			expectedOutput: false,
		},
	];

	handleTestCases({
		tests: isUndefinedTestCases,
		func: isUndefined,
		params: ['value'],
	});

	const isNullTestCases = [
		{
			value: 'Hello, world!',
			expectedOutput: false,
		},
		{
			value: 42,
			expectedOutput: false,
		},
		{
			value: true,
			expectedOutput: false,
		},
		{
			value: undefined,
			expectedOutput: false,
		},
		{
			value: null,
			expectedOutput: true,
		},
		{
			value: NaN,
			expectedOutput: false,
		},
		{
			value: {},
			expectedOutput: false,
		},
		{
			value: [],
			expectedOutput: false,
		},
	];

	handleTestCases({
		tests: isNullTestCases,
		func: isNull,
		params: ['value'],
	});

	const getOppositeBooleanTestCases = [
		{
			value: true,
			expectedOutput: false,
		},
		{
			value: false,
			expectedOutput: true,
		},
	];

	handleTestCases({
		tests: getOppositeBooleanTestCases,
		func: getOppositeBoolean,
		params: ['value'],
	});

	const isBothTrueTestCases = [
		{
			value1: true,
			value2: true,
			expectedOutput: true,
		},
		{
			value1: true,
			value2: false,
			expectedOutput: false,
		},
		{
			value1: false,
			value2: true,
			expectedOutput: false,
		},
		{
			value1: false,
			value2: false,
			expectedOutput: false,
		},
	];

	handleTestCases({
		tests: isBothTrueTestCases,
		func: isBothTrue,
		params: ['value1', 'value2'],
	});

	const isEitherTrueTestCases = [
		{
			value1: true,
			value2: true,
			expectedOutput: true,
		},
		{
			value1: true,
			value2: false,
			expectedOutput: true,
		},
		{
			value1: false,
			value2: true,
			expectedOutput: true,
		},
		{
			value1: false,
			value2: false,
			expectedOutput: false,
		},
	];

	handleTestCases({
		tests: isEitherTrueTestCases,
		func: isEitherTrue,
		params: ['value1', 'value2'],
	});

	const isAbsoluteTestCases = [
		{
			value: -5,
			expectedOutput: 5,
		},
		{
			value: 5,
			expectedOutput: 5,
		},
		{
			value: 0,
			expectedOutput: 0,
		},
	];

	handleTestCases({
		tests: isAbsoluteTestCases,
		func: isAbsolute,
		params: ['value'],
	});

	handleTestCases({
		tests: [{ expectedOutput: new Date() }],
		func: getCurrentDate,
		params: [],
	});

	handleTestCases({
		tests: [{ expectedOutput: new Date().getFullYear() }],
		func: getCurrentYear,
		params: [],
	});

	handleTestCases({
		tests: [{ expectedOutput: new Date().getMonth() }],
		func: getCurrentMonth,
		params: [],
	});

	handleTestCases({
		tests: [{ expectedOutput: new Date().getDate() }],
		func: getCurrentDay,
		params: [],
	});
}

runTests();
