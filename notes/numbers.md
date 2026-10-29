## Number() Conversion

- Note: Here the values are converted to strings before parsing.

- true turns into 1; false turns into 0.
- null turns into 0.
- undefined turns into NaN.
- Number separators are allowed in numeric literals but not in strings.
- An empty string or a string containing only whitespace converts to 0.
- Leading and trailing whitespace are ignored in numeric strings. However, whitespace between digits is not allowed.
- The sign must appear only once. The sign is preserved in both numeric literals and numeric strings.
- A digit or numeric string beginning with 0 is not automatically interpreted as an octal number. use the syntax "0o" or "0O".
- When an array or object is passed, it is converted to a string, which is then parsed as a number.
- It also recognizes valid binary, octal, and hexadecimal-prefixed strings and converts them to their equivalent numeric values.

## parseInt() vs parseFloat()

- Number() converts the entire string into a number.
- parseInt() reads the integer portion and stops at the decimal point.
- parseFloat() reads the decimal number, including the decimal point.

- The trailing non-numeric characters are ignored because a valid number has already been read.
- The leading non-numeric characters cannot be parsed, so it returns NaN.

- parseInt() → true or false, undefined, null, NaN, Infinity, -Infinity are converted to NaN.
- parseFloat() → Infinity, -Infinity are converted to their respective values.

## Numbers

- Number properties can be accessed directly with javascript Number object or constructor.
  - Number.EPSILON
  - Number.MIN_VALUE
  - Number.MAX_VALUE
  - Number.MIN_SAFE_INTEGER
  - Number.MAX_SAFE_INTEGER
  - Number.POSITIVE_INFINITY
  - Number.NEGATIVE_INFINITY
  - Number.NaN
- Basic number methods can be used on any type of numbers like literals, variables, or expressions.
  - toString(base)
  - toLocaleString(base)
  - toExponential()
  - toFixed()
  - toPrecision()
  - valueOf() - This method is used internally in JavaScript to convert Number objects to primitive values.

```js
// Example 1: Number properties can be called directly with Number Object in javascript
console.log(Number.MAX_VALUE); // Perfectly valid syntax
let x = 10;
console.log(x.MAX_VALUE); // This is incorrect. This will return "undefined"

// Example 2: Basic number methods can be called on any type of numbers
let rollno = 123;
rollno.toString(); // Variable Values
(123).toString(); // Literals
(100 + 23).toString(); // Expressions
```

## Number.toString(base)

- The method can take an optional radix argument to convert the number to a different base. The radix is simply the base of the number system you want to use when converting a number to a string with toString().
- By default, toString() uses base 10 (decimal system). If you pass a radix argument, you can represent the number in another base, like binary (base 2), octal (base 8), or hexadecimal (base 16). Valid radix values are between 2 and 36.

- Basic number methods can be used on any number. (Note: Always returns the string except valueOf() because it just returns primitive number itself)
- Static methods can be used directly on Number object or constructor.
  Number(), parseInt() and parseFloat() are global javascript methods but not number methods.

## Number.toFixed(digits)

- The number of digits to appear after the decimal point; should be a value between 0 and 100, inclusive.
- If this argument is omitted, it is treated as 0.
- RangeError → If digits is not between 0 and 100.
- TypeError → If this method is invoked on an object.
- Rounds the number if necessary.

## Number.toPrecision(precision)

- An integer specifying the number of significant digits.
- If this argument is omitted, it returns the given input as-is.
- RangeError → If digits is not between 0 and 100.
- TypeError → If this method is invoked on an object.

## How parseInt() method works internally in javascript

The parseInt() method in JavaScript works by first converting its input into a string, trimming whitespace, then reading characters from left to right until it encounters something invalid for the given base (radix). It returns the integer value parsed so far, otherwise NaN if no valid number can be formed.
