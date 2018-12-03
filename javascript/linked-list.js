import { ListNode } from "./node.js";

function LinkedList() {
  if (arguments.length) {
    this.first = new ListNode(arguments[0]);
    this.last = this.first;
    for (let i = 1; i < arguments.length; i++) {
      let lastNode = this.last;
      this.last = new ListNode(arguments[i]);
      this.last.append(lastNode);
    }
  }
  this.list = this.first || null;
}
