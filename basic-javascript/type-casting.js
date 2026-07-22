// Case: Internal Conversion Process Of Empty String(Number(""))
// 1. Input is a string → "" (empty string).
// 2. Trim whitespace → still "" (no characters).
// 3. Check if string is empty → yes.
// 4. An empty string is treated as 0.

// String, undefined, spaces are not allowed between numerical string = NaN
// Boolean, null, empty string, numerical string with space at the beginning and end = valid
// Objects/arrays → coerced to string, then parsed.
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
console.log("Number([10, 20, 30]) : ", Number([10])); // 10
console.log("Number([10, 20, 30]) : ", Number([10, 20, 30])); // NaN

// Numerical string either an integer or float with spaces everwhere = valid
// String, boolean, null, undefined, Infinity = NaN
// Array = valid (Only first indexed value will be returned)
// "Numerical string + Actual String" like "32 abc" = valid but vice versa "abc 32" = NaN

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

console.log(parseFloat("10"));
console.log(parseFloat(" 10.33"));
console.log(parseFloat(" 10.33 "));
console.log(parseFloat("10 30.33"));
console.log(parseFloat("10.33 Keerthi"));
console.log(parseFloat("10.33"));
console.log(parseFloat("Keerthi"));
console.log(parseFloat(true));
console.log(parseFloat(undefined));
console.log(parseFloat(null));
console.log(parseFloat("keerthi 10.33"));


console.log(Boolean(false));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));
console.log(Boolean(0));
console.log(Boolean(""));

console.log(Boolean(1));
console.log(Boolean(true));
console.log(Boolean(" "));
console.log(Boolean(123));
console.log(Boolean("Hello"));
console.log(Boolean([10, 20, 30]));
console.log(Boolean(function () {}));
console.log(Boolean(class {}));
