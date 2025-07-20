const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("P1 resolved");
  }, 3000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("P2 rejected");
  }, 1000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("P3 success");
  }, 1000);
});

Promise.all([p1, p2, p3])
  .then((result) => console.log("promise.all() : ", result))
  .catch((err) => console.log(err));

Promise.allSettled([p1, p2, p3])
  .then((result) => console.log("promise.allSettled() : ", result))
  .catch((err) => console.log(err));

Promise.race([p1, p2, p3])
  .then((result) => console.log("promise.race() : ", result))
  .catch((err) => console.log(err));

Promise.any([p1, p2, p3])
  .then((result) => console.log("promise.any() : ", result))
  // err.errors will return the array of errors, otherwise you will get an aggregate error
  .catch((err) => console.log(err.errors));