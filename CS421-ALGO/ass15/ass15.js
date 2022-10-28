/*
Algorithm calculateheightOfNodes(T)
    heightHelper(T, T.root())

Algorithm heightHelper(T,p)
    if T.isExternal(p) then
        return 0
    leftChild := T.leftChild(p)
    if T.isExternal(leftChild) then
        Lh := 0
    else
        heightHelper(leftChild)
        Lh := getHeight(leftChild)
    rightChild :=T.rightChild(p)
    if T.isExternal(rightChild) then
        Rh := 0
    else
        heightHelper(rightChild)
        Rh := getHeight(rightChild)
    setHeight(p, max(Lh, Rh) + 1)

**********************************

Algorithm isValidAVL(T)
    calculateHeightOfNodes(T, T.root())
    return isValidHelper(T, T.root())

Algorithm isValidHelper(T, p)
    if T.isExternal() then
        return true
    leftChild := T.leftChild(p)
    if 
    rightChild := T.rightChild(p)

**************************************
Algorithm isValidAVL(T)
    return isValidHelper(T, T.root())

Algorithm isValidHelper(T,p)
    if T.isExternal(p) then
        return 0
    leftChild := T.leftChild(p)    
    if T.isExternal(leftChild) then
        Lh := 0
    else
        lValid := heightHelper(leftChild)
        Lh := getHeight(leftChild)
    rightChild :=T.rightChild(p)
    if T.isExternal(rightChild) then
        Rh := 0
    else
        rValid := heightHelper(rightChild)
        Rh := getHeight(rightChild)
    setHeight(p, max(Lh, Rh) + 1)
    valid := (ABS(Lh - Rh) <= 1)
    return lValid /\ rValid /\ valid

****************************************
Algorithm isValidAVL(T)
    return isValidHelper(T, T.root())

Algorithm isValidHelper(T,p)
    if T.isExternal(p) then
        return (true,0)
    leftChild := T.leftChild(p)    
    (lValid, Lh ):= heightHelper(leftChild)
    rightChild :=T.rightChild(p)
    (rValid, Rh) := heightHelper(rightChild)
    valid := (ABS(Lh - Rh) <= 1)
    return lValid /\ rValid /\ valid

            *** *** ***

Algorithm isValidAVL(T)
    h := heightHelper(T, T.root())
    if h = -1 then
        return false
    else return true
Algorithm heightHelper(T,p)
    if T.isExternal(p)
        return 0
    lh := heightHelper(T, T.leftChild(p))
    if lh =-1 then
        return -1
    rh := heightHelper(T, T.rightChild(p))
    if rh = -1 then
        return -1
    if ABS(lh-rh) > 1 then
        return -1
    return MAX(lh, rh) +1

       *** **** ***

Algorithm isValidAVL(T)
    (h, isValid) := heightHelper(T, T.root())
    return isValid
Algorithm heightHelper(T,p)
    if T.isExternal(p)
        return (0, true)
    (lh, lb) := heightHelper(T, T.leftChild(p))
    if !lh then
        return (-1, false)
   (rh, rb) := heightHelper(T, T.rightChild(p))
    if rh = false then
        return (-1, false)
    if ABS(lh-rh) > 1 then
        return (-1, false)
    return (MAX(lh, rh) +1 ,true)

    
****************************************    
C-3.10 Let D be an ordered dictionary with n items implemented by means of an AVL 
tree (or a Red-Black tree).  Show how to implement the following operation on D in time 
O(log n + s), where s is the size of the iterator returned: 
 
FindAllInRange(k1, k2):   
Return an iterator of all the elements in D with key k such that k1 < k < k2.

Algorithm findAllInRange(D, k1, k2)
	Iterator iter <- new Iterator
	if D.isEmpty() = true then
		return iter
	
	Dr <- new Dictionary(BST)
	
	Iterator dIter <- D.keys()
	
	while dIter.hasNext() do
		p <- dIter.nextObject()
		if p.key() > k1 /\ p.key() < k2 then
			Dr.insertItem(p.key(), p.element())
		else
			if p.key() >= k2 then
				break
	
	rIter <- Dr.keys() 
	return iter


*/
