// Example 1: fetch() - Using promise.then().catch() | HTTP GET
fetch("https://catfact.ninja/fact")
  .then((res) => res.text())
  .then((res) => console.log(res))
  .catch((err) => console.log("API failed!"));

// Example 2: fetch() - Using async/await keyword | HTTP GET
async function fetchBreed() {
  const response = await fetch("https://catfact.ninja/breeds?page=1");
  const result = await response.json();
  return result;
}

fetchBreed()
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

// Example 3: To showcase API error failure
// "https://catfact.ninja/facttt" - both will come to then() only (either successful or unsuccessful only response changes)
// By design, fetch does not reject the Promise on HTTP errors like 404 or 500.
// It only rejects on network-level failures (e.g., DNS lookup fails, No internet, wrong domain).

// If you try fetch("https://wrongdomain.com/fact"), the request cannot even reach a server.
// That’s a network error, so fetch rejects the Promise.

// Example 4: To showcase custom error message while fetching an invalid endpoint or domain name
fetch("https://catfact.ninja/facttt")
  .then((res) => {
    if (!res.ok) {
      return res.json().then((err) => {
        throw new Error(`API error: ${err.message} (${err.code})`);
      });
    }
    return res.json();
  })
  .then((data) => console.log(data))
  .catch((err) => console.log("API failed!", err.message));

// Example 5: fetch() - HTTP POST Implementation
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
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
