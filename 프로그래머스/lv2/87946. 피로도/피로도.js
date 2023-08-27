function solution(k, dungeons) {
  let ans = [];
  let visited = Array(dungeons.length).fill(false);

  function dfs(count, k) {
    ans.push(count);

    for (let i = 0; i < dungeons.length; i++) {
      let current = dungeons[i];
      if (k >= current[0] && !visited[i]) {
        visited[i] = true;
        dfs(count + 1, k - current[1]);
        visited[i] = false;
      }
    }
  }

  dfs(0, k);

  return Math.max(...ans);
}
