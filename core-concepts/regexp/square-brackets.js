// The pattern does not necessarily start matching from the first character of the string.
// It searches throughout the string until it finds a matching sequence.

// test() does not check whether the entire string matches the pattern.
// It checks whether at least one matching sequence exists anywhere in the string.

// There must be no whitespace between the matched letter and digit.
// The two characters must be immediately next to each other.

// Important note that whitespace anywhere else in the string does not matter.
let pattern = /[a-z][0-9]/;
let input = "apples500";
console.log(pattern.test(input));
