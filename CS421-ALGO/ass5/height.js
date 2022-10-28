/*
Algorithm height(T)
    return heightHelper(T, T.root())

Algorithm heightHelper(T, p)
    if T.isExternal(p) then
        return 0
    else
        Ldepth :=heightHelper(T, T.leftChild(p)) + 1
        Ldepth :=heightHelper(T, T.rigthCild(p)) + 1
        return (Ldepth + Ldepth)/2      //wrong here!!!

----------------------------------------------------        
Algorithm height(T)
    return heightHelper(T, T.root())

Algorithm heightHelper(T, p)
    if T.isExternal(p) then
        return 0
    else
        Lheight := heightHelper(T, T.leftChild(p))
        Rheight := heightHelper(T, T.rightChild(p))
        return MAX(Lheight, Rheight) + 1
----------------------------------------------------

maxDepth()
1. If tree is empty then return -1
2. Else
     (a) Get the max depth of left subtree recursively  i.e., 
          call maxDepth( tree->left-subtree)
     (a) Get the max depth of right subtree recursively  i.e., 
          call maxDepth( tree->right-subtree)
     (c) Get the max of max depths of left and right 
          subtrees and add 1 to it for the current node.
         max_depth = max(max dept of left subtree,  
                             max depth of right subtree) 
                             + 1
     (d) Return max_depth
--------------------------------------------------------
* ** *** <<-- Summing the elements in the Tree T -->> *** ** *

Algorithm visitExternal(T, p, result)
            result[1] := 0

Algorithm visitPostOrder(T, p, result)
            result[1] := result[0] + result[2] + p.element()
Algorithm sum(T)
            return EulerTour(T, T.root())
            ***************************************

* ** *** <<-- Calculating the height of the Tree T -->> *** ** *

Algorithm visitExternal(T, p, result)
            result[1] := 0

Algorithm visitPostOrder(T, p, result)
            result[1] := MAX(result[0], result[2]) + 1

Algorithm height(T)
            return EulerTour(T, T.root())

// 1.a
Algorithm height(T)
    return heightHelper(T, T.root())

Algorithm heightHelper(T, p)
    if T.isExternal(p) then
        return 0
    else
        Lheight := heightHelper(T, T.leftChild(p))
        Rheight := heightHelper(T, T.rightChild(p))
        return MAX(Lheight, Rheight) + 1
*/

// 1.b
const called = require("./BinaryTree.js");

function height(T) {
  return heightHelper(T, T.root());
}

function heightHelper(T, p) {
  if (T.isExternal(p)) {
    return 0;
  } else {
    let Lheight = heightHelper(T, T.leftChild(p));
    let Rheight = heightHelper(T, T.rightChild(p));
    return Math.max(Lheight, Rheight) + 1;
  }
}

// 1.c
class Height extends EulerTour {
  // add your code here, i.e., override methods from EulerTour class
  visitExternal(T, p, result) {
    result[1] = 0;
  }

  visitPostOrder(T, p, result) {
    result[1] = Math.max(result[0], result[2]) + 1;
  }

  height(T) {
    return this.eulerTour(T, T.root()); // this is your helper from the EulerTour Template class
  }
}
