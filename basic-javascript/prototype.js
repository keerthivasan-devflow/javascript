// Adding a new property to the prototype
let person = {
  firstname: "Rick",
  lastname: "Stalker",
};

Object.prototype.display = function () {
  console.log(this.firstname + " " + this.lastname);
};

let student = {
  firstname: "Bolmeyer",
  lastname: "Lauren",
};

// 3. Object.create()
let std1 = {
  name: "Lisa",
  age: 24,
  marks: 78.9,
  display() {
    console.log("Name:", this.name);
  },
  init(name, age, marks) {
    this.name = name;
    this.age = age;
    this.marks = marks;
  },
};

let std2 = Object.create(null, {
  name: { value: "Keerthivasan" },
  age: { value: 27 },
});

let std3 = Object.create(std1);
std2.init("Lakshashree", 5, 98.7);

console.log(std1);
console.log(std2);
console.log(std3);
