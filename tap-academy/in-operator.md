
# in

The in operator in JavaScript is primarily used to check whether a property exists in an object or an index exists in an array. It is a fundamental operator for property membership testing, returning a boolean value (true or false).

# Checking Property Inheritance with constructor or constructor function
function Person(name) {
    this.name = name;
}

Person.prototype.age = 30;
const alice = new Person("Alice");

console.log("name" in alice);  // true
console.log("age" in alice);   // true

# Key Points
- The in operator does not test values inside an array, only whether an index exists.
- It also traverses the prototype chain, meaning inherited properties will also return true.
- for...in loops use this operator implicitly to iterate over all enumerable properties (including inherited ones) of an object