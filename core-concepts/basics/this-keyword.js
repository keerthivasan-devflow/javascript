// "use strict";

// Case 1 - Global Scope
// SCENARIO 1 - refers to "window" object in both strict vs non-strict mode (In Browsers).
// SCENARIO 2 - refers to "module.exports = {}" object in both strict vs non-strict mode (In Node).
this.firstname = "Keerthivasan";
console.log(this);

// Case 2 - Traditional Function
// SCENARIO 1 - refers to "window" object in non-strict mode vs "undefined" in strict mode. (In Browsers).
// SCENARIO 2 - refers to "globalThis" object in non-strict mode vs "undefined" in strict mode. (In Node).
this.firstname = "keerthivasan";
function display() {
  console.log(this);
  console.log(this.firstname);
}
display();

// Case 3 - Arrow Function
// SCENARIO 1 - refers to "window" object in both non-strict mode and strict mode. (In Browsers).
// SCENARIO 2 - refers to "module.exports {}" object in both non-strict mode and strict mode. (In Node).
this.firstname = "rick";
let display = () => {
  console.log(this);
  console.log(this.firstname);
};
display();

// Case 4: Using Traditional Functions as Object Methods.
// Refers to the object that calls the method: "invoice" in "getOrderID()"" and "customer" in "display()".
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

// Case 5: Using Arrow Function as Object Methods - 'this' refers to the window object.
let person = {
  firstname: "Balamurugan",
  age: 5,
  greet1: () => {
    console.log(this);
    console.log("Welcome" + " " + this.firstname); // undefined - because "firstname" is not defined in the global scope.
  },
  greet2() {
    // Solution 1:
    console.log(this);
    console.log("Welcome" + " " + this.firstname);

    // Solution 2:
    const nestedarrow = () => console.log("Welcome " + this.firstname);
    nestedarrow();
  },
};

person.greet1();
person.greet2();

// Case 6: Classes - 'this' refers to the constructor method.
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

// Case 7: Returning an Object from a Function.
// SCENARIO 1 - 'this' keyword refers to the "window" object (In Browser).
// SCENARIO 2 - 'this' keyword refers to the module.exports {} object (In Node).

function makeUser() {
  return {
    name: "Gautam",
    ref: this,
  };
}
console.log(makeUser().ref.name); // undefined

// Solution for the above code
function makeUser() {
  return {
    name: "Gautam",
    ref() {
      return this;
    },
  };
}
console.log(makeUser().ref().name); // Gautam

// Case 8: Timer Functions Like setTimeout() vs setInterval()
let user = {
  name: "Rick",
  print() {
    console.log(this.name);
  },
};

// user.print passes the function as a callback without preserving its connection to the user object.
// Therefore it returns "undefined".
setTimeout(user.print, 3000);

// The value of this depends on how a function is called, not where it was originally defined.
// To preserve the object context when passing a method, you can use:
setTimeout(user.print.bind(user), 5000);

// In a normal function call, this would default to the global object (window in browsers).
// Here, user.print() is explicitly called as a method of user, so this refers to the user object and this.name evaluates to "Rick".
setTimeout(function () {
  user.print();
}, 7000);
