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
