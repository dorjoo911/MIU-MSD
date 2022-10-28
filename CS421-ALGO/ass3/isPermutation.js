/* **************************************************************
Algorithm-1 isPermutation(A, B)
    Input: 2 sequences to check if they are permutations of each other
    Output: true if they are permutations of each other, false otherwise

    If A.size() != B.size()
        return false
    PQ <- new PriorityQueue with HeapSort implementation
    sortedA <- PQ.sort(A)
    sortedB <- PQ.sort(B)
    elementsA <- sortedA.elements()
    elementsB <- sortedB.elements()
    while elementsA.hasNext()
        elementA <- elementsA.nextObject()
        elementB <- elementsB.nextObject()
        if elementA != elementB
            return false
    return true

    The worst-case complexity of this algorithm is O(n log n) 
                                because of the heap-sorting
************************************************************** */

/* ********************************************
Algorithm-2 isPermutation(A, B)
1    if A.size() !=B.size() then
1        return false
1    if A.isEmpty() then
1        return true
1    p:= A.first()
n   if ! isMemberOf(p.element(), B) then
1        return false
n    while ! A.isLast(p) do
n        A.after(p)
n*n        if ! isMemberOf(p.element(), B) then
1            return false
1    return true

Algorithm isMemberOf(elem, L)
1    curr :=L.first()
1    if curr.element() = elem then
1        return true
n    while ! L.isLast(curr) do
n        curr :=L.after(curr)
n        if curr.element() = elem then
1            return true
************************************************ */
