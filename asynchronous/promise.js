const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const numbers = [34, 22, 5556, 112, 345, 43, 21, 45, 667];
    const numbers2 = [];
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
  })
  .then((data) => {
    console.log(data);
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
