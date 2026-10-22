

// Example: Object.getOwnPropertyNames(object) - Returns an array with the properties of an object.
const defaultProperties = Object.getOwnPropertyNames(Object.prototype);
for (let property of defaultProperties) {
  console.log(property);
}

// Example: Object.prototype
// To add a new property to the root of the Object prototype
let employee_174641 = {
  firstname: "Rick",
  lastname: "Stalker",
};

let employee_174642 = {
  firstname: "Bolmeyer",
  lastname: "Lauren",
};

Object.prototype.display = function () {
  console.log(this.firstname + " " + this.lastname);
};

employee_174641.display();
employee_174642.display();

// Example: Object with keys defined as different datatypes (number, float, boolean),
// which are automatically converted to strings when used as property names.
var temp = {
  1.1: "I like an apple!",
  2: "He opens the door!",
  true: "They are very truthful!",
};

console.log(temp["1.1"]);
console.log(temp[2]);
console.log(temp.true);

// Example: Using computed property
// - Variables can be used as dynamic property names with [ ] syntax.
// - Keys with spaces or special characters are valid, but must be accessed using bracket notation.
let machine_name = "machine name";
let machine = {
  [machine_name]: "server",
  "machine hours": 10000,
};
console.log(machine[machine_name]); // "server"
console.log(machine["machine hours"]); // 10000
console.log(machine["machine name"]); // "server"

// Example: obj.propertyIsEnumerable(key)
Object.defineProperty(student, "grade", { enumerable: false });
console.log(student.propertyIsEnumerable("name"));
console.log(student.propertyIsEnumerable("grade"));
