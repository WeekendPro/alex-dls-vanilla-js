import solution from './solution.js';
import { Tester } from '../../shared/tester.js';

function runTests() {
	const tester = new Tester();
	const {
		getGreeting,
		getLength,
		getFirstCharacter,
		getLastCharacter,
		concatenateStrings,
		convertToUppercase,
		convertToLowercase,
		isEmpty,
		getCharacterAtIndex,
	} = solution;

	const getGreetingTestCases = [
		{
			name: 'John',
			expectedOutput: 'Hello, John!',
		},
		{
			name: 'Jane',
			expectedOutput: 'Hello, Jane!',
		},
		{
			name: 'Alice',
			expectedOutput: 'Hello, Alice!',
		},
		{
			name: 'Bob',
			expectedOutput: 'Hello, Bob!',
		},
		{
			name: 'George Washington Senior',
			expectedOutput: 'Hello, George Washington Senior!',
		},
	];

	tester.handleTestCases({
		tests: getGreetingTestCases,
		func: getGreeting,
		params: ['name'],
		description: `${tester.printFunction(getGreeting)} should return a greeting to the provided ${tester.printParam('name')}.`,
	});

	const getLengthTestCases = [
		{
			string: 'Hello, world!',
			expectedOutput: 13,
		},
		{
			string: 'Jackson Hayes',
			expectedOutput: 13,
		},
		{
			string: 'John',
			expectedOutput: 4,
		},
		{
			string: 'Jane',
			expectedOutput: 4,
		},
		{
			string: 'Alice',
			expectedOutput: 5,
		},
		{
			string: 'supercalifragilisticexpialidocious',
			expectedOutput: 34,
		},
	];

	tester.handleTestCases({
		tests: getLengthTestCases,
		func: getLength,
		params: ['string'],
		description: `${tester.printFunction(getLength)} should return the length of the provided ${tester.printParam('string')}.`,
	});

	const getFirstCharacterTestCases = [
		{
			string: 'Hello, world!',
			expectedOutput: 'H',
		},
		{
			string: 'Jackson Hayes',
			expectedOutput: 'J',
		},
		{
			string: 'John',
			expectedOutput: 'J',
		},
		{
			string: 'Jane',
			expectedOutput: 'J',
		},
		{
			string: 'Alice',
			expectedOutput: 'A',
		},
		{
			string: 'supercalifragilisticexpialidocious',
			expectedOutput: 's',
		},
	];

	tester.handleTestCases({
		tests: getFirstCharacterTestCases,
		func: getFirstCharacter,
		params: ['string'],
		description: `${tester.printFunction(getFirstCharacter)} should return the first character of the provided ${tester.printParam('string')}.`,
	});

	const getLastCharacterTestCases = [
		{
			string: 'Hello, world!',
			expectedOutput: '!',
		},
		{
			string: 'Jackson Hayes',
			expectedOutput: 's',
		},
		{
			string: 'John',
			expectedOutput: 'n',
		},
		{
			string: 'Alice',
			expectedOutput: 'e',
		},
		{
			string: 'supercalifragilisticexpialidocious',
			expectedOutput: 's',
		},
	];

	tester.handleTestCases({
		tests: getLastCharacterTestCases,
		func: getLastCharacter,
		params: ['string'],
		description: `${tester.printFunction(getLastCharacter)} should return the last character of the provided ${tester.printParam('string')}.`,
	});

	const concatenateStringsTestCases = [
		{
			string1: 'Hello, ',
			string2: 'world!',
			expectedOutput: 'Hello, world!',
		},
		{
			string1: 'Jackson ',
			string2: 'Hayes',
			expectedOutput: 'Jackson Hayes',
		},
		{
			string1: 'John',
			string2: 'Doe',
			expectedOutput: 'JohnDoe',
		},
		{
			string1: 'Alice',
			string2: 'Smith',
			expectedOutput: 'AliceSmith',
		},
		{
			string1: 'supercalifragilisticexpialidocious',
			string2: '123',
			expectedOutput: 'supercalifragilisticexpialidocious123',
		},
	];

	tester.handleTestCases({
		tests: concatenateStringsTestCases,
		func: concatenateStrings,
		params: ['string1', 'string2'],
		description: `${tester.printFunction(concatenateStrings)} should return the concatenation of the provided ${tester.printParam('string1')} and ${tester.printParam('string2')}.`,
	});

	const convertToUppercaseTestCases = [
		{
			string: 'Hello, world!',
			expectedOutput: 'HELLO, WORLD!',
		},
		{
			string: 'Jackson Hayes',
			expectedOutput: 'JACKSON HAYES',
		},
		{
			string: 'John Doe',
			expectedOutput: 'JOHN DOE',
		},
		{
			string: 'Alice Smith',
			expectedOutput: 'ALICE SMITH',
		},
		{
			string: 'supercalifragilisticexpialidocious',
			expectedOutput: 'SUPERCALIFRAGILISTICEXPIALIDOCIOUS',
		},
	];

	tester.handleTestCases({
		tests: convertToUppercaseTestCases,
		func: convertToUppercase,
		params: ['string'],
		description: `${tester.printFunction(convertToUppercase)} should return the provided ${tester.printParam('string')} in uppercase.`,
	});

	const convertToLowercaseTestCases = [
		{
			string: 'Hello, world!',
			expectedOutput: 'hello, world!',
		},
		{
			string: 'Jackson Hayes',
			expectedOutput: 'jackson hayes',
		},
		{
			string: 'JOHN DOE',
			expectedOutput: 'john doe',
		},
		{
			string: 'Alice SMITH',
			expectedOutput: 'alice smith',
		},
		{
			string: 'sUpErCaLiFrAgIlIsTiCeXpIaLiDoCiOuS',
			expectedOutput: 'supercalifragilisticexpialidocious',
		},
	];

	tester.handleTestCases({
		tests: convertToLowercaseTestCases,
		func: convertToLowercase,
		params: ['string'],
		description: `${tester.printFunction(convertToLowercase)} should return the provided ${tester.printParam('string')} in lowercase.`,
	});

	const isEmptyTestCases = [
		{
			string: '',
			expectedOutput: true,
		},
		{
			string: 'Hello, world!',
			expectedOutput: false,
		},
		{
			string: 'Jackson Hayes',
			expectedOutput: false,
		},
	];

	tester.handleTestCases({
		tests: isEmptyTestCases,
		func: isEmpty,
		params: ['string'],
		description: `${tester.printFunction(isEmpty)} should return ${tester.printBoolean(true)} if the provided ${tester.printParam('string')} is empty, otherwise ${tester.printBoolean(false)}.`,
	});

	const getCharacterAtIndexTestCases = [
		{
			string: 'Hello, world!',
			index: 0,
			expectedOutput: 'H',
		},
		{
			string: 'Jackson Hayes',
			index: 6,
			expectedOutput: 'n',
		},
		{
			string: 'John Doe',
			index: 3,
			expectedOutput: 'n',
		},
		{
			string: 'Alice Smith',
			index: 7,
			expectedOutput: 'm',
		},
		{
			string: 'supercalifragilisticexpialidocious',
			index: 20,
			expectedOutput: 'e',
		},
	];

	tester.handleTestCases({
		tests: getCharacterAtIndexTestCases,
		func: getCharacterAtIndex,
		params: ['string', 'index'],
		description: `${tester.printFunction(getCharacterAtIndex)} should return the character at the provided ${tester.printParam('index')} of the provided ${tester.printParam('string')}.`,
	});

	tester.printTestSuiteResults();
}

runTests();
