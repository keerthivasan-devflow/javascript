## arr.slice(start, end) | Return Value - New Sliced Array

- Note: Here, start is inclusive and end is exclusive.

- If both start is omitted, then start is clamped to 0.
- If start < arr.length, elements from the specified index to the end of the array are sliced.
- If start >= array.length, an empty array is returned.
- If start is negative, add arr.length to it.
  - If the calculated index is less than or equal to 0, the starting index is clamped to 0.
  - Otherwise, use the calculated index as the starting index.
- If start is undefined or NaN → 0

- If end >= array.length or end is omitted or undefined, array.length is used.
- If end is NaN → then 0 is used.
- +Infinity → arr.length
- -Infinity → 0

- If both start and end is omitted, then it is clamped to 0.

```js
const animals = ["ant", "bison", "camel", "duck", "elephant"];
console.log(animals.slice());
console.log(animals.slice(0));
console.log(animals.slice(10));
console.log(animals.slice(-3));

console.log(animals.slice(1, 4));
console.log(animals.slice(4, 2));
console.log(animals.slice(3, 3));

console.log(animals.slice(-5, -2));
console.log(animals.slice(-2, -5));

console.log(animals.slice(null, null));
console.log(animals.slice(null, undefined));
console.log(animals.slice(undefined, undefined));
console.log(animals.slice(undefined, 4));

console.log(animals.slice(NaN, NaN));
console.log(animals.slice(NaN, 3));

console.log(animals.slice(true, false));
console.log(animals.slice(false, true));

console.log(animals.slice(0, Infinity));
console.log(animals.slice(-Infinity, Infinity));
```
