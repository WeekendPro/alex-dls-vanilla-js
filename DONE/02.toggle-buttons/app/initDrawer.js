import {
	TestReporter,
	TestRunner,
	Drawer,
} from '../../shared/DeveloperDrawer/index.js';
import { browserTests } from '../tests/browser-tests.js';

async function initializeDevDrawer() {
	// Initialize DevDrawer
	const drawer = new Drawer({
		projectTitle: 'Toggle Button',
		studyGuidePath: '../STUDY-GUIDE.md',
	});

	// Initialize test runner with browser-compatible tests
	const testRunner = new TestRunner(browserTests);
	const reporter = new TestReporter(drawer);

	await testRunner.runTests(reporter);
	await drawer.initialize(reporter.results);
}

// Initialize and store the drawer instance globally for debugging
window.initializeDevDrawer = initializeDevDrawer;
initializeDevDrawer().catch(console.error);
