/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    this.length++;
    let node = new Node(val);
    if (this.length === 1) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    this.length++;
    let node = new Node(val);
    if (this.length === 1) {
      this.head = node;
      this.tail = node;
    } else {
    node.next = this.head;
    this.head = node;
    }
  }

  /** pop(): return & remove last item. */

  pop() {
    this.length--;
    let val = this.tail.val;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    } else {
      let newTail = this.head;
      for (let i = 0; i < this.length - 1; i++) {
        newTail = newTail.next
      }
      this.tail = newTail;
    }
    return val;
  }

  /** shift(): return & remove first item. */

  shift() {
    this.length--;
    let val = this.head.val;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
    }
    return val;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    let node = this.head;
    for (let i = 0; i < idx; i++) {
      node = node.next;
    }
    return node.val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    let node = this.head;
    for (let i = 0; i < idx; i++) {
      node = node.next;
    }
    node.val = val;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (idx = 0) {
      this.unshift(val);
    } else {
      let newNode = new Node(val);
      let node = this.head;
      for (let i = 0; i < idx - 1; i++) {
        node = node.next;
      }
      newNode.next = node.next;
      node.next = newNode;
    }
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx === 0) {
      this.shift(val);
    } else if (idx === length) {
      this,pop();
    } else {
      let node = this.head;
      for (let i = 0; i < idx - 1; i++) {
        node = node.next;
      }
      val = node.next.val;
      node.next = node.next.next;
    }
    return val;
  }

  /** average(): return an average of all values in the list */

  average() {
    if (this.length === 0) {
      return 0 // really should be `throw new Error("Cannot divide by zero.");`
    }
    let node = this.head;
    let sum = 0;
    while (node) {
      sum += node.val;
      node = node.next;
    }
    return sum / this.length;
  }
}

class DNode {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prior = null;
  }
}

class DoublyLinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    this.length++;
    let node = new DNode(val);
    if (this.length === 1) {
      this.head = node;
      this.tail = node;
    } else {
    node.prior = this.tail;
    this.tail.next = node;
    this.tail = node
    }
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    this.length++;
    let node = new Node(val);
    if (this.length === 1) {
      this.head = node;
      this.tail = node;
    } else {
    node.next = this.head;
    this.head.prior = node;
    this.head = node;
    }
  }

  /** pop(): return & remove last item. */

  pop() {
    this.length--;
    let val = this.tail.val;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prior;
      this.tail.next = null;
    }
    return val;
  }

  /** shift(): return & remove first item. */

  shift() {
    this.length--;
    let val = this.head.val;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prior = null;
    }
    return val;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    let node = this.head;
    for (let i = 0; i < idx; i++) {
      node = node.next;
    }
    return node.val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    let node = this.head;
    for (let i = 0; i < idx; i++) {
      node = node.next;
    }
    node.val = val;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (idx === 0) {
      this.unshift(val);
    } else {
      let newNode = new Node(val);
      let node = this.head;
      for (let i = 0; i < idx - 1; i++) {
        node = node.next;
      }
      newNode.next = node.next;
      newNode.prior = node;
      node.next.prior = newNode;
      node.next = newNode;
    }
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx === 0) {
      this.shift(val);
    } else if (idx === this.length) {
      this.pop()
    } else {
      let node = this.head;
      for (let i = 0; i < idx ; i++) {
        node = node.next;
      }
      val = node.val;
      node.prior.next = node.next;
      node.next.prior = node.prior;
    }
    return val;
  }

  /** average(): return an average of all values in the list */

  average() {
    if (this.length === 0) {
      throw new Error("Cannot divide by zero.");
    }
    let node = this.head;
    let sum = 0;
    while (node) {
      sum += node.val;
      node = node.next;
    }
    return sum / this.length;
  }

  /** reverse(): reverse the list in place  */

  reverse() {
    if (this.length !== 0){
      let node = this.head;
      [this.head, this.tail] = [this.tail, this.head]
      while (node) {
        [node.prior, node.next] = [node.next, node.prior];
        node = node.prior;
      }
    }
  }

  static zipSorted(dlList1, dlList2) {
    let node1 = dlList1.head;
    let node2 = dlList2.head;
    let newDlList = new DoublyLinkedList([]);

    while (node1 != null && node2 != null){
      if (node1.val < node2.val) {
        newDlList.push(node1.val);
        node1 = node1.next;
      } else {
        newDlList.push(node2.val);
        node2 = node2.next;
      }
      if (node1 != null) {
        while (node1 != null) {
          newDlList.push(node1.val);
          node1 = node1.next;
        }
        newDlList.tail = dlList1.tail;
      }
      if (node2 != null) {
        while (node2 != null) {
          newDlList.push(node2.val);
          node2 = node2.next;
        }
        newDlList.tail = dlList1.tail;
      }
      return newDlList;
    }
  }
}

module.exports = LinkedList;
