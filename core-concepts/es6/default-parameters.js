
// Example 9: Default Function Parameters
function test(x = 5, y = 15, z = 25) {
  console.log(x, y, z);
}

test(); // 5, 15, 25
test(10); //10, 15, 25
test(10, 20); //10,20,25
test(10, 20, 30); //10,20,30
test(10, undefined, undefined); //10, 15, 25
test(10, undefined, null); //10, 15, null