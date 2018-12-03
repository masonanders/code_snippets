function Node(value, ...children) {
  this.value = value;
  this.children = children;
}

function BinaryNode(value, left = null, right = null) {
  this.value = value;
  this.left = left;
  this.right = right;
}

function ListNode(value, next = null, prev = null) {
  this.value = value;
  this.next = next;
  this.prev = prev;
}

ListNode.prototype.append = function(node) {
  this.prev = node;
  node.next = this;
};

export default { Node, BinaryNode, ListNode };
