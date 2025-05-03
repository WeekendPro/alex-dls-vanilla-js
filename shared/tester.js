import Table from 'cli-table3';

export class Tester {
	constructor() {
		this.testSuites = [];
	}

	printString(input) {
		return `\x1b[32m"${input}"\x1b[0m`;
	}

	printArray(input) {
		if (input.length > 0) {
			return `\x1b[35m${JSON.stringify(input, null, 2)}\x1b[0m`;
		}
		return `\x1b[35m${JSON.stringify(input)}\x1b[0m`;
	}

	printObject(input) {
		return `\x1b[94m${JSON.stringify(input)}\x1b[0m`;
	}

	printBoolean(input) {
		return `\x1b[36m${input}\x1b[0m`;
	}

	printNumber(input) {
		return `\x1b[33m${input}\x1b[0m`;
	}

	printUndefined(input) {
		return `\x1b[31m${input}\x1b[0m`;
	}

	printNull(input) {
		return `\x1b[31m${input}\x1b[0m`;
	}

	printFunction(input) {
		return `\x1b[93m[Function ${input.name}]\x1b[0m`;
	}

	printDate(input) {
		return `\x1b[34m${input.toISOString()}\x1b[0m`;
	}

	printParam(input) {
		return `\x1b[43m${input}\x1b[0m`;
	}

	getPrintable(value) {
		if (value instanceof Date) {
			return this.printDate(value);
		}
		if (typeof value === 'function') {
			return this.printFunction(value);
		}
		if (typeof value === 'boolean') {
			return this.printBoolean(value);
		}
		if (typeof value === 'number') {
			return this.printNumber(value);
		}
		if (Array.isArray(value)) {
			return this.printArray(value);
		}
		if (typeof value === 'object' && value !== null) {
			return this.printObject(value);
		}
		if (typeof value === 'undefined') {
			return this.printUndefined(value);
		}
		if (value === null) {
			return this.printNull(value);
		}
		return this.printString(value);
	}

	printHeading(heading) {
		console.log(`\n${heading}\n`);
	}

	titleCase(str) {
		return str
			.replace(/([A-Z])/g, ' $1')
			.replace(/^./, (str) => str.toUpperCase())
			.trim();
	}

	getFunctionName(func) {
		return this.titleCase(func.name);
	}

	formatForDiff(value) {
		if (!value) return [];

		const str = JSON.stringify(value, null, 2);
		const lines = str.split('\n');
		return lines.map((line) => {
			return line;
		});
	}

	formatParams(params) {
		if (!params || !params.length) return '';
		return params.map((param) => {
			const [key, value] = param;
			const valueLines = JSON.stringify(value, null, 2);
			return `${key}: ${valueLines}`;
		});
	}

