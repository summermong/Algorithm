const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");


// 노드 수와 간선 수
const numOfNode = Number(input.shift());
const numOfEdge = Number(input[1]);

// 관계를 알아야 하는 번호
const [one, two] = input[0].split(" ").map(Number);
const family = input.slice(2).map((v) => v.split(" ").map(Number));

const graph = Array.from(Array(numOfNode + 1), () => []);
const visited = Array(numOfNode + 1).fill(0);

for (let [from, to] of family) {
  graph[from].push(to);
  graph[to].push(from);
}

function bfs(graph, start) {
  const queue = [];
  queue.push(start);
  visited[start] = 1;

  while (queue.length) {
    const node = queue.shift();

    for (let next of graph[node]) {
      if (!visited[next]) {
        queue.push(next);
        visited[next] = visited[node] + 1;
        if (next === two) {
          return visited[next] - 1;
        }
      }
    }
  }
  return -1;
}

console.log(bfs(graph, one));

