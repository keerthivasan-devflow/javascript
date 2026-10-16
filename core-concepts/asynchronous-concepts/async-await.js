// Example 1: async function will always return a promise

function getUserProfile() {
  return "Bolmeyer Lauren";
}

// Example 2: try/catch | async/await

async function fetchapi() {
  try {
    const data = await fetch("https://jsonplaceholder.typicode.com/users/1");
    const response = await data.json();
    console.log(response);
  } catch (err) {
    console.log(err.message);
  }
}

fetchapi(); // Case 1
fetchapi().catch((err) => console.log(err.message)); // Case 2

// Example 3: To illustrate difference between promise and async/await
const pr1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("First Promise Resolved!");
  }, 5000);
});

const pr2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Second Promise Resolved!");
  }, 10000);
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

setTimeout(() => {
  console.log("Timeout 1");
}, 0);

Promise.resolve()
  .then(() => {
    console.log("Promise 1");
  })
  .then(() => {
    console.log("Promise 2");
  });

async function demo() {
  console.log("Async Function Start");
  await Promise.resolve().then(() => {
    console.log("Async Promise 1");
  });
  console.log("Async Function End");
}

demo();

setTimeout(() => {
  console.log("Timeout 2");
}, 0);

console.log("End");