	getPrintableDiff(input, expected, actual) {
		const inputLines = this.formatParams(input).flatMap((line) =>
			line.split('\n')
		);
		const expectedLines = this.formatForDiff(expected);
		const actualLines = this.formatForDiff(actual);
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

			const expectedColor = isDifferent ? '\x1b[31m' : '\x1b[32m';
			const actualColor = isDifferent ? '\x1b[31m' : '\x1b[32m';

			rows.push([
				inputLine,
				`${expectedColor}${expectedLine}\x1b[0m`,
				`${actualColor}${actualLine}\x1b[0m`,
			]);
		}
		return rows;
	}

	handleRandomTests({ func, expectedRange, numTests = 1000, description }) {
		const results = [];
		let allInRange = true;

		// Run the tests
		for (let i = 0; i < numTests; i++) {
			const result = func();
			const isInRange =
				result >= expectedRange.min && result <= expectedRange.max;
			allInRange = allInRange && isInRange;

			results.push({
				isCorrect: isInRange,
				input: '',
				expected: `Number between ${expectedRange.min} and ${expectedRange.max}`,
				actual: result,
			});
		}

		// Store test suite results
		this.testSuites.push({
			functionName: this.getFunctionName(func),
			results: allInRange ? [] : results,
			totalTests: numTests,
			passedTests: allInRange ? numTests : numTests - results.length,
		});

		// Print results
		if (allInRange) {
			console.log(`\n⭐ \x1b[1m${this.getFunctionName(func)}\x1b[0m`);
			console.log('-'.repeat(process.stdout.columns - 8));
			console.log(`✅ All ${numTests} tests passed \n`);
		} else {
			console.log(`\n📌 \x1b[1m${this.getFunctionName(func)}\x1b[0m`);
			console.log('-'.repeat(process.stdout.columns - 8));
			if (description) {
				console.log(description);
			}
			console.log(
				`${this.getPrintable(func)} failed ${results.length} of ${numTests} tests.`
			);
			// Show failed results in a table
			const table = new Table({
				head: ['Input', 'Expected Output', 'Actual Output'],
				colWidths: [
					Math.floor(process.stdout.columns / 3) - 3,
					Math.floor(process.stdout.columns / 3) - 3,
					Math.floor(process.stdout.columns / 3) - 3,
				],
				style: {
					head: ['cyan'],
					border: ['grey'],
					compact: true,
				},
			});

			// Add failed results to table
			results.forEach((result) => {
				table.push([
					result.input,
					`\x1b[32m${result.expected}\x1b[0m`,
					`\x1b[31m${result.actual}\x1b[0m`,
				]);
			});

			console.log(table.toString());
			console.log(
				`\n⛔${this.getPrintable(func)} generated ${results.length} numbers outside expected range (${expectedRange.min} to ${expectedRange.max})`
			);
		}
	}

	handleTestCases({
		tests,
		func,
		params = ['input'],
		description,
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

		// Store test suite results
		this.testSuites.push({
			functionName: this.getFunctionName(func),
			results,
			totalTests: results.length,
			passedTests: results.filter((r) => r.isCorrect).length,
		});

		// Print results

		// Print individual test suite summary
		const passedCount = results.filter((r) => r.isCorrect).length;
		const totalCount = results.length;
		if (passedCount === totalCount) {
			console.log(`\n⭐ \x1b[1m${this.getFunctionName(func)}\x1b[0m`);
			console.log('-'.repeat(process.stdout.columns - 8));
		} else {
			console.log(`\n📌 \x1b[1m${this.getFunctionName(func)}\x1b[0m`);
			console.log('-'.repeat(process.stdout.columns - 8));
			if (description) {
				console.log(description);
			}
			console.log(
				`${this.getPrintable(func)} failed ${totalCount - passedCount} of ${totalCount} tests.`
			);
		}

		for (const [index, result] of results.entries()) {
			const status = result.isCorrect ? '✅ PASSED' : '❌ FAILED';
			console.log(
				`${result.isCorrect ? '' : '\n'}Test case ${index + 1}: ${status}`
			);

			if (!result.isCorrect) {
				const table = new Table({
					head: ['Input', 'Expected Output', 'Actual Output'],
					colWidths: [
						Math.floor(process.stdout.columns / 3) - 3,
						Math.floor(process.stdout.columns / 3) - 3,
						Math.floor(process.stdout.columns / 3) - 3,
					],
					style: {
						head: ['cyan'],
						border: ['grey'],
						compact: true,
					},
				});

				const rows = this.getPrintableDiff(
					result.input,
					result.expected,
					result.actual
				);
				table.push(...rows);

				console.log(table.toString());
			}
		}
	}

	printTestSuiteResults() {
		console.log('\n\x1b[1m=== Test Suite Summary ===\x1b[0m');
		console.log('\x1b[1m----------------------------------------\x1b[0m');

		let totalTests = 0;
		let totalPassed = 0;

		for (const suite of this.testSuites) {
			const { functionName, totalTests: suiteTotal, passedTests } = suite;
			totalTests += suiteTotal;
			totalPassed += passedTests;

			const status = passedTests === suiteTotal ? '✅' : '⛔';
			console.log(
				`${status} ${functionName}: ${passedTests}/${suiteTotal} tests passed`
			);
		}

		console.log('\n\x1b[1m----------------------------------------\x1b[0m');
		const overallStatus = totalPassed === totalTests ? '✅' : '⛔';
		console.log(
			`${overallStatus} Overall: ${totalPassed}/${totalTests} tests passed`
		);
	}
}
