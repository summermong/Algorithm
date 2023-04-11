function solution(d, budget) {
    var answer = 0;
    d = d.sort(function(a,b) {
        return a-b;
    })
    for(var i=0; i<d.length; i++){
        budget = budget - d[i];
        if(budget < 0 ){
            break;
        }
        answer++;

    }
    return answer;
}