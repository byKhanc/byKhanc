function solution(dot) {
    const [x, y] = dot;
    
    // 사분면 판별
    if (x > 0 && y > 0) {
        return 1; // 제1사분면: x양수, y양수
    } else if (x < 0 && y > 0) {
        return 2; // 제2사분면: x음수, y양수
    } else if (x < 0 && y < 0) {
        return 3; // 제3사분면: x음수, y음수
    } else if (x > 0 && y < 0) {
        return 4; // 제4사분면: x양수, y음수
    }
}