"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.add = function (a, b) {
        return a + b;
    };
    return Calculator;
}());
// 예시 사용
var calc = new Calculator();
console.log(calc.add(2, 3)); // 5
console.log(calc.add('Hello, ', 'World!')); // Hello, World!
exports.default = Calculator;
