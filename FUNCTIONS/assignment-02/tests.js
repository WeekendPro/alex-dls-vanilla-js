import solution from './solution.js';

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
			name: 'John',
			expected: 'Hello, John!',
		},
		{
			name: 'Jane',
			expected: 'Hello, Jane!',
		},
		{
			name: 'Alice',
			expected: 'Hello, Alice!',
		},
		{
			name: 'Bob',
			expected: 'Hello, Bob!',
		},
		{
			name: 'George Washington Senior',
			expected: 'Hello, George Washington Senior!',
		},
	];

	const getLengthTestCases = [
		{
			str: 'Hello, world!',
			expected: 13,
		},
		{
			str: 'Jackson Hayes',
			expected: 13,
		},
		{
			str: 'John',
			expected: 4,
		},
		{
			str: 'Jane',
			expected: 4,
		},
		{
			str: 'Alice',
			expected: 5,
		},
		{
			str: 'supercalifragilisticexpialidocious',
			expected: 34,
		},
	];

	const getFirstCharacterTestCases = [
		{
			str: 'Hello, world!',
			expected: 'H',
		},
		{
			str: 'Jackson Hayes',
			expected: 'J',
		},
		{
			str: 'John',
			expected: 'J',
		},
		{
			str: 'Jane',
			expected: 'J',
		},
		{
			str: 'Alice',
			expected: 'A',
		},
		{
			str: 'supercalifragilisticexpialidocious',
			expected: 's',
		},
	];

	const getLastCharacterTestCases = [
		{
			str: 'Hello, world!',
			expected: '!',
		},
		{
			str: 'Jackson Hayes',
			expected: 's',
		},
		{
			str: 'John',
			expected: 'n',
		},
		{
			str: 'Alice',
			expected: 'e',
		},
		{
			str: 'supercalifragilisticexpialidocious',
			expected: 's',
		},
	];

	const concatenateStringsTestCases = [
		{
			str1: 'Hello, ',
			str2: 'world!',
			expected: 'Hello, world!',
		},
		{
			str1: 'Jackson ',
			str2: 'Hayes',
			expected: 'Jackson Hayes',
		},
		{
			str1: 'John',
			str2: 'Doe',
			expected: 'JohnDoe',
		},
		{
			str1: 'Alice',
			str2: 'Smith',
			expected: 'AliceSmith',
		},
		{
			str1: 'supercalifragilisticexpialidocious',
			str2: '123',
			expected: 'supercalifragilisticexpialidocious123',
		},
	];

	const convertToUppercaseTestCases = [
		{
			str: 'Hello, world!',
			expected: 'HELLO, WORLD!',
		},
		{
			str: 'Jackson Hayes',
			expected: 'JACKSON HAYES',
		},
		{
			str: 'John Doe',
			expected: 'JOHN DOE',
		},
		{
			str: 'Alice Smith',
			expected: 'ALICE SMITH',
		},
		{
			str: 'supercalifragilisticexpialidocious',
			expected: 'SUPERCALIFRAGILISTICEXPIALIDOCIOUS',
		},
	];

	const convertToLowercaseTestCases = [
		{
			str: 'Hello, world!',
			expected: 'hello, world!',
		},
		{
			str: 'Jackson Hayes',
			expected: 'jackson hayes',
		},
		{
			str: 'JOHN DOE',
			expected: 'john doe',
		},
		{
			str: 'Alice SMITH',
			expected: 'alice smith',
		},
		{
			str: 'sUpErCaLiFrAgIlIsTiCeXpIaLiDoCiOuS',
			expected: 'supercalifragilisticexpialidocious',
		},
	];

	const isEmptyTestCases = [
		{
			str: '',
			expected: true,
		},
		{
			str: 'Hello, world!',
			expected: false,
		},
		{
			str: 'Jackson Hayes',
			expected: false,
		},
	];

	const getCharacterAtIndexTestCases = [
		{
			str: 'Hello, world!',
			index: 0,
			expected: 'H',
		},
		{
			str: 'Jackson Hayes',
			index: 6,
			expected: 'n',
		},
		{
			str: 'John Doe',
			index: 3,
			expected: 'n',
		},
		{
			str: 'Alice Smith',
			index: 7,
			expected: 'm',
		},
		{
			str: 'supercalifragilisticexpialidocious',
			index: 20,
			expected: 'e',
		},
	];

	console.log('\n\x1b[1m   Tests for `getGreeting` \n\x1b[0m');

	for (const { name, expected } of getGreetingTestCases) {
		const result = getGreeting(name);
		const isCorrect = result === expected;
		const base = `called "getGreeting" with ${name},`;
		const pass = `✅ ${base} got ${result}`;
		const fail = `❌ ${base} expected ${expected} but got ${result}`;
		console.log(isCorrect ? pass : fail);
	}

	console.log('\n\x1b[1m   Tests for `getLength` \n\x1b[0m');

	for (const { str, expected } of getLengthTestCases) {
		const result = getLength(str);
		const isCorrect = result === expected;
		const base = `called "getLength" with ${str},`;
		const pass = `✅ ${base} got ${result}`;
		const fail = `❌ ${base} expected ${expected} but got ${result}`;
		console.log(isCorrect ? pass : fail);
	}

	console.log('\n\x1b[1m   Tests for `getFirstCharacter` \n\x1b[0m');

	for (const { str, expected } of getFirstCharacterTestCases) {
		const result = getFirstCharacter(str);
		const isCorrect = result === expected;
		const base = `called "getFirstCharacter" with ${str},`;
		const pass = `✅ ${base} got ${result}`;
		const fail = `❌ ${base} expected ${expected} but got ${result}`;
		console.log(isCorrect ? pass : fail);
	}

	console.log('\n\x1b[1m   Tests for `getLastCharacter` \n\x1b[0m');

	for (const { str, expected } of getLastCharacterTestCases) {
		const result = getLastCharacter(str);
		const isCorrect = result === expected;
		const base = `called "getLastCharacter" with ${str},`;
		const pass = `✅ ${base} got ${result}`;
		const fail = `❌ ${base} expected ${expected} but got ${result}`;
		console.log(isCorrect ? pass : fail);
	}

	console.log('\n\x1b[1m   Tests for `concatenateStrings` \n\x1b[0m');

	for (const { str1, str2, expected } of concatenateStringsTestCases) {
		const result = concatenateStrings(str1, str2);
		const isCorrect = result === expected;
		const base = `called "concatenateStrings" with ${str1} and ${str2},`;
		const pass = `✅ ${base} got ${result}`;
		const fail = `❌ ${base} expected ${expected} but got ${result}`;
		console.log(isCorrect ? pass : fail);
	}

	console.log('\n\x1b[1m   Tests for `convertToUppercase` \n\x1b[0m');

	for (const { str, expected } of convertToUppercaseTestCases) {
		const result = convertToUppercase(str);
		const isCorrect = result === expected;
		const base = `called "convertToUppercase" with ${str},`;
		const pass = `✅ ${base} got ${result}`;
		const fail = `❌ ${base} expected ${expected} but got ${result}`;
		console.log(isCorrect ? pass : fail);
	}

	console.log('\n\x1b[1m   Tests for `convertToLowercase` \n\x1b[0m');

	for (const { str, expected } of convertToLowercaseTestCases) {
		const result = convertToLowercase(str);
		const isCorrect = result === expected;
		const base = `called "convertToLowercase" with ${str},`;
		const pass = `✅ ${base} got ${result}`;
		const fail = `❌ ${base} expected ${expected} but got ${result}`;
		console.log(isCorrect ? pass : fail);
	}

	console.log('\n\x1b[1m   Tests for `isEmpty` \n\x1b[0m');

	for (const { str, expected } of isEmptyTestCases) {
		const result = isEmpty(str);
		const isCorrect = result === expected;
		const base = `called "isEmpty" with ${str},`;
		const pass = `✅ ${base} got ${result}`;
		const fail = `❌ ${base} expected ${expected} but got ${result}`;
		console.log(isCorrect ? pass : fail);
	}

	console.log('\n\x1b[1m   Tests for `getCharacterAtIndex` \n\x1b[0m');

	for (const { str, index, expected } of getCharacterAtIndexTestCases) {
		const result = getCharacterAtIndex(str, index);
		const isCorrect = result === expected;
		const base = `called "getCharacterAtIndex" with ${str} and ${index},`;
		const pass = `✅ ${base} got ${result}`;
		const fail = `❌ ${base} expected ${expected} but got ${result}`;
		console.log(isCorrect ? pass : fail);
	}
}

runTests();
