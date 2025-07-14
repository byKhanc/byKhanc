"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Robot = exports.Car = void 0;
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.move = function () {
        console.log('자동차가 도로를 달립니다.');
    };
    return Car;
}());
exports.Car = Car;
var Robot = /** @class */ (function () {
    function Robot() {
    }
    Robot.prototype.move = function () {
        console.log('로봇이 걷습니다.');
    };
    return Robot;
}());
exports.Robot = Robot;
// 예시 사용
var car = new Car();
car.move(); // 자동차가 도로를 달립니다.
var robot = new Robot();
robot.move(); // 로봇이 걷습니다.
