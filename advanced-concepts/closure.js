// Example 1: Lexical Environment And Scope Chain
// GEC and FEC are two different frames in the callstack - How does FEC access "number"?
let number = 100;
function test() {
  console.log(number);
}
test();

// Another Example Of Scope Chain
let userName = "Daniel";
let userRole = "admin";

function checkAccess() {
  let hasAccess = false;
  if (userRole === "admin") {
    hasAccess = true;
    let welcomeMsg = `${userName} has admin right!`;
    console.log(welcomeMsg);
  }
  console.log("Does user have access : ", hasAccess);
}

checkAccess();

// Code Explanation
// Global Execution Context (GEC): Holds number = 100 and the definition of test.
// Function Execution Context (FEC): Created when test() runs. Holds its own local variables and references.
// These are indeed separate frames on the call stack. This is where scope chains and the lexical environment model come into play.

// The link is established through the scope chain - (The scope chain is a chain of lexical environments)

// Lexical Environment
// Every execution context has a Lexical Environment object.
// This contains its own variables and a reference to its outer environment.
// These objects are linked together via outer environment references, forming the scope chain.

// Variable Lookup Process
// Inside test, when console.log(number) runs:
// The engine first looks for "number" in the FEC’s local environment.
// Not found → it follows the outer environment reference.
// Finds "number" in the GEC → returns 100.
// In case "number" is not found in the GEC, Reference Error will be returned.

// Example 2: Case 1 - If a variable is declared in the global scope and then updated inside a function or
// block without redeclaring it locally, the global variable’s value will be updated to the latest assignment.

// Closures - Actually we're returning the inner function to the global scope and trying to call that function
// and also trying to access variables from the outer scoped function variables.

function counter() {
  let count = 0;
  return function () {
    count = count + 1;
    console.log(count);
  };
}

let firstCounter = counter();
firstCounter();
firstCounter();
firstCounter();
// output: 1 2 3

let secondCounter = counter();
secondCounter();
secondCounter();
secondCounter();
//  output: 1 2 3

// Variable Shadowing
// When variables with the same name exist in different scopes, scope chain determines which one is used.
// The inner scope variable takes precedence.

// Example 3: Case 2 - If you declare any variable without keywords like (var, let, or const), then it becomes "global variable".
function example() {
  let x = 100;
  return function inner() {
    console.log("Hello Keerthi");
  };
}

x = 300;
let fn = example();
fn();
console.log(x);

// Example 4: Case 3 - Variables declared with keywords (var, let, or const) inside a function
// becomes a local variable of that function, which cannot be accessed outside the function - Reference Error.
// Note: Also function's parameters as well becomes local variables of that function.
var x = 100;
function shadowing() {
  var x = 200;
  console.log(x); // 200
}
shadowing();
console.log(x); // 100

// Example 5: Illegal Shadowing Of Block Scope
// Here "x" cannot be redeclared inside function because "var x" becomes global variable but already "x" is exist
// in the global scope which has been already declared w/ "let" keyword.

let x = 100;
function shadowing() {
  var x = 200;
  console.log(x);
}
shadowing();
console.log(x);

// Example 6: Function parameters act as local variables inside the function, but when those parameters
// reference objects, modifying the object’s properties affects the original object outside the function as well.
let festivals = {
  name: "Diwali Festival Celebration",
  country: "India will celebrate - Diwali",
};

function UpdateFestival(f) {
  f.country = "America will not celebrate - Diwali";
  console.log(f);
}

UpdateFestival(festivals);
console.log(festivals);
