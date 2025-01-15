// 1. Creating Objects w/ Object Literal Method
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

const student = {};
student.name = "Prakash";
student.rank = "1st";
console.log("Displaying Student Object : ", student);

// 2. Creating an Object w/ new keyword
const car = new Object();
car.model = "2015";
car.name = "Volvo";
car.price = 10_00_000;
console.log("Displaying Car Object : ", car);

// Accessing the Object values using bracket, dot notation, object.values() & JSON.stringify(object name)

console.log(`student.rank : `, student.rank);
console.log('person["address"].city : ', person["address"].city);
console.log("Object.values(car) : ", Object.values(car));

person.fullname = person.fullname.toString();
console.log("JSON.stringify(person) :", JSON.stringify(person));

// Writable example
const obj = {};
Object.defineProperty(obj, "x", {
  value: 42,
  writable: false, // Cannot be changed
});

obj.x = 100; // Attempting to change the value
console.log(obj.x); // Output: 42 (value remains unchanged)

//Configurable example
const obj = {};
Object.defineProperty(obj, "x", {
  value: 42,
  configurable: false, // Cannot be reconfigured or deleted
});

Object.defineProperty(obj, "x", {
  writable: true, // Attempting to reconfigure the property
});

delete obj.x; // Attempting to delete the property
console.log(obj.x); // Output: 42 (property remains)

//Enumerable example
const obj3 = {
  x: 42,
  y: 100,
};

Object.defineProperty(obj3, "y", {
  enumerable: false, // Not enumerable
});

for (let key in obj3) {
  console.log(key); // Output: 'x' (y is not enumerated)
}

console.log(Object.keys(obj3)); // Output: ['x'] (y is not included)

// Object Constructor
// Creating Object Constructor Function
function Person(firstName, lastName, age, location) {
  this.firstname = firstName;
  this.lastname = lastName;
  this.age = age;
  this.location = location;

  //Adding a property to Object Constructor, which can be default value as well.
  this.isMarried = true;

  //Adding a method to Object Constructor
  this.changeName = function (name) {
    this.lastname = name;
  };
}

//Creating Objects
const person1 = new Person("Keerthivasan", "Mani", 26, "Trichy");
const person2 = new Person("Karthick", "Murugan", 25, "Bangalore");

//Displaying the person objects
console.log("Person 1 : ", person1);
console.log("Person 2 : ", person2);

//Adding property to Object - [Person 1]
person1.email = "keerthivasan@gmail.com";
console.log("After adding a new property to Person 1  Object: ", person1);
console.log(
  "There will be no change in Person 2 Object, if you check: ",
  person2
);

//Adding a method to Object - [Person 1]
person1.fullName = function () {
  return this.firstname + " " + this.lastname;
};
console.log(
  "After adding a new method to Person 1 Object : ",
  person1.fullName()
);

//Calling the ChangeName function
person1.changeName("Jackson");
console.log("Updated last name of person1 object: ", person1);

//Adding a property to Object Constructor using Object Prototype - [similarly, add method to it]
Person.prototype.pincode = 639101;
console.log(
  "After adding a new property to Object Constructor for Person 1: ",
  person1
);
console.log(
  "After adding a new property to Object Constructor for Person 2: ",
  person2
);

// Object Methods Manipulation
let student = {
  name: "Heidi Kennedy",
  age: 21,
  grade: "A",
  subjects: ["Math", "Science", "English"],
  marks: {
    Maths: 95,
    Science: 100,
    English: 97,
  },
};

let studentinfo = {
  result: "pass",
  rank: 2,
};

//Changing the enumerable property value to check Object.assign() method
Object.defineProperty(studentinfo, "rank", {
  enumerable: false,
});

console.log("1. Object.keys(student) : ", Object.keys(student));
console.log("2. Object.values(student) : ", Object.values(student));
console.log("3. Object.entries(studentinfo) : ", Object.entries(studentinfo));
console.log(
  "4. Object.getOwnPropertyNames(studentinfo) : ",
  Object.getOwnPropertyNames(studentinfo)
);

console.log(
  '5. Object.getOwnPropertyDescriptor(student, "name") : ',
  Object.getOwnPropertyDescriptor(student, "name")
);

// Object.preventExtensions() & isPreventExtensible()
Object.preventExtensions(studentinfo);
studentinfo.percentage = 81;
studentinfo.rank = 3;
delete studentinfo.result;
console.log(
  "6. Object.preventExtensions() : ",
  studentinfo,
  Object.isExtensible(studentinfo)
);

let combinedObject = Object.assign({}, student, studentinfo);
console.log(combinedObject);

console.log(Object.getOwnPropertyDescriptors(student));

Object.defineProperty(student, "name", {
  value: "Mark Kennedy",
});

console.log(
  "After modification of student's name using Object.defineProperty() : ",
  student.name
);

Object.defineProperties(student, {
  name: {
    value: "Rick Stalker",
  },
  age: {
    value: 45,
  },
});

console.log(student);

//Object.seal() & isSealed()
Object.seal(student);
student.grade = "B";
delete student.grade;
student.email = "rick@gmail.com";
console.log("8. Object.seal() : ", student, Object.isSealed(student));

//Object.freeze() & isFrozen()
Object.freeze(student);
delete student.grade;
student.grade = "B";
student.email = "rick@gmail.com";
console.log("7. Object.freeze() : ", student, Object.isFrozen(student));

//Object.create()
let employee = {
  name: "Keerthivasan",
  age: 27,
  address: {
    city: "Trichy",
    pincode: 639101,
  },
  greet() {
    console.log("Hello" + " " + this.name);
  },
};

let worker = Object.create(employee);
worker.greet();
worker.name = "Harish";
worker.greet();
console.log(worker.name);
console.log(worker);

//Prototype and prototypal inheritance
let parent = {
  name: "Keerthivasan",
  age: 27,
  address: {
    city: "Trichy",
    pincode: 639101,
  },
  greet() {
    console.log("Hello" + " " + this.name);
  },
};

let child = Object.create(parent);
// let child = Object.create(null) or let child = Object.create({}) //Creating an empty object
child.name = "Harish";
// child.email = "hari@yahoo.com"
console.log(Object.getPrototypeOf(child) === parent);
console.log(child);
console.log(parent.isPrototypeOf(child));

//INTERVIEW QUESTIONS:
// Object key as numbers
var numObject = {
    1.1: "Keerthivasan",
    2: "Jackson",
    true: "True statement"
}

console.log(numObject["1.1"]);
console.log(numObject[2]);
console.log(numObject.true);

let objectKey = {
  numObject: "Jackie",
  age: 28
}

console.log(objectKey)

//Object.create() Explanation with syntax and example:
//Object.create(prototype, new properties with descriptors)
let student1 = {
    firstname: "keerthivasan",
    lastname: "mani",
    age: 26,
    location: "trichy",
    printFullname(){
        console.log("Fullname is : " + (this.firstname + " "+ this.lastname))
    }
}

console.log(Object.getOwnPropertyDescriptor(student1, "age"))
Object.defineProperty(student1, "age", {
    value: 26,
    enumerable: false
})

student1.printFullname()

let student2 = Object.create(student1, {
    firstname: {
        value: "lakshashree"
    },
    lastname: {
        value: "Sagayaraja"
    },
    email: {
        value:"student2@gmail.com",
    },
    phone:{
        value: 7010989247
    }
})

console.log("student1: ", student1)
console.log("student2: ", student2)
student2.printFullname()
console.log(student2.email)
console.log(student1.email)
console.log("student1.age: ", student1.age);
console.log("student2.age: ", student2.age);