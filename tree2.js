class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }
  insert(val) {
    const newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while (true) {
        if (val === current.value) return undefined;
        if (val > current.value) {
          if (!current.right) {
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        } else {
          if (val < current.value) {
            if (!current.left) {
              current.left = newNode;
              return this;
            }
          }
        }
      }
    }
  }
  find(val) {
    let current = this.root;
    if (!current) {
      return true;
    } else {
      while (true) {
        if (val === current.value) {
          return true;
        } else {
          if (val > current.value) {
            if (!current.right) {
              return true;
            } else {
              current = current.right;
            }
          } else {
            if (val < current.value) {
              if (!current.left) {
                return true;
              } else {
                current = current.left;
              }
            }
          }
        }
      }
    }
  }
  BFS() {
    const visited = [];
    const que = [];
    let visit = this.root;
    que.push(visit);
    while (que.length) {
      visit = que.shift();
      visited.push(visit);
    }
  }
  DFSPre() {
    const data = [];
    let current = this.root;
    const helper = (node) => {
      data.push(node);
      if (node.left) helper(node.left);
      if (node.right) helper(node.right);
    };
    helper(current);
    return data;
  }
}

//  Heap stuff

class MaxHeap {
  constructor() {
    this.values = [];
  }
  insert(val) {
    this.values.push(val);
    this.bubbleUp();
  }
  bubbleUp() {
    let index = this.values.length - 1;
    const val = this.values[index];
    while (true) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.values[parentIndex];
      if (val > parent) {
        this.values[parentIndex] = val;
        this.values[index] = parent;
        index = parentIndex;
      } else {
        break;
      }
    }
  }
}
