async function fetchapi() {
  try {
    const data = await fetch("https://jsonplaceholder.typicode.com/users/1");
    const response = await data.json();
    console.log(response);
  } catch (err) {
    console.log(err.message);
  }
}
fetchapi();


// Some developer handles the error like this: 
// Eventually async function will return a promise, so we can attach a catch() method to it.
async function fetchapi() {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const response = await data.json();
  console.log(response);
}
fetchapi().catch((err) => console.log(err.message));

// To show difference between promise and async/await keyword
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