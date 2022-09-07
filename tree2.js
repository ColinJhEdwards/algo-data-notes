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
}
