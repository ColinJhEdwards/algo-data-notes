class Node {
  constructor(val) {}
}

class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(val) {
    this.adjacencyList[val] = [];
  }
  addEdge(v1, v2) {
    this.adjacencyList.v1.push(v2);
    this.adjacencyList.v2.push(v1);
  }
  removeEdge(v1, v2) {
    this.adjacencyList.v1 = this.adjacencyList.v1.filter((v) => v !== v2);
    this.adjacencyList.v1 = this.adjacencyList.v2.filter((v) => v !== v1);
  }
  removeVertex(val) {
    while (this.adjacencyList.val.length) {
      const adjacentVertex = this.adjacencyList[val].pop();
      this.removeEdge(val, adjacentVertex);
    }
    delete this.adjacencyList[val];
  }
}
