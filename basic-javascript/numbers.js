// Integer examples
var positiveInteger = 890;
var negativeInteger = -56;

// Float examples
var positiveFloat = 45000.34;
var negativeFloat = -1600.22;

// Exponential notation examples
var exponentialPositive = 86e4; // 860000
var exponentialNegative = 84e-4; // 0.0084

// Binary representation examples
var binaryValueLowercase = 0b1000; // 8
var binaryValueUppercase = 0b1111; // 15

// Octal representation examples
var octalValueLeadingZero = 0o45; // 37
// var octalInvalidLeadingZero = 0o80; // Invalid octal
var octalValueES6 = 0o34; // 28
// var octalInvalidES6 = 0o80;      // Invalid octal

// Hexadecimal representation examples
var hexValueLowercase = 0x234; // 564
var hexValueUppercase = 0xa23; // 2595

// Numeric separator example
var numberWithSeparator = 5_00_000; // 500000

console.log("Positive Integer :", positiveInteger);
console.log("Negative Integer :", negativeInteger);
console.log("Positive Float :", positiveFloat);
console.log("Negative Float :", negativeFloat);
console.log("Exponential Positive :", exponentialPositive);
console.log("Exponential Negative :", exponentialNegative);
console.log("Binary Lowercase :", binaryValueLowercase);
console.log("Binary Uppercase :", binaryValueUppercase);
console.log("Octal Leading Zero :", octalValueLeadingZero);
console.log("Octal ES6 :", octalValueES6);
console.log("Hexadecimal Lowercase :", hexValueLowercase);
console.log("Hexadecimal Uppercase :", hexValueUppercase);
console.log("Number with Separator :", numberWithSeparator);

console.log("Number.EPSILON : ", Number.EPSILON);
console.log("Number.MAX_VALUE : ", Number.MAX_VALUE);
console.log("Number.MIN_VALUE : ", Number.MIN_VALUE);
console.log("Number.MAX_SAFE_INTEGER : ", Number.MAX_SAFE_INTEGER);
console.log("Number.MIN_SAFE_INTEGER : ", Number.MIN_SAFE_INTEGER);
console.log("Number.POSITIVE_INFINITY : ", Number.POSITIVE_INFINITY);
console.log("Number.NEGATIVE_INFINITY : ", Number.NEGATIVE_INFINITY);
console.log("Number.NaN : ", Number.NaN);
console.log("Number.constructor : ", Number.constructor);
console.log("Number.prototype : ", Number.prototype);

var score = 225;
console.log("score Value : ", score);
console.log("typeof score : ", typeof score);
var score_result = score.toString();
console.log("score_result Value : ", score_result);
console.log("typeof score_result : ", typeof score_result);

console.log("number.toString() : ", number.toString());
console.log("number.toString(2) : ", number.toString(2));
console.log("number.toString(4) : ", number.toString(4));
console.log("number.toString(8) : ", number.toString(8));
console.log("number.toString(16) : ", number.toString(16));

var salary = new Number(5000);
console.log("salary Value : ", salary);
console.log("typeof salary : ", typeof salary);
var salary_result = salary.valueOf();
console.log("salary_result Value : ", salary_result);
console.log("typeof salary_result : ", typeof salary_result);

var number = 345.673;
console.log("number.toExponential() : ", number.toExponential());
console.log("number.toExponential(1) : ", number.toExponential(1));
console.log("number.toExponential(2) : ", number.toExponential(2));
console.log("number.toExponential(3) :", number.toExponential(3));
console.log("number.toExponential(4) : ", number.toExponential(4));

console.log("number.toPrecision() : ", number.toPrecision());
console.log("number.toPrecision(1) : ", number.toPrecision(1));
console.log("number.toPrecision(2) : ", number.toPrecision(2));
console.log("number.toPrecision(3) :", number.toPrecision(3));
console.log("number.toPrecision(4) : ", number.toPrecision(4));

console.log("number.toFixed() : ", number.toFixed());
console.log("number.toFixed(1) : ", number.toFixed(1));
console.log("number.toFixed(2) : ", number.toFixed(2));
console.log("number.toFixed(3) :", number.toFixed(3));
console.log("number.toFixed(4) : ", number.toFixed(4));

var first_number = 0.2;
var second_number = 0.1;
console.log(first_number + second_number);

console.log(Number.isSafeInteger(10)); // returns true
console.log(Number.isInteger(56.45)); //false
console.log(Number.isSafeInteger(12345678901234567890)); // returns false
console.log(Number.isInteger(12345678901234567890)); //true

// Example: String concatenation with numbers (non-numeric strings + numbers and vice versa)
console.log("Keerthi" + 16); // "Keerthi16"
console.log("Keerthi" + 16 + 4); // "Keerthi164"
console.log(16 + "Keerthi"); // "16Keerthi"
console.log(16 + 4 + "Keerthi"); // "20Keerthi"

// Example: Numerical string vs number → Arithmetic and comparison operations can be performed
// between a string containing digits and an actual number.
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

// Example: Any datatype + undefined → NaN (except when concatenating strings with undefined).
console.log("Keerthivasan" + undefined);
console.log(undefined + "hello");
console.log(5 + 6 + undefined);
console.log(10 - undefined);
console.log(true + undefined);
console.log(true - undefined);
console.log(null + undefined);

// Example: Any datatype + NaN → NaN (except when concatenating strings with NaN).
console.log(NaN + "5");
console.log("5" + NaN);
console.log(10 + 30 + "Keerthi" + NaN);
console.log(NaN * "5");
console.log(NaN + undefined);

// Example: To illustrate number objects vs primitive numbers in JavaScript
// Note: Number objects complicates code, slows execution, and can lead to unexpected results.
// Don't use any objects like Number, String, Boolean

let x = new Number(100);
let y = new Number(100);

console.log(x + y); // 200 (objects are converted to primitives during arithmetic)

// Comparing two distinct Number objects → always false
console.log(x == y); // false
console.log(x === y); // false

let a = 300;
let b = new Number(300);

console.log(a == b); // true
console.log(a === b); // false
