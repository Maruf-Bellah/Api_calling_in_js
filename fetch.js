// 4 ways to call api - XMLHttpRequest, fetch, axios, jquery

// fetch() has replaced XMLHttpRequest
// fetch() - global method for making HTTP Request
// 2 ways to call - then, async await

// + fetch() is easy to use compare to XMLHttpRequest
// + fetch() returns a promise
// - returned promise can only handle network error
// - does not support all the older browser

const makeRequest = async (url, config) => {
  const res = await fetch(url, config);
  if (!res.ok) {
    const message = `Error : ${res.status}`;
    throw new Error(message);
  }
  const data = await res.json();
  return data;
};

const deleteData = () => {
  makeRequest("https://jsonplaceholder.typicode.com/posts/1", {
    method: "DELETE",
  })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

deleteData();

const updateSingleData = () => {
  makeRequest("https://jsonplaceholder.typicode.com/posts/1", {
    method: "PATCH",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },

    body: JSON.stringify({
      title: "bell maruf  ",
    }),
  })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

const updateData = () => {
  makeRequest("https://jsonplaceholder.typicode.com/posts/1", {
    method: "PUT",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },

    body: JSON.stringify({
      id: 1,
      title: "ayesha bellah ",
      body: "bellah",
      userId: 1,
    }),
  })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

// updateData()

const sendData = () => {
  makeRequest("https://jsonplaceholder.typicode.com/posts/", {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },

    body: JSON.stringify({
      title: "maruf ",
      body: "bellah",
      userId: 1,
    }),
  })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

// sendData();

const getData = () => {
  makeRequest("https://jsonplaceholder.typicode.com/posts/")
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

// getData();

// const sendData = () => {
//   fetch("https://jsonplaceholder.typicode.com/posts/1", {
//     method: "DELETE",
//     headers: {
//       "Content-type": "application/json; charset=UTF-8",
//     },
//     body: JSON.stringify({
//       //   body: "amar sonar bangla",
//     }),
//   })
//     .then((res) => res.json())
//     .then((data) => console.log(data));
// };
// sendData();

// const getData = () => {
//   fetch("https://jsonplaceholder.typicode.com/posts/")
//     .then((res) => {
//       if (!res.ok) {
//         const message = `Error : ${res.status}`;
//         throw new Error(message);
//       }
//       return res.json();
//     })
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));
// };

// // getData();
