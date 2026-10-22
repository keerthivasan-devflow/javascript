## 1. arr.find(callback, this)

- Iterates the array and returns the first element in an array that satisfies the condition. If no values satisfy the condition, undefined is returned.

## 2. arr.findLast(callback, this)

- Iterates the array in reverse order and returns the first element in an array that satisfies the condition. If no values satisfy the condition, undefined is returned.

## 3. arr.findIndex(callback, this)

- Iterates the array and returns the index of the first element in an array that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned.

## 4. arr.findLastIndex(callback, this)

- Iterates the array in reverse order and returns the index of the first element that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned.

## 5. arr.forEach(callback, this)

- Unlike map(), forEach() always returns undefined and is not chainable.
- There is no way to stop or break a forEach() loop other than by throwing an exception. If you need such behavior, the forEach() method is the wrong tool. [Break or Return statement will not work as expected].
- Early termination may be accomplished with looping statements like for, for...of, and for...in. Array methods like every(), some(), find(), and findIndex() also stops iteration immediately when further iteration is not necessary.
- Remember: Use forEach() when you want to process every element. If you need to stop early, choose a loop or array method designed for that purpose.

## 6. arr.join(separator)

- The string conversions of all array elements are joined into one string.
- If an element is undefined or null, it is converted to an empty string instead of the string "null" or "undefined".
- Iterates over sparse array and considered empty slots as if they have the value "undefined" and returns empty string.

## 7. arr.pop()

- The pop() method removes the last element from an array and returns that value to the caller.
- If you call pop() on an empty array, it returns undefined.
- The pop() method is a mutating method. It changes the length of the array.
- In case you want to return a new array with the last element removed. `arr.slice(0, -1)`

## 8. arr.fill(value, start, end)

## arr.copyWithin(target, start, end)

- copyWithin(target, start)
- copyWithin(target, start, end)

Notice that

- target — The index where the copied elements should be placed.
- start (optional) — The index from which copying begins. Default is 0.
- end (optional) — The index where copying stops (exclusive). Default is the array's length.

- copies a portion of an array to another position within the same array without changing its length.
- It modifies the original array and returns the modified array.
- overwrites existing elements. It never extends the array, even when there are more source elements than available target positions.

If -target < -array.length, 0 is used. `If the absolute value of target is greater than array.length, use index 0.`.
If target >= array.length, nothing is copied.y.length
