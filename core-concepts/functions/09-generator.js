// Example 1: Infinite Counter Generator Function
// GF will accept both yield and return but the "return" statement will not be accepted below since "while" is an infinite loop.
// Hint: You can perform something like while(count<=10) then return statement will be able to execute.
// Hint: To get the "return" value - Follow the generator function call syntax.
function* infiniteCounter() {
  let count = 1;
  while (true) {
    yield count++;
  }
  return "Finished!";
}

for (let i of infiniteCounter()) {
  console.log(i);
}

// let counter = infiniteCounter();
// console.log(counter.next());
// console.log(counter.next());
// console.log(counter.next());
// console.log(counter.next());

// Example 2: To pass a value to generator function
function* generator() {
  let result = yield "pass";
  yield 100;
  yield result;
}

let gen = generator();
console.log(gen.next());
console.log(gen.next(95));
console.log(gen.next());
console.log(gen.next());
