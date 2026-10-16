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
