function uploadVideo(callback) {
  console.log("Step1: Uploading Video");
  setTimeout(() => {
    console.log("Step2: Uploading Done");
    callback();
  }, 5000);
}

function publishVideo(publishedDone) {
  console.log("Step3: Publishing Video");
  setTimeout(() => {
    console.log("Step4: Publishing Done");
    publishedDone();
  }, 3000);
}

function NotificationSent() {
  console.log("Step5: Nofitication Sent");
}

uploadVideo(function () {
  publishVideo(function () {
    NotificationSent();
  });
});

/*
Alternative solution for callback:
**********************************
function uploadVideo() {
    return new Promise((resolve, reject) => {
        console.log("Uploading Video...");
        setTimeout(() => {
            console.log("Uploading video done");
            resolve();
        }, 5000);
    });
}

function publishVideo() {
    return new Promise((resolve, reject) => {
        console.log("Publishing Video...");
        setTimeout(() => {
            console.log("Published video done");
            resolve();
        }, 3000);
    });
}

function sendNotification() {
    console.log("Notification sent");
}

async function main() {
    await uploadVideo();
    await publishVideo();
    sendNotification();
}

main();
*/
