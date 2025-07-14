"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Product = /** @class */ (function () {
    function Product(name, price) {
        this.name = name;
        this.price = price;
    }
    Product.prototype.display = function () {
        console.log("\uC81C\uD488\uBA85: ".concat(this.name, ", \uAC00\uACA9: ").concat(this.price, "\uB9CC\uC6D0"));
    };
    return Product;
}());
// 예시 사용
var macbook = new Product('MacBook', 150);
macbook.display(); // 제품명: MacBook, 가격: 150만원
exports.default = Product;
