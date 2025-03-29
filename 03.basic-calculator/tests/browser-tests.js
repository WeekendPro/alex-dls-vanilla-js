// web-dev-course/week-0/basic-calculator/tests/browser-tests.js
import {
	INTEGER_BUTTONS,
	NON_INTEGER_BUTTONS,
	triggerClicks,
} from './test-utils.js';

const { zero, one, two, three, four, five, six, seven, eight, nine } =
	INTEGER_BUTTONS;

const { decimal, clear, equals, multiply, divide, subtract, add } =
	NON_INTEGER_BUTTONS;

// Helper to restore display and clear calculator before each test
function resetCalculator() {
	display.textContent = '0';
}

function runTest({
	clicks,
	expectedResult,
	errorMessage,
	manualInput = undefined,
	manualCleanup = undefined,
}) {
	resetCalculator();

	triggerClicks(clicks);

	if (manualInput) {
		manualInput();
	}

	const inputResults = display.textContent;
	console.log(display.textContent);

	if (manualCleanup) {
		manualCleanup();
	}

	resetCalculator();
	if (inputResults !== expectedResult) {
		throw new Error(errorMessage);
	}
}

const display = document.getElementById('display');

export const browserTests = [
	// User Input Tests
	{
		description: 'Display shows the correct numbers as you click them',
		test: () => {
			runTest({
				// clicks every number
				clicks: [one, two, three, four, five, six, seven, eight, nine, zero],
				expectedResult: '1234567890',
				errorMessage:
					'Clicking number buttons should update the display with those numbers. Try checking if your click handlers are correctly set up for all number buttons.',
			});
		},
	},
	{
		description: 'Calculator displays decimal points for non-whole numbers',
		test: () => {
			runTest({
				clicks: [three, decimal, one, four], // clicks 3.14
				expectedResult: '3.14',
				errorMessage:
					'Your calculator should allow decimal points to create numbers like 3.14. Check that your decimal button adds a "." to the display when clicked.',
			});
		},
	},
	{
		description: 'Calculator can start numbers with a decimal point',
		test: () => {
			runTest({
				clicks: [decimal, eight, five], // clicks .85
				expectedResult: '0.85',
				errorMessage:
					'When starting with a decimal point, your calculator should show numbers like 0.85. Make sure you handle cases where the decimal comes first!',
			});
		},
	},
	{
		description: 'Calculator prevents multiple decimal points in a number',
		test: () => {
			runTest({
				clicks: [one, decimal, five, decimal], // clicks 1.5.
				expectedResult: '1.5',
				errorMessage:
					'Your calculator should ignore extra decimal points. A number like 1.5 should stay as 1.5 even if the decimal is clicked again.',
			});
		},
	},
	{
		description:
			'Calculator allows decimal points in both numbers of an operation and rounds to 2 decimal places',
		test: () => {
			// clicks 1.55 x 1.59 =
			runTest({
				clicks: [
					one,
					decimal,
					five,
					five,
					multiply,
					one,
					decimal,
					five,
					nine,
					equals,
				],
				expectedResult: '2.46',
				errorMessage:
					'Your calculator should allow decimal points in both numbers of an operation and round results to 2 decimal places. For example, 1.55 × 1.59 should equal 2.46. Make sure your decimal point restriction only applies within each number, and that all results are rounded to 2 decimal places.',
			});
		},
	},

	// Basic Operations Tests
	{
		description: 'Calculator adds numbers correctly',
		test: () => {
			runTest({
				clicks: [two, add, three, equals], // clicks 2 + 3 =
				expectedResult: '5',
				errorMessage:
					'Basic addition is not working correctly. When calculating 2 + 3, the display should show 5. Check your addition operator logic.',
			});
		},
	},
	{
		description: 'Calculator subtracts numbers correctly',
		test: () => {
			runTest({
				clicks: [five, subtract, three, equals], // clicks 5 - 3 =
				expectedResult: '2',
				errorMessage:
					'Basic subtraction is not working correctly. When calculating 5 - 3, the display should show 2. Check your subtraction operator logic.',
			});
		},
	},
	{
		description: 'Calculator multiplies numbers correctly',
		test: () => {
			runTest({
				clicks: [four, multiply, three, equals], // clicks 4 x 3 =
				expectedResult: '12',
				errorMessage:
					'Basic multiplication is not working correctly. When calculating 4 × 3, the display should show 12. Check your multiplication operator logic.',
			});
		},
	},
	{
		description: 'Calculator divides numbers correctly',
		test: () => {
			runTest({
				clicks: [eight, divide, two, equals], // clicks 8 / 2 =
				expectedResult: '4',
				errorMessage:
					'Basic division is not working correctly. When calculating 8 ÷ 2, the display should show 4. Check your division operator logic.',
			});
		},
	},

	// Edge Cases Tests
	{
		description: 'Calculator handles division by zero gracefully',
		test: () => {
			runTest({
				clicks: [five, divide, zero, equals], // clicks 5 / 0 =
				expectedResult: 'Error',
				errorMessage:
					'When dividing by zero (like 5 ÷ 0), your calculator should display "Error". This is an important safety check for invalid calculations.',
			});
		},
	},
	{
		description: 'Calculator formats numbers without unnecessary zeros',
		test: () => {
			runTest({
				clicks: [zero, zero, one], // clicks 001
				expectedResult: '1',
				errorMessage:
					'When typing a number like "001", the calculator should display it as "1". Extra zeros at the start of a number should be removed.',
			});
		},
	},
	{
		description: 'Calculator properly updates operations when changed',
		test: () => {
			runTest({
				clicks: [five, add, subtract, three, equals], // clicks 5 + - 3 =
				expectedResult: '2',
				errorMessage:
					'If a user changes their mind about an operation (clicking + then changing to -), the calculator should use the last operator selected. Here, 5 - 3 should equal 2.',
			});
		},
	},
	{
		description: 'Clear button resets the display',
		test: () => {
			runTest({
				clicks: [one, two, clear], // clicks C
				expectedResult: '0',
				errorMessage:
					'The clear button (C) should reset your display to 0. Check that your clear button is properly clearing the current calculation.',
				manualInput: display.textContent.includes('0')
					? undefined
					: () => {
							console.log(one, two);
							display.textContent = '12';
						},
				manualCleanup: () => (display.textContent = '0'), // manually reset display
			});
		},
	},

	// Complex Operations Tests
	{
		description:
			'Calculator processes multiple operations in sequence (ignoring PEMDAS)',
		test: () => {
			runTest({
				clicks: [two, add, three, multiply, four, equals], // clicks 2 + 3 x 4 =
				expectedResult: '20',
				errorMessage:
					"For this test, ignore PEMDAS (order of operations). Just calculate from left to right: 2 + 3 = 5, then 5 × 4 = 20. Advanced calculators would handle PEMDAS, but we're keeping it simple for now.",
			});
		},
	},
	{
		description: 'Calculator can create negative results',
		test: () => {
			runTest({
				clicks: [one, zero, subtract, one, five, equals], // clicks 10 - 15 =
				expectedResult: '-5',
				errorMessage:
					'Your calculator should be able to display negative results. For example 10 minus 15 should make the result -5.',
			});
		},
	},

	// Advanced Operation:
	// {
	// 	description: 'Calculator performs operations in the correct sequence',
	// 	test: () => {
	// 		runTest({
	// 			clicks: [two, add, three, multiply, four, equals],
	// 			expectedResult: '14',
	// 			errorMessage:
	// 				'Your calculator should follow the order of operations (PEMDAS). For 2 + 3 × 4, it should calculate 3 × 4 first (12) and then add 2, giving 14. Currently, your calculator is calculating from left to right instead.',
	// 		});
	// 	},
	// },
];
