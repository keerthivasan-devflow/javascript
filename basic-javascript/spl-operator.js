// 1. Nullish Coalescing Operator - ??
/*
Suppose you have a function that takes an object as an argument and expects the object to have certain properties.
 If any of these properties are null or undefined, you want to use default values instead. 
 You can use the nullish coalescing operator to provide these default values:
*/

function processObject(obj) {
  const { name, age, country } = obj;
  const processedName = name ?? "Anonymous";
  const processedAge = age ?? 0;
  const processedCountry = country ?? "Unknown";

  console.log(`Name: ${processedName}, Age: ${processedAge}, Country: ${processedCountry}`);
}

const obj1 = { name: "John", age: 30, country: "USA" };
const obj2 = { name: "Jane", age: null, country: "Canada" };
const obj3 = { name: "Alex", age: undefined, country: "Australia" };

processObject(obj1); // Output: Name: John, Age: 30, Country: USA
processObject(obj2); // Output: Name: Jane, Age: 0, Country: Canada
processObject(obj3); // Output: Name: Alex, Age: 0, Country: Australia


// 2. Optional Chaining Operator - to access nested object properties safely w/ worrying about null or undefined properties.

const users = [
  {
    id: 1,
    name: "John",
    email: "john@example.com",
    address: {
      street: "123 Main St",
      city: "Springfield",
      country: "USA",
    },
  },
  {
    id: 2,
    name: "Jane",
    email: "jane@example.com",
    // No address specified for this user
  },
];

// Accessing address.city without optional chaining
// This would throw an error for the second user
// const city = users[1].address.city;

// Accessing address.city with optional chaining
const city = users[1].address?.city;
console.log(city); // Output: undefined (since address is not specified)

// Using optional chaining in a loop to safely access nested properties
users.forEach((user) => {
  const cityName = user.address?.city || "Unknown";
  console.log(`${user.name} lives in ${cityName}`);
});