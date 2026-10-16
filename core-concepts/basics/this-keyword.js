// "use strict";

// Case 1 - Global Scope
// SCENARIO 1 - 'this' refers to "window" object in both strict vs non-strict mode (In Browsers).
// SCENARIO 2 - 'this' refers to "module.exports" object in both strict vs non-strict mode (In Node).
this.firstname = "Keerthivasan";
console.log(this);

// Case 2 - Traditional Function
// SCENARIO 1 - refers the window object in non-strict mode vs "undefined" in strict mode. (In Browsers).
// SCENARIO 2 - refers the globalThis object in non-strict mode vs "undefined" in strict mode. (In Node).
this.firstname = "keerthivasan";
function display() {
  console.log(this);
  console.log(this.firstname);
}
display();

// Case 3 - Arrow Function
// SCENARIO 1 - refers the window object in both non-strict mode and strict mode. (In Browsers).
// SCENARIO 2 - refers the module.exports {} object in both non-strict mode and strict mode. (In Node).
this.firstname = "rick";
let display = () => {
  console.log(this);
  console.log(this.firstname);
};
display();

// Case 4 - w/ objects where function() as conservative
// 'this' refers to an immediate parent - i.e invoice object at getOrderID() and customer object at display()
let invoice = {
  orderId: "TKPA2000796513",
  getOrderID() {
    console.log("this.orderId : ", this.orderId);
  },
  customer: {
    name: "Ravi",
    display() {
      console.log(this.name, " and the order id is ", this.orderId);
    },
  },
};

invoice.getOrderID();
invoice.customer.display();

// Case 5 - w/ object where function() as ES6 arrow function in which 'this' refers to the global window object.
let person = {
  firstname: "Balamurugan",
  age: 5,
  greet: () => {
    console.log(this); // window object
    console.log("Welcome" + " " + this.firstname); // undefined - because no variable exist in global scope of 'firstname'
  },
  // Solution for the above piece of greet() function
  // greet() {
  //   console.log(this);
  //   console.log("Welcome" + " " + this.firstname);

  //   const nestedarrow = () => console.log("Welcome " + this.firstname);
  //   nestedarrow();
  // },
};
person.greet();

// Case 6: Classes - 'this' refers to the constructor method
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

const e = new Example("Gurram", "Harika", "harika@yahoo.com");
e.display();

// Case 7: When a function returns an object
// SCENARIO 1 - 'this' keyword refers to the window object (In Browser)
// SCENARIO 2 - 'this' keyword refers to the module.exports {} object (In Node)

function makeUser() {
  return {
    name: "Gautam",
    ref: this,
  };
}
console.log(makeUser().ref.name); // undefined

// Solution for the above piece of code
function makeUser() {
  return {
    name: "Gautam",
    ref() {
      return this;
    },
  };
}
console.log(makeUser().ref().name); // Gautam

// Case 8: Inside setTimeout()
// When you pass user.print() as a callback to setTimeout, JavaScript copies the function reference and executes it later.
// In a normal function call, this would default to the global object (window in browsers).
// But since there’s no name variable defined in the global scope, this.name evaluates to "undefined".
let user = {
  name: "Rick",
  print() {
    console.log(this.name);
  },
};

// setTimeout(user.print, 3000);
setTimeout(function () {
  user.print();
}, 3000);
