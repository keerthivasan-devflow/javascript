// 1. Closure implementation - accessing variables inside the function, but which is actually declared outside function.
function outer() {
  let text = "Keerthivasan is a React Developer";
  function inner() {
    console.log(text);
  }
  inner();
}
outer();

/* 2. Closure - Here actually we're returning the inner function to the global scope and trying to call that function
    and also trying to access variables from the outer function scoped variables here. */
function outer() {
  let text = "Keerthivasan is a React Developer";
  return function inner() {
    console.log(text);
  }
}
let InnerFunction = outer();
InnerFunction();
