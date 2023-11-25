console.clear();

// const makeRequest = (method, url, data) => {
//   const xhr = new XMLHttpRequest();
//   xhr.open(method, url);
//   xhr.send(JSON.stringify(data));
// };

// bar bar korar jonno evabe kore ================

const makeRequest = (method, url, data) => {
  const xhr = new XMLHttpRequest();
  xhr.open(method, url);

  xhr.setRequestHeader("Content-Type", "application/json");

  xhr.onload = () => {
    let data = xhr.response;
    console.log(data);
  };

  xhr.onerror = () => {
    console.log("error is here");
  };
  xhr.send(JSON.stringify(data));
};

// GET --- evabe muloto kore ========================>

// const makeRequest = (method, url) => {
//   const xhr = new XMLHttpRequest();
//   xhr.open(method, url);

//   xhr.onload = () => {
//     let data = xhr.response;
//     console.log(data);
//   };

//   xhr.onerror = () => {
//     console.log("error is here");
//   };
//   xhr.send();
// };

const getData = () => {
  makeRequest("GET", "https://jsonplaceholder.typicode.com/users");
};

// getData();

//  POST  / creating data--- evabe muloto kore ========================>
const sendData = () => {
  makeRequest("POST", "https://jsonplaceholder.typicode.com/users", {
    title: "my name is maruf bellah",
    body: "ami bangladeshe bash kori so don't warry",
    userId: 1,
  });
};

// sendData();

//  PATCH / updating  a single data--- evabe muloto kore ===============>
const updateData = () => {
  makeRequest("PUT", "https://jsonplaceholder.typicode.com/users/1", {
    title: "maruf bellah",
    body: "ami bangladeshe bash kori so don't warry",
    userId: 1,
  });
};

// updateData();

//  PATCH / updating  a single data--- evabe muloto kore ===============>
const updateSingleData = () => {
  makeRequest("PUT", "https://jsonplaceholder.typicode.com/users/1", {
    title: "maruf belah",
    // body: "ami bangladeshe bash kori so don't warry",
  });
};

// updateSingleData();

//  PATCH / updating  a single data--- evabe muloto kore ===============>
const deleteData = () => {
  makeRequest("DELETE", "https://jsonplaceholder.typicode.com/users/1");
};

deleteData();
