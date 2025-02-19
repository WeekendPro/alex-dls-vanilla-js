export const browserTests = [
	// Initial TextContent
	{
		description: 'Up/Down button should start with `Up` text',
		test: () => {
			const button = document.getElementById('up-down');
			if (button.textContent.toLowerCase() !== 'up') {
				throw new Error("Button should display 'Up' when the page loads");
			}
		},
	},
	{
		description: 'Day/Night button should start with `Day` text',
		test: () => {
			const button = document.getElementById('day-night');
			if (button.textContent.toLowerCase() !== 'day') {
				throw new Error("Button should display 'Day' when the page loads");
			}
		},
	},
	{
		description: 'Left/Right button should start with `Left` text',
		test: () => {
			const button = document.getElementById('left-right');
			if (button.textContent.toLowerCase() !== 'left') {
				throw new Error("Button should display 'Left' when the page loads");
			}
		},
	},
	// Initial btn class
	{
		description: 'Up/Down button should start with a class `btn` on it',
		test: () => {
			const button = document.getElementById('up-down');
			if (!button.classList.contains('btn')) {
				throw new Error("Button should have 'btn' class when the page loads");
			}
		},
	},
	{
		description: 'Day/Night button should start with a class `btn` on it',
		test: () => {
			const button = document.getElementById('day-night');
			if (!button.classList.contains('btn')) {
				throw new Error("Button should have 'btn' class when the page loads");
			}
		},
	},
	{
		description: 'Left/Right button should start with a class `btn` on it',
		test: () => {
			const button = document.getElementById('left-right');
			if (!button.classList.contains('btn')) {
				throw new Error("Button should have 'btn' class when the page loads");
			}
		},
	},

	// Initial button-specific classes
	{
		description: 'Up/Down button should start with a class `up` on it',
		test: () => {
			const button = document.getElementById('up-down');
			if (!button.classList.contains('up')) {
				throw new Error("Button should have 'up' class when the page loads");
			}
		},
	},
	{
		description: 'Day/Night button should start with a class `day` on it',
		test: () => {
			const button = document.getElementById('day-night');
			if (!button.classList.contains('day')) {
				throw new Error("Button should have 'day' class when the page loads");
			}
		},
	},
	{
		description: 'Left/Right button should start with a class `left` on it',
		test: () => {
			const button = document.getElementById('left-right');
			if (!button.classList.contains('left')) {
				throw new Error("Button should have 'left' class when the page loads");
			}
		},
	},

	// Toggle TextContent
	{
		description: 'Up/Down button text should toggle between `Up` / `Down`',
		test: () => {
			const a = 'Up';
			const b = 'Down';
			const btn = document.getElementById('up-down');
			const btnState = {
				classes: [...btn.classList],
				content: btn.textContent,
			};

			if (btn.textContent === a) {
				btn.textContent = b;
				testToggleContent(btn, b, a, btnState);
				testToggleContent(btn, a, b, btnState);
			}

			if (btn.textContent === b) {
				btn.textContent = a;
				testToggleContent(btn, a, b, btnState);
				testToggleContent(btn, b, a, btnState);
			}

			if (btn.textContent !== a && btn.textContent !== b) {
				btn.textContent = a;
				testToggleContent(btn, a, b, btnState);

				btn.textContent = b;
				testToggleContent(btn, b, a, btnState);
			}
		},
	},
	{
		description: 'Day/Night button text should toggle between `Day` / `Night`',
		test: () => {
			const a = 'Day';
			const b = 'Night';
			const btn = document.getElementById('day-night');
			const btnState = {
				classes: [...btn.classList],
				content: btn.textContent,
			};

			if (btn.textContent === a) {
				btn.textContent = b;
				testToggleContent(btn, b, a, btnState);
				testToggleContent(btn, a, b, btnState);
			}

			if (btn.textContent === b) {
				btn.textContent = a;
				testToggleContent(btn, a, b, btnState);
				testToggleContent(btn, b, a, btnState);
			}

			if (btn.textContent !== a && btn.textContent !== b) {
				btn.textContent = a;
				testToggleContent(btn, a, b, btnState);

				btn.textContent = b;
				testToggleContent(btn, b, a, btnState);
			}
		},
	},
	{
		description:
			'Left/Right button text should toggle between `Left` / `Right`',
		test: () => {
			const a = 'Left';
			const b = 'Right';
			const btn = document.getElementById('left-right');
			const btnState = {
				classes: [...btn.classList],
				content: btn.textContent,
			};

			if (btn.textContent === a) {
				btn.textContent = b;
				testToggleContent(btn, b, a, btnState);
				testToggleContent(btn, a, b, btnState);
			}

			if (btn.textContent === b) {
				btn.textContent = a;
				testToggleContent(btn, a, b, btnState);
				testToggleContent(btn, b, a, btnState);
			}

			if (btn.textContent !== a && btn.textContent !== b) {
				btn.textContent = a;
				testToggleContent(btn, a, b, btnState);

				btn.textContent = b;
				testToggleContent(btn, b, a, btnState);
			}
		},
	},

	// Toggle classes
	{
		description:
			'Up/Down button should toggle classes based on the text `Up` / `Down`',
		test: () => {
			const a = 'up';
			const b = 'down';
			const btn = document.getElementById('up-down');
			const btnState = {
				classes: [...btn.classList],
				content: btn.textContent,
			};
			testToggleClasses(btn, a, b, btnState);
			testToggleClasses(btn, b, a, btnState);

			if (btn.classList.contains(a)) {
				btn.classList.remove(a);
				btn.classList.add(b);
				testToggleClasses(btn, a, b, btnState);
				testToggleClasses(btn, b, a, btnState);
			}

			if (btn.classList.contains(b)) {
				btn.classList.remove(b);
				btn.classList.add(a);
				testToggleClasses(btn, b, a, btnState);
				testToggleClasses(btn, a, b, btnState);
			}

			if (!btn.classList.contains(a) && !btn.classList.contains(b)) {
				btn.classList.add(a);
				testToggleClasses(btn, a, b, btnState);

				btn.classList.add(b);
				testToggleClasses(btn, b, a, btnState);
			}
		},
	},
	{
		description:
			'Day/Night button should toggle classes based on the text `Day` / `Night`',
		test: () => {
			const a = 'day';
			const b = 'night';
			const btn = document.getElementById('day-night');
			const btnState = {
				classes: [...btn.classList],
				content: btn.textContent,
			};

			testToggleClasses(btn, a, b, btnState);
			testToggleClasses(btn, b, a, btnState);

			if (btn.classList.contains(a)) {
				btn.classList.remove(a);
				btn.classList.add(b);
				testToggleClasses(btn, a, b, btnState);
				testToggleClasses(btn, b, a, btnState);
			}

			if (btn.classList.contains(b)) {
				btn.classList.remove(b);
				btn.classList.add(a);
				testToggleClasses(btn, b, a, btnState);
				testToggleClasses(btn, a, b, btnState);
			}

			if (!btn.classList.contains(a) && !btn.classList.contains(b)) {
				btn.classList.add(a);
				testToggleClasses(btn, a, b, btnState);

				btn.classList.add(b);
				testToggleClasses(btn, b, a, btnState);
			}
		},
	},
	{
		description:
			'Left/Right button should toggle classes based on the text `Left` / `Right`',
		test: () => {
			const a = 'left';
			const b = 'right';
			const btn = document.getElementById('left-right');
			const btnState = {
				classes: [...btn.classList],
				content: btn.textContent,
			};

			testToggleClasses(btn, a, b, btnState);
			testToggleClasses(btn, b, a, btnState);

			if (btn.classList.contains(a)) {
				btn.classList.remove(a);
				btn.classList.add(b);
				testToggleClasses(btn, a, b, btnState);
				testToggleClasses(btn, b, a, btnState);
			}

			if (btn.classList.contains(b)) {
				btn.classList.remove(b);
				btn.classList.add(a);
				testToggleClasses(btn, b, a, btnState);
				testToggleClasses(btn, a, b, btnState);
			}

			if (!btn.classList.contains(a) && !btn.classList.contains(b)) {
				btn.classList.add(a);
				testToggleClasses(btn, a, b, btnState);

				btn.classList.add(b);
				testToggleClasses(btn, b, a, btnState);
			}
		},
	},
];

function resetter(button, { classes: incomingClasses, content }) {
	const appliedClasses = [...button.classList];

	for (const cl of appliedClasses) {
		button.classList.remove(cl);
	}

	for (const cl of incomingClasses) {
		button.classList.add(cl);
	}

	button.textContent = content;
}

function testToggleClasses(button, a, b, state) {
	if (button.classList.contains(a)) {
		button.click();
		if (!button.classList.contains(b) || button.classList.contains(a)) {
			resetter(button, state);
			throw new Error('Button classes should toggle when button is clicked');
		}
		resetter(button, state);
	}
}

function testToggleContent(button, a, b, state) {
	if (button.textContent === a) {
		button.click();
		if (button.textContent !== b) {
			resetter(button, state);
			throw new Error('Button text should toggle when it is clicked');
		}
		resetter(button, state);
	}
}
