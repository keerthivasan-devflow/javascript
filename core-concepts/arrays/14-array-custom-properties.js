// Example: Adding custom properties to an array.
// Predominantly for learning purposes; not used in real-world applications.

// 1. Attaching metadata to an array - You might want to store information about a collection alongside its elements.
// Realtime usecase in javascript: str.match()
// Here, category and source describe the container, not individual array elements.
// However, this is generally not the recommended approach for application code.

// 2. Why this can cause problems? Many array methods work only with indexed elements.
// Notice that:
// - arr.length counts indexed array elements, not custom properties.
// - arr.map() processes indexed elements and ignores the custom properties.
// - Array.from() creates a shallow copy of the array based only on its indexed elements and ignores custom properties.
// - Object.keys() includes both the enumerable indexed properties and the custom property.

let container = [];
container[0] = 5;
container[1] = 10;
container.category = "numbers";
container.source = "mathematics";

console.log(container);
console.log(container.length);

for (let key in container) {
  console.log(container[key]);
}

// 3. Recommended approach: Use an object containing an array.
// If you need to store collection data and its metadata together, use an object.
let container = {
  items: [5, 10],
  name: "apples",
  color: "red",
};

console.log(container.items); // Array Elements: [5, 10]
console.log(container.items.length); // Array Length: 2
console.log(container.category); // Container Category: "numbers"
console.log(container.source); // Container Source: "mathematics"
