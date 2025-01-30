function solution(citations) {
    let sorted = citations.sort((a, b) => b - a);
    let hIndex = 0;

    sorted.forEach((citation, index) => {
        if (index + 1 <= citation) {
            hIndex = index + 1;
        }
    });

    return hIndex;
}