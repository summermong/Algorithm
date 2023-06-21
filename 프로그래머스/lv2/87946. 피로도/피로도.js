function solution(k, dungeons) {
  let answer = [];

  // 방문했는지 여부를 체크할 기본 배열
  let visited = Array(dungeons.length).fill(false);

  // 처음에는 방문하지 않아 0으로 시작
  function dfs(count, k) {
    answer.push(count);

    // 0번째 던전이 현재 위치
    // 체력이 0번째 던전의 최소 필요 피로도보다 크거나 같고 아직 방문하지 않았다면
    // 지금 1번 방문했으니 1로 변경 후 여길 기점으로 체력 계산 -> 재귀
    for (let i = 0; i < dungeons.length; i++) {
      let current = dungeons[i];
      if (k >= current[0] && !visited[i]) {
        visited[i] = 1;
        dfs(count + 1, k - current[1]);
        visited[i] = 0;
      }
    }
  }

  dfs(0, k);

  return Math.max(...answer);
}