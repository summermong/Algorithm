function solution(n, edge) {
  const visited = Array(n + 1).fill(false);
  const node = Array(n + 1);

  for (let i = 0; i < n + 1; i++) {
    node[i] = [];
  }

  for (let i = 0; i < edge.length; i++) {
    node[edge[i][0]].push(edge[i][1]);
    node[edge[i][1]].push(edge[i][0]);
  }

  let nums = bfs(1, node, visited);
  return maxNum(nums);
}

function bfs(level, node, visited) {
  const queue = [];
  queue.push(level);
  visited[level] = true;
  const nums = Array(node.length).fill(0);

  while (queue.length > 0) {
    level = queue.shift();
    for (let cur of node[level]) {
      if (!visited[cur]) {
        nums[cur] = nums[level] + 1;
        visited[cur] = true;
        queue.push(cur);
      }
    }
  }
  return nums;
}

function maxNum(nums) {
  let max = 0;
  let count = 1;
  for (let num of nums) {
    if (num > max) {
      max = num;
      count = 1;
    } else if (num === max) {
      count++;
    }
  }
  return count;
}