import solution from './solution.js';
import { Tester } from '../../shared/tester.js';

function runTests() {
	const tester = new Tester();

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

	tester.handleTestCases({
		tests: getTypeTestCases,
		func: getType,
		params: ['value'],
		description: `${tester.printFunction(getType)} should return the type of the provided ${tester.printParam('value')}.`,
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

	tester.handleTestCases({
		tests: isStringTestCases,
		func: isString,
		params: ['value'],
		description: `${tester.printFunction(isString)} should return ${tester.printBoolean(true)} if the provided ${tester.printParam('value')} is a string, otherwise ${tester.printBoolean(false)}.`,
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

	tester.handleTestCases({
		tests: isNumberTestCases,
		func: isNumber,
		params: ['value'],
		description: `${tester.printFunction(isNumber)} should return ${tester.printBoolean(true)} if the provided ${tester.printParam('value')} is a number, otherwise ${tester.printBoolean(false)}.`,
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

	tester.handleTestCases({
		tests: isBooleanTestCases,
		func: isBoolean,
		params: ['value'],
		description: `${tester.printFunction(isBoolean)} should return ${tester.printBoolean(true)} if the provided ${tester.printParam('value')} is a boolean, otherwise ${tester.printBoolean(false)}.`,
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

	tester.handleTestCases({
		tests: isUndefinedTestCases,
		func: isUndefined,
		params: ['value'],
		description: `${tester.printFunction(isUndefined)} should return ${tester.printBoolean(true)} if the provided ${tester.printParam('value')} is undefined, otherwise ${tester.printBoolean(false)}.`,
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

	tester.handleTestCases({
		tests: isNullTestCases,
		func: isNull,
		params: ['value'],
		description: `${tester.printFunction(isNull)} should return ${tester.printBoolean(true)} if the provided ${tester.printParam('value')} is null, otherwise ${tester.printBoolean(false)}.`,
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

	tester.handleTestCases({
		tests: getOppositeBooleanTestCases,
		func: getOppositeBoolean,
		params: ['value'],
		description: `${tester.printFunction(getOppositeBoolean)} should return the opposite of the provided ${tester.printParam('value')}.`,
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

	tester.handleTestCases({
		tests: isBothTrueTestCases,
		func: isBothTrue,
		params: ['value1', 'value2'],
		description: `${tester.printFunction(isBothTrue)} should return ${tester.printBoolean(true)} if both provided ${tester.printParam('value1')} and ${tester.printParam('value2')} are true, otherwise ${tester.printBoolean(false)}.`,
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

	tester.handleTestCases({
		tests: isEitherTrueTestCases,
		func: isEitherTrue,
		params: ['value1', 'value2'],
		description: `${tester.printFunction(isEitherTrue)} should return ${tester.printBoolean(true)} if either provided ${tester.printParam('value1')} or ${tester.printParam('value2')} is true, otherwise ${tester.printBoolean(false)}.`,
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

	tester.handleTestCases({
		tests: isAbsoluteTestCases,
		func: isAbsolute,
		params: ['value'],
		description: `${tester.printFunction(isAbsolute)} should return the absolute value of the provided ${tester.printParam('value')}.`,
	});

	tester.handleTestCases({
		tests: [{ expectedOutput: new Date() }],
		func: getCurrentDate,
		params: [],
		description: `${tester.printFunction(getCurrentDate)} should return the current date.`,
	});

	tester.handleTestCases({
		tests: [{ expectedOutput: new Date().getFullYear() }],
		func: getCurrentYear,
		params: [],
		description: `${tester.printFunction(getCurrentYear)} should return the current year.`,
	});

	tester.handleTestCases({
		tests: [{ expectedOutput: new Date().getMonth() }],
		func: getCurrentMonth,
		params: [],
		description: `${tester.printFunction(getCurrentMonth)} should return the current month.`,
	});

	tester.handleTestCases({
		tests: [{ expectedOutput: new Date().getDate() }],
		func: getCurrentDay,
		params: [],
		description: `${tester.printFunction(getCurrentDay)} should return the current day.`,
	});

	tester.printTestSuiteResults();
}

runTests();
