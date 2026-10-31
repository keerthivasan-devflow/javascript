// Method 1: arr.copyWithin(target, start, end)
// 1. target — The index where the copied elements should be placed.
// 2. start (optional) — The index from which copying begins. Default is 0.
// 3. end (optional) — The index where copying stops (exclusive). Default is the array's length.

// Conditions:
// 1. If -target < -array.length, 0 is used.
// 2. If target >= array.length, nothing is copied.

// Note: copies a portion of an array to another position within the same array without changing its length.

const numbers = [10, 20, 30, 40, 50];
console.log(numbers.copyWithin(2));
console.log(numbers.copyWithin(2, 4));
console.log(numbers.copyWithin(2, 1, 3));
console.log([1, , 3].copyWithin(2, 1, 2)); // Sparse Array: [1, empty, empty] - Preserves empty slots

// Method 2: arr.reverse()
const items = [1, 2, 3, 4, 5];

const reversed = items.reverse();
// const reversed = [...items].reverse();
// const reversed = Array.from(items).reverse();
// const reversed = items.toReversed();

reversed[0] = 10;
console.log(reversed);
console.log(items);

// Method 3: arr.join(separator) → Converts array elements into a string using the specified separator.

// 1. If an element is undefined or null, it is converted to an empty string instead of the string "null" or "undefined".
// 2. Sparse Array: Considered empty slots as if they have the value "undefined" and returns empty string.

const websites = ["flikart", , "amazon", "meesho", , "facebook", "twitter"];
const socialmedias = ["instagram", "youtube", undefined, "netflix", null];

console.log(websites.join(","));
console.log(websites.toString());
console.log(socialmedias.join(" "));

// Example: Important differences with nested arrays → arr.join() vs arr.toString()
// Note: toString() on an array internally calls its join() method without arguments.
const nums = [10, 20, [30, 40]];
console.log(nums.join("-")); // 10-20-30,40
