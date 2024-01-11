// Tạo một lớp Rectangle có các thuộc tính là chiều dài và chiều rộng. Thêm một phương thức tính diện tích của hình chữ nhật. 
// Sau đó tính diện tích của 1 hình chữ nhật bất kỳ
var Rectangle = /** @class */ (function () {
    function Rectangle(widthRec, heightRec) {
        this.widthRec = widthRec,
            this.heightRec = heightRec;
    }
    Rectangle.prototype.calculateArea = function () {
        return this.widthRec * this.heightRec;
    };
    return Rectangle;
}());
var hcn = new Rectangle(20, 6);
console.log(hcn.calculateArea());
