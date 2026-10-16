// It is a technique in functional programming, transformation of the function
// of multiple arguments into several functions of a single argument in sequence.

// Function currying using closures
function calculateVolume(length) {
  return function (breadth) {
    return function (height) {
      return length * breadth * height;
    };
  };
}

console.log(calculateVolume(4)(2)(3));

// Function currying using bind() method
function add(a, b) {
  return a + b;
}
const double = add.bind(this, 3);
console.log(double(3));
const triple = add.bind(this, 4);
console.log(triple(4, 4));

//Function currying using closures
let square = function (r) {
  return function (s) {
    return r * s;
  };
};
const twoSquare = square(2);
console.log(twoSquare(2));
const threeSquare = square(3);
console.log(threeSquare(3));