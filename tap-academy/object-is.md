Object.is(NaN, NaN); // true
NaN === NaN; // false

Object.is(+0, -0); // false
+0 === -0; // true

For all other values, Object.is behaves similarly to the strict equality (===), returning true if the values are the same and false otherwise.