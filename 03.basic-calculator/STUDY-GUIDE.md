# Basic Calculator Study Guide

## Core Concepts

### 1. DOM Manipulation

- **What you need to know:**
  - Selecting elements (getElementById, querySelector)
  - Modifying element content and attributes
  - Creating and removing elements
  - Event delegation
- **Resources:**
  - 📺 [JavaScript DOM Manipulation – Full Course for Beginners](https://www.youtube.com/watch?v=5fb2aPlgoys)
  - 📝 [DOM Manipulation Methods Cheatsheet](https://www.codecademy.com/learn/fscp-building-interactive-websites-with-javascript/modules/fecp-javascript-and-the-dom/cheatsheet)
  - 🔗 [MDN: Document Object Model](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)

### 2. Event Handling

- **What you need to know:**
  - addEventListener syntax and usage
  - Common event types (click, keydown)
  - Event object properties
  - Event bubbling and capturing
- **Resources:**
  - 📺 [JavaScript Events Explained](https://www.youtube.com/watch?v=e7v4mxW-aOo)
  - 📝 [JavaScript Events Deep Dive](https://javascript.info/events)
  - 🔗 [MDN: Introduction to Events](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events)

### 3. JavaScript Numbers and Arithmetic

- **What you need to know:**
  - Number type in JavaScript
  - Type coercion in calculations
  - Floating-point precision issues
  - NaN and Infinity
- **Common Gotchas:**

  ```javascript
  // String concatenation vs addition
  '2' + 2; // "22" (string concatenation)
  '2' - 2; // 0 (numeric subtraction)

  // Floating point precision
  0.1 + 0.2; // 0.30000000000000004

  // parseInt vs parseFloat
  parseInt('2.5'); // 2
  parseFloat('2.5'); // 2.5
  ```

- **Resources:**
  - 📺 [JavaScript Numbers Explained](https://www.youtube.com/watch?v=5yPf74sCu2k)
  - 📝 [Numbers in JavaScript](https://javascript.info/number)
  - 🔗 [MDN: Numbers and dates](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Numbers_and_dates)

### 4. State Management

- **What you need to know:**
  - Managing application state
  - Data flow between functions
  - State vs UI synchronization
- **Resources:**
  - 📺 [JavaScript State Management](https://www.youtube.com/watch?v=kFe-xaM6fAc)
  - 📝 [Managing State in JavaScript](https://dev.to/javascript/managing-state-in-javascript-47ch)

## Practice Exercises

1. **DOM Manipulation Warmup:**

   ```javascript
   // Practice creating a dynamic list
   const numbers = [1, 2, 3, 4, 5];
   const ul = document.createElement('ul');
   numbers.forEach((num) => {
   	const li = document.createElement('li');
   	li.textContent = num;
   	ul.appendChild(li);
   });
   ```

2. **Event Handler Practice:**
   ```javascript
   // Create a button that changes color on click
   const button = document.createElement('button');
   button.addEventListener('click', (e) => {
   	const colors = ['red', 'blue', 'green', 'yellow'];
   	const randomColor = colors[Math.floor(Math.random() * colors.length)];
   	e.target.style.backgroundColor = randomColor;
   });
   ```

## Debugging Tips

1. **Console Methods:**

   - `console.log()` for general output
   - `console.table()` for arrays and objects
   - `console.trace()` for call stack information

2. **Chrome DevTools:**
   - Using breakpoints
   - Watch expressions
   - Step through code
   - Monitor events

## Testing Your Understanding

Before starting the calculator implementation, make sure you can answer these questions:

1. How would you select all number buttons and add click events to them?
2. How would you handle keyboard input for numbers and operators?
3. How would you store the current calculation state?
4. How would you handle division by zero?
5. How would you format decimal numbers to avoid display issues?

## Additional Resources

### Books

- "Eloquent JavaScript" by Marijn Haverbeke (Chapter 14: The Document Object Model)
- "JavaScript: The Good Parts" by Douglas Crockford

### Interactive Learning

- [JavaScript30](https://javascript30.com/) - Day 1: Drum Kit (Event Handling)
- [Codecademy: Building Interactive JavaScript Websites](https://www.codecademy.com/learn/build-interactive-websites)

### Documentation

- [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [JavaScript.info](https://javascript.info/)
