/*
1. Variable names must begin with a dollar sign, underscore, or letter, and the subsequent characters may be letters, 
    numbers, but cannot start with a numeric value.
2. variable names should be descriptive.
3. Variable name are case sensitive so that "age", "Age", and "AGE" are three different variables.
4. Variables should not contain hyphens / whitespaces to separate the words.
5. No need to specify the datatype explicitly while declaring the variable, because javascript itself is a dynamically 
    typed programming language.
6. Variables names should not be a reserved keywords.
*/

// Example 1: All these are valid variables

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

// Example 2: Types of variables - Undeclared vs Undefined
// To check whether a variable is exist but initialized w/ any value or not [product_price === undefined]
// To check whether a variable is exist [typeof total_amount === "undefined"]
