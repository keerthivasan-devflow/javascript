let arr = ["a", "B", "c", "D"];

arr.sort((a, b) => {
  // Convert both characters to lowercase for case-insensitive sorting
  const charA = a.toLowerCase();
  const charB = b.toLowerCase();

  if (charA < charB) {
    return -1;
  }
  if (charA > charB) {
    return 1;
  }
  // If characters are the same after case conversion, maintain original order
  return 0;
});

console.log(arr);
