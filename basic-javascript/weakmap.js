// WeakMap to store session info
let sessionStore = new WeakMap();

function login(userObj, token) {
  sessionStore.set(userObj, { token, loggedIn: true });
}

function getSession(userObj) {
  return sessionStore.get(userObj);
}

function logout(userObj) {
  // Drop the reference to userObj
  userObj = null;
  // No need to manually delete — GC will reclaim memory
}

// Usage
let user = { name: "Keerthi" };
login(user, "abc123");

console.log(getSession(user)); // { token: "abc123", loggedIn: true }

logout(user);
// After GC runs, user object and its session data vanish automatically
