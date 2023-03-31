function solution(emergency) {
    let sortedEmergency = [...emergency].sort((a, b) => b-a)
    return emergency.map((item) => sortedEmergency.indexOf(item)+1)
}