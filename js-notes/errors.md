## 1. Reference Error - occurs whenever you try to access a variable, function, or identifier that doesn’t exist in the current scope or is accessed before it’s initialized.

1. Try to access undeclared variables / functions / any identifier
2. Typo in the variable names
3. Access Before Declaration (TDZ)
4. Block / Function Scope Violation
5. Imports are missing

## 2. TypeError - Identifier exists, but the operation on its value is invalid

1. Accessing property of null/undefined
2. Invalid assignment to const
3. Invalid operation on data

## 3. Range Error

1. new Array(-1) - Attempting to create an array with a negative length or a length greater than 2^32 - 1
2. num.toPrecision(500) - toPrecision() argument must be between 1 and 100
3. Custom Range Validation
4. String Normalization Invalid Form

```js
// Example 3
function check(n) {
  if (n < 1 || n > 10) {
    throw new RangeError("Number must be between 1 and 10");
  }
}
check(20);

// Example 4
"hello".normalize("NFC"); // Works
"hello".normalize("NFD"); // Works
"hello".normalize("NFKC"); // Works
"hello".normalize("NFKD"); // Works
"hello".normalize("XYZ"); // RangeError: Invalid normalization form
```

## 4. URI Errors - occurs if you use illegal characters in a URI function

## 5. Syntax Errors - occurs when the code violates JavaScript's grammar rules.

## 6. AggregateError - Promises

## 7. Silent Syntax Errors - which will never stop your program execution

1. Accessing undeclared variables will not stop your program. It will return the value of x.
   x = 10;
   console.log(x);

2. Assignment, not comparison.
   let result = "Not Active.";
   let isActive = false;

   if (isActive = true)
   let result = "Active!";

3. Numeric Operation fails but produces "NaN" - parseInt("abc")
4. Accessing a missing property just returns undefined silently.
   const user = {};
   console.log(user.name);
5. JavaScript is weakly typed, it doesn't throw errors when types don't match - console.log('5' - '2')

## 8. Error Object