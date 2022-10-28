/* 
Algorithm downHeap(H, size)
Input Array H representing a heap and the size of H (size > 1)
Output H with the heap property restored
property <- false
i <- 1
while ! property do
smallest <- indexOfMin(H, i, size)
if smallest ≠ i  then
swapElements(H[smallest], H[i])
i <- smallest
else
property <- true
return H

*/
/*
Algorithm indexOfMin(A, r, size)
Input arrayA, an index r (referencing an item of A), and size of  the 
    heap stored in A
Output the rank of element in A containing the smallest value

smallest <-r
left <- 2*r
right <- 2*r + 1
if left < size /\ key(A[left])  <  key(A[smallest]) then
    smallest <-left
if right < size /\ key(A[right])  <  key(A[smallest]) then
    smallest <-right
return smallest
*/
/*
Algorithm findSmallerKeys(T,x)
    R: = new List
    findHelper(T, x, T.root(), R) 
    return R     

Algorithm findHelper(T, x, p, R)
    if T.isExternal(p) then
        return R
    if p.element() <= x then
        R.insertLast(p.element())
        findHelper(T, x, T.leftChild(p), R)
        findHelper(T, x, T.rightChild(p), R)
    
Algorithm findHelper(T, x, p, R)
    if T.isExternal(p) then
        return R
    findHelper(T, x, T.leftChild(p), R)
    findHelper(T, x, T.rightChild(p), R)
    if p.element() <= x then
        R.insertLast(p.element())
*/
function findSmallerKeys(T, size) {
  let property = false;
  let i = 1;
  while (!property) {
    let smallest = indexOfMin(T, i, size);
    if (smallest != i) {
      swapElements(T[smallest], T[i]);
      i = smallest;
    } else {
      property = true;
    }
  }
}

function indexOfMin(A, r, size) {
  let smallest = r;
  let left = 2 * r;
  let right = 2 * r + 1;
  if (left <= size && key(A[left]) < key(A[smallest])) {
    smallest = left;
  }
  if (right <= size && key(A[right]) < key(A[smallest])) {
    smallest = right;
  }
  return smallest;
}
