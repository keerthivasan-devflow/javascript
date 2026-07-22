let numbers = [1, 2, [3, 4, 5]];
let numbers2 = [1, 2, [3, [4, 5]]];
let sparse = [1, 3, , , 5, 5];

console.log(numbers.flat());
console.log(numbers.flat(1));

console.log(numbers2.flat());
console.log(numbers2.flat(1));
console.log(numbers2.flat(2));

console.log(numbers.flat(Infinity));
console.log(numbers2.flat(Infinity));
console.log(sparse.flat()); // Note: will remove empty slots from the sparse array.

// ------------------------------------------------------------------------------------------

let colors = ["red", "green", "red", "red", "green", "blue"];

console.log(colors);
console.log(Array.from(new Set(colors)));

const result = colors.reduce((acc, curr) => {
  // if (acc[curr]) {
  //   acc[curr] = acc[curr] + 1;
  // } else {
  //   acc[curr] = 1;
  // }
  acc[curr] = (acc[curr] || 0) + 1;
  return acc;
}, {});

console.log(result);

// ------------------------------------------------------------------------------------------
console.log("Start");

setTimeout(() => {
  console.log("Timeout 1");
}, 0);

Promise.resolve()
  .then(() => {
    console.log("Promise 1");
  })
  .then(() => {
    console.log("Promise 2");
  });

async function asyncFunc() {
  console.log("Async Function Start");
  await Promise.resolve().then(() => {
    console.log("Async Promise 1");
  });
  console.log("Async Function End");
}

asyncFunc();

setTimeout(() => {
  console.log("Timeout 2");
}, 0);

console.log("End");
// ------------------------------------------------------------------------------------------

// 2. Some Exercises - Need to verify
// Closures and Flattening Array

// function outer() {
//   let count = 0;
//   return function () {
//     let count = 1;
//     count = count + 1;
//     return count;
//   };
// }

// let inner = outer();
// console.log(inner());
// console.log(inner());
// console.log(inner());
// ------------------------------------------------------------------------------------------


let inputarr = [1, [2, 3], { a: 4 }, [[5, 6, { x: 9 }], 7]];
// let inputarr = [1, [2, 3], [[5, 6], 7]];

function flattenedArray(arr, depth) {
  if (depth === 0) {
    return arr.filter(
      (val) => !(typeof val === "object") && !Array.isArray(val),
    );
  }

  return arr.reduce((acc, val) => {
    if (Array.isArray(val) && depth > 0) {
      acc.push(...flattenedArray(val, depth - 1));
    } else if (typeof val === "object") {
    } else {
      acc.push(val);
    }
    return acc;
  }, []);
}

console.log(flattenedArray(inputarr, 0));
console.log(flattenedArray(inputarr, 1));
console.log(flattenedArray(inputarr, 2));

// Set Questions
let productID = new Set([[174640], [174640], [234412]]);
console.log(productID);

let children = new Set([
  { name: "Rick", age: 4 },
  { name: "Rick", age: 4 },
]);
console.log(children);