function solution() {
	const upDown = document.getElementById('up-down');
	const dayNight = document.getElementById('day-night');
	const leftRight = document.getElementById('left-right');

	// Write your code here
}

if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', solution);
} else {
	Promise.resolve().then(() => {
		solution();
	});
}

export { solution };
