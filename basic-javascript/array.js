// Example: Why Array?
let shoppingCart = [];
function addToCart(item) {
  shoppingCart.push(item);
  console.log(`${item} added to the cart!`);
  console.log("Current Shopping Cart : ", shoppingCart);
}
addToCart("bag");
addToCart("water bottle");
addToCart("headset");
addToCart("laptop");
addToCart("travel bag");
console.log(shoppingCart);

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

// Example: arr.splice(startIndex, deleteCount, ...values)
// If no arguments are provided, it doesn't remove any elements from the original array, leaving the array unchanged.
// let numbers = [1, 2, 3, 4, 5];
// console.log(numbers.splice());
// console.log(numbers);

// If you provide only startIndex, it returns the removed elements from the array and affects the original array.
// console.log(numbers.splice(3))
// console.log(numbers)

// If you provide both deleteCount and startIndex as negative integer
// will not remove any elements from the original array.

// console.log(numbers.splice(2, -2));
// console.log(numbers);
// console.log(numbers.splice(-2, -2));
// console.log(numbers);

// If you provide deleteCount as negative integer and try to add elements, there will be no deletion only adds the new elements
// console.log(numbers.splice(-4, -2, 100, 200))
// console.log(numbers)

// console.log(numbers.splice(undefined)) // deletes the entire array
// console.log(numbers.splice(NaN)) // deletes the entire array
// console.log(numbers.splice(null)) // deletes the entire array
// console.log(numbers.splice(false)) // deletes the entire array because false = 0th index
// console.log(numbers.splice(true)) // from 1st index elements will be removed
// console.log(numbers.splice(Infinity)) // similiar to no arguments provided to arr.splice(), therefore there will be no deletion

// Example: arr.slice(start, end)
// start = undefined → 0
// end = undefined → arr.length
// start = NaN → 0
// end = NaN → 0 (empty result)
// +Infinity → arr.length (empty result)
// -Infinity → 0 (empty result)

const devices = [
  "Laptop",
  "Tablet",
  "Smartphone",
  "Monitor",
  "Keyboard",
  "Mouse",
  "Printer",
];

console.log(devices.slice());
console.log(devices.slice(0));
console.log(devices.slice(10));
console.log(devices.slice(-3));

console.log(devices.slice(1, 4));
console.log(devices.slice(4, 2));
console.log(devices.slice(3, 3));

console.log(devices.slice(-5, -2));
console.log(devices.slice(-2, -5));

console.log(devices.slice(null, null));
console.log(devices.slice(null, undefined));
console.log(devices.slice(undefined, undefined));
console.log(devices.slice(undefined, 4));

console.log(devices.slice(NaN, NaN));
console.log(devices.slice(NaN, 3));

console.log(devices.slice(true, false));
console.log(devices.slice(false, true));

console.log(devices.slice(0, Infinity));
console.log(devices.slice(-Infinity, Infinity));

// Example: arr.forEach(callback, this)
// 1. Just returns "undefined".
// 2. Helps to modify the existing array after certain operations on array elements.
// 3. Helps to create an object based on certain conditions.

// Realtime applications:
// a. Deleting emails - bulk emails | spams | junks
// b. array of cart items in an e-commerce website like amazon, facebook
// c. array of comments and reactions loops over

// Example A: In-place array transformation by scaling each element to 100
let numbers = [1, 2, 3, 4, 5];
numbers.forEach((number, index) => {
  numbers[index] = number * 100;
});
console.log(numbers);

// Example B: Appending certain text to existing each element of the array using arr.forEach()
const fruits = ["orange", "apple", "pomegranate"];
fruits.forEach((fruit, index, array) => {
  array[index] = "Sweet" + fruit;
});
console.log(fruits);

// Exampple: arr.includes(searchValue, startIndex)
let arr = [10, NaN, 20, 30, 40, 50, 0];
console.log(arr.includes(30));
console.log(arr.includes(30, 2));
console.log(arr.includes(30, -4));
console.log(arr.includes(-0));
console.log(arr.includes(+0));
console.log(arr.includes(NaN));

// Example: arr.sort()
function compareNumeric(a, b) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}

let numeric = [4, 1, 2, 3];
numeric.sort(compareNumeric);
console.log(numeric);

// Example: arr.map(callback, this) - Transform each user into a profile object
// mapping their name to likes and computing age from name length
const users = [
  { name: "shark", likes: "ocean" },
  { name: "turtle", likes: "pond" },
  { name: "otter", likes: "fish biscuits" },
];
// output should be like this:
[
  { shark: "ocean", age: 50 },
  { turtle: "pond", age: 60 },
  { otter: "fish biscuits", age: 50 },
];

const userProfiles = users.map((user) => {
  return {
    [user.name]: user.likes, // dynamic key: name → likes
    age: user.name.length * 10, // derived property: age based on name length
  };
});

console.log(userProfiles);
