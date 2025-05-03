# Part 1: Core Transformation & Iteration (`map`, `filter`, `reduce`, `forEach`)

## Overview

This section focuses on the workhorse methods for manipulating array data. You'll learn how to transform each element into something new (`map`), select only the elements that meet certain criteria (`filter`), aggregate or "boil down" an array into a single summary value (`reduce`), and perform an action for each element without necessarily creating a new array (`forEach`).

## Purpose & Scenarios

### `map`

- Used when you need a new array of the same length, but with each element transformed based on the original
- Examples:
  - Converting a list of user objects into just a list of their email addresses
  - Converting Celsius temperatures to Fahrenheit

### `filter`

- Used when you need a new array containing only a subset of the original elements that pass a specific test
- Examples:
  - Filtering a list of products to show only those in stock
  - Selecting comments that match a search term

### `reduce`

- The most versatile but sometimes complex method
- Used when you need to process an array down to a single result
- Common uses:
  - Summing numbers (like a shopping cart total)
  - Finding the largest or smallest value
  - Grouping items into categories
  - Implementing other array methods like map or filter

### `forEach`

- Used when you simply want to do something with each element
- Examples:
  - Printing to the console
  - Updating something in a database for each item
  - Modifying elements within the array if those elements are objects or arrays themselves (side effects)
- Unlike map, it doesn't create a new array of results

## Key Concepts

1. **Transformation**: Creating a new representation of data (`map`)
2. **Selection/Filtering**: Choosing specific data based on conditions (`filter`)
3. **Aggregation/Summarization**: Combining data into a single summary (`reduce`)
4. **Iteration/Side Effects**: Performing actions for each item (`forEach`)

## Gotchas & Distinctions

### map vs forEach

- **map** returns a new array containing the results of applying the function to each element. Use it when you need the results.
- **forEach** returns `undefined`. It's used for its side effects (actions performed during iteration), not for generating a new array of values.
  - Don't try to assign the result of forEach to a variable expecting a transformed array – you'll just get `undefined`

### Immutability (Generally)

- `map` and `filter` are immutable operations – they create new arrays and leave the original array untouched
- `reduce` also doesn't change the original array
- `forEach` can modify the original array if your callback function modifies object properties or array elements within the array, but `forEach` itself doesn't inherently mutate the array's structure

### reduce Complexity

- The `reduce` method takes a callback function with an accumulator (the value being built up) and the currentValue
- Understanding how the accumulator carries over from one iteration to the next is key
- Providing an optional initialValue as the second argument to reduce is often essential, especially when working with objects or non-numeric summaries
