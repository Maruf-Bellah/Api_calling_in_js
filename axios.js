// console.clear();
// console.log(window);

const makeRequest = async (config) => {
  return await axios(config);
};

const deleteData = () => {
  makeRequest({
    url: "https://jsonplaceholder.typicode.com/posts/1",
    method: "delete",
  })
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
};

deleteData();

const updateSingleData = () => {
  makeRequest({
    url: "https://jsonplaceholder.typicode.com/posts/1",
    method: "patch",
    data: JSON.stringify({
      title: "maruf bellah",
    }),
  })
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
};

// updateSingleData();

const updateData = () => {
  makeRequest({
    url: "https://jsonplaceholder.typicode.com/posts/1",
    method: "put",
    data: JSON.stringify({
      id: 1,
      title: "maruf",
      body: "amar",
      userId: 1,
    }),
  })
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
};
// updateData();

const sendData = () => {
  makeRequest({
    url: "https://jsonplaceholder.typicode.com/posts",
    method: "post",
    data: JSON.stringify({
      title: "maruf",
      body: "amar sonar bangla",
      userId: 1,
    }),
  })
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
};

// sendData();

const getData = () => {
  makeRequest("https://jsonplaceholder.typicode.com/posts")
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
};

// getData();

// ekane normal vabe sob guli tumi lekhte parba ==============

// axios
//   .delete("https://jsonplaceholder.typicode.com/posts/1")
//   .then((res) => console.log(res.data))
//   .catch((err) => console.log(err));
