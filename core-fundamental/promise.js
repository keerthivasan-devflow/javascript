// let cartItems = ["Mobiles", "Pants", "Laptops", "Shoes", "Watches", "Airpods"];
let cartItems = [];

let promise = createOrderAPI(cartItems);

function createOrderAPI(cart) {
  const pr = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (cart.length > 1) {
        const updatedCart = cart.filter((item) => {
          if (item.length > 5) return item;
        });
        resolve(updatedCart);
      } else {
        reject(new Error("cart is empty!"));
      }
    }, 2000);
  });
  return pr;
}

// Order of .then() and .catch may not be in the sequence order, but it still works.
promise
  .then((data) => console.log(data)) // [ 'Mobiles', 'Laptops', 'Watches', 'Airpods' ]
  .catch((err) => console.log(err))
  .then((data) => console.log("second promise.then() : ", data)) // undefined
  .then((data) => console.log("third promise.then() : ", data)) // undefined
  // If you would like to test catch() method, then pass an empty cart
  .finally(() => console.log("Promise executed successfully"));
