// Example 5: arr.forEach(callback, this) | Return Value - undefined.
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
