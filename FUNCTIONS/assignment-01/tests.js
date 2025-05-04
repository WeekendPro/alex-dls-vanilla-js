import solution from './solution.js';
import { Tester } from '../../shared/tester.js';
function runTests() {
	const tester = new Tester();

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
			expectedOutput: true,
		},
		{
			number: 0,
			expectedOutput: false,
		},
		{
			number: -1,
			expectedOutput: false,
		},
		{
			number: 48,
			expectedOutput: true,
		},
		{
			number: -64,
			expectedOutput: false,
		},
		{
			number: 0.5,
			expectedOutput: true,
		},
		{
			number: -1982.64,
			expectedOutput: false,
		},
	];

	tester.handleTestCases({
		tests: isPositiveTestCases,
		func: isPositive,
		params: ['number'],
		description: `${tester.printFunction(isPositive)} should return ${tester.printBoolean(true)} if the provided ${tester.printParam('number')} is positive, otherwise ${tester.printBoolean(false)}.`,
	});

	const isNegativeTestCases = [
		{
			number: 1,
			expectedOutput: false,
		},
		{
			number: 0,
			expectedOutput: false,
		},
		{
			number: -1,
			expectedOutput: true,
		},
		{
			number: 48,
			expectedOutput: false,
		},
		{
			number: -64,
			expectedOutput: true,
		},
		{
			number: 0.5,
			expectedOutput: false,
		},
		{
			number: -1982.64,
			expectedOutput: true,
		},
	];

	tester.handleTestCases({
		tests: isNegativeTestCases,
		func: isNegative,
		params: ['number'],
		description: `${tester.printFunction(isNegative)} should return ${tester.printBoolean(true)} if the provided ${tester.printParam('number')} is negative, otherwise ${tester.printBoolean(false)}.`,
	});

	const isZeroTestCases = [
		{
			number: 0,
			expectedOutput: true,
		},
		{
			number: 1,
			expectedOutput: false,
		},
		{
			number: -1,
			expectedOutput: false,
		},
		{
			number: 48,
			expectedOutput: false,
		},
		{
			number: -64,
			expectedOutput: false,
		},
		{
			number: 0.5,
			expectedOutput: false,
		},
		{
			number: -1982.64,
			expectedOutput: false,
		},
	];

	tester.handleTestCases({
		tests: isZeroTestCases,
		func: isZero,
		params: ['number'],
		description: `${tester.printFunction(isZero)} should return ${tester.printBoolean(true)} if the provided ${tester.printParam('number')} is zero, otherwise ${tester.printBoolean(false)}.`,
	});

	const isEvenTestCases = [
		{
			number: 2,
			expectedOutput: true,
		},
		{
			number: 1,
			expectedOutput: false,
		},
		{
			number: 3,
			expectedOutput: false,
		},
		{
			number: 0,
			expectedOutput: true,
		},
		{
			number: 0.5,
			expectedOutput: false,
		},
		{
			number: -1982.64,
			expectedOutput: false,
		},
		{
			number: 1982.64,
			expectedOutput: false,
		},
		{
			number: 48,
			expectedOutput: true,
		},
		{
			number: 49,
			expectedOutput: false,
		},
	];

	tester.handleTestCases({
		tests: isEvenTestCases,
		func: isEven,
		params: ['number'],
		description: `${tester.printFunction(isEven)} should return ${tester.printBoolean(true)} if the provided ${tester.printParam('number')} is even, otherwise ${tester.printBoolean(false)}.`,
	});

	const isOddTestCases = [
		{
			number: 1,
			expectedOutput: true,
		},
		{
			number: 2,
			expectedOutput: false,
		},
		{
			number: 3,
			expectedOutput: true,
		},
		{
			number: 0,
			expectedOutput: false,
		},
		{
			number: 0.5,
			expectedOutput: false,
		},
		{
			number: -1982.64,
			expectedOutput: false,
		},
		{
			number: 1982.64,
			expectedOutput: false,
		},
		{
			number: 48,
			expectedOutput: false,
		},
		{
			number: 49,
			expectedOutput: true,
		},
	];

	tester.handleTestCases({
		tests: isOddTestCases,
		func: isOdd,
		params: ['number'],
		description: `${tester.printFunction(isOdd)} should return ${tester.printBoolean(true)} if the provided ${tester.printParam('number')} is odd, otherwise ${tester.printBoolean(false)}.`,
	});

	const getLargerTestCases = [
		{
			number1: 1,
			number2: 2,
			expectedOutput: 2,
		},
		{
			number1: 2,
			number2: 1,
			expectedOutput: 2,
		},
		{
			number1: 1,
			number2: 1,
			expectedOutput: 1,
		},
		{
			number1: 599,
			number2: 122,
			expectedOutput: 599,
		},
		{
			number1: 190,
			number2: 3902,
			expectedOutput: 3902,
		},
		{
			number1: 763,
			number2: 763,
			expectedOutput: 763,
		},
	];

	tester.handleTestCases({
		tests: getLargerTestCases,
		func: getLarger,
		params: ['number1', 'number2'],
		description: `${tester.printFunction(getLarger)} should return the larger of the two provided ${tester.printParam('number1')} and ${tester.printParam('number2')}.`,
	});

	const getSmallerTestCases = [
		{
			number1: 1,
			number2: 2,
			expectedOutput: 1,
		},
		{
			number1: 2,
			number2: 1,
			expectedOutput: 1,
		},
		{
			number1: 1,
			number2: 1,
			expectedOutput: 1,
		},
		{
			number1: 599,
			number2: 122,
			expectedOutput: 122,
		},
		{
			number1: 190,
			number2: 3902,
			expectedOutput: 190,
		},
		{
			number1: 763,
			number2: 763,
			expectedOutput: 763,
		},
	];

	tester.handleTestCases({
		tests: getSmallerTestCases,
		func: getSmaller,
		params: ['number1', 'number2'],
		description: `${tester.printFunction(getSmaller)} should return the smaller of the two provided ${tester.printParam('number1')} and ${tester.printParam('number2')}.`,
	});

	const isEqualTestCases = [
		{
			number1: 1,
			number2: 1,
			expectedOutput: true,
		},
		{
			number1: 1,
			number2: 2,
			expectedOutput: false,
		},
		{
			number1: 190,
			number2: 190,
			expectedOutput: true,
		},
		{
			number1: 190,
			number2: 191,
			expectedOutput: false,
		},
		{
			number1: 190,
			number2: 190.1,
			expectedOutput: false,
		},
		{
			number1: 190.0,
			number2: 19.0,
			expectedOutput: false,
		},
	];

	tester.handleTestCases({
		tests: isEqualTestCases,
		func: isEqual,
		params: ['number1', 'number2'],
		description: `${tester.printFunction(isEqual)} should return ${tester.printBoolean(true)} if the two provided ${tester.printParam('number1')} and ${tester.printParam('number2')} are equal, otherwise ${tester.printBoolean(false)}.`,
	});

	const isNotEqualTestCases = [
		{
			number1: 1,
			number2: 1,
			expectedOutput: false,
		},
		{
			number1: 1,
			number2: 2,
			expectedOutput: true,
		},
		{
			number1: 190,
			number2: 190.0,
			expectedOutput: false,
		},
		{
			number1: 190,
			number2: 190.1,
			expectedOutput: true,
		},
		{
			number1: 190.0,
			number2: 19.0,
			expectedOutput: true,
		},
	];

	tester.handleTestCases({
		tests: isNotEqualTestCases,
		func: isNotEqual,
		params: ['number1', 'number2'],
		description: `${tester.printFunction(isNotEqual)} should return ${tester.printBoolean(true)} if the two provided ${tester.printParam('number1')} and ${tester.printParam('number2')} are not equal, otherwise ${tester.printBoolean(false)}.`,
	});

	const isGreaterThanTestCases = [
		{
			number1: 1,
			number2: 2,
			expectedOutput: false,
		},
		{
			number1: 2,
			number2: 1,
			expectedOutput: true,
		},
		{
			number1: 190,
			number2: 190,
			expectedOutput: false,
		},
		{
			number1: 190,
			number2: 191,
			expectedOutput: false,
		},
		{
			number1: 190.0,
			number2: 190.1,
			expectedOutput: false,
		},
		{
			number1: 190.0,
			number2: 19.0,
			expectedOutput: true,
		},
		{
			number1: 48,
			number2: 11,
			expectedOutput: true,
		},
		{
			number1: 11,
			number2: 48,
			expectedOutput: false,
		},
	];

	tester.handleTestCases({
		tests: isGreaterThanTestCases,
		func: isGreaterThan,
		params: ['number1', 'number2'],
		description: `${tester.printFunction(isGreaterThan)} should return ${tester.printBoolean(true)} if the provided ${tester.printParam('number1')} is greater than the provided ${tester.printParam('number2')}, otherwise ${tester.printBoolean(false)}.`,
	});

	const isLessThanTestCases = [
		{
			number1: 1,
			number2: 2,
			expectedOutput: true,
		},
		{
			number1: 2,
			number2: 1,
			expectedOutput: false,
		},
		{
			number1: 190,
			number2: 190,
			expectedOutput: false,
		},
		{
			number1: 190.0,
			number2: 190.1,
			expectedOutput: true,
		},
		{
			number1: 48,
			number2: 11,
			expectedOutput: false,
		},
		{
			number1: 11,
			number2: 48,
			expectedOutput: true,
		},
	];

	tester.handleTestCases({
		tests: isLessThanTestCases,
		func: isLessThan,
		params: ['number1', 'number2'],
		description: `${tester.printFunction(isLessThan)} should return ${tester.printBoolean(true)} if the provided ${tester.printParam('number1')} is less than the provided ${tester.printParam('number2')}, otherwise ${tester.printBoolean(false)}.`,
	});

	const isGreaterThanOrEqualTestCases = [
		{
			number1: 1,
			number2: 2,
			expectedOutput: false,
		},
		{
			number1: 2,
			number2: 1,
			expectedOutput: true,
		},
		{
			number1: 190,
			number2: 190,
			expectedOutput: true,
		},
		{
			number1: 190,
			number2: 191,
			expectedOutput: false,
		},
		{
			number1: 190.0,
			number2: 190.1,
			expectedOutput: false,
		},
		{
			number1: 190.0,
			number2: 190.0,
			expectedOutput: true,
		},
		{
			number1: 48,
			number2: 11,
			expectedOutput: true,
		},
		{
			number1: 11,
			number2: 48,
			expectedOutput: false,
		},
	];

	tester.handleTestCases({
		tests: isGreaterThanOrEqualTestCases,
		func: isGreaterThanOrEqual,
		params: ['number1', 'number2'],
		description: `${tester.printFunction(isGreaterThanOrEqual)} should return ${tester.printBoolean(true)} if the provided ${tester.printParam('number1')} is greater than or equal to the provided ${tester.printParam('number2')}, otherwise ${tester.printBoolean(false)}.`,
	});

	const isLessThanOrEqualTestCases = [
		{
			number1: 1,
			number2: 2,
			expectedOutput: true,
		},
		{
			number1: 2,
			number2: 1,
			expectedOutput: false,
		},
		{
			number1: 190,
			number2: 190,
			expectedOutput: true,
		},
		{
			number1: 190,
			number2: 191,
			expectedOutput: true,
		},
		{
			number1: 190.0,
			number2: 190.1,
			expectedOutput: true,
		},
		{
			number1: 48,
			number2: 11,
			expectedOutput: false,
		},
		{
			number1: 11,
			number2: 48,
			expectedOutput: true,
		},
	];

	tester.handleTestCases({
		tests: isLessThanOrEqualTestCases,
		func: isLessThanOrEqual,
		params: ['number1', 'number2'],
		description: `${tester.printFunction(isLessThanOrEqual)} should return ${tester.printBoolean(true)} if the provided ${tester.printParam('number1')} is less than or equal to the provided ${tester.printParam('number2')}, otherwise ${tester.printBoolean(false)}.`,
	});

	tester.printTestSuiteResults();
}

runTests();
