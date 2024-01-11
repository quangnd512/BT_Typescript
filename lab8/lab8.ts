// Hàm tính giai thừa
function factorial(n: number): number {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

// Hàm kiểm tra số nguyên tố
function isPrime(num: number): boolean {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

// Sử dụng hàm tính giai thừa
const factorialResult = factorial(5);
console.log(`5! = ${factorialResult}`);

// Sử dụng hàm kiểm tra số nguyên tố
const primeCheckResult = isPrime(7);
console.log(`Is 7 a prime number? ${primeCheckResult}`);