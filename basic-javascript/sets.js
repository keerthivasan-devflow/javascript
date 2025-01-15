//1. How to create/define sets
const fruits = new Set(["Apple", "Kiwi", "Mango", "Orange", "Grapes"]);

//2. Printing the sets values
console.log(fruits);
console.log([...fruits]);
console.log(Array.from(fruits));
console.log(Array.of(...fruits));

for (let fruit of fruits) {
  console.log(fruit);
}

//3. How to add the values to the existing set
//Adding mixed type values to the set

fruits.add(true);
fruits.add(false).add(781).add(8034);
console.log([...fruits]);

//4. How to delete the value from the sets
fruits.delete("Mango");
fruits.delete(false);
console.log([...fruits]);

//5. How to find the size of fruits
console.log(fruits.size);

//6. How to check whether the item exist or not
console.log(fruits.has("Kiwi"));
console.log(fruits.has("Green Apple"));

//8. How to acces the first element of array
console.log([...fruits][0]);
console.log(Array.from(fruits)[2]);

//7. How to clear the set
fruits.clear();
console.log(fruits);

//WEAK SET:
const person = new WeakSet();

personDetails = {
  name: "keerthivasan",
  age: 25,
  email: "keerthivasan@gmail.com",
};

carDetails = {
  nameOftheCar: "Toyato",
  model: 2018,
};

bankDetails = {
  bankName: "HDFC",
  accno: 4521221100389,
};

person.add(personDetails);
person.add(carDetails);
person.add(bankDetails);

console.log(person);
console.log(person.has(personDetails));
person.delete(bankDetails);
console.log(person);
console.log(person.length);


//Sets interview questions
let onlineAvailableUsers = new Set([
  "kevasan",
  "prmattap",
  "hrgurram",
  "hummanen",
]);
console.log(onlineAvailableUsers);

let logicalNumbers = new Set([[174640], [174640], [234412]]);
console.log(logicalNumbers);

let objects = new Set([
  { name: "laksha", age: 4 },
  { name: "laksha", age: 4 },
]);
console.log(objects);