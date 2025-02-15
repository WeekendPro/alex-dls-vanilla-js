// web-dev-course/shared/DeveloperDrawer/devDrawerTemplate.js
export const DeveloperDrawerTemplate = `
<template id="dev-drawer-template">
  <button id="dev-drawer-toggle" class="dev-drawer-toggle">
    <div class="hamburger">
      <span class="bar top"></span>
      <span class="bar bottom"></span>
    </div>
  </button>

  <div id="dev-drawer" class="dev-drawer">
    <span class="dev-drawer-logo">
      <span id="weekend">Weekend</span>
      <span id="pro">Pro</span>
    </span>

    <div class="project-status">
      <div class="project-name">
        <div class="label">Challenge</div>
        <div class="value title">
          <!-- Challenge title will be dynamically inserted here -->
        </div>
      </div>
      <div class="project-progress">
        <div class="label">Progress</div>
        <div class="progress-container">
          <span class="progress-bar">
            <span class="progress-text">
              <!-- Project progress will be dynamically inserted here -->
            </span>
          </span>
        </div>
      </div>
    </div>

    <div class="dev-drawer-tabs">
      <button class="tab-button active" data-tab="tests">
        🧪 
        Tests
      </button>
      <button class="tab-button" data-tab="study">
        🧭
        Directions
      </button>
    </div>

    <div class="dev-drawer-content">
      <div id="tests-tab" class="tab-content active">
        <div class="test-list">
          <!-- Test items will be dynamically inserted here -->
        </div>
      </div>
      <div id="study-tab" class="tab-content">
        <div class="study-guide">
          <!-- Study guide content will be dynamically inserted here -->
        </div>
      </div>
    </div>
  </div>
</template>
`;
