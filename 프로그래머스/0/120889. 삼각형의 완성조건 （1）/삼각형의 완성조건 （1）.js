// 삼각형 만들기 판별 함수
function solution(sides) {
    // 배열을 오름차순으로 정렬
    const sortedSides = sides.sort((a, b) => a - b);
    
    // 가장 긴 변(마지막 원소)과 나머지 두 변의 합 비교
    const [a, b, c] = sortedSides;
    
    // 삼각형 조건: 가장 긴 변 < 나머지 두 변의 합
    if (c < a + b) {
        return 1; // 삼각형을 만들 수 있음
    } else {
        return 2; // 삼각형을 만들 수 없음
    }
}
