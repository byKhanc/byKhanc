function solution(n, t) {
    // 1시간마다 두 배씩 증식하므로 t시간 후에는 2^t배가 됨
    return n * Math.pow(2, t);
}