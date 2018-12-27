/* These tests use built in assert library. 
 * You'll want to use Jest */ 
const BinaryTree = require('./BinaryTree');
const BinarySearchTree = require('./BinarySearchTree');
const Node = require('./Node');
const assert = require('assert');

const apples = new Node('Apples');
const bananas = new Node('Bananas');
const cucumbers = new Node('Cucumbers');


/* Binary Tree Example */
const tree = new BinaryTree(apples);
apples.left = bananas;
apples.right = cucumbers;


console.log(tree.preOrder());

/* Binary Search Tree - Add tests */
const bst = new BinarySearchTree();

bst.add('bananas');

assert(bst.root.value === 'bananas', 'bananas should be root');

bst.add('cucumbers');

assert(bst.root.left === null, 'Root.left should be null');

assert(bst.root.right.value === 'cucumbers', 'Root.right value should be cucumbers');

/* Binary Search Tree - Search tests */
let foundNode = bst.search('cucumbers');

assert(foundNode.value === 'cucumbers', 'Found node should have value of cucumbers');

foundNode = bst.search('dates');

assert(foundNode === null, 'Found node should be null');
