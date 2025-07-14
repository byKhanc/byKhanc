class Product {
    name: string;
    price: number;

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }

    display(): void {
        console.log(`제품명: ${this.name}, 가격: ${this.price}만원`);
    }
}

// 예시 사용
const macbook = new Product('MacBook', 150);
macbook.display(); // 제품명: MacBook, 가격: 150만원

export default Product; 