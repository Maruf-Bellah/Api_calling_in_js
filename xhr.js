console.clear();

// const makeRequest = (method, url, data) => {
//   const xhr = new XMLHttpRequest();
//   xhr.open(method, url);
//   xhr.send(JSON.stringify(data));
// };



// bar bar korar jonno evabe kore ================


// GET --- evabe muloto kore ========================> 

const getData = () => {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/users");

  xhr.onload = () => {
    let data = xhr.response;
    console.log(data);
  };

  xhr.onerror = () => {
    console.log("error is here");
  };
  xhr.send();
};

getData();
