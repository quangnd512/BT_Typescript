// Tạo một hàm TypeScript nhận vào một mảng các số nguyên và trả về tổng của chúng

function numberList(numbers: number[]): number {
    return numbers.reduce((sum, num) => sum + num, 0);
}

const arrNum : number[] = [1, 2, 3];

console.log(numberList(arrNum));
