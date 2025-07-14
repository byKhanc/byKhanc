"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = exports.Product = exports.User = void 0;
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    return User;
}());
exports.User = User;
var Product = /** @class */ (function () {
    function Product(name) {
        this.name = name;
    }
    return Product;
}());
exports.Product = Product;
var Order = /** @class */ (function () {
    function Order(user, product) {
        this.user = user;
        this.product = product;
    }
    Order.prototype.summary = function () {
        console.log("\uC0AC\uC6A9\uC790 ".concat(this.user.name, "\uAC00 \uC0C1\uD488 ").concat(this.product.name, "\uB97C(\uC744) \uAD6C\uB9E4\uD588\uC2B5\uB2C8\uB2E4."));
    };
    return Order;
}());
exports.Order = Order;
// 예시 사용
var user = new User('홍길동');
var product = new Product('책');
var order = new Order(user, product);
order.summary(); // 사용자 A가 상품 B를(을) 구매했습니다.
