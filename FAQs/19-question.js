function topFrequentElement(arr) {
  let hashmap = {};

  for (let i = 0; i < arr.length; i++) {
    if (!hashmap[arr[i]]) {
      hashmap[arr[i]] = 1;
    } else {
      hashmap[arr[i]]++;
    }
  }

  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (hashmap[arr[i]] > max) {
      max = hashmap[arr[i]];
    }
  }
  return max;
}

console.log(topFrequentElement([1, 1, 1, 2, 2, 3]));
console.log(topFrequentElement([4, 4, 4, 6, 6, 6, 6, 6, 8, 8]));

function topKFrequentElements(arr, k) {
  let hashmap = {};

  // Step 1: Frequency map
  for (let i = 0; i < arr.length; i++) {
    hashmap[arr[i]] = (hashmap[arr[i]] || 0) + 1;
  }

  // Step 2: Convert hashmap to array of [num, freq] pairs
  let entries = Object.entries(hashmap);

  // Step 3: Sort entries based on frequency (descending)
  entries.sort((a, b) => b[1] - a[1]);

  // Step 4: Pick top k elements
  let res = [];
  for (let i = 0; i < k; i++) {
    res.push(Number(entries[i][0])); // Convert string key to number
  }

  return res;
}

console.log(topKFrequentElements([1, 1, 1, 2, 2, 3], 2));
console.log(topKFrequentElements([4, 4, 4, 6, 6, 6, 6, 6, 8, 8], 1));

// Recommendation:
// Use a bucket sort or min-heap approach for real Top K Frequent Element problems — especially when k can vary.
// Let me know if you want:
// 1. Bucket sort (without built-ins) — already shared earlier.
// 2. Min-heap version (efficient for large datasets with small k)
// 3. Optimized in-place memory-conscious version.
