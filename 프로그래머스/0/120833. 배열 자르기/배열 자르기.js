function solution(numbers, num1, num2) {
    // slice 메서드를 사용하여 num1부터 num2까지 자르기
    // slice(start, end+1) - end는 포함되지 않으므로 +1
    return numbers.slice(num1, num2 + 1);
}