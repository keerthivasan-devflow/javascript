// When using fetch(), the result can be handled using either the .then() and .catch()
// methods or the async-await keyword syntax.

// Example 1: fetch() - Using then() and catch() | HTTP GET
fetch("https://catfact.ninja/fact")
  .then((res) => res.json())
  .then((data) => console.log(data));

// Example 2: fetch() - Using async-await keyword | HTTP GET
// The then() and catch() methods can still be used with async-await keyword because an async function
// always returns a promise object.
const fetchBreeds = async () => {
  const response = await fetch("https://catfact.ninja/breeds?page=1");
  const breeds = await response.json();
  return breeds.data;
};

fetchBreeds()
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

// Example 3: To showcase API error failure
// fetch() rejects its Promise when a network error occurs, but not when the server responds
// with an HTTP error status, such as 404 or 500.

// "https://catfact.ninja/facttt" - both will come to then() only either successful or unsuccessful only response changes.

// If you try fetch("https://invalid-domain.com/fact"), the request cannot even reach a server.
// That’s when a network error occurs, so fetch rejects the promise.
// Other scenarios like Invalid Domain | DNS Lookup Failure | No Internet Connection.

async function fetchResponse() {
  try {
    const response = await fetch("https://catfact.ninja/facttt");

    // Note: If this line of code is not exist, the successful message will be displayed
    // even when the server responds with a 404 status.
    if (!response.ok) throw new Error(`HTTP error: ${response.status}`);

    console.log("Request successful!");
  } catch (error) {
    console.log("Error:", error);
  }
}

fetchResponse();

// Example 4: fetch() Using then() and catch() | HTTP PUT
let obj = {
  name: "Reno 12 Pro",
  data: {
    year: 2025,
    price: 1430.99,
    "CPU model": "Intel Core i11",
    "Hard disk size": "4 TB",
  },
};

fetch("https://api.restful-api.dev/objects/7", {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  body: JSON.stringify(obj),
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
