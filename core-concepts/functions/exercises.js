// Example 6: Fibanocci series
function fibonacci(n) {
  if (n <= 1) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

// Example 7: Alternative way to write fibanocci series
var n = 5;
var fiboSeries = [];
for (var i = 0; i < n; i++) {
  fiboSeries.push(fibonacci(i));
}
console.log("Fibonacci Series for n = " + n + ": " + fiboSeries);

// Example 10: Sum of arguments length whose values are greater than or equal to 5
let total = 0;
function animals() {
  for (let argument of arguments) {
    if (argument.length >= 5) {
      total = total + argument.length;
    }
  }
}

animals("cat");
animals("tiger", "elephants");
animals("lions");
animals("dog");
animals("");
animals("snakes");
console.log(total);