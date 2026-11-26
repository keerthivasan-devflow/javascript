// Method: Object.create(proto, propertiesObject)
// Object.create() creates a new object and sets the object you provide as its prototype. (Check the purpose No: 3)

// Object created using Object.create(null) will have the following problem - (see example below)
// - Instance methods: obj.toString() and obj.hasOwnProperty() are unavailable because obj has no prototype.
// - Static methods: Object.keys(obj), Object.values(obj), and Object.hasOwn(obj, "brand")
//  still work because they are called directly on Object, not inherited by obj.

// Note: Both Object.hasOwn() and Object.prototype.hasOwnProperty() are used to check whether an object
// has a direct (own) property, without checking its prototype chain.

// Example 1: To check
const person = Object.create(null);
person.name = "Virat";
console.log(person);
console.log(Object.hasOwn(person, "name")); // true
console.log(person.hasOwnProperty("name")); // TypeError: person.hasOwnProperty is not a function

// Example 2: To check own property only
const employee = Object.create(person);
employee.salary = 50000;
console.log(Object.hasOwn(employee, "salary")); // true
console.log(Object.hasOwn(employee, "name")); // false

// Purpose 1: To create an object without a prototype, pass null as the first argument to Object.create().

// Case 1: Create an object without a prototype.
const LenovoLaptop = Object.create(null);
console.log(LenovoLaptop); // Expected Output: {}
LenovoLaptop.brand = "Lenovo";
LenovoLaptop.ram = "16 GB";
LenovoLaptop.price = 65000;
console.log(LenovoLaptop); // Expected Output: { brand: 'Lenovo', ram: '16 GB', price: 65000 }

// Case 2: Alternative Approach - Create an object without a prototype.
const AppleLaptop = Object.create(null, {
  brand: { value: "Apple", enumerable: true },
  ram: { value: "16 GB", enumerable: true },
  price: { value: 255000, enumerable: true },
});

console.log(AppleLaptop);

// Case 3: TypeError: "HP" is not a valid property descriptor. The second argument of Object.create()
// expects property descriptors, not direct { property: value }.

// Each property must have a descriptor object containing value. The other descriptor flags like writable,
// enumerable, configurable) are set to false by default. It would always be better to include { enumerable: true }.
const HPLaptop = Object.create(null, {
  brand: "HP",
  ram: "16 GB",
  price: 45000,
});

// Purpose 2: Object.create(Object.prototype, propertiesObject).
let park = Object.create(Object.prototype);
park.name = "Kamarajar Park";
park.location = "Chennai";
console.log(park);
// output:
// { name: "Kamarajar Park", location: "Chennai" }
//   [[Prototype]]: Object

// Purpose 3: Object.create(proto, propertiesObject) where proto is a custom prototype.
let developer = {
  name: "William Anderson",
  role: "React Developer",
};

let architect = Object.create(developer);
architect.name = "Daniel Cooper";
architect.skills = ["React", "Python", "Kubernetes"];
console.log(architect);
// output:
// { name: "Daniel Cooper", skills: ["React", "Python", "Kubernetes"] }
//   [[Prototype]]: { name: "William Anderson", role: "React Developer" }
//     [[Prototype]]: Object
