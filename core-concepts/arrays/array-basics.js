// Example: Why Array?
let cart = [];
function addToCart(item) {
  if (!cart.includes(item)) {
    cart.push(item);
    console.log(`${item} added to the cart!`);
  }
}
addToCart("bag");
addToCart("water bottle");
addToCart("headset");
addToCart("laptop");
addToCart("travel bag");
console.log(cart);

// Example: Nested Array
const cars = [
  { name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
  { name: "BMW", models: ["320", "X3", "X5"] },
  { name: "Fiat", models: ["500", "Panda"] },
];

for (let k in cars) {
  let models = cars[k].models;
  console.log(cars[k].name);
  for (let nk in models) {
    console.log(cars[k].models[nk]);
  }
}

for (let carName of cars) {
  console.log(carName.name);
  for (let model of carName.models) {
    console.log(model);
  }
}

// Example 1: arr.splice(startIndex, deleteCount, ...values) | Return Value - An array containing the deleted elements.
// Case 1: If splice() is called with no arguments, nothing is deleted.
// let months = ["Jan", "March", "April", "June"];
// console.log(months.splice());
// console.log(months);

// Case 2: When only startIndex is provided, all elements from that index to the end of the array are removed.
// If start >= array.length, no element will be deleted - but it can still add new elements to the end of the array.
// If start < -arr.length or start === -arr.length, the index is clamped to 0.
// console.log(months.splice(2))
// console.log(months)

// Case 3: If deleteCount is 0 or negative, no elements are removed. In this case, you should specify at least one new element.
// months.splice(1, 0, "Feb");
// months.splice(1, -3, "Feb");

// Case 4: "undefined" | "NaN" | "null" | "false" are converted to "0" - Therefore it removes all the elements from an array.
// console.log(months.splice(undefined))
// console.log(months.splice(NaN))
// console.log(months.splice(null))
// console.log(months.splice(false))
// console.log(months.splice(true)) // All elements from index 1 to the end of the array are removed.
// console.log(months.splice(Infinity)) // similiar to no arguments provided to arr.splice(), therefore there will be no deletion.

// Example 2: arr.slice(start, end) - [end not included]
// start = undefined → 0
// end = undefined → arr.length
// start = NaN → 0
// end = NaN → 0 (empty result)
// +Infinity → arr.length (empty result)
// -Infinity → 0 (empty result)

// If start < -array.length or start is omitted - then starts from index 0.
// If start >= arr.length - returns an empty array.
const animals = ["ant", "bison", "camel", "duck", "elephant"];

console.log(animals.slice());
console.log(animals.slice(0));
console.log(animals.slice(10));
console.log(animals.slice(-3));

console.log(animals.slice(1, 4));
console.log(animals.slice(4, 2));
console.log(animals.slice(3, 3));

console.log(animals.slice(-5, -2));
console.log(animals.slice(-2, -5));

console.log(animals.slice(null, null));
console.log(animals.slice(null, undefined));
console.log(animals.slice(undefined, undefined));
console.log(animals.slice(undefined, 4));

console.log(animals.slice(NaN, NaN));
console.log(animals.slice(NaN, 3));

console.log(animals.slice(true, false));
console.log(animals.slice(false, true));

console.log(animals.slice(0, Infinity));
console.log(animals.slice(-Infinity, Infinity));

// Example 3: arr.forEach(callback, this) | Return Value - undefined.
// 1. To modify the existing array after certain operations on array elements.
// 2. To create an object based on certain conditions.

// Realtime applications
// 1. Deleting emails - bulk emails or spams or junks.
// 2. array of cart items in an e-commerce websites like amazon, facebook,
// 3. array of comments and reactions loops over.

// Case A: In-place array transformation by scaling each element to 100.
let colors = ["red", "green", "blue", "yellow"];
colors.forEach((color, index) => {
  colors[index] = color.toUpperCase();
});
console.log(colors);

// Case B: Appending specific text to each element of an existing array.
const fruits = ["orange", "apple", "pomegranate"];
fruits.forEach((fruit, index, array) => {
  array[index] = "Sweet" + fruit;
});
console.log(fruits);

/*
Example 4: arr.includes(searchElement, startIndex) | Return Value - true or false
  1. If startIndex is 0 or positive < arr.length, the search starts at that index and continues to the end of the array.
  2. If startIndex >= array.length, the search doesn't happen and false is returned.
  3. If startIndex is negative, add arr.length to it.
    3.1. If the calculated index is less than or equal to 0, the search starts at index 0, covering the entire array.
    3.2. Otherwise, the search starts at the calculated index.
    3.3. The array is always searched from front to back.
  4. If startIndex is omitted, the search starts at index 0, covering the entire array.
  5. arr.includes() treats -0 and +0 as equal.
  6. You can search for undefined in a sparse array and get true.
*/

let arr = [10, NaN, 20, 30, 40, 50, 0];
console.log(arr.includes(30));
console.log(arr.includes(30, 2));
console.log(arr.includes(30, -4));
console.log(arr.includes(-0));
console.log(arr.includes(+0));
console.log(arr.includes(NaN));
console.log([1, , 3].includes(undefined));

// Example: arr.sort()
function compareNumeric(a, b) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}

let numeric = [4, 1, 2, 3];
numeric.sort(compareNumeric);
console.log(numeric);


// Example: Array.flat()
let numbers = [1, 2, [3, 4, 5]];
let numbers2 = [1, 2, [3, [4, 5]]];
let sparse = [1, 3, , , 5, 5];

console.log(numbers.flat());
console.log(numbers.flat(1));

console.log(numbers2.flat());
console.log(numbers2.flat(1));
console.log(numbers2.flat(2));

console.log(numbers.flat(Infinity));
console.log(numbers2.flat(Infinity));
console.log(sparse.flat()); // Note: will remove empty slots from the sparse array.
