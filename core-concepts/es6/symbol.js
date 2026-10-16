
// Symbols are not included in for...in loop, it will be ignored when it is used in object
// typeof symbol - symbol
let s1 = Symbol("description");
let s2 = Symbol("description");
console.log(s1, typeof s1);
console.log(s1 == s2); // false
console.log(s1 === s2); // false
console.log(s1.description == s2.description); // true
console.log(s1.description === s2.description); // true

// When `Symbol.for()` is called for the first time with a description, the `s3` symbol will be created 
// in the global registry. If `Symbol.for()` is called again with the same description (assigned to `s3`),
// it will retrieve the existing symbol and assign it to `s4`, making them equal.

let s3 = Symbol.for("First Symbol For");
let s4 = Symbol.for("First Symbol For");
console.log(s3);
console.log(s4);
console.log(s3 == s4);
console.log(s3 === s4);
console.log(s4.description);
console.log(Symbol.keyFor(s3));

let students = {
  [s1]: "Keerthivasan",
  [s2]: "Mani",
  age: 25,
};
console.log(Object.getOwnPropertyNames(students));
console.log(Object.getOwnPropertySymbols(students));
for (let key in students) {
  console.log(students[key]);
}
