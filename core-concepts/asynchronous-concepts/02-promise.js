// Note: However "Promise()" alone cannot make HTTP requests or access external APIs. It requires a mechanism
// like fetch() to perform network requests.

// Fetching a random cat fact using "fetch()" with async-await keyword syntax. This is sufficient.
async function fetchCatfact() {
  const response = await fetch("https://catfact.ninja/fact");
  const data = await response.json();
  console.log(data);
}

// There is no need to wrap fetch() inside another "promise".
const promise = new Promise((resolve, reject) => {
  fetch("https://catfact.ninja/fact")
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch((error) => reject(error));
});

promise.then((data) => console.log(data));

fetchCatfact();

// Some common use cases:
// - Wrapping callback-based asynchronous operations.
// - Creating custom asynchronous operations.
// - Converting older asynchronous APIs into Promise-based APIs.
// - Controlling when a Promise resolves or rejects.

// #################################################################################################################################

// Example 1: Promise() Constructor
// "Uncaught TypeError: Promise resolver undefined is not a function". The error occurs because
// the Promise() constructor requires a executor function.
let pr1 = new Promise();
console.log(pr1);

// Example 2: Executor Function
// () => {} is an empty executor function. It does not call either resolve() or reject(). so
//  the promise remains in the pending state and its result remains undefined.
let pr2 = new Promise(() => {});
console.log(pr2);

// Example 3: The moment you create a promise object the executor function will always be invoked automatically.
// Here also it does not call either resolve() or reject() but console.log() message will be displayed and the promise
// remains in pending state and its return remains undefined.
let pr3 = new Promise(() => {
  console.log("Executor Function!");
});

console.log(pr3);

// Example 4: To change the state of a promise using resolve() or reject().
let pr4 = new Promise((resolve, reject) => {
  console.log("Executor Function!");
  resolve("success");
});

console.log(pr4);

// Example 5: To showcase micro task and macro task queue.
console.log("Start");
setTimeout(() => console.log("Macro-task Queue"), 0);
Promise.resolve().then(() => console.log("Micro-task Queue"));
console.log("End");

// Example 6: A complete promise constructor example to handle either a resolve() or reject().
const pr6 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Successful message"), 5000);
});

pr6
  .then(() => console.log("Promise Resolved"))
  .catch(() => console.log("Promise Rejected"));

// Example 7: Online E-Commerce Application
// let cart = ["Computers", "Mobiles", "Watches", "Home Theatres"];
let cart = [];

function createOrderAPI(cartItems) {
  return new Promise((resolve, reject) => {
    if (cartItems.length === 0) {
      cartItems.push("Bluetooth speakers");
      cartItems.push("Apple mac book pro");
      cartItems.push("Fastrack watches");
      resolve(cartItems);
    } else {
      reject(new Error("You cannot add more items in the cart!"));
    }
  });
}

function proceedToPayment(cartItems) {
  return new Promise((resolve, reject) => {
    if (cartItems.length === 0)
      reject(new Error("Payment cannot be proceed further!"));
    else {
      const orderedItems = cartItems.map((cartItem) => cartItem.length * 100);
      resolve(orderedItems);
    }
  });
}

let response = createOrderAPI(cart);

response
  .then((data) => {
    console.log(data);
    return proceedToPayment(data);
  })
  .then((result) => console.log(result))
  .catch((err) => console.log(err));
