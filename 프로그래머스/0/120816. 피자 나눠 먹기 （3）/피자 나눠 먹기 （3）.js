function solution(slice, n) {
    // 올림 함수를 사용하여 최소 피자 판 수 계산
    // Math.ceil(n / slice) = 필요한 최소 피자 판 수
    return Math.ceil(n / slice);
}