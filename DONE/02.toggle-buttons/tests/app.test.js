import { describe, test, expect } from '@jest/globals';

describe('Up/Down Button', () => {
	const upDownButton = document.getElementById('up-down');

	test('should have correct initial text and class', () => {
		expect(upDownButton.textContent).toBe('Up');
		expect(upDownButton.classList.contains('up')).toBe(true);
		expect(upDownButton.classList.contains('down')).toBe(false);
	});

	test('should toggle text and classes on click', () => {
		// First click
		upDownButton.click();
		expect(upDownButton.textContent).toBe('Down');
		expect(upDownButton.classList.contains('up')).toBe(false);
		expect(upDownButton.classList.contains('down')).toBe(true);

		// Second click
		upDownButton.click();
		expect(upDownButton.textContent).toBe('Up');
		expect(upDownButton.classList.contains('up')).toBe(true);
		expect(upDownButton.classList.contains('down')).toBe(false);
	});
});

describe('Day/Night Button', () => {
	const dayNightButton = document.getElementById('day-night');

	test('should have correct initial text and class', () => {
		expect(dayNightButton.textContent).toBe('Night');
		expect(dayNightButton.classList.contains('night')).toBe(true);
		expect(dayNightButton.classList.contains('day')).toBe(false);
	});

	test('should toggle text and classes on click', () => {
		// First click
		dayNightButton.click();
		expect(dayNightButton.textContent).toBe('Day');
		expect(dayNightButton.classList.contains('night')).toBe(false);
		expect(dayNightButton.classList.contains('day')).toBe(true);

		// Second click
		dayNightButton.click();
		expect(dayNightButton.textContent).toBe('Night');
		expect(dayNightButton.classList.contains('night')).toBe(true);
		expect(dayNightButton.classList.contains('day')).toBe(false);
	});
});

describe('Left/Right Button', () => {
	const leftRightButton = document.getElementById('left-right');

	test('should have correct initial text and class', () => {
		expect(leftRightButton.textContent).toBe('Left');
		expect(leftRightButton.classList.contains('left')).toBe(true);
		expect(leftRightButton.classList.contains('right')).toBe(false);
	});

	test('should toggle text and classes on click', () => {
		// First click
		leftRightButton.click();
		expect(leftRightButton.textContent).toBe('Right');
		expect(leftRightButton.classList.contains('left')).toBe(false);
		expect(leftRightButton.classList.contains('right')).toBe(true);

		// Second click
		leftRightButton.click();
		expect(leftRightButton.textContent).toBe('Left');
		expect(leftRightButton.classList.contains('left')).toBe(true);
		expect(leftRightButton.classList.contains('right')).toBe(false);
	});
});

describe('Button Common Properties', () => {
	test('all buttons should have btn class', () => {
		const buttons = document.querySelectorAll('button');
		buttons.forEach((button) => {
			expect(button.classList.contains('btn')).toBe(true);
		});
	});

	test('all buttons should be inside container div', () => {
		const container = document.querySelector('.container');
		const buttons = document.querySelectorAll('button');
		buttons.forEach((button) => {
			expect(container.contains(button)).toBe(true);
		});
	});
});
