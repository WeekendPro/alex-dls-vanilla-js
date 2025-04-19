import {
	TestReporter,
	TestRunner,
	Drawer,
} from '../../shared/DeveloperDrawer/index.js';
import { browserTests } from '../tests/browser-tests.js';

async function initializeDevDrawer() {
	const drawer = new Drawer({
		projectTitle: 'The Spark Within',
		studyGuidePath: '../STUDY-GUIDE.md',
		descriptionPath: '../DESCRIPTION.md'
	});

	const testRunner = new TestRunner(browserTests);
	const reporter = new TestReporter(drawer);

	await testRunner.runTests(reporter);
	await drawer.initialize(reporter.results);

	document.querySelector('[data-tab="tests"]').addEventListener('click', () => {
		testRunner.runTests(reporter);
	});
}

window.initializeDevDrawer = initializeDevDrawer;
initializeDevDrawer().catch(console.error);
