let XMLRequest = new XMLHttpRequest();
function fetchData() {
  XMLRequest.onreadystatechange = function () {
    if (XMLRequest.readyState === 4) {
      let parsedData = JSON.parse(XMLRequest.response);
      parsedData.forEach((element) => {
        document.write(
          `<img src=${element.thumbnailUrl} style="margin: 10px;"/>`
        );
      });
    }
  };
}

XMLRequest.open("GET", "https://jsonplaceholder.typicode.com/photos");
XMLRequest.send();

let data = [
  {
    id: "174640",
    user: "Keerthivasan Mani",
    role: "React JS Developer",
  },
  {
    id: "2096938",
    user: "Mattaparthi Prasad",
    role: "Drupal Developer",
  },
  {
    id: "56002172",
    user: "Hummaneni Hemalatha",
    role: "Digital Support",
  },
];

let ParentDivElement = document.getElementsByClassName("container")[0];
let GetInputData = document.getElementById("posts");

document.getElementById("addButton").addEventListener("click", function () {
  data.forEach((user) => {
    let para = document.createElement("p");
    para.textContent = user.user + ": " + user.role;
    para.setAttribute("id", user.id);
    ParentDivElement.appendChild(para);
  });
});

function GETFetchData() {
  let getXMLHttpRequest = new XMLHttpRequest();
  getXMLHttpRequest.onload = function () {
    if (getXMLHttpRequest.status == 200) {
      let parseUsersData = JSON.parse(getXMLHttpRequest.response);
      parseUsersData.forEach((userData) => {
        let para = document.createElement("p");
        para.innerHTML = `<b>${userData.name}</b>: ${userData.email}`;
        para.setAttribute("id", userData.id);
        ParentDivElement.appendChild(para);
      });
    }
  };
  getXMLHttpRequest.open("GET", "https://jsonplaceholder.typicode.com/users");
  getXMLHttpRequest.send();
}
document.getElementById("getButton").addEventListener("click", GETFetchData);

function POSTFetchData() {
  let POSTXMLHttpRequest = new XMLHttpRequest();
  let object = { posts: GetInputData.value };
  let resultData = JSON.stringify(object);
  POSTFetchData.onreadystatechange = function () {
    if (POSTFetchData.readyState === 4) {
      if (POSTFetchData.status == 201) {
        console.log("Resource created successfully");
        //You can create dynamic HTML code and place your data - write code here
      } else {
        console.error("Error:", POSTFetchData.status);
      }
    }
  };
  POSTXMLHttpRequest.open(
    "POST",
    "https://api.codewithguruji.com/randompost"
  );
  POSTXMLHttpRequest.setRequestHeader("Content-Type", "application/json");
  POSTXMLHttpRequest.send(resultData);
}
document.getElementById("postButton").addEventListener("click", POSTFetchData);
