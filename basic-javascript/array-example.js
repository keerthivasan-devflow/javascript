
function moveZeroes(nums) {
  let nonZeroIndex = 0;

  nums.forEach((num, i) => {
    if (num !== 0) {
      nums[nonZeroIndex] = num;
      if (nonZeroIndex !== i) nums[i] = 0;
      nonZeroIndex++;
    }
  });
}

// Example usage:
let givearr = [0, 1, 0, 3, 12];
moveZeroes(givearr);
console.log(givearr); // Output: [1, 3, 12, 0, 0]


function findPairs(nums, target) {
  let pairs = [];
  let seen = new Set();

  for (let num of nums) {
    let complement = target - num;
    if (seen.has(complement)) {
      pairs.push([complement, num]);
    }
    seen.add(num);
  }

  return pairs;
}

// Example usage:
console.log(findPairs([1, 2, 3, 4, 3, 5], 6)); // Output: [[3, 3], [2, 4]]
