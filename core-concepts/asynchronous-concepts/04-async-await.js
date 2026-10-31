// Example 1: async function will always return a promise
async function getUser() {
  return "Bolmeyer Lauren";
}

// Example 2: async-await keyword w/ try-catch block
async function fetchUser() {
  try {
    const data = await fetch("https://jsonplaceholder.typicode.com/users/1");
    const response = await data.json();
    return response;
  } catch (err) {
    return err;
  }
}

fetchUser().then((result) => console.log(result));
fetchUser().catch((err) => console.log(err.message));

// Example 3: To illustrate difference between promise and async-await keyword
const pr1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Promise - 1 Resolved"), 5000);
});

const pr2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Promise - 2 Resolved"), 10000);
});

async function example() {
  console.log("Javascript - 1");
  const result1 = await pr1;
  console.log(result1);
  console.log("After promise - 1");

  console.log("Javascript - 2");
  const result2 = await pr2;
  console.log(result2);
  console.log("After Promise - 2!");
}

example();

// Example 4: To check the order of execution of synchronous vs asynchronous code
console.log("Start");

setTimeout(() => console.log("Timeout 1"), 0);

Promise.resolve()
  .then(() => console.log("Promise - 1"))
  .then(() => console.log("Promise - 2"));

// The important distinction is that declaring an async function does not make its entire execution asynchronous.
// An async function executes synchronously until it encounters the first await.
async function demo() {
  console.log("Async Function Start");
  await Promise.resolve().then(() => console.log("Async Promise - 1"));
  console.log("Async Function End");
}

demo();

setTimeout(() => console.log("Timeout 2"), 0);

console.log("End");

// Example 5:
Promise.resolve()
  .then(() => console.log("Promise - 1"))
  .then(() => console.log("Promise - 2"));

Promise.resolve()
  .then(() => console.log("Promise - 3"))
  .then(() => console.log("Promise - 4"));

async function example() {
  console.log("Async Function Start");
  await Promise.resolve().then(() => console.log("Asynchronous Promise - 1"));
  console.log("Async Function End");
}

example();
