let colors = ["red", "green", "blue", "black", "white"];

let integers = [1, 2, 3, 4, 5];
let sum = 0;

let result = integers.forEach((integer) => {
  sum = sum + integer;
});
console.log(sum);
console.log(result); // undefined because doen't return anything

// Realtime application
// 1. Deleting emails - bulk emails | spams | junks
// 2. array of cart items in an e-commerce website like amazon, facebook
// 3. array of comments and reactions loops over
