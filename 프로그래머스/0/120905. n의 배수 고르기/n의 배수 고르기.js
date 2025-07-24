function solution(n, numlist) {
    // filter 메서드를 사용하여 n의 배수만 필터링
    return numlist.filter(num => num % n === 0);
}