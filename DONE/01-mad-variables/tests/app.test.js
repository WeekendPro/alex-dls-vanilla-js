import { describe, test, expect } from '@jest/globals';
import { solution } from '../app/script';

const store = solution();

describe('Variable store is accessible', () => {
	test('variable store is truthy', () => {
		expect(store).toBeTruthy();
		expect(store).toBeDefined();
	});
});

describe('Data types are correct', () => {
	Object.entries(store).forEach(([variable, { value, type }]) => {
		test(`${variable} is declared as a ${type}`, () => {
			expect(typeof value).toBe(type);
		});
	});
});

describe('String values are not blank strings', () => {
	Object.entries(store).forEach(([variable, { value, type }]) => {
		if (type === 'string') {
			test(`${variable} cannot be empty string`, () => {
				expect(value.length).toBeGreaterThan(0);
			});
		}
	});
});

describe('Numeric values are positive integers', () => {
  Object.entries(store).forEach(([variable, { value, type }]) => {
    if (type === 'number') {
      test(`${variable} is a positive integer`, () => {
        expect(value).toBeGreaterThan(0);
        expect(Number.isInteger(value)).toBeTruthy();
      });
    }
  });
});