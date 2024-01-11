// Viết một decorator để log thông tin mỗi khi một phương thức của một lớp được gọi.

function logClass(target: Function): void {
    const className = target.name;

    console.log(`Class ${className} được gọi.`);
}

@logClass
class LogClass {
    message: string;

    constructor(message: string) {
        this.message = message;
    }

    showMessage(): void {
        console.log(`Thông báo: ${this.message}`);
    }
}

// Tạo một đối tượng từ lớp
const exampleObj = new LogClass("Tôi học Angular");

// Gọi phương thức của đối tượng
exampleObj.showMessage();