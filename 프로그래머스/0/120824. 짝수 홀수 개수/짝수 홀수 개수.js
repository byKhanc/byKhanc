function solution(num_list) {
    let evenCount = 0;
    let oddCount = 0;
    
    for (let num of num_list) {
        if (num % 2 === 0) {
            evenCount++;
        } else {
            oddCount++;
        }
    }
    
    return [evenCount, oddCount];
}
