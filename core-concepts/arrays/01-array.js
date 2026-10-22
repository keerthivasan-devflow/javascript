// Array "const" Keyword:
// a. It is common practice to declare arrays using the const keyword.
// b. The const keyword can be misleading.
// c. It does not make an array immutable or It does not define a constant array. It defines a constant reference to an array.
// d. Therefore, the elements of a const array can still be added, removed, or modified.

// Example : Why Array?

let cart = [];
function addToCart(item) {
  if (!cart.includes(item)) {
    cart.push(item);
    console.log(`${item} added to the cart!`);
  }
}
addToCart("bag");
addToCart("water bottle");
addToCart("headset");
addToCart("laptop");
addToCart("travel bag");
console.log(cart);

// Working with array-like objects
