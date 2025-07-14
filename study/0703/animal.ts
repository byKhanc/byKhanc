abstract class Animal {
    abstract sound(): void;
}

class Dog extends Animal {
    sound(): void {
        console.log('멍멍!');
    }
}

class Cat extends Animal {
    sound(): void {
        console.log('야옹!');
    }
}

class Bird extends Animal {
    sound(): void {
        console.log(`짹짹!`);
    }
}

// 예시 사용
const dog = new Dog();
dog.sound(); // 멍멍!

const cat = new Cat();
cat.sound(); // 야옹!

const bird = new Bird();
bird.sound(); // 짹짹!

export { Animal, Dog, Cat, Bird }; 