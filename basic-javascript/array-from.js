// Example: Array.from(array-like, mapfunc, this)
// It creates a new array object in memory from any iterables.
/*
    1. String | String Iterator
    2. Array | Array Iterator
    3. Set | Set Iterator
    4. Map | Map Iterator
    5. Generator Functions | Generator Objects
    6. NodeList (Browser)
    7. Typed Array
    8. Arguments Object

    1.String
    2. Arguments in normal functions
    3. HTML Collections
    4. NodeList
    5. DOM Collections
    6. TypedArray
    7.DataView
*/
// It copies the elements from the original iterable/array-like object into the new array
const users = [{ name: "John" }, { name: "Jane" }];
const numbers = [10, 20, 30];

// Example: If the elements are objects, only the references are copied (not the actual objects).
const copiedUsers = Array.from(users);
copiedUsers[0].name = "barb";

// If the elements are primitive values, the values are copied.
const copiedNumbers = Array.from(numbers);
copiedNumbers[0] = 100;

console.log(copiedUsers);
console.log(users);

console.log(copiedNumbers);
console.log(numbers);

// Example: Array-Like to an Array
let colors = {
  0: "red",
  1: "green",
  2: "blue",
  length: 3,
};

console.log(colors);
console.log(Array.from(colors).map((e) => e.toUpperCase()));
console.log(Array.from(colors, (e, i) => "$" + e.toUpperCase()));

// Example: Array elements will be created dynamically using Array.from()
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

// Example: How to use array methods w/ array-like objects
const arrayLike = {
  length: 3,
  0: 2,
  1: 3,
  2: 4,
  3: 33, // ignored by slice() since length is 3
};

console.log(Array.prototype.slice.call(arrayLike, 1, 3)); // [ 3, 4 ]