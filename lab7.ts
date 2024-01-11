// Tạo một hàm sử dụng Promise để gọi một API và trả về dữ liệu sau khi gọi xong. (Có thể sử dụng json-server để tạo API và node-fetch để thực hiện các yêu cầu HTTP. https://github.com/typicode/json-server)

function fetchDataFromApi() {
  return new Promise((resolve, reject) => {
    fetch("http://localhost:3000/posts")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

fetchDataFromApi()
  .then((data) => {
    console.log("Data from API:", data);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });