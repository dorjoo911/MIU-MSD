/*
// 1. Consider the multi-way search tree of Slide 5 in the Lecture 13 notes, is it a (2,4) 
// tree? Justify your answer.

This is a (2,4) node Tree. The internal node has at least two children
as required. 

// 2. Consider the following sequence of keys: 
// (5, 16, 22, 45, 2, 10, 18, 30, 50, 12, 1, 25, 7) 
// Insert items with this set of keys, in the order given, into an empty (2,4)-tree.
16; 5; 22,45; 1,2; 7,10,12; 18; 25,30; 50;

*** *** *** *** *** *** *** *** *** *** *** ***
R-3.10 A certain Professor Amongus claims that a (2,4) tree storing a set of items will 
always have the same structure, regardless of the order in which the items are inserted. 
Show that Professor Amongus is wrong. 

5, 8, 3, 9, 2, 7, 1, 4, 6 ---> 2,5,8; 1; 3,4; 6,7; 9;
*** *** *** *** *** *** *** *** *** *** *** ***

findelements(T, low, high)
    R: = new List
    findHelper(T, low, high, T.root(), R)
    return R

findHelper(T, low, high,T.root(), R)
IF T.isExternal(p) then
    return R
findHelper(T, low, high, T.leftChild(p), R)
findHelper(T, low, high, T.rightChild(p), R)
if p.element() <= low /\ p.element() >= high
    R.insertLast(p.element())

*** *** *** *** *** *** *** *** *** *** *** ***

findHelper(T, p, low, high, L)                      
    if T.isExternal(p) then                       //post-order
        return
    findHelper(T, T.leftChild(p), low, high, L)   //left
    findHelper(T, T.rightChild(p), low, high, L)  //right
    e := p.element()
    if low <= e /\ e <= high                      //parent
        L.insertLast(e)
findElements(T, low, high)
    L := new List
    findHelper(T, T.root(), low, high, L)
    return L
*/
class findElements extends EulerTour {
  #List;
  #low;
  #high;
  constructor() {}
  findElements(T, low, high) {
    this.#List = List;
    this.#low = low;
    this.#high = high;
    eulerTour(T, T.root());
    return this.#List;
  }
  visitInOrder(T, p, result) {
    let e = p.element();
    if (this.#low <= e && e <= this.#high) {
      this.#List.insertLast(e);
    }
    result[1] = this.#List;
  }
  visitExternal(T, p, result) {
    result[1] = this.#List;
  }
}
