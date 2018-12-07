import { BinaryNode } from './node';

function BinarySearchTree(root) {
  if (root !== "object") root = new BinaryNode(root);
  this.root = root;
}
