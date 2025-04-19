import { solution } from '../app/script.js';

function buildErrorMessage({ variable, value }) {
	if (value === undefined) {
		return `${variable} is not defined`;
	}
	if (value === null) {
		return `${variable} is declared as null`;
	}
	if (typeof value === 'object') {
		if (Array.isArray(value)) {
			return `${variable} is declared as an array`;
		}
		return `${variable} is declared as an object literal`;
	}
	if (typeof value === 'number') {
		if (value <= 0) {
			throw new Error(`${variable} must be greater than 0`);
		}
		if (!Number.isInteger(value)) {
			throw new Error(`${variable} must be a whole number`);
		}
		return `${variable} is declared as a number`;
	}
	if (typeof value === 'string') {
		if (value.length === 0) {
			return `${variable} cannot be empty`;
		}
		return `${variable} is declared as a string`;
	}
	if (typeof value === 'boolean') {
		return `${variable} is declared as a boolean`;
	}
}

function buildDescription({ message, variable }) {
	let styledVar = `<span style='opacity:85%; background:#f0f0f0; color: #111; padding: 0.15rem 0.3rem; border-radius: 2px; font-family: monospace; font-size: 12px'>${variable}</span>`;

	let withStyledVar = message.replace(variable, styledVar);

	return `<span style='line-height:1.2rem'>${withStyledVar}</span>`;
}

const store = solution();

export const browserTests = store ? Object.entries(store).map(
	([variable, { value, type }]) => {
		let description;
		let test;

		if (type === 'string') {
			description = `The variable ${variable} should be declared as a non-empty string`;
			test = () => {
				if (typeof value !== 'string' || value.length === 0) {
					throw new Error(buildErrorMessage({ variable, value }));
				}
			};
		} else if (type === 'number') {
			description = `The variable ${variable} should be declared as a positive integer`;
			test = () => {
				if (
					typeof value !== 'number' ||
					value <= 0 ||
					!Number.isInteger(value)
				) {
					throw new Error(buildErrorMessage({ variable, value }));
				}
			};
		} else if (type === 'boolean') {
			description = `The variable ${variable} should be declared as a boolean`;
			test = () => {
				if (typeof value !== 'boolean') {
					throw new Error(buildErrorMessage({ variable, value }));
				}
			};
		}
		return {
			description: buildDescription({ message: description, variable }),
			test,
		};
	}
) : [];

// export const cleanup = () => {
//   document.body.innerHTML = dupeMarkup;
// };
