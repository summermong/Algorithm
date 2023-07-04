function solution(n, edge) {
  const graph = Array.from(Array(n), () => []);

  for (let [from, to] of edge) {
    graph[from - 1].push(to - 1);
    graph[to - 1].push(from - 1);
  }

  const visited = [1];
  const queue = [0];

  while (queue.length) {
    const current = queue.shift();
    for (const next of graph[current]) {
      if (!visited[next]) {
        visited[next] = visited[current] + 1;
        queue.push(next);
      }
    }
  }

  const max = Math.max(...visited);
  return visited.filter((v) => v === max).length;
}