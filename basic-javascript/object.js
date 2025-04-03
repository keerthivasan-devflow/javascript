const person = {
  firstname: "Keerthivasan",
  lastname: "Mani",
  age: 26,
  location: "trichy",
  dateOfBirth: "16-04-1997",
  children: {
    count: 2,
    names: ["Parvesh", "Laksha"],
  },
  address: {
    doorNo: 272,
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

person.fullname = person.fullname.toString();
console.log("JSON.stringify(person) :", JSON.stringify(person));

// OBJECT METHODS REFERENCES

// 1. Object.assign(target, ...sources) - Returns the targeted object
// a. Copying only enumerable properties and own properties of an object.
// b. Overwriting values from left to right
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

// 2. Object.entries(object) - Returns the nested array of key-value pairs
const product = {
  name: "Wireless Headphones",
  price: 49.99,
  category: "Electronics",
};

const pairs = Object.entries(product);
// Since we pass an array of values as the first argument, array destructuring allows us to easily log the keys and values.
pairs.forEach(([key, value]) => {
  console.log(key, value);
});

// a. If you pass string, it will return indices as key and value as each occurrence of characters
// b. Other than strings, if you pass any other primitive datatypes, it will return empty [] array
// c. If you pass null/undefined, this will throw a TypeError.
// d. You can convert an object to a map()
console.log(Object.entries("Apple"));
console.log(Object.entries(1234));

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

// Object.defineProperty() | Object.keys()
Object.defineProperty(student, "grade", { value: "A", enumerable: false });
console.log(Object.keys(student));
console.log(Object.getOwnPropertyNames(student));


// Object.preventExtension() - No addition but allows modification and deletion.
Object.preventExtensions(student);
student.name = "Putnam Derek";
student.locality = "Colorado";
delete student.subjects;
console.log("Object.preventExtension() : ", student);
console.log("Object.isExtensible(student) : ", Object.isExtensible(student)); // To check whether the object is extensible or not.

// Object.seal() - No addition and deletion but allows modification
Object.seal(student);
student.grade = "B";
delete student.subjects;
student.email = "rick@gmail.com";
console.log("Object.seal() : ", student);
console.log("Object.isSealed() : ", Object.isSealed(student)); // To check whether the object is sealed or not.

// Object.freeze() - No addition, modification and deletion
Object.freeze(student);
delete student.grade;
student.grade = "B";
student.email = "rick@gmail.com";
console.log("Object.freeze() : ", student);
console.log("Object.isFrozen() : ", Object.isFrozen(student)); // To check whether the object is frozen or not.
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

// Object.propertyIsEnumerable("key") - [This is not a static method]
Object.defineProperty(student, "grade", { enumerable: false });
console.log(student.propertyIsEnumerable("name"));
console.log(student.propertyIsEnumerable("grade"));

// Object.getOwnPropertyNames(object) - Returns an array with the properties of an object.
const defaultProperties = Object.getOwnPropertyNames(Object.prototype);
for (let property of defaultProperties) {
  console.log(property);
}

// key as numeric values
var temp = {
  1.1: "Keerthivasan",
  2: "Jackson",
  true: "True statement",
};

console.log(temp["1.1"]);
console.log(temp[2]);
console.log(temp.true);

// Computed Property - we can have variable value as property in object
// white spaces are allowed between words
let machineName = 'machine name';
let machine = {
    [machineName]: 'server',
    'machine hours': 10000
};
console.log(machine[machineName]);
console.log(machine['machine hours']);
console.log(machine["machine name"])