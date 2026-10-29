// Example 1: Number()
console.log('Number("10") : ', Number("10"));
console.log('Number(" 10") : ', Number(" 10"));
console.log('Number(" 10 ") : ', Number(" 10 "));
console.log('Number("") : ', Number(""));
console.log("Number(true) : ", Number(true));
console.log("Number(null) : ", Number(null));
console.log('Number("10.33") : ', Number("10.33"));
console.log('Number("10 30") : ', Number("10 30"));
console.log('Number("Keerthi") : ', Number("Keerthi"));
console.log("Number(undefined) : ", Number(undefined));
console.log('Number("keerthi 10") : ', Number("keerthi 10"));
console.log('Number("10 Keerthi") : ', Number("10 Keerthi"));
console.log("Number([10]) : ", Number([10]));
console.log("Number([10, 20, 30]) : ", Number([10, 20, 30]));

// Example 2: parseInt() vs parseFloat()
console.log('parseInt("10") : ', parseInt("10"));
console.log('parseInt(" 10") : ', parseInt(" 10"));
console.log('parseInt(" 10 ") : ', parseInt(" 10 "));
console.log('parseInt("10 30") : ', parseInt("10 30"));
console.log('parseInt("10.33") : ', parseInt("10.33"));
console.log('parseInt("10 Keerthi") : ', parseInt("10 Keerthi"));
console.log('parseInt("keerthi 10") : ', parseInt("keerthi 10"));
console.log('parseInt("Keerthi") : ', parseInt("Keerthi"));
console.log("parseInt(true) : ", parseInt(true));
console.log("parseInt(undefined) : ", parseInt(undefined));
console.log("parseInt(null) : ", parseInt(null));
console.log("parseInt([10, 20, 30]) : ", parseInt([10, 20, 30]));

console.log('parseFloat("10") : ', parseFloat("10"));
console.log('parseFloat(" 10.33") : ', parseFloat(" 10.33"));
console.log('parseFloat(" 10.33 ") : ', parseFloat(" 10.33 "));
console.log('parseFloat("10 30.33") : ', parseFloat("10 30.33"));
console.log('parseFloat("10.33 Keerthi") : ', parseFloat("10.33 Keerthi"));
console.log('parseFloat("10.33") : ', parseFloat("10.33"));
console.log('parseFloat("Keerthi") : ', parseFloat("Keerthi"));
console.log("parseFloat(true) : ", parseFloat(true));
console.log("parseFloat(undefined) : ", parseFloat(undefined));
console.log("parseFloat(null) : ", parseFloat(null));
console.log('parseFloat("keerthi 10.33") : ', parseFloat("keerthi 10.33"));
console.log("parseFloat(10) : ", parseFloat(10));

// Example 3: Difference Between parseInt() vs parseFloat()
console.log('Number("12.56") : ', Number("12.56")); // 12.56
console.log('parseInt("12.56") : ', parseInt("12.56")); // 12
console.log('parseFloat("12.56") : ', parseFloat("12.56")); // 12.56
console.log('Number("123abc") : ', Number("123abc")); // NaN
console.log('parseInt("123abc") : ', parseInt("123abc")); // 123
console.log('parseFloat("123abc") : ', parseFloat("123abc")); // 123

// Example 4: Boolean() - Falsy Values
console.log('Boolean(false) : ', Boolean(false));
console.log('Boolean(null) : ', Boolean(null));
console.log('Boolean(undefined) : ', Boolean(undefined));
console.log('Boolean(NaN) : ', Boolean(NaN));
console.log('Boolean(0) : ', Boolean(0));
console.log('Boolean("") : ', Boolean(""));

// Example 5: Boolean() - Truthy Values
console.log('Boolean(1) : ', Boolean(1));
console.log('Boolean(true) : ', Boolean(true));
console.log('Boolean(" ") : ', Boolean(" "));
console.log('Boolean(123) : ', Boolean(123));
console.log('Boolean("Hello") : ', Boolean("Hello"));
console.log('Boolean([10, 20, 30]) : ', Boolean([10, 20, 30]));
console.log('Boolean(function() {}) : ', Boolean(function() {}));
console.log('Boolean(class {}) : ', Boolean(class {}));
