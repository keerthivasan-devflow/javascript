// Method 1 : Array.from(arrayLike, mapFn, thisArg)

// 1. First Argument: "arrayLike" represents array-like object or an iterable to convert to an array.
// 2. Second Argument: A mapping function applied to each element as the new array is created. It takes element and index only.
// 3. Array.from() never creates a sparse array. Any holes in the source array are converted into explicit
// 'undefined' elements in the resulting array.

// Purpose 1: To convert an array-like object into an array using Array.from()
let colors = {
  0: "red",
  1: "green",
  2: "blue",
  length: 3,
};

// Case 1: Converts the iterable into an array and transforms its elements in one step.
// Avoids creating a separate intermediate array, making it a concise approach for simple transformations.
console.log(Array.from(colors, (e) => "$" + e.toUpperCase()));

// Case 2: Converts the iterable into an array first, then applies map().
// A separate intermediate array is created before the transformation.
console.log(Array.from(colors).map((e) => e.toUpperCase()));

// Purpose 2: To create dynamic array elements using Array.from()
let arr = Array.from({ length: 5 });
let zeros = Array.from({ length: 3 }, () => 0);
let naturalNumbers = Array.from({ length: 5 }, (_, i) => (i + 1) * 5);
let alphabets = Array.from({ length: 26 }, (_, i) =>
  String.fromCharCode(65 + i),
);

console.log(arr);
console.log(zeros);
console.log(naturalNumbers);
console.log(alphabets);

// Purpose 2: To copy array elements using Array.from()
// Case 1: When elements are primitive values, their values are copied.
const originalNumbers = [10, 20, 30];
const copiedNumbers = Array.from(originalNumbers);

copiedNumbers[0] = 100;

console.log(copiedNumbers); // [100, 20, 30]
console.log(originalNumbers); // [10, 20, 30]

// Case 2: When elements are objects, only their references are copied.
// The original and copied arrays share references to the same objects (both arrays refer to the same objects in memory.)
const originalUsers = [{ name: "John" }, { name: "Jane" }];
const copiedUsers = Array.from(originalUsers);

copiedUsers[0].name = "Barb";

console.log(copiedUsers); // [{ name: "Barb" }, { name: "Jane" }]
console.log(originalUsers); // [{ name: "Barb" }, { name: "Jane" }]


