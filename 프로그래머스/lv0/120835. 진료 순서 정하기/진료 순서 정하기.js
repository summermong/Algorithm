function solution(emergency) {
    let sortedEmergency = emergency.slice().sort((a, b) => a - b);
    
    const answer = [];
    for (let i = 0; i < emergency.length; i++) {
        answer.push(-1)
    }
    
    let rank = 1;

    while (sortedEmergency.length !== 0) {
        const maxValue = sortedEmergency.pop();
        const maxValueIndex = emergency.indexOf(maxValue);
        answer[maxValueIndex] = rank;
        rank += 1;

    }
    console.log(" sorted : ", sortedEmergency);
    console.log("emegency : ", emergency);
    console.log("answer : " , answer)
    
    return answer;
}