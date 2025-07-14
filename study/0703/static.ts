class Counter {
    private static count: number = 0;

    increment(): void {
        Counter.count += 1;
    }

    getCount(): number {
        return Counter.count;
    }
}

// 예시 사용
const c1 = new Counter();
c1.increment();
c1.increment();

const c2 = new Counter();
c2.increment();

console.log(c1.getCount()); // 3
console.log(c2.getCount()); // 3

export default Counter; 