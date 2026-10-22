// Method 1 : Array.from(arrayLike, mapFn, thisArg)

// 1. First Argument: "arrayLike" represents an iterable or array-like object to convert to an array.
// 2. Second Argument: A mapping function applied to each element as the new array is created. It takes element and index only.
// 3. Array.from() never creates a sparse array. If the items object is missing some index properties,
// they become undefined in the new array.

// Purpose 1: Copying Array Elements Using Array.from()

// Case 1: When elements are objects, only their references are copied.
// The original and copied arrays share references to the same objects (both arrays refer to the same objects in memory.)
const originalUsers = [{ name: "John" }, { name: "Jane" }];
const copiedUsers = Array.from(originalUsers);

copiedUsers[0].name = "Barb";

console.log(copiedUsers); // [{ name: "Barb" }, { name: "Jane" }]
console.log(originalUsers); // [{ name: "Barb" }, { name: "Jane" }]

// Case 2: When elements are primitive values, their values are copied.
const originalNumbers = [10, 20, 30];
const copiedNumbers = Array.from(originalNumbers);

copiedNumbers[0] = 100;

console.log(copiedNumbers); // [100, 20, 30]
console.log(originalNumbers); // [10, 20, 30]

// Purpose 2: Converting an Array-Like Object into an Array Using Array.from()
let colors = {
  0: "red",
  1: "green",
  2: "blue",
  length: 3,
};

// Case 1: Converts the iterable into an array first, then applies map().
// A separate intermediate array is created before the transformation.
console.log(Array.from(colors).map((e) => e.toUpperCase()));

// Case 2: Converts the iterable into an array and transforms its elements in one step.
// Avoids creating a separate intermediate array, making it a concise approach for simple transformations.
console.log(Array.from(colors, (e, i) => "$" + e.toUpperCase()));

// Case 3: Dynamically creating array elements using Array.from()
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
