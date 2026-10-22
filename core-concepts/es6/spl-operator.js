// 1. Nullish Coalescing Operator - ??

// Suppose a function accepts an object as an argument and expects it to contain certain properties. If any of these
// properties are null or undefined, you can use the nullish coalescing operator (??) to provide default values.

function person(obj) {
  const { name, age, country } = obj;
  const personName = name ?? "Anonymous";
  const personAge = age ?? 0;
  const personCountry = country ?? "Unknown";
  console.log(
    `Name: ${personName}, Age: ${personAge}, Country: ${personCountry}`,
  );
}

const obj1 = { name: "John", age: 30, country: "USA" };
const obj2 = { name: "Jane", age: null, country: "Canada" };
const obj3 = { name: "Alex", age: undefined, country: "Australia" };

person(obj1); // Output: Name: John, Age: 30, Country: USA
person(obj2); // Output: Name: Jane, Age: 0, Country: Canada
person(obj3); // Output: Name: Alex, Age: 0, Country: Australia

// 2. Optional Chaining Operator - ?

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

// 3. Logical OR Operator - ||
users.forEach((user) => {
  const cityName = user.address?.city || "Unknown";
  console.log(`${user.name} lives in ${cityName}`);
});
