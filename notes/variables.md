## Rules for declaring a variable

1. Variable names must begin with a dollar sign, underscore, or letter, and the subsequent characters may be letters,
   numbers, but cannot start with a numeric value.
2. Variable name are case sensitive so that "age", "Age", and "AGE" are three different variables.
3. Variables should not contain hyphens or whitespaces to separate the words.
4. No need to specify the datatype explicitly while declaring the variable, because javascript itself is a dynamically
   typed programming language.
5. variable names should be descriptive.
6. Variables names should not be a reserved keywords but you can still use "LET" or  "Let" since they are different from "let".
7. A variable name could be a single dollar sign or underscore.
8. Declare multiple variables in a single statement by separating them with commas, or declare each variable in a separate statement.
9. Declare variables using var, let, or const, depending on the intended behavior of the variable.

```js
var firstName = "Keerthivasan";
var LastName = "Mani";
var date_of_birth = "16-04-1997";
var number = 7612;
var $ = 10;
var _ = 20;
var x = 4500;
var first$10 = "10$";
var $first10 = "$10";
var $$ = "SS";
var __ = "--";
```

## Types of variables - Undeclared vs Undefined

- To check whether a variable is initialized w/ any value or not. `product_price === undefined`
- To check whether a variable is declared or not. `typeof total_amount === "undefined"`
