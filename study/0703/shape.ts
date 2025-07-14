abstract class Shape {
    abstract getArea(): number;
}

class Rectangle extends Shape {
    width: number;
    height: number;

    constructor(width: number, height: number) {
        super();
        this.width = width;
        this.height = height;
    }

    getArea(): number {
        return this.width * this.height;
    }
}

class Circle extends Shape {
    radius: number;

    constructor(radius: number) {
        super();
        this.radius = radius;
    }

    getArea(): number {
        return Math.PI * this.radius * this.radius;
    }
}

// 예시 사용
const rect = new Rectangle(10, 5);
console.log(rect.getArea()); // 50

const circle = new Circle(3);
console.log(circle.getArea()); // 28.274...

export { Shape, Rectangle, Circle }; 