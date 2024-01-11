// Tạo một hàm sử dụng Promise để gọi một API và trả về dữ liệu sau khi gọi xong. (Có thể sử dụng json-server để tạo API và node-fetch để thực hiện các yêu cầu HTTP. https://github.com/typicode/json-server)
// import fetch from 'node-fetch';
// http://localhost:3000/posts
// import "isomorphic-fetch";
function fetchDataFromApi() {
    return new Promise(function (resolve, reject) {
        fetch("http://localhost:3000/posts")
            .then(function (response) {
            if (!response.ok) {
                throw new Error("HTTP error! Status: ".concat(response.status));
            }
            return response.json();
        })
            .then(function (data) {
            resolve(data);
        })
            .catch(function (error) {
            reject(error);
        });
    });
}
fetchDataFromApi()
    .then(function (data) {
    console.log("Data from API:", data);
})
    .catch(function (error) {
    console.error("Error fetching data:", error);
});
