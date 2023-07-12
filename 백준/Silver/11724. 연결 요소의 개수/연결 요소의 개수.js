const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [v, e] = input.shift().split(" ").map(Number);
const edges = input.map((v) => v.split(" ").map(Number));
const visited = Array(v + 1).fill(false);

const graph = Array.from(Array(v + 1), () => []);
for (let [from, to] of edges) {
  graph[from].push(to);
  graph[to].push(from);
}

let count = 0;

function bfs(graph, start) {
  const queue = [];
  queue.push(start);
  visited[start] = true;

  while (queue.length > 0) {
    const node = queue.shift();

    for (let next of graph[node]) {
      if (!visited[next]) {
        queue.push(next);
        visited[next] = true;
      }
    }
  }
}

for (let i = 1; i <= v; i++) {
  if (!visited[i]) {
    bfs(graph, i);
    count++;
  }
}

console.log(count);
