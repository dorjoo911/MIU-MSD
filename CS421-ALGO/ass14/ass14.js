/*
R-3.11 Consider the following sequence of keys: 
(5, 16, 22, 45, 2, 10, 18, 30, 50, 12, 1, 7, 55) 
Consider the insertion of items with this set of keys, in the order given, into: 
a. an initially empty (2,4) tree T 
b. an initially empty red-black tree T  
Draw T’ and T’’ after each insertion.

R-3.14 For each of the following statements about red-black trees, determine whether it 
is true or false. If you think if it is true, provide a justification. If you think it is false, give a 
counterexample. 
a. a subtree of a red-black tree is itself a red-black tree. 
b. the sibling of an external node is either external or it is red. 
c. given a red-black tree T, there is an unique (2,4) tree T’ associated with T. 
d. given a (2,4) tree T, there is an unique red-black tree T’ associated with T. 
 
 
1. Design a pseudo-code algorithm, isPermutation(A,B), that takes two Sequences 
A and B and determines whether or not they are permutations of each other, i.e., 
they contain same elements but possibly occurring in a different order.  Hint: A 
and B may contain duplicates.  Same problem as in previous homework, but this 
time use a dictionary to solve the problem.   
2. What is the worst case time complexity of your algorithm?  Justify your answer. 
3. Design and solve this problem in four ways in JavaScript:  
a. By sorting A and B 
b. Using a Priority Queue 
c. Using a Hash Table based Dictionary  
d. Using a BST based Dictionary 
 
4. Assume the elements in A and B cannot be sorted, i.e., there is no comparator.  
How would this restrict the way you would have to implement a solution to 
isPermutation(A,B), i.e., which of the above strategies could you use and which 
couldn’t you use? 
5. Which of the above strategies leaves the inputs A and B unchanged? 
6. Are any of the approaches considered in-place? 
 
 
 
7. Calculate the height of a Binary Tree.  Implement your solution in the JavaScript 
file RBTree-HW.js that is provided.  You are to do this both as a recursive 
function that traverses the tree and secondly using the Euler Tour template class 
(i.e., implement two different functions in JavaScript). 

Algorithm removeDoubleBlack(y, r)
Input r is the double black node and y is sibling(r)
if isDoubleBlack(r) then
    if isRed(y) then {Case 3: when y, the sibling of r, is red}
        y <-- adjustment(y)
p <-- parent(y)
z <-- redChildOf(y)
if isBlack(z) then {Case 1: when y has no red child}
    r <-- fusionRecolor(y, p, r)
    if isRoot(r) then
        setColor(r, BLK)
    else
        removeDoubleBlack(sibling(r), r) // recursive call
else {Case 2: y has a red child z, so we do a transfer}
    restructure(z)
    setColor(parent(p), color(p)) // new parent after restructure
    setColor(p, BLK)
    setColor(z, BLK)
    if isInternal(r) then
        setColor(r, BLK) // make sure r is not external/null
*/
