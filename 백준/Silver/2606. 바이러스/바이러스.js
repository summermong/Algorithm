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

function dfs(start, graph) {
  const answer = [];
  const stack = [];
  const visited = Array(numOfNode + 1).fill(false);

  stack.push(start);
  visited[start] = true;

  while (stack.length) {
    let node = stack.pop();

    for (let next of graph[node]) {
      if (!visited[next]) {
        stack.push(next);
        visited[next] = true;
        answer.push(next);
      }
    }
  }
  return answer.length;
}

console.log(dfs(1, graph));