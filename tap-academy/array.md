- What is an array, and what is its purpose in programming?
- How can you declare an array using different methods? (e.g., using array literals, new Array())
- How do you access the first and last elements of an array? Luckily, there’s a shorter syntax: fruits.at(-1)
- How do you find the length of an array?
- What are the potential issues or pitfalls of creating an array using new Array()?
- How can you convert an array into a string? What are two different ways to do this?
- How to recognize an array - 3 ways
- Associative array vs. Indexed array
- Sparse array vs. Dense array
- What actually happens when we modify the array?
  - The length property automatically updates when we modify the array. To be precise, it is actually not the count of values in the array, but the greatest numeric index plus one.

## Why is it faster to work with the end of an array than with its beginning?
- Methods push/pop run fast, while shift/unshift are slow
- The shift operation must do 3 things 
    - Remove the element with the index 0. 
    - Move all elements to the left, renumber them from the index 1 to 0, from 2 to 1 and so on. 
    - Update the length property.
  **The more elements in the array, the more time to move them, more in-memory operations whereas the pop method does not need to move anything, because other elements keep their indexes. That’s why it’s blazingly fast.**

## A word about “length”
Another interesting thing about the length property is that it’s writable.
If we increase it manually, nothing interesting happens. But if we decrease it, the array is truncated. The process is irreversible
let arr = [1, 2, 3, 4, 5];

    arr.length = 2; // truncate to 2 elements
    console.log( arr ); // [1, 2]

    arr.length = 5; // return length back
    console.log( arr[3] ); // undefined: the values do not return

So, the simplest way to clear the array is: arr.length = 0;
Note: [] returns ""

## Code Snippet: Justify the output for the below
→ They're just object-like properties added to the array. They do not affect the array’s length.
→ Array.from() creates a shallow copy of the array based only on its indexed elements and ignores custom properties.

    let fruits = [];
    fruits[0] = 5;
    fruits[1] = 10;
    fruits.age = 27;
    fruits.name = "orange";

    for (let key in fruits) {
        console.log(fruits[key]);
    }

    console.log(Array.from(fruits)); // Returns [5, 10]
    console.log(Array.from(fruits).length); // Returns 2

## Array 'Const'
- It has become a common practice to declare arrays using const
  - The keyword const is a little misleading
  - It does NOT define a constant array. It defines a constant reference to an array
  - Because of this, we can still change the elements of a constant array

## When to Use Arrays. When to use Objects
- JavaScript does not support associative arrays
- arrays use numbered indexes
- objects use named indexes

## Array.filter()

- The filter() method is used to filter the elements of an array based on a condition and returns the new array.

## Array.some()

- Who has actually completed atleast one task if you've given by list of tasks.

## Array.every()

- In an e-commerce application, you want to check if all products are in stock before allowing the user to place an order.

## Array.find() / Array.findLast() / Array.findIndex() / Array.findLastIndex()

- Imagine you have a list of users or products where you want to find a user or product with specific id.

## Array.indexOf() vs Array.findIndex()?
- Array.indexOf() looks for a specific element exactly equal to the argument [It uses strict equality check].
- Array.findIndex() accepts a callback function that is used for searching based on a condition.

    const numbers = [10, "30", 30, 40, 50];
    console.log(numbers.indexOf(30));
    console.log(numbers.findIndex((element) => element == 30));

## Array.copyWithin()

https://www.javaguides.net/2019/04/javascript-array-copywithin-method.html