/*

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
    
*** **** **** *** **** **** *** *** **** *** **** ***** *** ****

Algorithm isPermutation(A, B)
1    if A.size() != B.size() then return false
1    if A.isEmpty() then return true
nlogn  PQa := insertIntoPQ(A)
nlogn  PQb := insertIntoPQ(B)
n    while !PQa.isEmpty() do
nlogn   a :=PQa.removeMin()
nlogn   b :=PQb.removeMin()
n       if a != b then 
1           return false
1    return true

Algorithm insertIntoPQ(A)
1    PQ := new Priority Queue
1    pos := A.first()
1    a := pos.elements()
1    PQ.insertItem(a,a)
n    while pos !=A.last() do
n        pos := A.after(pos)
n        a := pos.element()
nlogn    PQ.insertItem(a, a)
1    return PQ

*** **** **** *** **** **** *** *** **** *** **** ***** *** ****
*/
