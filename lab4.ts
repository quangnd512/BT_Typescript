// Định nghĩa một enum Color với các giá trị là RED, GREEN, và BLUE. Tạo một hàm nhận vào một giá trị của enum và in ra tên của màu đó.
enum Color {
    RED = "red",
    GREEN = "green",
    BLUE = "blue"
}

function showColor(color:Color):void {
    console.log(Color.RED);   
}

showColor(Color.RED);