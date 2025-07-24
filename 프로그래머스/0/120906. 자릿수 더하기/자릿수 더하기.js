// 정수 n의 각 자리 숫자의 합을 구하는 함수
function solution(n) {
    // 방법 1: 문자열로 변환 후 각 자리수 더하기
    return n.toString()
           .split('')
           .map(Number)
           .reduce((sum, digit) => sum + digit, 0);
}
