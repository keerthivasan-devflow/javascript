console.log("typeof 123: ", typeof 123);
console.log('typeof "keerthi": ', typeof "keerthi");
console.log("typeof [1, 2, 3]: ", typeof [1, 2, 3]);
console.log('typeof { name: "Keerthi" }: ', typeof { name: "Keerthi" });
console.log("typeof null: ", typeof null);
console.log("typeof undefined: ", typeof undefined);
console.log("typeof NaN: ", typeof NaN);
console.log("typeof Infinity: ", typeof Infinity);
console.log("typeof true: ", typeof true);
console.log("typeof function () {}: ", typeof function () {});
console.log("typeof class Calculator{}: ", typeof class Calculator {});
console.log("typeof Symbol: ", typeof Symbol());
console.log("typeof new Set(): ", typeof new Set());
console.log("typeof new WeakSet(): ", typeof new WeakSet());
console.log("typeof new map(): ", typeof new Map());
console.log("typeof new WeakMap(): ", typeof new WeakMap());
console.log("typeof new Date(): ", typeof new Date());
console.log("typeof Math.random(): ", typeof Math.random());

// STRING + NUMBER & VICE VERSA
console.log("Keerthi" + 16);
console.log("Keerthi" + 16 + 4);
console.log(16 + "Keerthi");
console.log(16 + 4 + "Keerthi");

// NUMERICAL STRING + NUMBER ARITHMETIC OPERATION
console.log("2" + 2);
console.log("2" - 2);
console.log("2" * 2);
console.log("2" / 2);
console.log("2" % 2);
console.log("2" ** 3);
console.log("22" > 10);
console.log("22" > 173);
console.log("2" < 10);
console.log("215" < 34);
console.log("22" == 22);
console.log("22" === 22);
console.log("22" / "a");
console.log("apple" / 202);
console.log("apple" - 10);
console.log(2 / 0);
console.log(-2 / 0);

// Anything + undefined = NaN (except String + undefined or vice versa)
// Anything + NaN = NaN (except String + NaN or vice versa)
console.log("Keerthivasan" + undefined);
console.log(undefined + "hello");
console.log(5 + 6 + undefined);
console.log(10 - undefined);
console.log(true + undefined);
console.log(true - undefined);
console.log(null + undefined);
console.log(NaN + "5");
console.log("5" + NaN);
console.log(10 + 30 + "Keerthi" + NaN);
console.log(NaN * "5");
console.log(NaN + undefined);