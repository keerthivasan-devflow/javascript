//Adding items to the cart
let cart = ["Jeans", "Kurta", "Shirts", "Towels"];

//Creating an order with items added in the cart. Now this create order API will return promise with an orderId
let promise = createOrder(cart); //Returns promise with an orderId
console.log("Before Promise: ", promise);

//After getting the promise, we will attach the callback function to this promise.
promise
  .then(function (orderId) {
    console.log(orderId);
    //console.log(promise)
    //proceedToPayment(orderId);
    return orderId;
  })
  .then(function (orderId) {
    return proceedToPayment(orderId);
  })
  .then(function (paymentInfo) {
    console.log(paymentInfo);
    return showOrderSummary(paymentInfo);
  })
  .catch((err) => {
    console.log(err.message);
  });

//How this createOrder API will return a promise? we as a developer should write code
function createOrder(cart) {
  let pr = new Promise(function (resolve, reject) {
    if (!validateCart(cart)) {
      let err = new Error("Cart is invalid");
      reject(err);
    }
    let orderId = 174640;
    if (orderId) {
      setTimeout(() => {
        resolve(orderId);
      }, 5000);
    }
  });
  return pr;
}

function validateCart(cart) {
  return true;
}

function proceedToPayment(orderId) {
//   const pr = new Promise(function (resolve, reject) {
//     if (orderId) {
//       resolve("Payment Successful...");
//     } else {
//       reject();
//     }
//   });
//   return pr;

  return new Promise(function (resolve, reject) {
    if (orderId) {
      resolve("Payment Successful...");
    } else {
      reject();
    }
  });
}
