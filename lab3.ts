// Viết một hàm generic nhận vào một mảng và trả về phần tử đầu tiên của mảng đó.

function printArray<T>(arr: T[]): T | undefined {
    return arr.length > 0 ? arr[0] : undefined;
}

const numbers: number[] = [1, 2, 3];
const firstNumber : number | undefined = printArray(numbers);
console.log(firstNumber);


const numberNull: number[] = [];
const firstNumberNull : number | undefined = printArray(numberNull);
console.log(firstNumberNull);
