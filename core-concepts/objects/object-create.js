// Method: Object.create(proto, propertiesObject)
// Object.create() creates a new object and sets the object you provide as its prototype. (Check the purpose No: 3)

// Purpose 1: To create an object with no prototype, pass null as the first argument to Object.create().

// Important distinction
// - Instance methods: obj.toString() and obj.hasOwnProperty() are unavailable because obj has no prototype.
// - Static methods: Object.keys(obj), Object.values(obj), and Object.hasOwn(obj, "brand")
//  still work because they are called directly on Object, not inherited by obj.

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
