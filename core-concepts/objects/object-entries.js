// Method: Object.entries(obj) accepts an object and returns an array of its own, enumerable, string-keyed property entries.
// Symbol-keyed properties are excluded.

// Each entry is a two-element array containing the property's key and value.
// Notice that:
// - The outer array contains all the entries.
// - Each inner array contains a key at index 0 and its corresponding value at index 1.

const parent = { name: "Brian", location: "London", [Symbol("id")]: 2096938 };

const child = Object.create(parent);
child.gender = "male";
child.occupation = "Assistant Professor";
child.age = 38;

console.log(Object.entries(parent)); // 1. Includes only string-keyed properties.
console.log(Object.entries(child)); // 2. Includes only own and enumerable properties.

console.log(Object.entries("Apple")); // 3. Passing a string → returns array of [index, character] pairs
console.log(Object.entries(1234)); // 4. Passing any other primitive → returns []
