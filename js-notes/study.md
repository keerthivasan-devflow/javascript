
# Object.entries()

**`Object.entries()` is best used when you need both keys and values together, especially for iteration, transformation, or converting objects into other structures like arrays or Maps. It’s a powerful bridge between objects and array methods.**

---

## 🔹 Key Use Cases of `Object.entries()`

- **Iterating over objects**  
  ```js
  const user = { name: "Keerthivasan", age: 25, city: "Chennai" };
  for (const [key, value] of Object.entries(user)) {
    console.log(`${key}: ${value}`);
  }
  ```
  ✅ Cleaner than `for...in` because it avoids prototype properties.

- **Transforming objects**  
  Use with `map`, `filter`, or `reduce` to reshape data.  
  ```js
  const obj = { a: 1, b: 2, c: 3 };
  const doubled = Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [key, value * 2])
  );
  console.log(doubled); // { a: 2, b: 4, c: 6 }
  ```

- **Converting to Map**  
  ```js
  const obj = { x: 10, y: 20 };
  const map = new Map(Object.entries(obj));
  console.log(map.get("x")); // 10
  ```
  ✅ Useful when you need non-string keys or size tracking.

- **Filtering properties**  
  ```js
  const obj = { a: 1, b: null, c: 3 };
  const filtered = Object.fromEntries(
    Object.entries(obj).filter(([_, value]) => value !== null)
  );
  console.log(filtered); // { a: 1, c: 3 }
  ```

- **Normalizing or renaming keys**  
  Example: converting snake_case to camelCase.  
  ```js
  const obj = { first_name: "John", last_name: "Doe" };
  const camelCase = Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [
      key.replace(/_([a-z])/g, (_, c) => c.toUpperCase()),
      value
    ])
  );
  console.log(camelCase); // { firstName: "John", lastName: "Doe" }
  ```

- **Rendering UI lists**  
  In frontend code, you can loop through entries to dynamically build tables or definition lists without hardcoding field names.

---

## ⚠️ Common Pitfalls
- **Performance cost**: Each call rebuilds arrays of pairs. Cache results if looping multiple times.  
- **Numeric keys order**: Integer-like keys are sorted ascending, not insertion order.  
- **Map conversion caveat**: Object keys are always strings, so converting back from a Map may lose non-string keys.  [Mozilla Developer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries)  [javascript.ac](https://javascript.ac/en/reference/object-entries)  [GeeksForGeeks](https://www.geeksforgeeks.org/javascript/javascript-object-entries-method/)  

---

👉 Do you want me to create a **comparison table** showing when to use `Object.keys()`, `Object.values()`, and `Object.entries()` side by side? That makes it easier to decide which method fits a given scenario.