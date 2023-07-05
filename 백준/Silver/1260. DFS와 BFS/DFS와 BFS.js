const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// 노드 개수, 간선 개수, 탐색을 시작할 번호
const [numOfNode, numOfEdge, start] = input[0].split(" ").map(Number);
const graph = Array.from(Array(numOfNode + 1), () => []);

// 그래프 구현
for (let i = 0; i < numOfEdge; i++) {
  let [from, to] = input[i + 1].split(" ").map(Number);
  graph[from].push(to);
  graph[to].push(from);
}

function bfs(graph, start) {
  for (let i = 1; i <= numOfNode; i++) {
    graph[i].sort((a, b) => a - b); // 작은 번호의 정점부터 방문하기 위해 간선을 정렬
  }

  const visited = Array(numOfNode + 1).fill(false);
  const queue = [];
  const result = [];

  queue.push(start);
  visited[start] = true;

  while (queue.length) {
    const node = queue.shift();
    result.push(node);

    for (let next of graph[node]) {
      if (!visited[next]) {
        queue.push(next);
        visited[next] = true;
      }
    }
  }

  return result;
}

function dfs(graph, start) {
  for (let i = 1; i <= numOfNode; i++) {
    graph[i].sort((a, b) => b - a); // 큰 번호의 정점부터 방문하기 위해 간선을 정렬
  }

  const visited = Array(numOfNode + 1).fill(false);
  const stack = [];
  const result = [];

  stack.push(start);

  while (stack.length) {
    const node = stack.pop();

    if (!visited[node]) {
      visited[node] = true;
      result.push(node);

      for (let next of graph[node]) {
        if (!visited[next]) {
          stack.push(next);
        }
      }
    }
  }

  return result;
}

console.log(dfs(graph, start).join(" "));
console.log(bfs(graph, start).join(" "));
