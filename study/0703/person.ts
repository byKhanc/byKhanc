class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    introduce(): void {
        console.log(`안녕하세요. 저는 ${this.age}살의 ${this.name}입니다.`);
    }
}

// 예시 사용
const alice = new Person('Alice', 20);
alice.introduce(); // 안녕하세요. 저는 20살의 Alice입니다.

export default Person; 