// Example: arr.sort()
function compareNumeric(a, b) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}

let numeric = [4, 1, 2, 3];
numeric.sort(compareNumeric);
console.log(numeric);

// Array.sort()

const fruits = ["banana", "Apple", "cherry"];
fruits.sort((a, b) => a.localeCompare(b, "en", { sensitivity: "base" }));
// ["Apple", "banana", "cherry"]

// sensitivity – base, accent, case, variant
// Example: a.localeCompare(A, en, { sensitivity: base }) → 0

// ignorePunctuation – Ignores punctuation in comparison
// Example: a,b.localeCompare(ab, en, { ignorePunctuation: true }) → 0

// numeric – Treats numbers naturally
// Example: v2.localeCompare(v10, en, { numeric: true }) → -1

// caseFirst – upper or lower
// Controls whether uppercase sorts before lowercase

// Negative number – str comes before compareString
// Zero – Strings are considered equal
// Positive number – str comes after compareString
