class User {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}

class Product {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}

class Order {
    user: User;
    product: Product;
    constructor(user: User, product: Product) {
        this.user = user;
        this.product = product;
    }
    summary(): void {
        console.log(`사용자 ${this.user.name}가 상품 ${this.product.name}를(을) 구매했습니다.`);
    }
}

// 예시 사용
const user = new User('홍길동');
const product = new Product('책');
const order = new Order(user, product);
order.summary(); // 사용자 A가 상품 B를(을) 구매했습니다.

export { User, Product, Order }; 