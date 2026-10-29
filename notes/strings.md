## String Pool

- Strings are generally stored in a dedicated area of heap memory known as the String Pool.

## String Interning

String interning is a technique in which identical strings are stored in a shared memory location so that multiple references can reuse the same string instead of creating duplicate copies.

- For a particular value of a string, there will be only one copy of string that exist in the memory.
- Benefits - To make string comparison faster and Memory Optimization.

## String Immutability

let s1 = "cat"
let s2 = "b" + s1.slice(1); // "bat" - A new string is created and stored at a new memory address (2000), which is assigned to s2.
s1 = "b" + s1.slice(1); // "bat" - A new string is created at a new memory address (2000), and s1 is updated 1000 → 2000.

## String access through an index using bracket notation | string[]

- if index is out of range then it returns undefined.

## str.charAt(index)

- If index is omitted, then 0 is used.
- true turns into 1; false turns into 0.
- null or undefined or NaN turns into 0.
- charAt() returns an empty string if index is out of range.
- Range should be 0 to str.length - 1. Therefore, Infinity or -Infinity or negative indexes return an empty string.

## str.at(index)

## str.charCodeAt(index)

- undefined is converted to 0.
- If index is out of range of 0 – str.length - 1, charCodeAt() returns NaN.

## str.codePointAt(index)

- If index is out of the range of 0 – str.length - 1, codePointAt() returns undefined.

## Differences between substring(start, end) and slice(start, end)

- The substring() method swaps its two arguments if start > end whereas slice() method returns an empty string.
- If either or both of the arguments are negative or NaN, the substring() method treats them as if they were 0. slice() also treats NaN arguments as 0, but when it is given negative values it counts backwards from the end of the string to find the indexes.

## Differences between substring(start, end) and substr(start, length)

- The two parameters of substr() are start and length, while for substring(), they are start and end.
- substr()'s start index will wrap to the end of the string if it is negative, while substring() will clamp it to 0.
- Negative lengths in substr() are treated as zero so it returns empty string while substring() will swap the two indexes.

## Difference between search(searchString or regexp) and indexOf(searchString, startIndex)

- search() → supports regular expressions but not a starting index.
- indexOf() → supports a starting index but not regular expressions.

## str.match(regexp)

- When the regexp parameter is a string or a number, it is implicitly converted to a regular expression using new RegExp(regexp).
- If no match is found, it returns null.
- If no argument is passed, it matches an empty string and returns [""].
- If a match is found, it returns an array containing the matched value(s) and, depending on the regular expression and flags used, additional metadata.

## str.includes(searchString, startIndex)

- undefined or negative value turns into 0.
- Omitting search value causes includes() to search for the string "undefined", which is rarely what you want.
- str.includes("") returns true.