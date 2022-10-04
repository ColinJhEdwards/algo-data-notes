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
  DFSrec(vertex) {
    const results = [];
    const visited = {};
    const adjacenyList = this.adjacencyList;
    (function helper(vertex) {
      if (!vertex) return null;
      visited[vertex] = true;
      results.push(vertex);
      adjacenyList[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          return helper(neighbor);
        }
      });
    })(vertex);
    return results;
  }
  DFSit(vertex) {
    const s = [];
    const results = [];
    const visited = {};
    s.push(vertex);
    visited[vertex] = true;
    let current;
    while (s.length > 0) {
      current = s.pop();
      if (!visited[current]) {
        results.push(current);
        this.adjacencyList[current].forEach((neighbor) => {
          if (!visited[neighbor]) {
            visited[neighbor] = true;
            stack.push(neighbor);
          }
        });
      }
    }
    return results;
  }
  BFS(vertex) {
    const queue = [vertex];
    const visited = {};
    const results = [];

    let current;
    while (queue.length) {
      current = queue.shift();
      results.push(current);
      this.adjacencyList[current].forEach((n) => {
        if (!visited[n]) {
          visited[n] = true;
          queue.push(n);
        }
      });
    }
    return results;
  }
}
