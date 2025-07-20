// Approach 1 - Brute Force Method
// Time Complexity - O(n^2)
// Space Complexity - O(n)
function intersection(arr1, arr2) {
  let res = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] == arr2[j]) {
        res.push(arr1[i]);
      }
    }
  }
  return res;
}
// console.log(intersection([2, 1, 4, 6, 3], [1, 7, 8, 3, 2]));

function intersection2(arr1, arr2) {
  let map = {};
  let res = [];
  for (let i = 0; i < arr1.length; i++) {
    if (!map[arr1[i]]) {
      map[arr1[i]] = 1;
    }
  }

  for (let i = 0; i < arr2.length; i++) {
    if (map[arr2[i]]) {
      res.push(arr2[i]);
    }
  }
  return res;
}
console.log(intersection2([2, 1, 4, 6, 3], [1, 7, 8, 3, 2]));
