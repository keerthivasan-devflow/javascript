// Method 1: arr.flat(depth) → returns a new array
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
