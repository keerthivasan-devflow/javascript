function Person(fname, lname, age) {
  this.firstname = fname;
  this.lastname = lname;
  this.age = age;
}

const p1 = new Person("Keerthivasan", "Mani", 26);
const p2 = new Person("Karthick", "Murugan", 27);

// Example: Instance Property - Add new property to p1.
p1.email = "keerthivasan@gmail.com";
p1.fullName = function () {
  return this.firstname + " " + this.lastname;
};
console.log(p1);
console.log(p2);

// Example: Static Property - Add a new property or method to the Person object.
// Because instances cannot inherit the static properties or methods.
Person.isMarried = true;
console.log(Person.isMarried); // true
console.log(p1.isMarried); // undefined
console.log(p2.isMarried); // undefined

// Example: Prototye Property - Add a new property or method to the prototype property of Person object.
Person.prototype.pincode = 639101;
console.log(p1);
console.log(p2);
