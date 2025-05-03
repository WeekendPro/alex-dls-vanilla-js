import solution from './solution.js';
import { handleTestCases } from '../../shared/utils.js';

function runTests() {
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
			input: 'John',
			expectedOutput: 'Hello, John!',
		},
		{
			input: 'Jane',
			expectedOutput: 'Hello, Jane!',
		},
		{
			input: 'Alice',
			expectedOutput: 'Hello, Alice!',
		},
		{
			input: 'Bob',
			expectedOutput: 'Hello, Bob!',
		},
		{
			input: 'George Washington Senior',
			expectedOutput: 'Hello, George Washington Senior!',
		},
	];

	handleTestCases({
		tests: getGreetingTestCases,
		func: getGreeting,
		params: ['input'],
	});

	const getLengthTestCases = [
		{
			input: 'Hello, world!',
			expectedOutput: 13,
		},
		{
			input: 'Jackson Hayes',
			expectedOutput: 13,
		},
		{
			input: 'John',
			expectedOutput: 4,
		},
		{
			input: 'Jane',
			expectedOutput: 4,
		},
		{
			input: 'Alice',
			expectedOutput: 5,
		},
		{
			input: 'supercalifragilisticexpialidocious',
			expectedOutput: 34,
		},
	];

	handleTestCases({
		tests: getLengthTestCases,
		func: getLength,
		params: ['input'],
	});

	const getFirstCharacterTestCases = [
		{
			input: 'Hello, world!',
			expectedOutput: 'H',
		},
		{
			input: 'Jackson Hayes',
			expectedOutput: 'J',
		},
		{
			input: 'John',
			expectedOutput: 'J',
		},
		{
			input: 'Jane',
			expectedOutput: 'J',
		},
		{
			input: 'Alice',
			expectedOutput: 'A',
		},
		{
			input: 'supercalifragilisticexpialidocious',
			expectedOutput: 's',
		},
	];

	handleTestCases({
		tests: getFirstCharacterTestCases,
		func: getFirstCharacter,
		params: ['input'],
	});

	const getLastCharacterTestCases = [
		{
			input: 'Hello, world!',
			expectedOutput: '!',
		},
		{
			input: 'Jackson Hayes',
			expectedOutput: 's',
		},
		{
			input: 'John',
			expectedOutput: 'n',
		},
		{
			input: 'Alice',
			expectedOutput: 'e',
		},
		{
			input: 'supercalifragilisticexpialidocious',
			expectedOutput: 's',
		},
	];

	handleTestCases({
		tests: getLastCharacterTestCases,
		func: getLastCharacter,
		params: ['input'],
	});

	const concatenateStringsTestCases = [
		{
			a: 'Hello, ',
			b: 'world!',
			expectedOutput: 'Hello, world!',
		},
		{
			a: 'Jackson ',
			b: 'Hayes',
			expectedOutput: 'Jackson Hayes',
		},
		{
			a: 'John',
			b: 'Doe',
			expectedOutput: 'JohnDoe',
		},
		{
			a: 'Alice',
			b: 'Smith',
			expectedOutput: 'AliceSmith',
		},
		{
			a: 'supercalifragilisticexpialidocious',
			b: '123',
			expectedOutput: 'supercalifragilisticexpialidocious123',
		},
	];

	handleTestCases({
		tests: concatenateStringsTestCases,
		func: concatenateStrings,
		params: ['a', 'b'],
	});

	const convertToUppercaseTestCases = [
		{
			input: 'Hello, world!',
			expectedOutput: 'HELLO, WORLD!',
		},
		{
			input: 'Jackson Hayes',
			expectedOutput: 'JACKSON HAYES',
		},
		{
			input: 'John Doe',
			expectedOutput: 'JOHN DOE',
		},
		{
			input: 'Alice Smith',
			expectedOutput: 'ALICE SMITH',
		},
		{
			input: 'supercalifragilisticexpialidocious',
			expectedOutput: 'SUPERCALIFRAGILISTICEXPIALIDOCIOUS',
		},
	];

	handleTestCases({
		tests: convertToUppercaseTestCases,
		func: convertToUppercase,
		params: ['input'],
	});

	const convertToLowercaseTestCases = [
		{
			input: 'Hello, world!',
			expectedOutput: 'hello, world!',
		},
		{
			input: 'Jackson Hayes',
			expectedOutput: 'jackson hayes',
		},
		{
			input: 'JOHN DOE',
			expectedOutput: 'john doe',
		},
		{
			input: 'Alice SMITH',
			expectedOutput: 'alice smith',
		},
		{
			input: 'sUpErCaLiFrAgIlIsTiCeXpIaLiDoCiOuS',
			expectedOutput: 'supercalifragilisticexpialidocious',
		},
	];

	handleTestCases({
		tests: convertToLowercaseTestCases,
		func: convertToLowercase,
		params: ['input'],
	});

	const isEmptyTestCases = [
		{
			input: '',
			expectedOutput: true,
		},
		{
			input: 'Hello, world!',
			expectedOutput: false,
		},
		{
			input: 'Jackson Hayes',
			expectedOutput: false,
		},
	];

	handleTestCases({
		tests: isEmptyTestCases,
		func: isEmpty,
		params: ['input'],
	});

	const getCharacterAtIndexTestCases = [
		{
			str: 'Hello, world!',
			index: 0,
			expectedOutput: 'H',
		},
		{
			str: 'Jackson Hayes',
			index: 6,
			expectedOutput: 'n',
		},
		{
			str: 'John Doe',
			index: 3,
			expectedOutput: 'n',
		},
		{
			str: 'Alice Smith',
			index: 7,
			expectedOutput: 'm',
		},
		{
			str: 'supercalifragilisticexpialidocious',
			index: 20,
			expectedOutput: 'e',
		},
	];

	handleTestCases({
		tests: getCharacterAtIndexTestCases,
		func: getCharacterAtIndex,
		params: ['str', 'index'],
	});
}

runTests();
