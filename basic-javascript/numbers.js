var positive_integer_number = 890;
var negative_integer_number = -56;
var positive_float_number = 45000.34;
var negative_float_number = -1600.22;
var exponential_positive_integer_number = 86e4;
var exponential_negative_integer_number = 84e-4;
var binary_representation_of_0b = 0b1000;
var binary_representation_of_0B = 0B1111;
var octal_representation_of_leading_zero = 0o45;
// var octal_representation_of_leading_zero_X = 0o80;
var octal_representation_of_es6 = 0o34;
// var octal_representation_of_es6_X = 0o80;
var hexadecimal_representation_of_0x = 0x234;
var hexadecimal_representation_of_0X = 0Xa23;
var number_separator = 5_00_000;
console.log("positive_integer_number : ", positive_integer_number)
console.log("negative_integer_number : ", negative_integer_number)
console.log("positive_float_number : ",positive_float_number)
console.log("negative_float_number : ",negative_float_number)
console.log("exponential_positive_integer_number : ", exponential_positive_integer_number)
console.log("exponential_negative_integer_number : ", exponential_negative_integer_number)
console.log("binary_representation_of_0b : ", binary_representation_of_0b)
console.log("binary_representation_of_0B : ", binary_representation_of_0B)
console.log("octal_representation_of_leading_zero : ", octal_representation_of_leading_zero)
console.log("octal_representation_of_leading_zero_X : ", octal_representation_of_leading_zero_X)
console.log("octal_representation_of_es6 : ", octal_representation_of_es6)
console.log("hexadecimal_representation_of_0x : ", hexadecimal_representation_of_0x)
console.log("hexadecimal_representation_of_0X : ", hexadecimal_representation_of_0X)
console.log("number_separator : ", number_separator)

console.log("Number.MAX_SAFE_INTEGER : ", Number.MAX_SAFE_INTEGER)
console.log("Number.MIN_SAFE_INTEGER : ", Number.MIN_SAFE_INTEGER)
console.log("Number.MAX_VALUE : ", Number.MAX_VALUE)
console.log("Number.MIN_VALUE : ", Number.MIN_VALUE)
console.log("Number.NaN : ", Number.NaN)
console.log("Number.constructor : ",Number.constructor)
console.log("Number.prototype : ", Number.prototype)
console.log("Number.POSITIVE_INFINITY : ", Number.POSITIVE_INFINITY)
console.log("Number.NEGATIVE_INFINITY : ", Number.NEGATIVE_INFINITY)
var someX = 225;
console.log("someX Value : ", someX)
console.log("typeof someX : ", typeof someX)
var result_someX = someX.toString()
console.log("result_someX Value : ", result_someX)
console.log("typeof result_someX : ", typeof result_someX)

var someY = new Number(387)
console.log("someY Value : ", someY)
console.log("typeof someY : ", typeof someY)
var result_someY = someY.valueOf()
console.log("result_someY Value : ", result_someY)
console.log("typeof result_someY : ", typeof result_someY)

var someNumber = 345.673;
console.log("someNumber.toExponential() : ", someNumber.toExponential())
console.log("someNumber.toExponential(1) : ", someNumber.toExponential(1))
console.log("someNumber.toExponential(2) : ", someNumber.toExponential(2))
console.log("someNumber.toExponential(3) :", someNumber.toExponential(3))
console.log("someNumber.toExponential(4) : ", someNumber.toExponential(4))

console.log("someNumber.toPrecision() : ", someNumber.toPrecision())
console.log("someNumber.toPrecision(1) : ", someNumber.toPrecision(1))
console.log("someNumber.toPrecision(2) : ", someNumber.toPrecision(2))
console.log("someNumber.toPrecision(3) :", someNumber.toPrecision(3))
console.log("someNumber.toPrecision(4) : ", someNumber.toPrecision(4))

console.log("someNumber.toFixed() : ", someNumber.toFixed())
console.log("someNumber.toFixed(1) : ", someNumber.toFixed(1))
console.log("someNumber.toFixed(2) : ", someNumber.toFixed(2))
console.log("someNumber.toFixed(3) :", someNumber.toFixed(3))
console.log("someNumber.toFixed(4) : ", someNumber.toFixed(4))

var number_conversion = 45;
console.log("number_conversion.toString() : ", number_conversion.toString())
console.log("number_conversion.toString(2) : ", number_conversion.toString(2))
console.log("number_conversion.toString(4) : ", number_conversion.toString(4))
console.log("number_conversion.toString(8) : ", number_conversion.toString(8))
console.log("number_conversion.toString(16) : ", number_conversion.toString(16))

var number_one = 0.2
var number_two = 0.1
console.log(number_one + number_two)

//DIFFERENCE BETWEEN isInteger() & isSafeInteger() :
console.log(Number.isSafeInteger(10));    // returns true
console.log(Number.isInteger(56.45)) //false
console.log(Number.isSafeInteger(12345678901234567890));  // returns false
console.log(Number.isInteger(12345678901234567890)); //true


//Number string [or] String Number = NaN
//String, undefined, Spaces are not allowed between numbers = NaN
//Boolean, Null, empty string - Could be converted
console.log(Number("10"));
console.log(Number(" 10"));
console.log(Number(" 10 "));
console.log(Number(""));
console.log(Number(true));
console.log(Number(null));
console.log(Number("10.33"));
console.log(Number("10 30"));
console.log(Number("Keerthi"));
console.log(Number(undefined));
console.log(Number("keerthi 10"));
console.log(Number("10 Keerthi"));
console.log(Number([10, 20, 30]));

//Number = either float or int, Spaces also allowed.
//String, null, boolean, undefined, Infinity = NAN
//Array = First Indexed Element will be printed
//Number  string = correct
//String  number = NAN
console.log(parseInt("10"))
console.log(parseInt(" 10"))
console.log(parseInt(" 10 "))
console.log(parseInt("10 30"))
console.log(parseInt("10.33"));
console.log(parseInt("10 Keerthi"))
console.log(parseInt("keerthi 10"))
console.log(parseInt("Keerthi"));
console.log(parseInt(true));
console.log(parseInt(undefined));
console.log(parseInt(null));
console.log(parseInt([10,20,30]))

console.log(parseFloat("10"))
console.log(parseFloat(" 10.33"))
console.log(parseFloat(" 10.33 "))
console.log(parseFloat("10 30.33"))
console.log(parseFloat("10.33 Keerthi"))
console.log(parseFloat("10.33"))
console.log(parseFloat("Keerthi"));
console.log(parseFloat(true));
console.log(parseFloat(undefined));
console.log(parseFloat(null));
console.log(parseFloat("keerthi 10.33"));

//Boolean() Conversion
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