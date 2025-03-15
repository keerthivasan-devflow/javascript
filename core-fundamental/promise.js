let cart = ["Computers", "Mobiles", "Watches", "Home Theatres"];
// let cart = [];

function validateCart(cart) {
  if (cart.length === 0) return true;
}

function createOrderAPI(cartItems) {
  const promise = new Promise((resolve, reject) => {
    if (validateCart(cartItems)) {
      reject(new Error("cart is empty!"));
    } else {
      cartItems.push("Pencils");
      resolve(cartItems);
    }
  });
  return promise;
}

function convertToUpperCase(cartItems) {
  return new Promise((resolve, reject) => {
    if (validateCart(cartItems)) reject(new Error("cart is empty"));
    else {
      const convertedCartItems = cartItems.filter((item) => item.length == 7);
      resolve(convertedCartItems);
    }
  });
}

function captilizeCartItems(cartItems) {
  return new Promise((resolve, reject) => {
    if (validateCart(cartItems))
      reject(new Error("cart is empty at captilizeCartItems"));
    else {
      const capitalizedItems = cartItems.map((item) => item.toUpperCase());
      resolve(capitalizedItems);
    }
  });
}

const response = createOrderAPI(cart);

response
  .then((data) => {
    console.log(data);
    return convertToUpperCase(data);
  })
  .then((data) => {
    console.log(data);
    return captilizeCartItems(data);
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => console.log(err));



// JAFS Code Sample
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const numbers = [34, 22, 5556, 112, 345, 43, 21, 45, 667];
    // const numbers = [];
    if (!(numbers.length === 0)) {
      const result = numbers.filter((number) => number > 100);
      resolve(result);
    } else {
      reject(new Error("No data exist..."));
    }
  }, 3000);
});

promise
  .then((data) => {
    console.log(data);
    return data;
  })
  .then((data) => {
    console.log(data);
    return data;
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("Promise executed successfully, operation also done!");
  });