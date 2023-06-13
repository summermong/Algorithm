function solution(genres, plays) {
  let answer = [];
  let genremap = new Map();
  let playmap = new Map();

  // 장르 구하기
  for (let i = 0; i < genres.length; i++) {
    if (genremap.has(genres[i])) {
      genremap.set(genres[i], genremap.get(genres[i]) + plays[i]);
    } else {
      genremap.set(genres[i], plays[i]);
    }
  }

  // 장르별 재생 수 기준으로 정렬
  let sortedGenres = [...genremap.entries()].sort((a, b) => b[1] - a[1]);

  // 노래 구하기
  for (let i = 0; i < plays.length; i++) {
    if (playmap.has(genres[i])) {
      playmap.get(genres[i]).push({ index: i, plays: plays[i] });
    } else {
      playmap.set(genres[i], [{ index: i, plays: plays[i] }]);
    }
  }

  for (let [genre, songs] of playmap) {
    songs.sort((a, b) => b.plays - a.plays);
  }

  // 정렬된 장르별로 노래 추가
  for (let [genre, totalPlays] of sortedGenres) {
    let songs = playmap.get(genre);
    for (let i = 0; i < songs.length; i++) {
      if (i >= 2) {
        break;
      }
      answer.push(songs[i].index);
    }
  }

  return answer;
}