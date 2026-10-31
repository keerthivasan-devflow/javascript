// Method 1: Object.defineProperty(object, key, descriptor) allows a precise addition to or modification of a property on an object.
// Method 2: Object.defineProperties(object, propertiesObject)

// 1. object - The object on which the property will be added or modified.
// 2. key - The property name, specified as a string or symbol.
// 3. descriptor - An object that defines the property's attributes, using either a data descriptor or an accessor descriptor.

// Normal property addition through assignment creates properties which show up during property enumeration like
// for...in, Object.keys(), etc. whose values may be changed and which may be deleted.

// This method allows these extra details to be changed from their defaults. By default, properties added
// using Object.defineProperty() are not writable, not enumerable, and not configurable.

// Property descriptors present in objects come in two main flavors: data descriptors and accessor descriptors.
// A data descriptor is a property with a value that may or may not be writable.
// An accessor descriptor is a property described by a getter-setter pair of functions.
// A descriptor must be one of these two flavors; it cannot be both.

// Case 1: Use assignment to update the name property.
const person = {
  firstname: "Brian", // step 2: "Brian" is now changed to "David".

  set name(value) {
    console.log("Setter was called!");
    this.firstname = value;
  },
};

person.name = "David"; // step 1: calls the setter-function and updates the firstname value.

console.log(person.firstname); // Expected Output: "David"
console.log(person.name); // Expected Output: undefined - But why?
// Note: A setter handles assignments; it does not return a value so define a getter using get name() alongside your setter.

// Case 2: Use Object.defineProperty() to redefine the name property.
const student = {
  firstname: "Brian",

  set name(value) {
    console.log("Setter was called!");
    this.firstname = value;
  },
};

Object.defineProperty(student, "name", {
  value: "David",
  writable: true,
  enumerable: true,
  configurable: true,
});

console.log("Name : ", student.name);
console.log("Firstname : ", student.firstname);

// Case 3: Use getter-setter pair (accessor descriptors) to manage the name property.
const people = {
  firstname: "Brian",
};

Object.defineProperty(people, "name", {
  set(value) {
    console.log("Setter was called!");
    this.firstname = value;
  },
  get() {
    return this.firstname;
  },
  enumerable: true,
  configurable: true,
});

people.name = "David";

console.log("Name:", people.name);
console.log("Firstname:", people.firstname);
