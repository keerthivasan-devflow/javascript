//9. Function Currying: with closures, bind method
//It is a technique in functional programming, transformation of the function
//of multiple arguments into several functions of a single argument in sequence.

// 3. Calculating Volume using closure as well as function currying
function calculateVolume(length) {
  return function (breadth) {
    return function (height) {
      return length * breadth * height;
    };
  };
}

console.log(calculateVolume(4)(2)(3));

//Function currying using bind() method
function add(a, b) {
  return a + b;
}
const triple = add.bind(this, 3);
console.log(triple(3));
const quadruple = add.bind(this, 4, 5);
console.log(quadruple(4, 4));

//Function currying using closures
let square = function (r) {
  return function (s) {
    return r * s;
  };
};
const squareTwo = square(2);
console.log(squareTwo(2));
const squareThree = square(3);
console.log(squareThree(3));
