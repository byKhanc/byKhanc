"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bird = exports.Cat = exports.Dog = exports.Animal = void 0;
var Animal = /** @class */ (function () {
    function Animal() {
    }
    return Animal;
}());
exports.Animal = Animal;
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.sound = function () {
        console.log('멍멍!');
    };
    return Dog;
}(Animal));
exports.Dog = Dog;
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cat.prototype.sound = function () {
        console.log('야옹!');
    };
    return Cat;
}(Animal));
exports.Cat = Cat;
var Bird = /** @class */ (function (_super) {
    __extends(Bird, _super);
    function Bird() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Bird.prototype.sound = function () {
        console.log("\uC9F9\uC9F9!");
    };
    return Bird;
}(Animal));
exports.Bird = Bird;
// 예시 사용
var dog = new Dog();
dog.sound(); // 멍멍!
var cat = new Cat();
cat.sound(); // 야옹!
var bird = new Bird();
bird.sound(); // 짹짹!
