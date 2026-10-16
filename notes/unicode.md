## Unicode Characters

- Numbers [0-9] - 48 to 57
- lowercase - 65 to 90
- uppercase - 97 to 122

## UTF‑16 Code Units vs Full Unicode Code Points

### **UTF‑16 Code Units**

- JavaScript strings are stored internally as **UTF‑16**.
- Each character is represented by one or two **16‑bit code units** (values between 0 and 65535).
- For characters in the **Basic Multilingual Plane (BMP)** (U+0000 to U+FFFF), one code unit = one character.
- For characters outside BMP (like emojis, rare scripts), they need **two code units** (a surrogate pair).

Example:

```javascript
const smile = "😊";
console.log(smile.length); // 2 (two code units)
console.log(smile.charCodeAt(0)); // 55357 (high surrogate)
console.log(smile.charCodeAt(1)); // 56842 (low surrogate)
```

### **Full Unicode Code Points**

- A **code point** is the actual numeric value assigned to a character in Unicode (can go beyond 65535).
- Emojis like `"😊"` have code points above U+FFFF.
- To get the full code point, you use **codePointAt()**.

Example:

```javascript
console.log(smile.codePointAt(0)); // 128522 (full Unicode code point for 😊)
```

```js
const segmenter = new Intl.Segmenter("en", { granularity: "grapheme" });
const text = "👨‍👩‍👧‍👦💩🔥";

const segments = [...segmenter.segment(text)];
console.log(segments.map((s) => s.segment));
console.log([...text]);
console.log(text.split(""));

// ["👨‍👩‍👧‍👦", "💩", "🔥"]
```
