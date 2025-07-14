interface Movable {
    move(): void;
}

class Car implements Movable {
    move(): void {
        console.log('자동차가 도로를 달립니다.');
    }
}

class Robot implements Movable {
    move(): void {
        console.log('로봇이 걷습니다.');
    }
}

// 예시 사용
const car = new Car();
car.move(); // 자동차가 도로를 달립니다.

const robot = new Robot();
robot.move(); // 로봇이 걷습니다.

export { Movable, Car, Robot }; 