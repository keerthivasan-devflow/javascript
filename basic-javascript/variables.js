/*
1. Variable names must begin with a dollar sign, underscore, or letter, and the subsequent characters may be letters, 
    numbers, but cannot start with a numeric value.
2. variable names should be descriptive.
3. Variable name are case sensitive so that "age", "Age", and "AGE" are three different variables.
4. Variables should not contain hyphens to separate the words.
5. There should not be any white space between the variables.
6. No need to specify the datatype explicitly while declaring the variable, because javascript itself is a dynamically 
    typed programming language.
7. Variables names should not be a reserved keywords.
*/

// 1. VALID VARIBALE NAMES

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

console.log(`camelCase variable\t:${firstName}`);
console.log(`PascalCase variable\t:${LastName}`);
console.log(`snake_case\t:${date_of_birth}`);
console.log(`Descriptive name of a variable\t:${number}`);
console.log(`$ as a variable\t: ${$}`);
console.log(`_ as a variable\t:${_}`);
console.log(`A. Combination of letters, numbers and special symbols\t:${first$10}`);
console.log(`B. Combination of letters, numbers and special symbols\t:${$first10}`);
console.log(`Double dollar as a variable\t:${$$}`);
console.log(`Double underscore as a variable\t:${__}`);

// 2. TYPES OF VARIABLES: UNDEFINED Vs UNDECLARED

var product_price = 98;
console.log(`Cost of the product\t:${product_price}`);
// console.log(`Trying to access undeclared variable\t:${total_amount}`)

if (product_price === undefined) {
  console.log(`product_price is not defined`);
} else {
  console.log(`Product Price: ${product_price}`);
}

if (typeof total_amount === "undefined") {
  console.log(typeof total_amount);
  console.log(`total_amount variable is not exist - This means not declared!`);
} else {
  console.log(`The variable total_amount is exist`);
}
