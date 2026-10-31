// Array "const" keyword can be misleading:
// a. It does not make an array immutable or it does not define a constant array. It defines a constant reference to an array.
// b. Therefore, the elements of a const array can still be added or removed or modified.

// Example 1: A simple usecase of array
let cart = [];

function addToCart(item) {
  if (!cart.includes(item)) {
    cart.push(item);
    console.log(`${item} added to the cart.`);
  }
}

addToCart("bag");
addToCart("water bottle");
addToCart("headset");
addToCart("laptop");
addToCart("travel bag");
addToCart("laptop");

console.log(cart);

// Example 2: Array of Objects – Iterate using "for...of" or "for...in"

const cars = [
  { name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
  { name: "BMW", models: ["320", "X3", "X5"] },
  { name: "Fiat", models: ["500", "Panda"] },
];

for (let k in cars) {
  let models = cars[k].models;
  for (let nk in models) {
    console.log(cars[k].models[nk]);
  }
}

for (let car of cars) {
  for (let model of car.models) {
    console.log(model);
  }
}
