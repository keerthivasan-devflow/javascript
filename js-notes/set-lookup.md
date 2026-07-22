## Set lookup is considered O(1) - How?

Set lookup is considered O(1) on average because hash-based structures (like Set in JavaScript) use a hash function to directly map an element to a memory bucket, avoiding linear scans. Internally, this relies on hashing, array indexing, and collision resolution strategies.

### Hash function

1. Hash function: Converts input/each element into numeric hash code.
2. Bucket array: Uses modulo to map hash to bucket index. (Hash code % index)

- Each bucket can hold one or more entries.
- If two values hash to the same index, they’re stored together (collision occurs - so collision resolution must apply).
- Engines like V8 (used in Node.js and Chrome) use open addressing or linked structures to handle these collisions efficiently.

1. Lookup: Direct jump to bucket → compare values.
2. Efficiency: O(1) average, O(n) worst case (if collisions pile up).

### Direct indexing

Since arrays allow constant-time access by index, the element’s bucket can be located in constant time, independent of the total number of elements.

### Collision handling

If two elements hash to the same bucket, the Set uses strategies like:
A. Separate chaining (Open Hashing) - Linked list or Balanced tree inside the bucket.
B. Open addressing (Closed Hashing) - Probing for the next available slot. (Linear Probing | Quadratic Probing | Double Hashing)

With a good hash function and balanced load factor, collisions remain rare, keeping lookup near O(1).
