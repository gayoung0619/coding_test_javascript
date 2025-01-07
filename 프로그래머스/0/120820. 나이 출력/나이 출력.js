function solution(age) {
    const nowYear = new Date().getFullYear() - 1;
    return nowYear - age;
}