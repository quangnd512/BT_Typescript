// Định nghĩa một enum Color với các giá trị là RED, GREEN, và BLUE. Tạo một hàm nhận vào một giá trị của enum và in ra tên của màu đó.
var Color;
(function (Color) {
    Color["RED"] = "red";
    Color["GREEN"] = "green";
    Color["BLUE"] = "blue";
})(Color || (Color = {}));
function showColor(color) {
    console.log(Color.RED);
}
showColor(Color.RED);
