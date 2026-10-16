// Example 1: URL Object
let url = new URL("https://api.restful-api.dev/objects/");
console.log(url);

// Example 2: Request Object
const request = new Request("https://api.restful-api.dev/objects/", {
  method: "GET",
});
console.log(request);
