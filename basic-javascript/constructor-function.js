function Person(fname, lname, age) {
  this.firstname = fname;
  this.lastname = lname;
  this.age = age;
}

const person1 = new Person("Keerthivasan", "Mani", 27);
const person2 = new Person("Karthick", "Murugan", 26);

//Adding property to Object - [Person 1]
person1.email = "keerthivasan@gmail.com";
//Adding a method to Object - [Person 1]
person1.fullName = function () {
  return this.firstname + " " + this.lastname;
};

console.log("After adding a new property to Person 1 : ", person1);
console.log("No change in person2 ", person2);

//Adding a property to Object Constructor using Object Prototype - [similarly, add method to it]
Person.prototype.pincode = 639101;
console.log("After adding a new property(pincode) in Person 1: ", person1);
console.log("After adding a new property(pincode) in Person 2: ", person2);
