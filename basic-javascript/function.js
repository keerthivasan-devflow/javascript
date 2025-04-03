//  1.Function Declaration/Function Definition/Function Statement
function declaration() {
  console.log("Function Declaration/Definition");
}

declaration();

//  2. Function Expression
let expression = function () {
  console.log("Function Expression will be executed");
};
expression();

//  3. Named Function Expression
let namedExpression = function xyz() {
  console.log("Named Function Expression");
  console.log(xyz);
};
namedExpression();

// 4. Function with 'new' Keyword
let addition = new Function("a", "b", "console.log(a+b)");
addition(10, 20);

//  6. Function returning multiple values - which can be possible in 2 ways - either array or object
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

//Fibanocci series
function fibonacci(n) {
  if (n <= 1) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

// Example usage:
var n = 5; // Change this to generate different number of Fibonacci numbers
var fiboSeries = [];
for (var i = 0; i < n; i++) {
  fiboSeries.push(fibonacci(i));
}
console.log("Fibonacci Series for n = " + n + ": " + fiboSeries);

// New Feature
function add(a, b, c) {
  console.log(a + b + c);
}

console.log(add.name);
console.log(add.length);
console.log(add);

//////////////////////////////////////////////////

// Impure Function
let cart = ["pants", "kurtas", "shirts", "towels"];
function addToCart(item) {
  return cart.push(item);
  // return [...cart, item]
}

addToCart("blankets");
addToCart("Kerchief");
addToCart("Sarees");

// Default Function Parameters
function test(x = 5, y = 15, z = 25) {
    console.log(x, y, z)
}

test() // 5, 15, 25
test(10) //10, 15, 25
test(10, 20) //10,20,25
test(10, 20, 30) //10,20,30
test(10, undefined, undefined) //10, 15, 25
test(10, undefined, null) //10, 15, null