// Method: Object.fromEntries(iterable) converts an iterable of key-value pairs into an object.

// If the iterable contains individual values rather than key-value pairs, we must transform those values
// into pairs before passing them to the method. A plain object must also be converted into an iterable,
// typically using Object.entries(), before it can be passed directly to Object.fromEntries().

// Example 1: Converting a Map to an Object

const fruits = new Map();
fruits.set("apples", 300);
fruits.set("oranges", 80);
fruits.set("grapes", 250);
fruits.set("dragon", 700);
console.log(fruits);
console.log(Object.fromEntries(fruits));

// Example 2: Converting a Set to an Object
const gadgets = new Set(["Mobile", "Laptop", "Headphones", "Smartwatch"]);
// console.log(Object.fromEntries(gadgets)) // TypeError: Iterator value Mobile is not an entry object.

// Workaround: Convert Set elements into key-value pairs
const gadgetEntries = Array.from(gadgets, (element, index) => [index, element]);
console.log(Object.fromEntries(gadgetEntries));

// Example 3: Object transformations
const object1 = { a: 1, b: 2, c: 3 };
const object2 = Object.fromEntries(
  Object.entries(object1).map(([key, val]) => [key, val * 2]),
);
console.log(object2);

// Example 4: Filtering properties

const obj = { a: 1, b: null, c: 3 };
const filtered = Object.fromEntries(
  Object.entries(obj).filter(([_, value]) => value !== null),
);
console.log(filtered); // Output: { a: 1, c: 3 }

// Example 5: Converting an Array to an Object
const RGBColors = ["red", "blue", "green"];
const RGBColorsEntries = Object.fromEntries(
  RGBColors.map((value, index) => [index, value]),
);
console.log(RGBColorsEntries);
// { 0: "Apple", 1: "Banana", 2: "Orange" }
