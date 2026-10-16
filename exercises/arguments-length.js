
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