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
- Basic number methods can be used on any type of numbers (literals, variables, or expressions)
  - toString(base)
  - toLocaleString(base)
  - toExponential()
  - toFixed()
  - toPrecision()
  - valueOf() - This method is used internally in JavaScript to convert Number objects to primitive values.
- Static number methods can be used on Number Object or constructor only but not on values itself.

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

## How parseInt() method works internally in javascript

The parseInt() method in JavaScript works by first converting its input into a string, trimming whitespace, then reading characters from left to right until it encounters something invalid for the given base (radix). It returns the integer value parsed so far, or NaN if no valid number can be formed.
