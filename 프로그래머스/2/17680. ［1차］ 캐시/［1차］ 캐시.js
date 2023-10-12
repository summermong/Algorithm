function solution(cacheSize, cities) {
    let answer = 0;
    let citiesArr = [];
    
    for (let i = 0; i < cities.length; i++) {
        let curCity = cities[i].toLowerCase();
        let findCity = citiesArr.find((city) => city === curCity);
        
        if (!findCity) {
            citiesArr.push(curCity);
            if (citiesArr.length > cacheSize) {
                citiesArr.shift();
            }
            answer += 5;
        } else {
            citiesArr = citiesArr.filter((city) => city !== curCity);
            citiesArr.push(curCity);
            answer++;
        }
    }
    return answer;
}