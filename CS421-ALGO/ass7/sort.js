/*
Algorithm sortRB(L)
curr: = L.isFirst()
while curr.element = B do
    currElem = curr.element()
    curr = curr.next()
    while curr != L.last()
        if curr = R
        swapElements(currElem, curr.element()) 

Algorithm sortRB(L)
    curr := L.first()
    nextRed := curr
    while ! L.isLast(nextRed) /\ color(nextRed) = Red do
        nextRed := L.after(nextRed)
    curr := nextRed
    while !L.isLast(curr) do
        curr:= L.after(curr)
        if isRed(curr) then
            l.swapElements(nextRed, curr)
            nextRed :=L.after(nextRed)
    return L   
     
 ************************************************   
Algorithm moveToFront(L, curr, color)
    next := curr
    while !L.isLast(next) /\ colorOf(next) = color do
        next := L.after(next)
    curr := next
    while !L.isLast(curr) do
        curr := L.after(curr)
        if colorOf(curr) = color then
            L.swapElements(next, curr)
            next := L.after(next)
    return next

Algorithm RBSort(L)
    if L.isEmpty() then return L
    moveToFront(L, L.first(), Red)
    return L

Algorithm RBGSort(L)
    if L.isEmpty() then return L
    next := moveToFront(L, L.first(), Red)
    moveToFront(L, next, Blue)
    return L
 **********************************************************


*/
