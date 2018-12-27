const Node = require('./Node.js');

class BinarySearchTree {

  constructor(root = null) {
    this.root = root;
  }

  add(value) {

    const nodeToAdd = new Node(value);

    if(!this.root) {
      this.root = nodeToAdd;
      return;
    }

    let current = this.root;

    while(current) {

    }
  }

  search(value) {
    if (!this.root) return null;
    let current = this.root;
    while(current) {
      
    }
  }
}

module.exports = BinarySearchTree;