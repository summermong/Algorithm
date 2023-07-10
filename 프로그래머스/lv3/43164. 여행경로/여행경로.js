function solution(tickets) {
  const graph = new Map();

  // 그래프 생성
  for (let [from, to] of tickets) {
    if (!graph.has(from)) {
      graph.set(from, []);
    }
    graph.get(from).push(to);
  }

  // 도착지 정렬
  for (let destinations of graph.values()) {
    destinations.sort();
  }

  const route = [];

  function dfs(start) {
    const destinations = graph.get(start);

    while (destinations && destinations.length > 0) {
      const next = destinations.shift();
      dfs(next);
    }

    route.push(start);
  }

  dfs("ICN");

  return route.reverse();
}