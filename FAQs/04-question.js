let text = "we need to take care of our world for future generations";
let splitted = text.split("");
const result = splitted.reduce((acc, curr) => {
  if (acc[curr]) {
    acc[curr]++;
  } else {
    acc[curr] = 1;
  }
  return acc;
}, {});

console.log(result);

let obj = {};
for (let i = 0; i < text.length; i++) {
  if (obj[text[i]]) {
    obj[text[i]] += 1;
  } else {
    obj[text[i]] = 1;
  }
}

console.log(obj)