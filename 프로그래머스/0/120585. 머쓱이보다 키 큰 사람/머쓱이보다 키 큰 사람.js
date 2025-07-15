function solution(array, height) {
    // 머쓱이의 키보다 큰 사람들을 필터링하여 개수 반환
    return array.filter(person => person > height).length;
}
