let count = 0;
function increment(value = ++count) {
  return value;
}

console.log(increment());
console.log(increment());
console.log(increment(10));
console.log(increment());

// OUTPUT : 1 2 10 3
