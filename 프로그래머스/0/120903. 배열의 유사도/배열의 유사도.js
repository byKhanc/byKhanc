// 두 배열의 같은 원소 개수 구하기

function solution(s1, s2) {
    // filter와 includes를 사용하여 s1의 원소 중 s2에도 있는 것들만 필터링
    return s1.filter(element => s2.includes(element)).length;
}

// 방법 2: Set을 사용한 교집합 구하기
function solution2(s1, s2) {
    const set1 = new Set(s1);
    const set2 = new Set(s2);
    
    let count = 0;
    for (const element of set1) {
        if (set2.has(element)) {
            count++;
        }
    }
    return count;
}