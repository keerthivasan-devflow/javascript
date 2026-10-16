// Object.is() is not equivalent to the == operator or === operator.

// The only difference between Object.is() and === is in their treatment of signed zeros and NaN values.
// The === operator (and the == operator) treats the number values -0 and +0 as equal,
// but treats NaN as not equal to each other.

// 1. both undefined
// 2. both null
// 3. both true or both false
// 4. both strings of the same length with the same characters in the same order
// 5. both the same object (meaning both values reference the same object in memory)
// 6. both BigInts with the same numeric value
// 7. both symbols that reference the same symbol value
// 8. both +0
// 9. both -0
// 10. both NaN
