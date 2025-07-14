function solution(num1, num2) {
    if (num1 === num2) {
        return 1;
    } else {
        return -1;
    }
}

// 출생 연도 계산 함수
// 조건: 0 < age ≤ 120
// 나이는 태어난 연도에 1살이며 매년 1월 1일마다 1살씩 증가합니다.
function solution2(age) {
    // 입력 범위 검증
    if (age <= 0 || age > 120) {
        throw new Error("나이는 0보다 크고 120보다 작거나 같아야 합니다.");
    }
    
    // 2022년 기준으로 출생연도 계산
    // 나이가 1살부터 시작하므로 2022 - age + 1
    return 2022 - age + 1;
}

// 테스트 예시
console.log(solution(2, 3)); // -1
console.log(solution(11, 11)); // 1
console.log(solution(7, 99)); // -1

// 출생 연도 테스트 예시
console.log(solution2(40)); // 1983
console.log(solution2(23)); // 2000
console.log(solution2(1)); // 2022 (2022년에 1살)
console.log(solution2(120)); // 1903 (2022년에 120살)

// 에러 테스트
try {
    console.log(solution2(0)); // 에러 발생
} catch (error) {
    console.log("에러:", error.message);
}

try {
    console.log(solution2(121)); // 에러 발생
} catch (error) {
    console.log("에러:", error.message);
}