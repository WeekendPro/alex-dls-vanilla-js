function printString(input) {
	return `\x1b[32m"${input}"\x1b[0m`;
}

function printArray(input) {
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

function getPrintableParams(test, params) {
	if (params.length === 0) {
		return '';
	}
	if (params.length === 1) {
		return ' with ' + getPrintable(test[params[0]]);
	}
	return params.reduce((acc, param, index) => {
		if (index === 0) {
			return ` with ${getPrintable(test[param])}`;
		}
		if (index === params.length - 1) {
			return `${acc} and ${getPrintable(test[param])}`;
		}
		return `${acc}, ${getPrintable(test[param])}`;
	}, '');
}

export function handleTestCases({
	tests,
	func,
	params,
	forceArrayOrder = false,
}) {
	const results = [];
	for (const test of tests) {
		const { expectedOutput } = test;
		const result = func(...params.map((param) => test[param]));
		let isCorrect;
		if (Array.isArray(result) && Array.isArray(expectedOutput)) {
			if (forceArrayOrder) {
				isCorrect = result.every(
					(value, index) => value === expectedOutput[index]
				);
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
		const base = `${getPrintable(func)} was called${getPrintableParams(test, params)},`;
		const pass = `✅ ${base} got ${getPrintable(result)}`;
		const fail = `❌ ${base} expected ${getPrintable(expectedOutput)} but got ${getPrintable(result)}`;

		results.push({
			isCorrect,
			message: isCorrect ? pass : fail,
		});
	}

	console.log('\n' + '…'.repeat(process.stdout.columns));
	if (results.every((result) => result.isCorrect)) {
		printHeading(`⭐ ${getPrintable(func)}\x1b[1m passed all tests\x1b[0m`);
	} else {
		printHeading(
			`⛔ ${getPrintable(func)}\x1b[1m failed ${results.filter(({ isCorrect }) => !isCorrect).length} tests\x1b[0m`
		);
	}
	console.log(results.map((result) => result.message).join('\n'));
}
