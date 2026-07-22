// Example 1: Define set
const fruits = new Set(["Apple", "Kiwi", "Mango", "Orange", "Grapes"]);

// Example 2: Get the values of set
console.log(fruits);
console.log([...fruits]);
console.log(Array.from(fruits));
console.log(Array.of(...fruits));
for (let fruit of fruits) {
  console.log(fruit);
}

// Example 3: Add an item to an existing set
fruits.add(false).add(781).add(8034);

// Example 4: Delete set item
fruits.delete("Mango");

// Example 5: Check set size
console.log(fruits.size);

// Example 6: Check whether an item exist or not in the set
console.log(fruits.has("Kiwi"));

// Example 7: Clear the set completely
fruits.clear();

// Example 8: Logical set methods
const A = new Set(["a", "b", "c"]);
const B = new Set(["b", "c"]);
const C = new Set();
const D = new Set("a", "b", "c");

console.log(A.union(B));
console.log(A.intersection(B));
console.log(A.difference(B));
console.log(A.symmetricDifference(B));

// Example 9: A.isSubsetOf(B)
// Note: Every element in the LHS set must also exist in the RHS set  → true.
// A. Empty set rule: new Set().isSubsetOf(anySet) → true.
console.log(C.isSubsetOf(A));
// B. Size check rule: If A.size > B.size, A.isSubsetOf(B) → false.
console.log(A.isSubsetOf(B));
// C. Equal sets: Subset check returns true in either ways like A.isSubsetOf(B) vs B.isSubsetOf(A)
console.log(A.isSubsetOf(D));

// Example 10: A.isSupersetOf(B)
// A. Empty Set Rule: Any set is a superset of the empty set.
const A = new Set(["x", "y"]);
const empty = new Set();
console.log(A.isSupersetOf(empty)); // true

// B. Size Optimization: If A.size < B.size, the method immediately returns false.
const A = new Set(["a", "b"]);
const B = new Set(["a", "b", "c"]);
console.log(A.isSupersetOf(B)); // false

// C. NaN Handling: Uses SameValueZero equality, so NaN equals NaN and +0 equals -0.
const A = new Set([NaN, +0]);
const B = new Set([NaN, -0]);
console.log(A.isSupersetOf(B)); // true

// Example 11: isDisjoinFrom(B)- checks whether two sets share no common elements.
// Overlap Rule: If even one element matches, result is false.
// Empty Set Rule: An empty set is disjoint with any set. (Performance Optimization)
// Performance Optimization: If A.size === 0 or B.size === 0, it immediately returns true.
// How internally works? - would loop through elements of the smaller set and check membership in the larger set.
// To minimize work, the algorithm picks whichever set has fewer elements.
