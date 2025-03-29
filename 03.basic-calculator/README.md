# Basic Calculator Project

## Overview

Build a functional calculator web application that can perform basic arithmetic operations. This project will help you practice DOM manipulation, event handling, and basic JavaScript logic.

## Learning Objectives

- Understand event listeners and DOM manipulation
- Practice JavaScript functions and operators
- Implement basic error handling
- Learn Git workflow and commit practices

## Requirements

### Core Features

1. Basic arithmetic operations:
   - Addition (+)
   - Subtraction (-)
   - Multiplication (\*)
   - Division (/)
2. Additional functionality:
   - Clear button (C)
   - Equal button (=)
   - Decimal point support
   - Display screen showing current input and results

### Technical Requirements

1. Use vanilla JavaScript (no frameworks)
2. Implement event listeners for:
   - Number buttons (0-9)
   - Operator buttons (+, -, \*, /)
   - Equal button (=)
   - Clear button (C)
3. Handle edge cases:
   - Division by zero
   - Multiple decimal points
   - Leading zeros
   - Maximum display length

### Git Requirements

Commit your code with meaningful messages at these milestones:

1. Initial setup and HTML/CSS review
2. Number input functionality
3. Basic operations implementation
4. Edge cases and error handling
5. Final testing and cleanup

## Getting Started

### Project Structure

```
calculator/
├── index.html
├── styles.css
├── script.js
├── README.md
└── tests/
    └── calculator.test.js
```

### Development Steps

1. Review the provided HTML/CSS structure
2. Plan your JavaScript implementation
3. Implement number input functionality
4. Add operation handling
5. Implement calculation logic
6. Add error handling
7. Test thoroughly
8. Refactor and clean up code

## Testing

Run the test suite to verify your implementation:

```bash
npm test
```

All tests must pass before the project is considered complete.

## Evaluation Criteria

- [ ] All core features are implemented
- [ ] Code is well-organized and commented
- [ ] All tests pass
- [ ] Git commit history shows logical progression
- [ ] Calculator handles edge cases gracefully

## Bonus Challenges

- Add keyboard support
- Implement backspace functionality
- Add memory functions (M+, M-, MR, MC)
- Add percentage calculations
