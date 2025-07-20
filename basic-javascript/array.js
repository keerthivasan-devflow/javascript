// Why do we need array in programming?
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

// Nested Array
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

// Sorting an array using comparison function
function compareNumeric(a, b) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}

let numeric = [4, 1, 2, 3];
numeric.sort(compareNumeric);
console.log(numeric);

// let numbers = [1, 2, 3, 4, 5];
// arr.splice(startIndex, deleteCount, ...values)
// If no arguments are provided, it doesn't remove any elements from the original array, leaving the array unchanged.
// console.log(numbers.splice());
// console.log(numbers);

// If you provide only startIndex, arr.splice() returns the removed elements from the array and affects the original array.
// console.log(numbers.splice(3))
// console.log(numbers)

// If you provide both deleteCount and startIndex as negative integer arr.splice() 
// will not remove any elements from the original array.

// console.log(numbers.splice(2, -2));
// console.log(numbers);
// console.log(numbers.splice(-2, -2));
// console.log(numbers);

// If you provide deleteCount as negative integer and try to add elements, there will be no deletion only adds the new elements
// console.log(numbers.splice(-4, -2, 100, 200))
// console.log(numbers)

// console.log(numbers.splice(undefined)) // deleted the entire array
// console.log(numbers.splice(NaN)) // deleted the entire array
// console.log(numbers.splice(null)) // deleted the entire array
// console.log(numbers.splice(false)) // deleted the entire array because false = 0th index
// console.log(numbers.splice(true)) // from 1st index elements will be removed
// console.log(numbers.splice(Infinity)) // Similiar to no arguments provided to arr.splice(), therefore there will be no deletion

// Removing a particular item from an array
var number = [10, 20, 30, 40];
var givenNumber = 2;
let index = number.indexOf(givenNumber);
if (index === -1) {
  console.log("Number doesn't exist!");
} else {
  number.splice(index, 1);
}

// Removing Duplicates from array elements.
let colors = ["red", "green", "red", "green", "green", "blue"];

// using Set()
console.log([...new Set(colors)]);

// using Array.includes()
let addColors = [];
colors.forEach((element) => {
  if (addColors.includes(element)) {
    console.log(`${element} is already exist`);
  } else {
    addColors.push(element);
  }
});
console.log("addColors : ", addColors);

// using Array.filter()
let letters = ["A", "B", "A", "C", "B"];
let uniqueChars = colors.filter(
  (element, index) => letters.indexOf(element) == index
);
console.log("uniqueChars:", uniqueChars);

// 4. Find the occurence of each array element
let arr = [5, 2, 1, 2, 5, 1, 1, 2, 9, 4];
let count = {};
arr.forEach((element) => {
  // Checking the current array element as a key is present or not in the count object
  // if it presents, then count++ ; else count = 1
  if (count[element]) {
    count[element] = count[element] + 1;
  } else {
    count[element] = 1;
  }
});
console.log(count);

// Removing Falsy Values using filter() method
const falsyValues = ["keerthi", "", 0, true, 2096938, false, null, undefined];
const truthyValues = falsyValues.filter((value) => value);
console.log(truthyValues);

// To find the totalProductsValue using Array.map() - return object
const products = [
  {
    name: "laptop",
    price: 5000,
    count: 2,
  },
  {
    name: "Headset",
    price: 1500,
    count: 5,
  },
  {
    name: "Watch",
    price: 1200,
    count: 3,
  },
];
const totalProductsValue = products.map((product) => {
  //   return [product.name, product.price * product.count];
  return {
    nameOfTheProduct: product.name,
    totalValueOfTheProduct: product.price * product.count,
  };
});

// Grouping objects using Array.map()
const myUsers = [
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

const groupedObjects = myUsers.map((user) => {
  // const container = {};
  // container[item.name] = item.likes;
  // container.age = item.name.length * 10;
  // return container;
  return {
    [user.name]: user.likes,
    ages: user.name.length * 10,
  };
});
console.log(groupedObjects);

// Appending certain text to existing each element of the array using Array.forEach() method
const fruits = ["orange", "apple", "pomegranate"];
fruits.forEach((fruit, index, array) => {
  // It accesses the array parameter directly to modify the current element.
  // It prepends "Sweet" to each fruit name and assigns it back to the same index in the fruits array.
  array[index] = "Sweet" + fruit;
});
console.log(fruits);

const vegies = [
  "Brinjal",
  "Potato",
  "Brinjal",
  "Carrots",
  "Carrots",
  "Brinjal",
];
console.log("vegies.length : ", vegies.length);
console.log("vegies.slice() : ", vegies.slice());
console.log("vegies.slice(0) : ", vegies.slice(0));
console.log("vegies.slice(3) : ", vegies.slice(3));
console.log("vegies.slice(-2) : ", vegies.slice(-2));
console.log("vegies.slice(2, 5) : ", vegies.slice(2, 5));
console.log("vegies.slice(5, 2) : ", vegies.slice(5, 2));
console.log("vegies.slice(2,2) : ", vegies.slice(2, 2));
console.log("vegies.slice(-2, -5) : ", vegies.slice(-2, -5));
console.log("vegies.slice(-5, -2) : ", vegies.slice(-5, -2));
console.log("vegies.slice(null, null) : ", vegies.slice(null, null));
console.log("vegies.slice(null, undefined) : ", vegies.slice(null, undefined));
console.log("vegies.slice(-2, 5) : ", vegies.slice(-2, 5));
console.log("vegies.slice(5, -2) : ", vegies.slice(5, -2));

const arrayLike = {
  length: 3,
  0: 2,
  1: 3,
  2: 4,
  3: 33, // ignored by slice() since length is 3
};
console.log(Array.prototype.slice.call(arrayLike, 1, 3)); // [ 3, 4 ]
