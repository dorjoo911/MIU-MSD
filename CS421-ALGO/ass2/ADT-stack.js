/* Pseudo-code:

Algorithm push(e)
  Input: Element e
  queue1.enqueue(e)
  
Algorithm pop()
  Output: Element at the top of the stack
  if queue1.isEmpty() and queue2.isEmpty() then
    throw EmptyStackException
  else
    for i <- 1 to queue1.size() - 1 do
      queue2.enqueue(queue1.dequeue())
    p <- queue1.dequeue()
    tmp <- queue1
    queue1 <- queue2
    queue2 <- tmp
    return p
    
    The running time of push method is O(1)
    The running time of pop method is O(n)
*/

const stackADT = require("./DLinkedList.js");

class Stack {
  constructor() {
    this._linkedlist = new stackADT.DLinkedList();
  }
  push(elem) {
    this._linkedlist.insertLast(elem);
  }
  pop(elem) {
    return this._linkedlist.remove(this._linkedlist.last());
  }
}

let newStack = new Stack();

newStack.push(1);
newStack.push(2);
newStack.push(5);
newStack.push(8);
newStack._linkedlist.print();
newStack.pop();
newStack.pop();
newStack._linkedlist.print();
