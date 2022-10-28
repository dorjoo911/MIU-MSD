/*
R and C home works
removeDups(L)
sort()
HW-07-arrSorter
inPlaceSort()
quicksort(){
    if(){
        qs()
    }
    else
    insertionSort()
}
inplacePartion(arr, lo, hi)

reverseOrder Queues

sequences-reduce shifting
removeFirst insertLast queune

recursive-Algorithm binary tree

Binary trees range of hight maxHight?
Binary search tree --> heap

Sorts are majority quistions!!
Selection 
Insertion 
Heapsort
Shell sort
Merge-sort
Quick-sort cache!
avg run nLogn
PQ sort nlogn
Radixsort n+N
Bucketsort
GenerickBS

List of inputs iterate
recursive BT, ... algorithms
multiple loops --> recursive func

methods what returns known!!!
BT--> 
List--> 
Secuence 

    Test === 4 algorithms
1. Basic simple Algorithm
2. From HW-... sorts Algo
3. Heap HW-6 R-2-18 height 

Algotithm maxDepth(T, p, d)
    // d = currDepth;
    if T.isExternal(p) then
        return d
    dLeft :=maxDepth(T, T.leftChild(p),d+1)
    dRigth:=maxDepth(T,T.rightChild(p),d+1)
    return MAX(dLeft, dRigth)

Algorithm height(T)
    return maxDepth(T, T.root(), 0)
Position
element()
Item
key(), value()
Stack
push(e), pop(), top(), size(), isEmpty()
Queue
enqueue(e), dequeue(), front(), size(), isEmpty()
List
first(), last(), isFirst(p), isLast(p), size(), isEmpty(), before(p), after(p), insertLast(e), remove(p),
insertFirst(e), swapElements(p, q), insertBefore(p, e), insertAfter(p, e), replaceElement(p, e),
elements(), positions() {all of the Rank based methods of a Sequence below}
Sequence
atRank(r), rankOf(p), elemAtRank(r), replaceAtRank(r, e), insertAtRank(r, e), removeAtRank(r),
{all methods of the Position based methods of a List above}
BinaryTree
size(), isEmpty(), root(), parent(v), children(v), leftChild(v), rightChild(v), sibling(v), isInternal(v),
isExternal(v), isRoot(v), swapElements(v, w), replaceElement(v, e), remove(w), insertLeft(v, e),
insertRight(v, e), elements(), positions()
PriorityQueue
insertItem(k, e), removeMin(), minKey(), minValue()
{Max Priority Queue}
insertItem(k, e), removeMax(), maxKey(), maxValue()
{LocatorPosition methods}
removeItem(p), replaceValue(p, e), replaceKey(p, k)
Dictionary
insertItem(k, e), findValue(k), removeItem(k), replaceValue(k, e),
items(), keys(), values()
OrderedDictionary
insertItem(k, e) , removeItem(k), findValue(k), replaceValue(k, e),
items(), keys(), elements()
Binary Search Tree
key(v), findValue(k), insertItem(k, e), removeItem(k)
(General) Graph
numVertices(), numEdges(), vertices(), edges(), aVertex(), degree(v), areAdjacent(v, w),
incidentEdges(v), adjacentVertices(v), endVertices(e), opposite(v, e), insertVertex(o),
removeVertex(v), insertEdge(v, w, e), removeEdge(e), valueAt(v), valueAt(e)
Comparator
compare(x, y) returns an integer
The following return true or false: isLessThan(x, y), isGreaterThan(x, y), isLessThanOrEqualTo(x,
y), isGreaterThanOrEqualTo(x, y), isEqualTo(x, y), isComparable(x)
*/
