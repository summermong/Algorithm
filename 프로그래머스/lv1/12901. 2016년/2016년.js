function solution(a, b) {
  let month1stWeek = [
    "FRI",
    "MON",
    "TUE",
    "FRI",
    "SUN",
    "WED",
    "FRI",
    "MON",
    "THU",
    "SAT",
    "TUE",
    "THU",
  ]; //각 월의 1일 요일
  let weekend = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  let matchWeek = weekend.indexOf(month1stWeek[a - 1]) + ((b - 1) % 7);
  return weekend[matchWeek % 7];
}