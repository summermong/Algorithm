let fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let operations = [];
for (let i = 1; i < input.length; i++) {
  operations.push(Number(input[i]));
}

class maxHeap {
  constructor() {
    this.nodes = [];
  }

  // 데이터가 들어오면 맨 밑에 넣고 실행
  insert(data) {
    this.nodes.push(data);
    this.bubbleUp();
  }

  // 인덱스는 맨 아래쪽
  bubbleUp(index = this.nodes.length - 1) {
    if (index < 1) return;
    // 인덱스가 0 === 루트 노드면 그대로 리턴

    let currentNode = this.nodes[index];
    let parentIndex = Math.floor((index - 1) / 2);
    let parentNode = this.nodes[parentIndex];

    if (parentNode >= currentNode) return;
    // 부모 노드가 현재 노드보다 크거나 같으면 그대로 리턴

    // 현재 노드가 부모 노드보다 크면 바꿔서 올라가기
    this.nodes[parentIndex] = currentNode;
    this.nodes[index] = parentNode;
    index = parentIndex;
    this.bubbleUp(index);
    // 부모 인덱스로 호출
  }

  // max노드 추출하기
  extract() {
    const max = this.nodes[0];

    // 루트 노드가 1개라면 그대로 추출
    if (this.nodes.length === 1) {
      this.nodes.pop();
      return max;
    }

    // 루트 노드가 1개가 아니면 추출 후 맨 아래 노드가 맨 위로 올라오게 하기
    this.nodes[0] = this.nodes.pop();
    this.heapifyDown();
    return max;
  }

  // 힙 유지를 위해 노드를 아래로 이동
  heapifyDown(index = 0) {
    let leftChildIndex = index * 2 + 1;
    let rightChildIndex = index * 2 + 2;
    let length = this.nodes.length;
    let maximum = index; // maximum = 0

    // 왼쪽 자식 노드도 없고 오른쪽 자식 노드도 없을 때 max만 리턴한 채 현재 함수는 종료
    if (!this.nodes[leftChildIndex] && !this.nodes[rightChildIndex]) return;

    // 왼쪽 자식 노드만 있을 때 비교해서 최대 인덱스는 왼쪽 자식 인덱스
    if (!this.nodes[rightChildIndex]) {
      if (this.nodes[leftChildIndex] > this.nodes[maximum]) {
        maximum = leftChildIndex;
      }
    }

    // 왼쪽 자식 노드와 오른쪽 자식 노드 모두 있을 때, 오른쪽 자식 노드가 더 크다면
    if (this.nodes[leftChildIndex] < this.nodes[rightChildIndex]) {
      if (
        // 오른쪽 자식 노드가 유효한 범위 내에 있는지 확인 후 최대 인덱스는 오른쪽 자식 인덱스
        rightChildIndex <= length &&
        this.nodes[rightChildIndex] > this.nodes[maximum]
      ) {
        maximum = rightChildIndex;
      }
    } else {
      // 왼쪽 자식 노드가 더 크다면 동일하게 유효 범위 확인 후 최대 인덱스는 왼쪽 자식 인덱스
      if (
        leftChildIndex <= length &&
        this.nodes[leftChildIndex] > this.nodes[maximum]
      ) {
        maximum = leftChildIndex;
      }
    }

    // 만약 최대 인덱스가 0이 아니라면 더 큰 노드의 값을 t에 할당
    if (maximum !== index) {
      let t = this.nodes[maximum];
      // 현재 노드 위치에 자식 노드 인덱스 값을 대입 === t
      this.nodes[maximum] = this.nodes[index];
      this.nodes[index] = t;
      this.heapifyDown(maximum);

      // 재귀적으로 호출
    }
  }
}
const heap = new maxHeap();
let extracts = "";
operations.forEach((operation) => {
  if (operation !== 0) {
    heap.insert(operation);
  } else {
    if (heap.nodes.length === 0) {
      extracts += "0" + "\n";
    } else {
      let t = heap.extract();
      extracts += t + "\n";
    }
  }
});

console.log(extracts.trim());
