// Method: Object.assign(target, source1, source2...sourceN) → It returns target object.
// 1. This method only copies enumerable and own properties from a source object to a target object.
// 2. Properties in the target object are overwritten by properties in the sources if they have the same key. Left → Right

// Example 1: Only enumerable properties are copied or merged.
var source1 = { a: 10 };
var source2 = { b: 20 };
var source3 = { c: 30 };
var source4 = { d: 40 };

Object.defineProperty(source1, "a", { value: 10, enumerable: false });

var target1 = Object.assign({}, source1, source2, source3, source4);
console.log(target1); // Expected Output: { b: 20, c: 30, d: 40 }

// Example 2: Only own properties are copied or merged.
var source5 = Object.create(source4);
var target2 = Object.assign({ w: 40 }, source1, source2, source3, source5);
console.log(target2); // Expected Output: { w: 40, b: 20, c: 30 }

// Example 3: Properties in the target object are overwritten by properties in the sources
var origin1 = { x: 10, y: 20, z: 30 };
var origin2 = { w: 15, z: 45, x: 25 };
var origin3 = { t: 45, x: 45, y: 80 };
var target3 = Object.assign({ t: 40 }, origin1, origin2, origin3);
console.log(target3); // Expected Output: { t: 45, x: 45, y: 80, z: 45, w: 15 }
