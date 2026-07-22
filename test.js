Object.prototype.extra = "polluted!"; // bad practice

const user = { name: "Keerthivasan", age: 25 };

for (const key in user) {
  console.log(key); 
}

// console.log(Object.entries(user))
// Output:
// name
// age
// extra   <-- came from Object.prototype
