"use strict";

// In global scope - window object in chrome browsers | whereas in node js '{}' so you'll have to use 'global' keyword
console.log(this);

// Inside function()
function example() {
  console.log(this);
}
example();
window.example();
