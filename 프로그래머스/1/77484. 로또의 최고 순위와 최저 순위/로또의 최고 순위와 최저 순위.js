function solution(lottos, win_nums) {
    const real = lottos.filter((ele) => win_nums.includes(ele)).length;
    const zero = lottos.filter((ele) => ele === 0).length;
    
    let highRank = real + zero >= 2 ? 7 - (real + zero) : 6;
    let lowRank = real >= 2 ? 7 - real : 6;
    
    return [highRank, lowRank]
}