// Object.assign(target, source1, source2, source3...)
// This method help us to copy or merge or overwrite an existing object from source objects - but only its own properties
// or enumerable properties and as well as symbol or string keyed properties.

var s1 = { x: 20, y: 40 };
var s2 = { a: 10, b: 35, c: 60 };
var s3 = { c: 70, x: 100, z: 1000 };
var s4 = { ht: 200, wd: 300 };

var s5 = Object.create(s4);
s5.len = 900;

Object.defineProperty(s2, "b", { enumerable: false });

console.log(Object.assign({ t: 500 }, s1, s2, s3, s5));

// Object.create()
let person1 = Object.create(null);
person1.name = "keerthivasan mani";
person1.age = 28;
person1.email = "keerthi@gmail.com";
console.log(person1);

let person2 = Object.create(null, {
  name: { value: "rohit sharma" },
  age: { value: 35 },
  email: { value: "rohit.sharma@yahoo.com" },
});

person2.name = "sachin tendulkar";

console.log(Object.getOwnPropertyDescriptor(person2, "age"));
console.log(person2);

// let person3 = Object.create(null, {
//   name: "allen chris",
//   age: 29,
//   email: "allen.chris@gmail.com",
// });

// console.log(person3)

let person4 = Object.create(person1);
person4.name = "della penne christine";
person4.age = 32;
person4.email = "christine.della@yahoo.com";
console.log(person4);
