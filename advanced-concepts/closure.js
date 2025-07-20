
// Closure - Here actually we're returning the inner function to the global scope and trying to call that function
// and also trying to access variables from the outer scoped function variables.
function outer() {
  let text = "Keerthivasan is a React Developer";
  return function () {
    console.log(text);
  };
}
let inner = outer();
inner();

// Counter functionality using closure for better understanding
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
