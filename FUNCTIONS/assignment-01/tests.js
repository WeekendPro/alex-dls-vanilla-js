import solution from './solution.js';
import { handleTestCases } from '../../shared/utils.js';
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
			input: 1,
			expectedOutput: true,
		},
		{
			input: 0,
			expectedOutput: false,
		},
		{
			input: -1,
			expectedOutput: false,
		},
		{
			input: 48,
			expectedOutput: true,
		},
		{
			input: -64,
			expectedOutput: false,
		},
		{
			input: 0.5,
			expectedOutput: true,
		},
		{
			input: -1982.64,
			expectedOutput: false,
		},
	];

	handleTestCases({
		tests: isPositiveTestCases,
		func: isPositive,
		params: ['input'],
	});

	const isNegativeTestCases = [
		{
			input: 1,
			expectedOutput: false,
		},
		{
			input: 0,
			expectedOutput: false,
		},
		{
			input: -1,
			expectedOutput: true,
		},
		{
			input: 48,
			expectedOutput: false,
		},
		{
			input: -64,
			expectedOutput: true,
		},
		{
			input: 0.5,
			expectedOutput: false,
		},
		{
			input: -1982.64,
			expectedOutput: true,
		},
	];

	handleTestCases({
		tests: isNegativeTestCases,
		func: isNegative,
		params: ['input'],
	});

	const isZeroTestCases = [
		{
			input: 0,
			expectedOutput: true,
		},
		{
			input: 1,
			expectedOutput: false,
		},
		{
			input: -1,
			expectedOutput: false,
		},
		{
			input: 48,
			expectedOutput: false,
		},
		{
			input: -64,
			expectedOutput: false,
		},
		{
			input: 0.5,
			expectedOutput: false,
		},
		{
			input: -1982.64,
			expectedOutput: false,
		},
	];

	handleTestCases({
		tests: isZeroTestCases,
		func: isZero,
		params: ['input'],
	});

	const isEvenTestCases = [
		{
			input: 2,
			expectedOutput: true,
		},
		{
			input: 1,
			expectedOutput: false,
		},
		{
			input: 3,
			expectedOutput: false,
		},
		{
			input: 0,
			expectedOutput: true,
		},
		{
			input: 0.5,
			expectedOutput: false,
		},
		{
			input: -1982.64,
			expectedOutput: false,
		},
		{
			input: 1982.64,
			expectedOutput: false,
		},
		{
			input: 48,
			expectedOutput: true,
		},
		{
			input: 49,
			expectedOutput: false,
		},
	];

	handleTestCases({
		tests: isEvenTestCases,
		func: isEven,
		params: ['input'],
	});

	const isOddTestCases = [
		{
			input: 1,
			expectedOutput: true,
		},
		{
			input: 2,
			expectedOutput: false,
		},
		{
			input: 3,
			expectedOutput: true,
		},
		{
			input: 0,
			expectedOutput: false,
		},
		{
			input: 0.5,
			expectedOutput: false,
		},
		{
			input: -1982.64,
			expectedOutput: false,
		},
		{
			input: 1982.64,
			expectedOutput: false,
		},
		{
			input: 48,
			expectedOutput: false,
		},
		{
			input: 49,
			expectedOutput: true,
		},
	];

	handleTestCases({
		tests: isOddTestCases,
		func: isOdd,
		params: ['input'],
	});

	const getLargerTestCases = [
		{
			a: 1,
			b: 2,
			expectedOutput: 2,
		},
		{
			a: 2,
			b: 1,
			expectedOutput: 2,
		},
		{
			a: 1,
			b: 1,
			expectedOutput: 1,
		},
		{
			a: 599,
			b: 122,
			expectedOutput: 599,
		},
		{
			a: 190,
			b: 3902,
			expectedOutput: 3902,
		},
		{
			a: 763,
			b: 763,
			expectedOutput: 763,
		},
	];

	handleTestCases({
		tests: getLargerTestCases,
		func: getLarger,
		params: ['a', 'b'],
	});

	const getSmallerTestCases = [
		{
			a: 1,
			b: 2,
			expectedOutput: 1,
		},
		{
			a: 2,
			b: 1,
			expectedOutput: 1,
		},
		{
			a: 1,
			b: 1,
			expectedOutput: 1,
		},
		{
			a: 599,
			b: 122,
			expectedOutput: 122,
		},
		{
			a: 190,
			b: 3902,
			expectedOutput: 190,
		},
		{
			a: 763,
			b: 763,
			expectedOutput: 763,
		},
	];

	handleTestCases({
		tests: getSmallerTestCases,
		func: getSmaller,
		params: ['a', 'b'],
	});

	const isEqualTestCases = [
		{
			a: 1,
			b: 1,
			expectedOutput: true,
		},
		{
			a: 1,
			b: 2,
			expectedOutput: false,
		},
		{
			a: 190,
			b: 190,
			expectedOutput: true,
		},
		{
			a: 190,
			b: 191,
			expectedOutput: false,
		},
		{
			a: 190,
			b: 190.1,
			expectedOutput: false,
		},
		{
			a: 190.0,
			b: 19.0,
			expectedOutput: false,
		},
	];

	handleTestCases({
		tests: isEqualTestCases,
		func: isEqual,
		params: ['a', 'b'],
	});

	const isNotEqualTestCases = [
		{
			a: 1,
			b: 1,
			expectedOutput: false,
		},
		{
			a: 1,
			b: 2,
			expectedOutput: true,
		},
		{
			a: 190,
			b: 190.0,
			expectedOutput: false,
		},
		{
			a: 190,
			b: 190.1,
			expectedOutput: true,
		},
		{
			a: 190.0,
			b: 19.0,
			expectedOutput: true,
		},
	];

	handleTestCases({
		tests: isNotEqualTestCases,
		func: isNotEqual,
		params: ['a', 'b'],
	});

	const isGreaterThanTestCases = [
		{
			a: 1,
			b: 2,
			expectedOutput: false,
		},
		{
			a: 2,
			b: 1,
			expectedOutput: true,
		},
		{
			a: 190,
			b: 190,
			expectedOutput: false,
		},
		{
			a: 190,
			b: 191,
			expectedOutput: false,
		},
		{
			a: 190.0,
			b: 190.1,
			expectedOutput: false,
		},
		{
			a: 190.0,
			b: 19.0,
			expectedOutput: true,
		},
		{
			a: 48,
			b: 11,
			expectedOutput: true,
		},
		{
			a: 11,
			b: 48,
			expectedOutput: false,
		},
	];

	handleTestCases({
		tests: isGreaterThanTestCases,
		func: isGreaterThan,
		params: ['a', 'b'],
	});

	const isLessThanTestCases = [
		{
			a: 1,
			b: 2,
			expectedOutput: true,
		},
		{
			a: 2,
			b: 1,
			expectedOutput: false,
		},
		{
			a: 190,
			b: 190,
			expectedOutput: false,
		},
		{
			a: 190.0,
			b: 190.1,
			expectedOutput: true,
		},
		{
			a: 48,
			b: 11,
			expectedOutput: false,
		},
		{
			a: 11,
			b: 48,
			expectedOutput: true,
		},
	];

	handleTestCases({
		tests: isLessThanTestCases,
		func: isLessThan,
		params: ['a', 'b'],
	});

	const isGreaterThanOrEqualTestCases = [
		{
			a: 1,
			b: 2,
			expectedOutput: false,
		},
		{
			a: 2,
			b: 1,
			expectedOutput: true,
		},
		{
			a: 190,
			b: 190,
			expectedOutput: true,
		},
		{
			a: 190,
			b: 191,
			expectedOutput: false,
		},
		{
			a: 190.0,
			b: 190.1,
			expectedOutput: false,
		},
		{
			a: 190.0,
			b: 190.0,
			expectedOutput: true,
		},
		{
			a: 48,
			b: 11,
			expectedOutput: true,
		},
		{
			a: 11,
			b: 48,
			expectedOutput: false,
		},
	];

	handleTestCases({
		tests: isGreaterThanOrEqualTestCases,
		func: isGreaterThanOrEqual,
		params: ['a', 'b'],
	});

	const isLessThanOrEqualTestCases = [
		{
			a: 1,
			b: 2,
			expectedOutput: true,
		},
		{
			a: 2,
			b: 1,
			expectedOutput: false,
		},
		{
			a: 190,
			b: 190,
			expectedOutput: true,
		},
		{
			a: 190,
			b: 191,
			expectedOutput: true,
		},
		{
			a: 190.0,
			b: 190.1,
			expectedOutput: true,
		},
		{
			a: 48,
			b: 11,
			expectedOutput: false,
		},
		{
			a: 11,
			b: 48,
			expectedOutput: true,
		},
	];

	handleTestCases({
		tests: isLessThanOrEqualTestCases,
		func: isLessThanOrEqual,
		params: ['a', 'b'],
	});
}

runTests();
