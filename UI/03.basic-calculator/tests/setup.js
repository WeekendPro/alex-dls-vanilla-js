// web-dev-course/week-0/basic-calculator/tests/setup.js

// Set up our DOM environment first
document.body.innerHTML = `
    <div class="calculator">
      <div class="display" id="display">0</div>
      <div class="buttons">
        <button class="clear" id="clear">C</button>
        <button class="operator" id="divide">/</button>
        <button class="operator" id="multiply">*</button>
        <button class="operator" id="subtract">-</button>

        <button class="number" id="seven">7</button>
        <button class="number" id="eight">8</button>
        <button class="number" id="nine">9</button>
        <button class="operator" id="add">+</button>

        <button class="number" id="four">4</button>
        <button class="number" id="five">5</button>
        <button class="number" id="six">6</button>
        <button class="equals" id="equals">=</button>

        <button class="number" id="one">1</button>
        <button class="number" id="two">2</button>
        <button class="number" id="three">3</button>
        <button class="number" id="zero">0</button>

        <button class="number" id="decimal">.</button>
      </div>
    </div>
`;

// Import calculator after DOM setup
import '../app/script.js';

// Wait for any async initialization
await new Promise((resolve) => setTimeout(resolve, 0));
