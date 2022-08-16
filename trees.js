class Node {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
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
        if (value === current.value) return undefined;
        if (val < current.value) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          } else if (value > current.value) {
            current = current.left;
          }
        }
      }
    }
  }
  find(val) {
    if (!this.root) return false;
    let current = this.root;
    let found = false;
    while (current && !found) {
      if (val < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }
    if (!found) return false;
    return current;
  }
  BFS() {
    const data = [];
    const queue = [];
    let node = this.root;
    queue.push(node);
    while (queue.length) {
      node = queue.shift();
      data.push(node);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }
  DFSPreOrder() {
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
