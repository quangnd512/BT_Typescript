// Tạo một hàm TypeScript nhận vào một mảng các số nguyên và trả về tổng của chúng
function numberList(numbers) {
    return numbers.reduce(function (sum, num) { return sum + num; }, 0);
}
var arrNum = [1, 2, 3];
console.log(numberList(arrNum));
