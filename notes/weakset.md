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

- Primitives values live directly on the stack or are immutable values. They don’t have a "heap or reference identity". However, each object has its own reference or heap identity in the heap. Every object is allocated at a unique heap address. Even if two objects look the same, they are different because they live at different memory addresses.
- Objects live in the heap, so they can be garbage‑collected when unreachable.

## Key takeaways From Weaksets

1. WeakSet relies on object identity. It tracks whether a specific object reference is still alive.
2. If you drop all references (obj = null), the garbage collector can reclaim it, and the WeakSet entry vanishes.

- Reclaim it = the memory space in the heap is freed (This memory space can then be reused later to store some other object).
- WeakSet entry vanishes = the object exists no more in memory and disappears from the WeakSet.

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
