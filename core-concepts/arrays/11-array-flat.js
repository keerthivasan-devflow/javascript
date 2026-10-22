
// Example 7: arr.flat(depth) | Return Value - New Flattened Array
// Case 1: Dense Array
let numbers = [1, 2, [3, [4, 5]]];

console.log(numbers.flat());
console.log(numbers.flat(1));

console.log(numbers.flat());
console.log(numbers.flat(1));
console.log(numbers.flat(2));

console.log(numbers.flat(Infinity));
console.log(numbers.flat(Infinity));

// Case 2: Sparse Array
// arr.flat() method will remove empty slots from the sparse array.
// For example, if depth is 1, both empty slots in the root array and in the first level of nested arrays
// are ignored, but empty slots in further nested arrays are preserved with the arrays themselves.
let sparse = [1, 3, , [2, , [3, , 4]]];
console.log(sparse.flat());

// Example 8: arr.copyWithin(target, start, end) | Return Value - It affects the original array directly.
const alphabets = ["a", "b", "c", "d", "e"];
console.log(alphabets.copyWithin(2));
console.log(alphabets.copyWithin(2, 4));
console.log(alphabets.copyWithin(2, 1, 3));
console.log([1, , 3].copyWithin(2, 1, 2)); // Sparse Array: [1, empty, empty] - Preserves empty slots