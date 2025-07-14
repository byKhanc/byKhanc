class Calculator {
    add(a: number, b: number): number;
    add(a: string, b: string): string;
    add(a: any, b: any): any {
        return a + b;
    }
}

// 예시 사용
const calc = new Calculator();
console.log(calc.add(2, 3)); // 5
console.log(calc.add('Hello, ', 'World!')); // Hello, World!

export default Calculator; 