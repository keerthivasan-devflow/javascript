// Example 1: Blocking-Code | Synchronous Single-Threaded

// Here, start and end are fixed values. They do not change after assignment.
// Date.now() is evaluated again and again on every loop iteration, whereas end remains unchanged.
// When the condition becomes false, the loop stops and JavaScript executes the console.log("Task 1 Completed").
function task1() {
  let start = Date.now(); // 1000 ms
  let delay = 5000; // 5000 ms
  let end = start + delay; // 6000 ms

  while (Date.now() <= end) {}
  
  console.log("Task 1 - Completed");
}

function task2() {
  let start = Date.now();
  let delay = 5000;
  let end = start + delay;
  while (Date.now() <= end) {}
  console.log("Task 2 - Completed");
}

function task3() {
  let start = Date.now();
  let delay = 5000;
  let end = start + delay;
  while (Date.now() <= end) {}
  console.log("Task 3 - Completed");
}

task1();
task2();
task3();

// Example 2: Synchronous Callbacks - aren’t about timing, they’re about design flexibility!
function processArray(arr, callback) {
  let result = [];
  for (let num of arr) {
    result.push(callback(num));
  }
  return result;
}

console.log(processArray([1, 2, 3], (n) => n * 2)); // [2,4,6]
console.log(processArray([1, 2, 3], (n) => n ** 2)); // [1,4,9]

// Example 3: Callback Function Illustration

function UploadVideo(video, callback) {
  console.log("Uploading Video..." + video.title);
  setTimeout(() => {
    console.log("Uploading Done! - " + video.title);
    callback(video);
  }, 5000);
}

function PublishVideo(video, callback) {
  console.log("Publishing Video..." + video.title);
  setTimeout(() => {
    console.log("Publishing Done! - " + video.title);
    callback(video);
  }, 3000);
}

function NotificationSent() {
  console.log("Notification Sent!");
}

// Case 1 - This will not give expected result
UploadVideo();
PublishVideo();
NotificationSent();

// Case 2 - This will help to get the desired result

UploadVideo(function () {
  PublishVideo(function () {
    NotificationSent();
  });
});

// UploadVideo(() => {
//   PublishVideo(() => {
//     NotificationSent();
//   });
// });

// Case 3 - To pass data to callback function
let data = {
  title: "The Jungle Book",
  description: "Exploring a wildlife in an adventorous way",
};

UploadVideo(data, function (uploadedData) {
  PublishVideo(uploadedData, function (publishedData) {
    NotificationSent(publishedData);
  });
});

// Example 4: Promises - Best alternative to callbacks
function UploadVideo(video) {
  return new Promise((resolve) => {
    console.log("Uploading Video..." + video.title);
    setTimeout(() => {
      console.log("Uploading Done! - " + video.title);
      resolve(video);
    }, 5000);
  });
}

function PublishVideo(video) {
  return new Promise((resolve) => {
    console.log("Publishing Video..." + video.title);
    setTimeout(() => {
      console.log("Publishing Done! - " + video.title);
      resolve(video);
    }, 3000);
  });
}

function NotificationSent(video) {
  console.log("Notification Sent for:", video.title);
}

UploadVideo(data).then(PublishVideo).then(NotificationSent);

// Example 5: Best alternative to promises
async function main() {
  await uploadVideo();
  await publishVideo();
  sendNotification();
}

// Example 6: How to pass data as an argument to callbacks!
function displayName(name, callback, abc) {
  console.log("Hello " + name);
  callback(abc);
}

let id = 16234;
let callbackFunc = (id = 0) => console.log("Callback execution! " + id);
displayName("Keerthivasan", callbackFunc, id);
displayName("Rick", callbackFunc);
displayName("Janet", callbackFunc);
displayName("Walker", callbackFunc);
