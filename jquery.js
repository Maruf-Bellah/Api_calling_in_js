// console.clear();
// console.log(window);

const makeRequest = (url, method, data) => {
  try {
    const result = $.ajax({
      url: url,
      method: method,
      data: data,
    });
    return result;
  } catch (err) {
    console.log(err);
  }
};

const deleteData = () => {
  makeRequest("https://jsonplaceholder.typicode.com/posts/2", "DELETE").then(
    (res) => console.log(res)
  );
};

deleteData();

const updateSingleData = () => {
  makeRequest("https://jsonplaceholder.typicode.com/posts/2", "PATCH", {
    title: "MARUF BELLAH",
  }).then((res) => console.log(res));
};

// updateSingleData();

const updateData = () => {
  makeRequest("https://jsonplaceholder.typicode.com/posts/2", "PUT", {
    id: 2,
    title: "MARUF",
    body: "barma",
    userId: 1,
  }).then((res) => console.log(res));
};
// updateData();

const sendData = () => {
  makeRequest("https://jsonplaceholder.typicode.com/posts/", "POST", {
    id: 1,
    title: "fooma",
    body: "barma",
    userId: 1,
  }).then((res) => console.log(res));
};

// sendData();

const getData = () => {
  makeRequest("https://jsonplaceholder.typicode.com/posts", "GET").then((res) =>
    console.log(res)
  );
};

// getData();
