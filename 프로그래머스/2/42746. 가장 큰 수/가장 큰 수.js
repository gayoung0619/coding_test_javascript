function solution(numbers) {
    return numbers
        .map((ele) => ele.toString())
        .sort((a, b) => (b+a) - (a+b))
        .join("")
        .replace(/^0+/, "0"); // 000 같은 경우 0으로 변환
}