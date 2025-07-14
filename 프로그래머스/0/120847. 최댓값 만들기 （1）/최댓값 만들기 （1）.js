function solution(numbers) {
    let maxProduct = numbers[0] * numbers[1]; // 첫 번째 곱셈으로 초기화
    
    // 모든 가능한 두 원소의 곱을 확인
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            const product = numbers[i] * numbers[j];
            if (product > maxProduct) {
                maxProduct = product;
            }
        }
    }
    
    return maxProduct;
}