
**JavaScript Promises cannot be truly “canceled” once started — you can only stop *listening* to their result or use patterns like `AbortController` or custom wrappers to simulate cancellation.** This means the underlying async task (like a network request or timeout) will still run, but you can reject or ignore its outcome.  [DEV Community](https://dev.to/zacharylee/how-to-annul-promises-in-javascript-56pk)  [blog.gaborkoos.com](https://blog.gaborkoos.com/posts/2025-12-23-Cancellation-In-JavaScript-Why-Its-Harder-Than-It-Looks/)  

---

## 🔑 Key Points About Promise Cancellation
- **No native cancellation**: The Promise API itself does not provide a `.cancel()` method. Once created, it will resolve or reject eventually.  [blog.gaborkoos.com](https://blog.gaborkoos.com/posts/2025-12-23-Cancellation-In-JavaScript-Why-Its-Harder-Than-It-Looks/)  
- **AbortController for fetch**: You can cancel `fetch()` requests using `AbortController`. This is the most common real-world cancellation mechanism.  
- **Custom cancelable wrappers**: Developers often build wrappers around Promises that expose a `cancel()` method, which rejects the Promise early. The underlying task still runs, but you stop caring about its result.  [DEV Community](https://dev.to/zacharylee/how-to-annul-promises-in-javascript-56pk)  
- **Promise.withResolvers() (Node v22+)**: A new API that makes it easier to build cancelable tasks by exposing `resolve` and `reject` functions outside the Promise.  [LogRocket Blog](https://blog.logrocket.com/mastering-promise-cancellation-javascript/)  

---

## 🛠 Practical Techniques

### 1. Using `AbortController` with Fetch
```js
const controller = new AbortController();
const signal = controller.signal;

fetch("https://catfact.ninja/breeds?page=1", { signal })
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error("Fetch canceled:", err));

controller.abort(); // Cancels the request
```
- **Effect**: The network request is aborted, and the Promise rejects with an `AbortError`.

---

### 2. Custom Cancelable Promise Wrapper
```js
function buildCancelableTask(asyncFn) {
  let canceled = false;
  const { promise, resolve, reject } = Promise.withResolvers();

  return {
    run: () => {
      if (!canceled) asyncFn().then(resolve, reject);
      return promise;
    },
    cancel: () => {
      canceled = true;
      reject(new Error("CanceledError"));
    }
  };
}

// Usage
const task = buildCancelableTask(() => new Promise(res => setTimeout(() => res("Done"), 1000)));
task.run().then(console.log).catch(console.error);
setTimeout(() => task.cancel(), 500);
```
- **Effect**: The wrapper rejects early with `"CanceledError"`. The underlying `setTimeout` still runs, but its result is ignored.  [DEV Community](https://dev.to/zacharylee/how-to-annul-promises-in-javascript-56pk)  

---

## ⚠️ Limitations & Risks
- **Underlying work continues**: Cancellation only affects the Promise consumer, not the actual async operation (except for APIs like `fetch` that support aborting).  
- **Resource leaks**: If you rely on cancellation without cleanup, background tasks may still consume memory or CPU.  
- **Timeout ≠ cancellation**: Using `Promise.race()` with a timeout only stops waiting; it doesn’t stop the task itself.  [blog.gaborkoos.com](https://blog.gaborkoos.com/posts/2025-12-23-Cancellation-In-JavaScript-Why-Its-Harder-Than-It-Looks/)  

---

## 📌 Summary
- **Native Promises cannot be canceled.**  
- Use **AbortController** for `fetch`.  
- Build **cancelable wrappers** with `Promise.withResolvers()` or similar patterns.  
- Understand that cancellation usually means *ignoring results*, not stopping execution.  

Would you like me to show you a **side-by-side comparison of AbortController vs custom cancelable wrappers** so you can see which fits better for real-world use cases?