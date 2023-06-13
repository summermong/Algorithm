function solution(genres, plays) {
  let answer = [];
  let genreMap = new Map();
  let playMap = new Map();

  // 가장 많이 재생된 장르순으로 정렬 (pop)
  for (let i = 0; i < genres.length; i++) {
    if (genreMap.has(genres[i])) {
      genreMap.set(genres[i], genreMap.get(genres[i]) + plays[i]);
    } else {
      genreMap.set(genres[i], plays[i]);
    }
  }

  let BestGenre = [...genreMap].sort((a, b) => b[1] - a[1]);
  // [ [ 'pop', 3100 ], [ 'classic', 1450 ] ]

  // 장르 내에서 많이 재생된 노래순으로 정렬
  for (let i = 0; i < plays.length; i++) {
    if (playMap.has(genres[i])) {
      playMap.get(genres[i]).push({ index: i, plays: plays[i] });
    } else {
      playMap.set(genres[i], [{ index: i, plays: plays[i] }]);
    }
  }

    console.log(playMap)
  for (let [k, v] of playMap) {
    v.sort((a, b) => b.plays - a.plays);
  }

  // 정렬된 장르별로 노래 순위 자르기
  for (let i = 0; i < BestGenre.length; i++) {
    let songs = playMap.get(BestGenre[i][0]);
    for (let j = 0; j < songs.length; j++) {
      if (j >= 2) {
        break;
      }
      answer.push(songs[j].index);
    }
  }
  return answer;
}