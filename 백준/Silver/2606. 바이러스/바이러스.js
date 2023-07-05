const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const numOfNode = Number(input[0]);
const numOfEdge = Number(input[1]);

const graph = Array.from(Array(numOfNode + 1), () => []);

for (let i = 0; i < numOfEdge; i++) {
  let [from, to] = input[i + 2].split(" ").map(Number);
  graph[from].push(to);
  graph[to].push(from);
}

function bfs(start, graph) {
  const queue = [];
  const answer = [];
  const visited = Array(numOfNode + 1).fill(false);

  queue.push(start);
  visited[start] = true;

  while (queue.length) {
    let node = queue.shift();

    for (let next of graph[node]) {
      if (!visited[next]) {
        queue.push(next);
        visited[next] = true;
      }
    }
  }
  return visited;
}

console.log(
  bfs(1, graph)
    .slice(2)
    .filter((v) => v === true).length
);