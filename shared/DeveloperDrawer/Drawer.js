import { formatter } from './markdownFormatter.js';
import { DeveloperDrawerTemplate } from './template.js';

export class Drawer {
	constructor(options = {}) {
		this.options = {
			projectTitle: options.projectTitle || 'Current Project',
			studyGuidePath: options.studyGuidePath || 'STUDY-GUIDE.md',
			descriptionPath: options.descriptionPath || 'DESCRIPTION.md'
		};

		this.testCases = [];
		this.testResults = {
			passing: 0,
			total: 0,
		};

		// Make the instance available globally
		if (typeof window !== 'undefined') {
			window.devDrawer = this;
		}
	}

	async initialize(testResults) {
		for (const val of testResults.values()) {
			if (val.status === 'passing') {
				this.testResults.passing += 1;
			}
			this.testResults.total += 1;
		}

		await this.loadTemplate();
		await this.loadContent();
		await this.loadStyles();
		this.setupEventListeners();
	}

	async loadStyles() {
		if (typeof window !== 'undefined') {
			const link = document.createElement('link');
			link.rel = 'stylesheet';
			link.href = '../../shared/DeveloperDrawer/styles.css';
			document.head.appendChild(link);
		}
	}

	async loadTemplate() {
		if (typeof window === 'undefined') return;

		const temp = document.createElement('div');
		temp.innerHTML = DeveloperDrawerTemplate;

		const template = temp.querySelector('#dev-drawer-template');
		const content = template.content.cloneNode(true);
		document.body.appendChild(content);

		this.drawer = document.getElementById('dev-drawer');
		this.toggle = document.getElementById('dev-drawer-toggle');
		this.testTab = document.getElementById('tests-tab');
		this.studyTab = document.getElementById('study-tab');
		this.descriptionTab = document.getElementById('description-tab');

		this.isOpen = true;
		this.drawer?.classList.add('open');
		this.toggle?.classList.add('open');
		document.body.classList.add('drawer-open');
	}

	async loadContent() {
		const projectTitle = this.options.projectTitle;

		const percentageComplete =
			(this.testResults.passing / this.testResults.total) * 100;

		document.querySelector('.progress-bar').style.width =
			`${percentageComplete}%`;

		document.querySelector('.progress-text').textContent =
			`${this.testResults.passing} of ${this.testResults.total}`;

		if (typeof window !== 'undefined') {
			document.querySelector('.project-status .title').innerHTML = projectTitle;
		}

		let description;
		let studyGuide;

		try {
			if (typeof process !== 'undefined' && process.versions?.node) {
				// Using require here to avoid top-level import issues
				const fs = require('fs').promises;
				studyGuide = await fs.readFile(this.options.studyGuidePath, 'utf8');
				description = await fs.readFile(this.options.descriptionPath, 'utf8');
			} else {
				studyGuide = await fetch(this.options.studyGuidePath).then((r) =>
					r.text()
				);
				description = await fetch(this.options.descriptionPath).then((r) =>
					r.text()
				);
			}

			// Only update DOM if we're in browser environment
			if (typeof window !== 'undefined') {
				this.renderDescription(description);
				this.renderTestList();
				this.renderStudyGuide(studyGuide);
			}
		} catch (error) {
			console.error('Error loading test file:', error);
			this.testCases = []; // Ensure testCases is always an array
		}
	}

	renderDescription(content) {
		if (!this.descriptionTab) return;

		const description = this.descriptionTab.querySelector('.description');
		description.innerHTML = formatter(content);
	}

	renderTestList() {
		if (!this.testTab) return;

		const testList = this.testTab.querySelector('.test-list');
		testList.innerHTML = this.testCases
			.map((test) => {
				return `
      <div class="test-item ${test.status}">
        <div class="test-status ${test.status}"></div>
        <div class="test-info">
          <div class="test-description">${test.description}</div>
          ${test.error ? `<div class="test-error">${this.formatError(test.error)}</div>` : ''}
        </div>
      </div>
    `;
			})
			.join('');
	}

	formatError(error) {
		return error.split('\n')[0].replace(/</g, '&lt;').replace(/>/g, '&gt;');
	}

	renderStudyGuide(content) {
		if (!this.studyTab) return;

		const studyGuide = this.studyTab.querySelector('.study-guide');
		studyGuide.innerHTML = formatter(content);
	}

	setupEventListeners() {
		if (typeof window === 'undefined') return;

		this.toggle?.addEventListener('click', () => {
			return this.toggleDrawer();
		});

		document.querySelectorAll('.tab-button').forEach((button) => {
			button.addEventListener('click', (e) => {
				const tab = e.target.dataset.tab;
				this.switchTab(tab);
			});
		});

		document.addEventListener('keydown', (e) => {
			if (e.key === 'Escape' && this.isOpen) {
				this.toggleDrawer();
			}
		});
	}

	toggleDrawer() {
		this.isOpen = !this.isOpen;
		this.drawer?.classList.toggle('open');
		this.toggle?.classList.toggle('open');
		document.body.classList.toggle('drawer-open');
	}

	switchTab(tab) {
		this.currentTab = tab;

		document.querySelectorAll('.tab-button').forEach((button) => {
			button.classList.toggle('active', button.dataset.tab === tab);
		});

		document.querySelectorAll('.tab-content').forEach((content) => {
			content.classList.toggle('active', content.id === `${tab}-tab`);
		});
	}

	updateTestResults(results) {
		this.testCases = results;
		this.renderTestList();
	}
}
