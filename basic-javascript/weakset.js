// Example 1: A simple illustration of what a WeakSet is meant for
let set = new WeakSet();

let obj = { firstname: "virat", lastname: "kohli" };

// Add the object to the Set
set.add(obj);

// Remove the only external reference
obj = null;

// Even though `obj` is null now, the Set still holds the object
console.log(set); // If Regular set = Set(1) { { firstname: "virat", lastname: "kohli" } }

// Example 2: User Authentication - Session Data | WeakSet to track active users
let activeUsers = new WeakSet();

function login(userObj) {
  activeUsers.add(userObj);
}

function isActive(userObj) {
  return activeUsers.has(userObj);
}

function logout(userObj) {
  userObj = null; // dropping reference
  // GC will remove userObj from WeakSet automatically
}

// Usage
let user = { name: "Keerthi" };
login(user);

console.log(isActive(user)); // true

logout(user);
// After GC, userObj is gone → WeakSet entry vanishes
