function solution(my_string) {
    // 모음들을 배열로 정의
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    
    // 문자열을 배열로 변환하고 모음이 아닌 문자만 필터링
    const result = my_string.split('').filter(char => !vowels.includes(char));
    
    // 필터링된 문자들을 다시 문자열로 결합
    return result.join('');
}