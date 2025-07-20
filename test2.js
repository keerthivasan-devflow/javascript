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

// let x = 10
// let y= x

// let a = [10, 20]
// let b = a

let inputarr = [1, [2, 3], { a: 4 }, [[5, 6, { x: 9 }], 7]];
// let inputarr = [1, [2, 3], [[5, 6], 7]];

function flattenedArray(arr, depth) {
  if (depth === 0) {
    return arr.filter(
      (val) => !(typeof val === "object") && !Array.isArray(val)
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
