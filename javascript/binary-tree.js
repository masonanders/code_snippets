import { BinaryNode } from "./node";

function BinaryTree(rootValue, left = null, right = null) {
  this.root = new BinaryNode(rootValue, left, right);
  this.insertNode = this.findNextInsertNode();
}

BinaryTree.prototype.insert = function(node) {
  if (typeof node !== "object") node = new BinaryNode(node);
  if (this.insertNode.left) {
    this.insertNode.right = node;
  } else {
    this.insertNode.left = node;
  }
  this.insertNode = this.findNextInsertNode();
};

BinaryTree.prototype.findNextInsertNode = function() {
  const queue = [this.root];
  while (queue.length) {
    const node = queue.shift();
    if (node.left) {
      queue.push(node.left);
    } else {
      return node;
    }
    if (node.right) {
      queue.push(node.right);
    } else {
      return node;
    }
  }
};
