## arr.includes(searchElement, startIndex) | Return Value - true or false

1. If startIndex is omitted, the search starts at index 0, covering the entire array.
2. If startIndex is 0 or positive < arr.length, the search starts at that index and continues to the end of the array.
3. If startIndex >= array.length, the search doesn't happen and false is returned.
4. If startIndex is negative, add arr.length to it.
   4.1. If the calculated index is less than or equal to 0, the search starts at index 0, covering the entire array.
   4.2. Otherwise, the search starts at the calculated index.
5. arr.includes() treats -0 and +0 as equal.
6. You can search for undefined in a sparse array and get true.
7. The array is always searched from front to back.

```js
let arr = [10, NaN, 20, 30, 40, 50, 0];
console.log(arr.includes(30));
console.log(arr.includes(30, 2));
console.log(arr.includes(30, -4));
console.log(arr.includes(-0));
console.log(arr.includes(+0));
console.log(arr.includes(NaN));
console.log([1, , 3].includes(undefined));
```
