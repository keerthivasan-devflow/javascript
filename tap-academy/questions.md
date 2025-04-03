## FUNDAMENTALS OF JAVASCRIPT
1. Does hoisting occur for a variable if we try to access it before it's declared?
2. if there's a function declaration at the top level, is hoisting required for it?
3. What is reference variable?
    A variable that holds the address of another variable
4. Can a single object have multiple references?
5. What is pass by value and pass by reference?
6. What is garbage object in javascript?
    A garbage object in JavaScript refers to an object that no longer has any references pointing to it. Objects are retained in memory as long as there is a reference to them. Once all references to an object are removed, it is considered garbage and will be automatically deleted.
7. What is lexical scope?
    Lexical scope refers to the portion of memory that remains accessible even after a function has completed execution and its context has been removed. This occurs because the outer variables in the lexical scope are not deleted. When an inner function is returned to the outer scope, it also retains references to the outer function's variables. Essentially, the inner function creates a closure around the lexical scope, preserving its state.

## STRING MANIPULATION

- How can you split a string into two or more parts when assigning it to a variable?
- What is the length of an empty string, with and without spaces?
- What is the purpose of string or template literals?
- How can you embed HTML code within JavaScript?
- How can strings or characters be compared in javascript?
- What is string interpolation?
- What is string pool and string interning?
- Benefits of string interning 
    String comparison becomes faster, There will be only one copy of string in string pool.(Memory Optimization)
- Whether the string be will created in the stack or heap segment?
- Is there any difference between toString() vs String()?

- Output: Give the correct answer - What happens in this case?
    - let s1 = "Apple"
    - let s2 = "Apple"
    - let s3 = "Apple"

