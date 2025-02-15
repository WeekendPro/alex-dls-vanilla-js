// web-dev-course/shared/test-runner.js

export class TestRunner {
	constructor(testCases = [], cleanup) {
		this.testCases = testCases;
		this.cleanup = cleanup;
	}

	async runTest(testCase) {
		try {
			await testCase.test();
			return {
				fullName: testCase.description,
				status: 'passed',
			};
		} catch (error) {
			return {
				fullName: testCase.description,
				status: 'failed',
				failureMessages: [error.message],
			};
		}
	}

	async runTests(reporter) {
		for (const testCase of this.testCases) {
			reporter.onTestStart({
				fullName: testCase.description,
				status: 'running',
			});
			const result = await this.runTest(testCase);
			reporter.onTestResult(
				{ fullName: testCase.description },
				{
					status: result.status,
					failureMessages: result.failureMessages || [],
				}
			);
		}
	}
}
