// Tạo một lớp Rectangle có các thuộc tính là chiều dài và chiều rộng. Thêm một phương thức tính diện tích của hình chữ nhật. 
// Sau đó tính diện tích của 1 hình chữ nhật bất kỳ

class Rectangle {
    private widthRec: number;
    private heightRec: number;

    constructor(widthRec: number, heightRec: number){
        this.widthRec = widthRec,
        this.heightRec = heightRec
    }

    calculateArea(): number {
        return this.widthRec * this.heightRec;
    }

}

const hcn = new Rectangle(20, 6);

console.log(hcn.calculateArea());


