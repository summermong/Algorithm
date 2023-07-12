function dfs(computers, visited, node) {
  visited[node] = true;
  for (let i = 0; i < computers[node].length; i++) {
    if (computers[node][i] === 1 && !visited[i]) {
      dfs(computers, visited, i);
    }
  }
}

function solution(n, computers) {
  const visited = Array(n).fill(false);
  let count = 0;

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      dfs(computers, visited, i);
      count++;
    }
  }
  return count;
}