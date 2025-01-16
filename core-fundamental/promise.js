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
    }, 5000);
  });
  return pr;
}

promise
  .then((data) => console.log(data))
  // If you would like to test catch() method, then pass an empty cart
  .catch((err) => console.log(err))
  .finally(() => console.log("Promise executed successfully"));
