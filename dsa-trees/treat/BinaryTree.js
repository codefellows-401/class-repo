class BinaryTree {

  constructor(root = null) {

    this.root = root;
  }

  preOrder(node = this.root) {

    let str = '';

    function toString(node) {

      if (!node) return;

      str += node.value;

      toString(node.left);

      toString(node.right);
    }

    toString(node);

    return str;
  }
}

module.exports = BinaryTree;