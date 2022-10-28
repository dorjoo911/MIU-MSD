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

const queueADT = require("./DLinkedList.js");

class Queue {
  constructor() {
    this._linkedlist = new queueADT.DLinkedList();
  }
  enqueue(elem) {
    this._linkedlist.insertLast(elem);
  }
  dequeue(elem) {
    return this._linkedlist.remove(this._linkedlist.first());
  }
}

let newQueue = new Queue();

newQueue.enqueue(1);
newQueue.enqueue(2);
newQueue.enqueue(5);
newQueue.enqueue(8);
newQueue._linkedlist.print();
newQueue.dequeue();
newQueue.dequeue();
newQueue._linkedlist.print();
