## Array References - Part 1

1. arr.push()
2. arr.pop()
3. arr.unshift()
4. arr.shift()
5. arr.concat()

## 1. arr.push(element1, element2, ...)

- This method appends values to the end of an array and returns the new length of the array.

```js
const sports = ["soccer", "baseball"];
sports.push("football", "swimming");
console.log(sports);
```

## 2. arr.unshift(element1, element2, ...)

- This method has similar behavior to push(), but applied to the start of an array.

## 3. arr.pop()

- Removes the last element from an array and returns that element. This method changes the length of the array.
- undefined if the array is empty.
- To return a new array with the last element removed. `arr.slice(0, -1)` or `arr.slice(0, arr.length - 1)`

## 4. arr.shift()

- This method removes the first element from an array and returns that element. This method changes the length of the array.
- undefined if the array is empty.
- To return a new array with the first element removed. `arr.slice(1)`

## Why is it faster to work with the end of an array than with its beginning?

- Methods push or pop run fast, while shift or unshift are slow.
- It’s not enough to take and remove the element with the index 0. Other elements need to be renumbered as well.
- The shift operation must do 3 things
  - Remove the element with the index 0.
  - Move all elements to the left, renumber them from the index 1 to 0, from 2 to 1 and so on.
  - Update the length property.

- **The more elements in the array, the more time to move them, more in-memory operations whereas the pop method does not need to move anything, because other elements keep their indexes. That’s why it’s blazingly fast.**

## A word about "length" property

- Another interesting thing about the length property is that it’s writable.
- If we increase it manually, nothing interesting happens. But if we decrease it, the array is truncated. The process is irreversible.

```js
let arr = [1, 2, 3, 4, 5];

arr.length = 2; // Truncates the array to the first 2 elements.
console.log(arr); // [1, 2]

arr.length = 5; // Increases the length, but the process is irreversible.
console.log(arr[3]); // Expected Output: undefined
```

- So, the simplest way to clear the array is: arr.length = 0;
- Note: [] returns ""

## Merging Two Arrays

- Combine two arrays by using the spread syntax to append all elements of one array to another.
- Alternatively, use the arr.concat() method to create a new array containing elements from both arrays.

```js
const games = ["cricket", "table tennis"];
sports.push(...games);
console.log(sports);
```
