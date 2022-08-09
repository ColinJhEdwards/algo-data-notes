// LINKED LIST STUFF -----------------------------------------------

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }
  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head === newNode;
      this.tail === this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head === null;
      this.tail === null;
    }
    return current;
  }
  shift() {
    if (!this.head) return undefined;
    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length === 0) {
      this.tail === null;
    }
    return currentHead;
  }
  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head === newNode;
      this.tail === this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  get(val) {
    if (val < 0 || val >= this.length) return null;
    let count = 0;
    let current = this.head;
    while (count !== index) {
      current = current.next;
      count++;
    }
    return current;
  }
  set(index, val) {
    const value = this.get(index);
    if (!value) {
      return false;
    } else {
      value.val = val;
      return true;
    }
  }
  insert(index, val) {
    const newNode = new Node(val);
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return this.push(value);
    if (index === 0) this.unshift(value);
    const temp = this.get(index - 1);
    const item1 = this.get(index - 1);
    item1.next = newNode;
    newNode.next = temp.next;
    this.length++;
    return true;
  }
  remove(index) {
    if (index < 0 || index > this.length) return null;
    if (index === this.length - 1) this.pop();
    if (index === 0) this.shift();
    const prev = this.get(index - 1);
    const removed = prev.next;
    prev.next = removed.next;
    this.length--;
    return removed;
  }
  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let prev = null;
    let next = null;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
}

list = new SinglyLinkedList();
list.push("hello");
list.push("bye");

class DNode {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoubleLink {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    const newNode = new DNode(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.tail) return undefined;
    const removed = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
      removed.prev = null;
    }
    this.length--;
    return removed;
  }
  shift() {
    if (this.length === 0) return undefined;
    const removed = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
      removed.next = null;
    }
    this.length--;
    return removed;
  }
  unshift() {
    const newNode = new DNode(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  get(index) {
    if (index < 0 || index >= this.length) return null;
    if (index <= Math.floor(this.length / 2)) {
      let current = this.head;
      for (let i = 0; i < index; i++) {
        current = current.next;
      }
      return current;
    } else {
      let current = this.tail;
      for (let i = this.length - 1; i > index; i--) {
        current = current.prev;
      }
      return current;
    }
  }
  set(index, val) {
    const update = this.get(index);
    if (!update) {
      return false;
    } else {
      update.val = val;
      return true;
    }
  }
  insert(index, val) {
    if (index < 0 || index >= this.length) return false;
    if (index === 0) {
      this.unshift(val);
      return true;
    }
    if (index === this.length) {
      this.push(val);
      return true;
    }
    const newNode = new DNode(val);
    const prev = this.get(index - 1);
    const next = prev.next;
    prev.next = newNode;
    newNode.prev = prev;
    newNode.next = next;
    next.prev = newNode;
    this.length++;
    return true;
  }
  remove(index) {
    if (index < 0 || index >= this.length) return false;
    if (index === 0) {
      this.shift();
      return true;
    }
    if (index === this.length) {
      this.pop();
      return true;
    }
    const removed = this.get(index);
    removed.next.prev = removed.prev;
    removed.prev.next = removed.next;
    removed.next = null;
    removed.prev = null;
    this.length--;
    return removed;
  }
}

// Using a linked list for a stack

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(val) {
    const newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      const first = this.first;
      this.first = newNode;
      this.first.next = first;
    }
    this.length++;
  }
  pop() {
    if (!this.head) return null;
    const temp = this.first;
    if (this.length === 1) {
      this.first = null;
      this.last = null;
    }
    this.first = temp.next;
    this.length--;
    return temp;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  enqueue(val) {
    const newNode = new Node(val);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }
  dequeue() {
    if (this.length === 0) return null;
    const temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = temp.next;
    this.length--;
    return temp;
  }
}
