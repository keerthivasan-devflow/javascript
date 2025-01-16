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
