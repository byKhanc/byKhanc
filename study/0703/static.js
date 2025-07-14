"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Counter = /** @class */ (function () {
    function Counter() {
    }
    Counter.prototype.increment = function () {
        Counter.count += 1;
    };
    Counter.prototype.getCount = function () {
        return Counter.count;
    };
    Counter.count = 0;
    return Counter;
}());
// 예시 사용
var c1 = new Counter();
c1.increment();
c1.increment();
var c2 = new Counter();
c2.increment();
console.log(c1.getCount()); // 3
console.log(c2.getCount()); // 3
exports.default = Counter;
