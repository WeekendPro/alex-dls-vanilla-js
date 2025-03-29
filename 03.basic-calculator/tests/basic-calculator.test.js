// web-dev-course/week-0/basic-calculator/tests/basic-calculator.test.js
import { describe, test, expect } from '@jest/globals';
import {
	INTEGER_BUTTONS,
	NON_INTEGER_BUTTONS,
	triggerClicks,
} from './test-utils.js';

const { zero, one, two, three, four, five, six, seven, eight, nine } =
	INTEGER_BUTTONS;

const { decimal, clear, equals, multiply, divide, subtract, add } =
	NON_INTEGER_BUTTONS;

describe('Basic Calculator', () => {
	beforeEach(() => {
		// Reset calculator state before each test
		clear.click();
	});

	const display = document.getElementById('display');

	describe('User Input', () => {
		test('should display numbers when clicked', () => {
			// clicks every number
			triggerClicks([
				one,
				two,
				three,
				four,
				five,
				six,
				seven,
				eight,
				nine,
				zero,
			]);
			expect(display.textContent).toBe('1234567890');
		});

		test('should display decimal points for non-whole numbers', () => {
			// clicks 3.14
			triggerClicks([three, decimal, one, four]);
			expect(display.textContent).toBe('3.14');
		});

		test('should show zero on the left of decimal for numbers between 0 and 1', () => {
			// clicks .85
			triggerClicks([decimal, eight, five]);
			expect(display.textContent).toBe('0.85');
		});

		test('should prevent multiple decimal points in a number', () => {
			// clicks 1.5.
			triggerClicks([one, decimal, five, decimal]);
			expect(display.textContent).toBe('1.5');
		});
		test('should allow up to one decimal point per operand', () => {
			// clicks 1.55 x 1.59 =
			triggerClicks([
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
			]);
			expect(display.textContent).toBe('2.46');
		});
	});

	describe('Basic Operations', () => {
		test('should perform addition correctly', () => {
			// clicks 2 + 3 =
			triggerClicks([two, add, three, equals]);
			expect(display.textContent).toBe('5');
		});

		test('should perform subtraction correctly', () => {
			// clicks 5 - 3 =
			triggerClicks([five, subtract, three, equals]);
			expect(display.textContent).toBe('2');
		});

		test('should perform multiplication correctly', () => {
			// clicks 4 x 3 =
			triggerClicks([four, multiply, three, equals]);
			expect(display.textContent).toBe('12');
		});

		test('should perform division correctly', () => {
			// clicks 8 / 2 =
			triggerClicks([eight, divide, two, equals]);
			expect(display.textContent).toBe('4');
		});
	});

	describe('Edge Cases', () => {
		test('should handle division by zero', () => {
			// clicks 5 / 0 =
			triggerClicks([five, divide, zero, equals]);
			expect(display.textContent).toBe('Error');
		});

		test('should format number to remove leading zeros', () => {
			// clicks 001
			triggerClicks([zero, zero, one]);
			expect(display.textContent).toBe('1');
		});

		test('should allow updating operation symbol', () => {
			// clicks 5 + - 3 =
			triggerClicks([five, add, subtract, three, equals]);
			expect(display.textContent).toBe('2');
		});

		test('should clear the display', () => {
			// clicks 1 2 C
			triggerClicks([one, two, clear]);
			expect(display.textContent).toBe('0');
		});
	});

	describe('Complex Operations', () => {
		test('should handle multiple operations in sequence (ignore PEMDAS)', () => {
			// clicks 2 + 3 x 4 =
			triggerClicks([two, add, three, multiply, four, equals]);
			expect(display.textContent).toBe('20');
		});

		test('should handle negative results', () => {
			// clicks 10 - 15 =
			triggerClicks([one, zero, subtract, one, five, equals]);
			expect(display.textContent).toBe('-5');
		});
	});
});
