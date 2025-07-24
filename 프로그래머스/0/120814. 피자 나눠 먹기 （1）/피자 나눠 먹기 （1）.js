function solution(n) {
    // 피자 1판 = 7조각
    // n명이 각각 최소 1조각씩 먹으려면 총 n조각이 필요
    // 필요한 피자 수 = Math.ceil(n / 7)
    return Math.ceil(n / 7);
}