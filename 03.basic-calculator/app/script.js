import { privateSolution } from '../solution.js';
function solution() {
	// Write your code here
	privateSolution();
}

// Initialize when DOM is ready in either environment
if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', solution);
} else {
	Promise.resolve().then(() => {
		solution();
	});
}
export { solution };
