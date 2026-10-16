console.log("typeof 123: ", typeof 123);
console.log('typeof "keerthi": ', typeof "keerthi");
console.log("typeof [1, 2, 3]: ", typeof [1, 2, 3]);
console.log('typeof { name: "Keerthi" }: ', typeof { name: "Keerthi" });
console.log("typeof null: ", typeof null);
console.log("typeof undefined: ", typeof undefined);
console.log("typeof NaN: ", typeof NaN);
console.log("typeof Infinity: ", typeof Infinity);
console.log("typeof true: ", typeof true);
console.log("typeof function () {}: ", typeof function () {});
console.log("typeof class Calculator{}: ", typeof class Calculator {});
console.log("typeof Symbol: ", typeof Symbol());
console.log("typeof new Set(): ", typeof new Set());
console.log("typeof new WeakSet(): ", typeof new WeakSet());
console.log("typeof new map(): ", typeof new Map());
console.log("typeof new WeakMap(): ", typeof new WeakMap());
console.log("typeof new Date(): ", typeof new Date());
console.log("typeof Math.random(): ", typeof Math.random());

// Example 1: To check whether it is a plain object — not an array
const arr = [10, 20, 30];
const obj = { a: 10, b: 20 };

// arr !== null — This condition excludes null from being treated as an object — Because null is also typeof "object" in javascript.
console.log(typeof arr === "object" && !Array.isArray(arr) && arr !== null);
console.log(typeof obj === "object" && !Array.isArray(obj) && obj !== null);

console.log(typeof obj === "object" && obj !== null && Object.getPrototypeOf(obj) === Object.prototype);