function solution(tickets) {
  const graph = {};

  for (let [from, to] of tickets) {
    if (!graph[from]) {
      graph[from] = [];
    }
    graph[from].push(to);
  }

  for (let from in graph) {
    graph[from].sort();
  }

  const route = [];
  const stack = ["ICN"]; // 시작점인 "ICN"을 스택에 추가

  while (stack.length > 0) {
    const from = stack[stack.length - 1];

    if (!graph[from] || graph[from].length === 0) {
      // 현재 위치에서 더 이상 갈 수 있는 도착지가 없으면
      // 스택에서 꺼내 경로에 추가
      route.push(stack.pop());
    } else {
      // 현재 위치에서 갈 수 있는 도착지가 있으면
      // 알파벳 순서대로 정렬하여 스택에 추가
      stack.push(graph[from].shift());
    }
  }

  return route.reverse(); // 경로가 역순으로 구성되므로 뒤집어 반환
}