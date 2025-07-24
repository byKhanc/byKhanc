function solution(strlist) {
    // map 메서드를 사용하여 각 문자열의 길이를 배열로 반환
    return strlist.map(str => str.length);
}

// 방법 2: for문 사용
function solution2(strlist) {
    const result = [];
    
    for (let i = 0; i < strlist.length; i++) {
        result.push(strlist[i].length);
    }
    
    return result;
}