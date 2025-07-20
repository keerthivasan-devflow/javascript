// "use strict";

// SCENARIO 1 - GLOBAL SCOPE 'this' refers to the window object
this.firstname = "Keerthivasan";
console.log(this.firstname);

// SCENARIO 2 - Inside a traditional function() - still refers the window object
function display() {
  console.log("Inside a function : " + this.firstname);
}
display();

// SCENARIO 3 - w/ Objects where function() as conservative
// 'this' refers the parent as person1 object but not the global window object
let person1 = {
  firstname: "Ajithkumar",
  age: 5,
  greet() {
    console.log(this);
    console.log("Welcome" + " " + this.firstname);

    const nestedarrow = () => console.log("Welcome " + this.firstname);
    nestedarrow();
  },
};
person1.greet();

// SCENARIO 4 - w/ object where function() as ES6 arrow function in which 'this' refers to the global window object.
let person2 = {
  firstname: "Balamurugan",
  age: 5,
  greet: () => {
    console.log(this);
    console.log("Welcome" + " " + this.firstname);
  },
};
person2.greet();

// SCENARIO 5 - Nested Object w/ Traditional Function
let student = {
  name: "Sachin Tendulkar",
  age: 45,
  siblings: {
    brother: "Yuvaraj",
    getParentsDetails() {
      console.log(this);
      console.log(this.brother + " and " + this.name);
    },
  },
};

student.siblings.getParentsDetails();

// SCENARIO 6
// Inside class 'this' refers to the constructor method
class Example {
  constructor(firstname, lastname, email) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
  }

  display() {
    console.log(`this : ${JSON.stringify(this)}`);
  }
}

const Ex = new Example("Gurram", "Harika", "harika@yahoo.com");
Ex.display();

// SCENARIO 7 - INSIDE CALL() APPLY() BIND()
