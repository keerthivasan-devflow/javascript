## 1. arr.splice(startIndex, deleteCount, ...values) | Return Value - An array containing the deleted elements.

- const birds = ["Parrot", "Peacock", "Sparrow", "Eagle", "Pigeon"];

## Case 1: startIndex

1. If splice() is called with no arguments, nothing is deleted.
2. If startIndex is 0 or positive < array.length, all elements from that index to the end of the array are removed.
3. If startIndex >= array.length, no element will be deleted - but it can still add new elements to the end of the array.
4. If startIndex is negative, add arr.length to it.
   4.1. If the calculated index is less than or equal to 0, the starting index is clamped to 0.
   4.2. Otherwise, use the calculated index as the starting index.
5. If startIndex is `undefined`, `NaN`, `false`, or `null`, it is converted to 0, so it starts removing elements from the beginning of the array.
6. If startIndex is `Infinity`, the starting index is clamped to arr.length, so no elements are removed.

## Case 2: deleteCount

1. If deleteCount is 0 or negative, no elements are removed. In this case, you should specify at least one new element. But why does the documentation say you should specify at least one new element?

- It means that if deleteCount is 0 or negative, you need to provide new elements if you want the operation to change the array. Otherwise, splice() has nothing to remove or insert, so the array remains unchanged.

2. If deleteCount is omitted or is greater than or equal to the number of elements remaining in an array, then all elements from start to the end of the array will be removed.

## Sparse Array

- If the deleted portion is sparse, the array returned by splice() is sparse as well.

```js
const birds = ["Parrot", , "Sparrow", "Eagle", "Pigeon"];
console.log(birds.splice(1, 1));
```

## 2. arr.toSpliced()

- The toSpliced() method never produces a sparse array. If the source array is sparse, the empty slots will be replaced with undefined in the new array.

```js
const arr = [1, , 3, 4, , 6];
console.log(arr.toSpliced(1, 2)); // [1, 4, undefined, 6]
```
