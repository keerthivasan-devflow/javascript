// Example 1: Promise Creation w/ new keyword

let pr = new Promise();
console.log(pr);

// Example 2: Executor Function Inside Promise

let pr = new Promise(() => {});
console.log(pr);

// Example 3: The moment you create a promise object the executor function will always be invoked automatically
let pr = new Promise(() => {
  console.log("Executor Function!");
});

// Example 4: How to change the state of a promise and set the value of promise object using resolve / reject
let pr = new Promise((resolve, reject) => {
  console.log("Executor Function!");
  resolve("success");
});

// Example 5: To showcase micro task and macro task queue
console.log("Start");
setTimeout(() => console.log("Macro task"), 0);
Promise.resolve().then(() => console.log("Microtask"));
console.log("End");

// Example 6: General Promises
let pr = new Promise((resolve, reject) => {
  console.log("Executor Function Starts Its Execution!");

  setTimeout(() => {
    console.log("Promise gets invoked!");
    resolve();
  }, 5000);
});

pr.then(() => console.log("Promise Fulfilled!")).catch(() =>
  console.log("Promise Unfulfilled!"),
);

// Example 7: E-commerce website operations

let cart = ["Computers", "Mobiles", "Watches", "Home Theatres"];
// let cart = [];

function validateCart(cart) {
  if (cart.length === 0) return true;
}

function createOrderAPI(cartItems) {
  const promise = new Promise((resolve, reject) => {
    if (validateCart(cartItems)) {
      reject(new Error("cart is empty!"));
    } else {
      cartItems.push("Pencils");
      resolve(cartItems);
    }
  });
  return promise;
}

function convertToUpperCase(cartItems) {
  return new Promise((resolve, reject) => {
    if (validateCart(cartItems)) reject(new Error("cart is empty"));
    else {
      const convertedCartItems = cartItems.filter((item) => item.length == 7);
      resolve(convertedCartItems);
    }
  });
}

function captilizeCartItems(cartItems) {
  return new Promise((resolve, reject) => {
    if (validateCart(cartItems))
      reject(new Error("cart is empty at captilizeCartItems"));
    else {
      const capitalizedItems = cartItems.map((item) => item.toUpperCase());
      resolve(capitalizedItems);
    }
  });
}

const response = createOrderAPI(cart);

response
  .then((data) => {
    console.log(data);
    return convertToUpperCase(data);
  })
  .then((data) => {
    console.log(data);
    return captilizeCartItems(data);
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => console.log(err));
