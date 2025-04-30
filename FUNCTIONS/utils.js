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

export function print(value) {
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
