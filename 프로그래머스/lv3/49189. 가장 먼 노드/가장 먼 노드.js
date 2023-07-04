function solution(n, edge) {
  const graph = Array.from(Array(n + 1), () => []);

  for (let [from, to] of edge) {
    graph[from].push(to);
    graph[to].push(from);
  }

  const visited = Array(n + 1).fill(false);
  const queue = [1];
  visited[1] = true; // 시작 노드를 방문한 것으로 표시

  while (queue.length) {
    const current = queue.shift();
    for (const next of graph[current]) {
      if (!visited[next]) {
        // 방문하지 않은 노드인 경우에만 처리
        visited[next] = visited[current] + 1;
        queue.push(next);
      }
    }
  }
  const max = Math.max(...visited);
  return visited.filter((v) => v === max).length;
}