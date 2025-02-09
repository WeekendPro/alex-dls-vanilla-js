export class TestReporter {
	constructor(drawer) {
		this.drawer = drawer;
		this.results = new Map();
	}

	onTestStart(test) {
		this.results.set(test.fullName, {
			description: test.fullName,
			status: 'running',
		});
		this.updateDevDrawer();
	}

	onTestResult(test, testResult) {
		this.results.set(test.fullName, {
			description: test.fullName,
			status: testResult.status === 'passed' ? 'passing' : 'failing',
			error:
				testResult.status === 'failed' ? testResult.failureMessages[0] : null,
		});
		this.updateDevDrawer();
	}

	updateDevDrawer() {
		if (this.drawer) {
			this.drawer.updateTestResults(Array.from(this.results.values()));
		}
	}
}
