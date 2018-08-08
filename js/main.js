fetch('https://jsonplaceholder.typicode.com/todos')
  .then(
    (response) => {
      return response.json();
    })
    .then(
      (response) => {
        console.log(response);
    })
    .catch(() => {
      console.log('error');
    })