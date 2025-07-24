function solution(common) {
    const length = common.length;
    
    const diff1 = common[1] - common[0];
    const diff2 = common[2] - common[1];
    
    if (diff1 === diff2) {
        return common[length - 1] + diff1;
    } else {
        const ratio = common[1] / common[0];
        return common[length - 1] * ratio;
    }
}