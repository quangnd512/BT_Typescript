// Viết một hàm generic nhận vào một mảng và trả về phần tử đầu tiên của mảng đó.
function printArray(arr) {
    return arr.length > 0 ? arr[0] : undefined;
}
var numbers = [1, 2, 3];
var firstNumber = printArray(numbers);
console.log(firstNumber);
var numberNull = [];
var firstNumberNull = printArray(numberNull);
console.log(firstNumberNull);
