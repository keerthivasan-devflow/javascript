// Example 1: Function Declaration or Function Definition or Function Statement
function declaration() {
  console.log("Function Declaration or Definition");
}
declaration();

// Example 2: Function Expression
let expression = function () {
  console.log("Function Expression");
};
expression();

// Example 3: Named Function Expression
let anonymous = function xyz() {
  console.log("Named Function Expression");
  console.log(xyz);
};
anonymous();

// Example 4: Blocked-Scope Function Declaration - w/ or w/o strict mode
// "use strict";
{
  function test() {
    console.log("Blocked-Scope Function");
  }
}

test();
