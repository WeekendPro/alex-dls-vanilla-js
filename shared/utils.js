import Table from 'cli-table3';

function printString(input) {
	return `\x1b[32m"${input}"\x1b[0m`;
}

function printArray(input) {
	if (input.length > 0) {
		return `\x1b[35m${JSON.stringify(input, null, 2)}\x1b[0m`;
	}
	return `\x1b[35m${JSON.stringify(input)}\x1b[0m`;
}

function printObject(input) {
	return `\x1b[94m${JSON.stringify(input)}\x1b[0m`;
}

function printBoolean(input) {
	return `\x1b[36m${input}\x1b[0m`;
}

function printNumber(input) {
	return `\x1b[33m${input}\x1b[0m`;
}

function printUndefined(input) {
	return `\x1b[31m${input}\x1b[0m`;
}

function printNull(input) {
	return `\x1b[31m${input}\x1b[0m`;
}

function printFunction(input) {
	return `\x1b[93m[Function ${input.name}]\x1b[0m`;
}

function printDate(input) {
	return `\x1b[34m${input.toISOString()}\x1b[0m`;
}

export function getPrintable(value) {
	if (value instanceof Date) {
		return printDate(value);
	}
	if (typeof value === 'function') {
		return printFunction(value);
	}
	if (typeof value === 'boolean') {
		return printBoolean(value);
	}
	if (typeof value === 'number') {
		return printNumber(value);
	}
	if (Array.isArray(value)) {
		return printArray(value);
	}
	if (typeof value === 'object' && value !== null) {
		return printObject(value);
	}
	if (typeof value === 'undefined') {
		return printUndefined(value);
	}
	if (value === null) {
		return printNull(value);
	}
	return printString(value);
}

export function printHeading(heading) {
	console.log(`\n${heading}\n`);
}

function titleCase(str) {
	return str
		.replace(/([A-Z])/g, ' $1') // Add space before capital letters
		.replace(/^./, (str) => str.toUpperCase()) // Capitalize first letter
		.trim();
}

function getFunctionName(func) {
	return titleCase(func.name);
}

function formatForDiff(value) {
	if (!value) return [];

	const str = JSON.stringify(value, null, 2);
	const lines = str.split('\n');
	return lines.map((line) => {
		return line;
	});
}

function formatParams(params) {
	if (!params || !params.length) return '';
	return params.map((param) => {
		const [key, value] = param;
		const valueLines = JSON.stringify(value, null, 2);
		return `${key}: ${valueLines}`;
	});
}

function getPrintableDiff(input, expected, actual) {
	const inputLines = formatParams(input).flatMap((line) => line.split('\n'));
	const expectedLines = formatForDiff(expected);
	const actualLines = formatForDiff(actual);
	const maxLength = Math.max(
		inputLines.length,
		expectedLines.length,
		actualLines.length
	);

	let rows = [];
	for (let i = 0; i < maxLength; i++) {
		const inputLine = inputLines[i] || '';

		const expectedLine = expectedLines[i] || '';
		const actualLine = actualLines[i] || '';
		const isDifferent = expectedLine !== actualLine;

		// Add color for differences
		const expectedColor = isDifferent ? '\x1b[31m' : '\x1b[32m'; // Red for different, Green for same
		const actualColor = isDifferent ? '\x1b[31m' : '\x1b[32m'; // Red for different, Green for same

		rows.push([
			inputLine,
			`${expectedColor}${expectedLine}\x1b[0m`,
			`${actualColor}${actualLine}\x1b[0m`,
		]);
	}
	return rows;
}

export function handleTestCases({
	tests,
	func,
	params = ['input'],
	forceArrayOrder = false,
}) {
	const results = [];
	for (const test of tests) {
		const { expectedOutput } = test;
		const result = func(...params.map((param) => test[param]));
		let isCorrect;
		if (Array.isArray(result) && Array.isArray(expectedOutput)) {
			if (forceArrayOrder) {
				isCorrect =
					result.length === expectedOutput.length &&
					result.every((value, index) => value === expectedOutput[index]);
			} else {
				isCorrect = result.every((value) => {
					return expectedOutput.includes(value);
				});
			}
		} else if (result instanceof Date && expectedOutput instanceof Date) {
			isCorrect = result.getTime() === expectedOutput.getTime();
		} else {
			isCorrect = result === expectedOutput;
		}

		results.push({
			isCorrect,
			input: params.map((param) => [param, test[param]]),
			expected: expectedOutput,
			actual: result,
		});
	}

	// Print results
	console.log(`\n\x1b[1m${getFunctionName(func)}\x1b[0m`);
	console.log('\x1b[1m----------------------------------------\x1b[0m');

	for (const [index, result] of results.entries()) {
		const status = result.isCorrect ? '✅ PASSED' : '❌ FAILED';
		console.log(
			`${result.isCorrect ? '' : '\n'}Test case ${index + 1}: ${status}`
		);

		if (!result.isCorrect) {
			// Create a new table instance with consistent column widths
			const table = new Table({
				head: ['Input', 'Expected Output', 'Actual Output'],
				colWidths: [
					Math.floor(process.stdout.columns / 3) - 3,
					Math.floor(process.stdout.columns / 3) - 3,
					Math.floor(process.stdout.columns / 3) - 3,
				], // Dynamic column widths based on terminal width
				style: {
					head: ['cyan'],
					border: ['grey'],
					compact: true,
				},
			});

			// Add rows from the diff
			const rows = getPrintableDiff(
				result.input,
				result.expected,
				result.actual
			);
			table.push(...rows);
			console.log(table.toString());
		}
	}

	// Print summary
	const passedCount = results.filter((r) => r.isCorrect).length;
	const totalCount = results.length;
	if (passedCount === totalCount) {
		console.log(`\n⭐${getPrintable(func)} passed all ${totalCount} tests`);
	} else {
		console.log(
			`\n⛔${getPrintable(func)} failed ${totalCount - passedCount} of ${totalCount} tests`
		);
	}
}
