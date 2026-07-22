## Realtime Usecases Of Regular Set in Javascript

- Deduplicating state → Shopping cart stays clean.
- Tracking unique inputs → Newsletter emails stay unique.
- Fast membership checks → Username validation is instant.
- Managing toggles → Feature flags are easy to flip.
- Online polls → Prevent multiple votes for the same option.

## Limitations Of Sets

```js
const roles = new Set(["admin", "editor", "viewer"]);
console.log(JSON.stringify(roles)); // Output: "{}" (empty object, not useful) - Direct serialization fails
const serialized = JSON.stringify([...roles]); // Convert to array first
const restored = new Set(JSON.parse(serialized)); // Later, you can restore it back to a Set
```

## WeakSet

- A JavaScript WeakSet is a collection of values where the values must be objects.
- A WeakSet holds weak references to its values.

## Objects have identity in Javascript

- Objects live in the heap, so they can be garbage‑collected when unreachable.
- Primitives values live directly on the stack or are immutable values. They don’t have a “heap/reference identity”. However, each object has its own reference/heap identity in the heap.(every object is allocated at a unique heap address). Even if two objects look the same (consists same value), they are different because they live at different memory addresses.

## Key takeaways From Weaksets

1. WeakSet relies on object identity. It tracks whether a specific object reference is still alive.
2. If you drop all references (obj = null), the garbage collector can reclaim it, and the WeakSet entry vanishes.

- Reclaim it = the memory space in the heap is freed (That memory space can then be reused later to store some other object).
- WeakSet entry vanishes = the object exists no more in memory and disappears from the WeakSet.

## Regular Set In Javascript

When we say “a regular Set holds onto its values strongly”, it means that once you put something inside a Set, JavaScript will keep that value in memory until you explicitly remove it (with .delete() or .clear()). Even if your program doesn’t use that value anywhere else, the Set itself is still a reference — so the garbage collector cannot free up the memory space.

## Regular Set vs WeakSet

1.  Heap memory
    - Objects in JavaScript live in the heap. Variables (like obj) just hold references (pointers) to those objects.(To where the object is stored in the heap).

2.  Setting to null
    - When you do obj = null, you’re not deleting the object itself. You’re only cutting the link between the variable and the object.
      If another reference exists (like a regular Set holding it), the object still lives in the heap.
      If no references exist anywhere, the garbage collector will eventually free that heap memory.

3.  Regular Set strong reference
    - A normal Set keeps a strong reference. So even if you set obj = null, the object is still reachable through the Set. That means the garbage collector won’t reclaim it yet.

4.  WeakSet weak reference
    - A WeakSet doesn’t hold strong references. If you set obj = null and no other references exist, the garbage collector sees the object as “unreachable” and frees the memory. The entry disappears from the WeakSet automatically.

## Memory Leak

A memory leak in JavaScript occurs when the program allocates memory but fails to release it when it's no longer needed. This results in the consumption of more and more memory over time, which can eventually lead to performance issues, slowdowns, or crashes in your application.

## How to Prevent Memory Leaks

- Use let and const instead of var to avoid accidentally creating global variables.
- Always clear timeouts or intervals with clearInterval and clearTimeout.
- Remove event listeners when they are no longer needed.
- Avoid circular references or manually break them if necessary.
- Be careful when using closures to avoid retaining unnecessary references.
- Use weak references or WeakMap/WeakSet to store references that don't prevent garbage collection.

**WeakSet is rarely used in everyday coding, but it shines in very specific real‑world scenarios: it helps prevent memory leaks by tracking objects without keeping them alive unnecessarily.**

## Real Use Cases of WeakSet

- **Memory management**  
  WeakSet is useful when you want to store objects temporarily without preventing garbage collection. For example, **caching objects** that should disappear once no one else references them.

  **Web browsers** - Browsers cache images, scripts, and data so that when you revisit a site, it loads faster without re‑downloading everything.

  **API responses** - In web apps, data fetched from a server (like user profiles or product lists) can be cached in memory. If you request the same data again, the app serves it from cache instead of making another network call.

  Example: Shopping apps caching product details for smoother browsing.

  **Session data** - Apps cache user session info (like login state) so you don’t have to re‑authenticate every time you click a new page.

  **Autocomplete suggestions** - When typing in a search box, previously fetched suggestions are cached. If you type similar queries again, results appear instantly.

  **Component state in frameworks** - Frameworks like React or Angular cache component states and DOM nodes to avoid re‑rendering everything from scratch.

- **Tracking visited objects**  
  In graph/tree traversal algorithms, you can use a WeakSet to mark nodes as “visited.” Once nodes are no longer referenced elsewhere, they vanish automatically, avoiding memory leaks.

  ```js
  let visitedNodes = new WeakSet();
  function traverse(node) {
    if (visitedNodes.has(node)) return;
    visitedNodes.add(node);
    node.children.forEach(traverse);
  }
  ```

- **DOM node tracking**  
  In front‑end apps, WeakSet can track DOM elements with event listeners. If the element is removed from the DOM, the WeakSet entry vanishes automatically, preventing memory leaks.  
  Example: Infinite scrolling lists or dynamic UI components.

## Comparison: Set vs WeakSet

| Feature     | **Set**               | **WeakSet**                      |
| ----------- | --------------------- | -------------------------------- |
| Value types | Objects + primitives  | Objects only                     |
| References  | Strong (prevents GC)  | Weak (allows GC)                 |
| Iteration   | Iterable, has `.size` | Not iterable, no `.size`         |
| Use case    | Permanent collections | Temporary tracking without leaks |

## References

- https://kitemetric.com/blogs/weakmap-vs-weakset-mastering-memory-management-in-javascript
- https://www.javascriptroom.com/blog/what-is-the-use-of-a-weakset-object-in-javascript/
- https://logichive.in/blogs/understanding-weak-set-in-java-script-a-comprehensive-guide/17
