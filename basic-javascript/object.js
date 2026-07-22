const person = {
  firstname: "Keerthivasan",
  lastname: "Mani",
  age: 26,
  location: "trichy",
  children: {
    count: 2,
    names: ["Parvesh", "Laksha"],
  },
  address: {
    street: "Mariyamman Kovil Street",
    city: "Jeeyapuram",
    district: "Trichy",
  },
  fullname() {
    return `${this.firstname} + ' ' + ${this.lastname}`;
  },
};

for (const key in person) {
  if (typeof person[key] === "object") {
    for (const nestedKey in person[key]) {
      console.log(`[${nestedKey}] => ${person[key][nestedKey]}`);
    }
  } else {
    console.log(`[${key}] => ${person[key]}`);
  }
}

// Example: Object.assign(target, ...sources) - it just returns target object.
// 1. Copyies only enumerable properties, own properties of source object.
// 2. Overwrites the values from left to right.
var source1 = { a: 10 };
Object.defineProperty(source1, "a", { value: 10, enumerable: false });

var source2 = { b: 20 };
var source3 = { c: 30 };
var source4 = { d: 40 };

var target = Object.assign({ w: 40 }, source1, source2, source3, source4);
console.log(target);
// var source5 = Object.create(source4)
// var target = Object.assign({ w: 40 }, source1, source2, source3, source5);

var origin1 = { x: 10, y: 20, z: 30 };
var origin2 = { w: 15, z: 45, x: 25 };
var origin3 = { t: 45, x: 45, y: 80 };
var goal = Object.assign({ t: 40 }, origin1, origin2, origin3);
console.log(goal); // Expected Output: { t: 45, x: 45, y: 80, z: 45, w: 15 }

// Example: Object.entries(object) - Returns the nested array of key-value pairs
const product = {
  name: "Wireless Headphones",
  price: 49.99,
  category: "Electronics",
};

Object.entries(product).pairs.forEach(([key, value]) => {
  console.log(key, value);
});

console.log(Object.entries("Apple")); // 1. Passing a string → returns array of [index, character] pairs
console.log(Object.entries(1234)); // 2. Passing any other primitive → returns []

let student = {
  name: "Heidi Kennedy",
  age: 21,
  grade: "A",
  subjects: ["Math", "Science", "English"],
  marks: {
    Maths: 95,
    Science: 100,
  },
};

// Example: Object.preventExtension() - No addition but allows modification and deletion.
Object.preventExtensions(student);
student.locality = "Colorado";
student.name = "Putnam Derek";
delete student.subjects;
console.log("Object.preventExtension() : ", student);
console.log("Object.isExtensible(student) : ", Object.isExtensible(student));

// Example: Object.seal() - No addition and deletion but allows modification
Object.seal(student);
student.email = "rick@gmail.com";
student.grade = "B";
delete student.subjects;
console.log("Object.seal() : ", student);
console.log("Object.isSealed() : ", Object.isSealed(student));

// Example: Object.freeze() - No addition, modification and deletion
Object.freeze(student);
student.email = "rick@gmail.com";
student.grade = "B";
delete student.grade;
console.log("Object.freeze() : ", student);
console.log("Object.isFrozen() : ", Object.isFrozen(student));
// deep freeze of an object
for (let key in student) {
  if (typeof student[key] === "object") {
    Object.freeze(student[key]);
  } else {
    Object.freeze(student);
  }
}

student.name = "Keerthi";
student.marks.Maths = "100";
student.subjects[1] = "Javascript";
console.log(student);

// Example: Object.getOwnPropertyNames(object) - Returns an array with the properties of an object.
const defaultProperties = Object.getOwnPropertyNames(Object.prototype);
for (let property of defaultProperties) {
  console.log(property);
}

// Example: Object.groupBy() - Group objects based on inventory category.
const inventory = [
  { name: "asparagus", type: "vegetables", quantity: 5 },
  { name: "bananas", type: "fruit", quantity: 0 },
  { name: "goat", type: "meat", quantity: 23 },
  { name: "cherries", type: "fruit", quantity: 5 },
  { name: "fish", type: "meat", quantity: 22 },
];

const GroupedInventoryObject = Object.groupBy(inventory, ({ type }) => type);
console.log(GroupedInventoryObject);

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

// Example: Object.create(null, {...})

// Create an object with no prototype from Object.prototype.
// As a result, prototype methods like toString() or hasOwnProperty() cannot be used on it, but static
// methods from the global Object constructor will still work.

// When you use Object.create(null, { ... }), the second argument defines properties using property
// descriptor objects. By default, if you only specify { value: "Putnam Derek" }, the other
// descriptor flags (writable, enumerable, configurable) are set to false.
let client = Object.create(null, {
  name: {
    value: "Putnam Derek",
    writable: true,
    enumerable: true,
    configurable: true,
  },
  age: { value: 27, writable: true, enumerable: true, configurable: true },
});

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
