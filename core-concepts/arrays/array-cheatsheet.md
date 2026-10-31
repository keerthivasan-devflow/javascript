## arr.forEach(callback, this)

- in-place array transformation
- returns undefined
- not chainable
- cannot control termination early using break or continue - use exception handling
- spare array just skips iteration for any holes

## Array.from(array-like, mapfunc, this)

- convert array-like to an array
- to create a dynamic array
- to copy array values
- returns new array
- never creates a sparse array - holes are replaces with 'undefined' keyword

## arr.fill(value, start, end)

- modifies the original array with the given value
- [].fill(0) returns [] - no change
- fill() method fills empty slots in sparse arrays with value as well

## 1. arr.find(callback, this)

- Iterates the array and returns the first element in an array that satisfies the condition. If no values satisfy the condition, undefined is returned.

## 2. arr.findLast(callback, this)

- Iterates the array in reverse order and returns the first element in an array that satisfies the condition. If no values satisfy the condition, undefined is returned.

## 3. arr.findIndex(callback, this)

- Iterates the array and returns the index of the first element in an array that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned.

## 4. arr.findLastIndex(callback, this)

- Iterates the array in reverse order and returns the index of the first element that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned.
