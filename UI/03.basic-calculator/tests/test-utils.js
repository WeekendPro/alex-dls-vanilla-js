const INTEGER_BUTTON_IDS = Object.freeze({
	zero: 'zero',
	one: 'one',
	two: 'two',
	three: 'three',
	four: 'four',
	five: 'five',
	six: 'six',
	seven: 'seven',
	eight: 'eight',
	nine: 'nine',
});

const NON_INTEGER_BUTTON_IDS = Object.freeze({
	decimal: 'decimal',
	clear: 'clear',
	equals: 'equals',
	multiply: 'multiply',
	divide: 'divide',
	subtract: 'subtract',
	add: 'add',
});

export const INTEGER_BUTTONS = Object.values(INTEGER_BUTTON_IDS).reduce(
	(map, id) => ({ ...map, [id]: document.getElementById(id) }),
	{}
);

export const NON_INTEGER_BUTTONS = Object.values(NON_INTEGER_BUTTON_IDS).reduce(
	(map, id) => ({ ...map, [id]: document.getElementById(id) }),
	{}
);

export function triggerClicks(elements) {
	elements.forEach((el) => el.click());
}
