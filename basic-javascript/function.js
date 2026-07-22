// Example 1: Function Declaration/Function Definition/Function Statement
function declaration() {
  console.log("Function Declaration/Definition");
}

declaration();

// Example 2: Function Expression
let expression = function () {
  console.log("Function Expression will be executed");
};
expression();

// Example 3: Named Function Expression
let namedExpression = function xyz() {
  console.log("Named Function Expression");
  console.log(xyz);
};
namedExpression();

// Example 4: Function with 'new' Keyword
let addition = new Function("a", "b", "console.log(a+b)");
addition(10, 20);

// Example 5: Function which returns multiple values - Either an array / object
function calculateValues(a, b) {
  return {
    sum: a + b,
    difference: a - b,
    product: a * b,
    quotient: a / b,
  };
}
const { sum, difference, product, quotient } = calculateValues(5, 3);
console.log(sum, difference, product, quotient);

// Example 6: Fibanocci series
function fibonacci(n) {
  if (n <= 1) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

// Example 7: Another way to write fibanocci series logic
var n = 5;
var fiboSeries = [];
for (var i = 0; i < n; i++) {
  fiboSeries.push(fibonacci(i));
}
console.log("Fibonacci Series for n = " + n + ": " + fiboSeries);

// Example 8: Some hints about functions
function degrees(A, B = 10, ...C) {}
console.log(add.name); // It returns function name.
console.log(add.length); // It returns the length of the parameters but it ignores default values and rest parameters.

// Example 9: Default Function Parameters
function test(x = 5, y = 15, z = 25) {
  console.log(x, y, z);
}

test(); // 5, 15, 25
test(10); //10, 15, 25
test(10, 20); //10,20,25
test(10, 20, 30); //10,20,30
test(10, undefined, undefined); //10, 15, 25
test(10, undefined, null); //10, 15, null

// Example 10: Sum of arguments length whose values are greater than or equal to 5
let total = 0;
function animals() {
  for (let argument of arguments) {
    if (argument.length >= 5) {
      total = total + argument.length;
    }
  }
}

animals("cat"); // 3
animals("tiger", "elephants"); // 5, 6
animals("lions"); // 5
animals("dog"); // 3
animals(""); // 0
animals("snakes"); // 6
console.log(total);

// Example 10: Blocked-Scope Function Declaration
// "use strict";
// {
//     function myFunction() {
//         console.log( "This is my function." );
//     };
// }

// myFunction();