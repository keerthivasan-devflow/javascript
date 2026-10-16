## Iterator Object

An iterator object in javascript is any object that follows the Iterator Protocol, meaning it has a next() method that returns an object with two properties: value (the current item) and done (a boolean indicating if iteration is finished).

## Iterables

In JavaScript, an iterable is an object that implements the [Symbol.iterator](). It allows you to access its elements one at a time using mechanisms such as for...of, spread syntax (...), and Array.from().

## Iterable Objects - Iterable objects and their associated iterator objects.

1. String | String Iterator
2. Array | Array Iterator
3. Set | Set Iterator
4. Map | Map Iterator
5. Generator Functions | Generator Objects
6. NodeList (Browser)
7. Typed Array
8. Arguments Object

## Array-Like Objects - Has a length property and indexed properties, such as 0, 1, and 2.

1. String
2. Arguments (In conventional function)
3. HTML Collections
4. DOM NodeList
5. TypedArray
6. Custom array-like objects

## References

- https://www.youtube.com/watch?v=6D7XOGXbyfs | YouTube Channel - Andrew Burgess
