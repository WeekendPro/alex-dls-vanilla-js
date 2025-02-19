function solution() {
	const upDown = document.getElementById('up-down');
	const dayNight = document.getElementById('day-night');
	const leftRight = document.getElementById('left-right');
	// Write your code here
	upDown.textContent = 'Up';
	dayNight.textContent = 'Day';
	leftRight.textContent = 'Left';

	upDown.classList.add('btn', 'up');
	dayNight.classList.add('btn', 'day');
	leftRight.classList.add('btn', 'left');
	
	upDown.addEventListener('click', () => {
		if (upDown.classList.contains('up')) {
			upDown.classList.remove('up');
			upDown.classList.add('down');
		} else {
			upDown.classList.remove('down');
			upDown.classList.add('up');
		}
	});

	
	dayNight.addEventListener('click', () => {
		if (dayNight.classList.contains('day')) {
			dayNight.classList.remove('day');
			dayNight.classList.add('night');
		} else {
			dayNight.classList.remove('night');
			dayNight.classList.add('day');
		}
	});

	
	leftRight.addEventListener('click', () => {
		if (leftRight.classList.contains('left')) {
			leftRight.classList.remove('left');
			leftRight.classList.add('right');
		} else {
			leftRight.classList.remove('right');
			leftRight.classList.add('left');
		}
	});

	upDown.addEventListener('click', () => {
		if (upDown.textContent === 'Up') {
			upDown.textContent = 'Down';
		} else {
			upDown.textContent = 'Up';
		}
	});

	dayNight.addEventListener('click', () => {
		if (dayNight.textContent === 'Day') {
			dayNight.textContent = 'Night';
		} else {
			dayNight.textContent = 'Day';
		}
	});

	leftRight.addEventListener('click', () => {
		if (leftRight.textContent === 'Left') {
			leftRight.textContent = 'Right';
		} else {
			leftRight.textContent = 'Left';
		}
	});
}

if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', solution);
} else {
	Promise.resolve().then(() => {
		solution();
	});
}
export { solution };
