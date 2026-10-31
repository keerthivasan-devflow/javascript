// Method 1: arr.forEach(callback, this) → returns undefined.
// 1. To modify the existing array after certain operations on array elements.
// 2. To create an object based on certain conditions.

// Important Note:
// 1. Unlike map(), forEach() always returns undefined and is not chainable.
// 2. The break and continue statements cannot be used to control a forEach() loop. To terminate iteration,
// an exception must be thrown inside the callback function.
// 3. Async-Await does not work with the forEach() but works with the for loop.
// Explanation: forEach() can execute async callbacks, but it does not wait for the promises returned
// by those callbacks. Use for...of when sequential execution is required.

// Realtime applications:
// 1. Deleting Emails - spams or junk emails.
// 2. Array of cart items in an e-commerce websites like Flipkart or Amazon.
// 3. Array of comments and reactions loops over.

// Example 1: In-place array transformation by transforming case.
let colors = ["red", "green", "blue", "yellow"];
colors.forEach((color, index) => {
  colors[index] = color.toUpperCase();
});
console.log(colors);

// Example 2: Appending specific text to each element of an existing array.
const fruits = ["orange", "apple", "pomegranate"];
fruits.forEach((fruit, index, array) => {
  array[index] = "Sweet" + fruit;
});
console.log(fruits);

// Example 3: Async-Await works with for loop.
const numbers = [1, 2, 3];

async function processNumbers() {
  for (const number of numbers) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(number);
  }

  console.log("Completed");
}

processNumbers();

// Example 4: Async-Await does not work with forEach().

async function processNumbers() {
  numbers.forEach(async (number) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(number);
  });

  console.log("Completed");
}

processNumbers();
