/*
Algorithm findCycle(G)
    DFS(G)

Algorithm preDiscoveryVisit(G, v, e, w)
    setParent(w, e)
Algorithm backEdgeVisit(G, v, e, w)
    buildCycle(G, v, e, w)



Algorithm buildPath(G, dest)
    path := new List
    par := getParent(dest)
    while par !=null do
        path.insertFirst(dest)
        path.insertFirst(par)
        dest := G.opposite(par, dest)
        par := getParent(dest)
    path.insertFirst(dest)
    return path

Algorithm findPath(G,u,v)
    for all e in G.vertices() do
        setLabel(v, Unexplored)
        setParent(v, null)
    for all e in G.edges() do
        setLabel(e, Unexplored)
    DFScomponent(G,u)
    return buildPath(G, v)

Algorithm preDiscoveryVisit(G, v, e, w)
    setParent(w, e)

** ** * * ** * isValidRBTree * ** * * ** * ** * * *

Algorithm isRed(T, p)
    if T.isExternal(p) then
        return false
    else if color(p) = RED then
        return true
    else return false
    
Algorithm hasDoubleRed(T, p)
    if T.isExternal(p) then
        return false
    lp :=T.leftChild(p)
    ldr :=hasDoubleRed(T, lp)
    rp :=T.rightChild(p)
    rdr := hasDoubleRed(T, rp)
    if isRED(T,p) then
        return isRed(lp) \/ isRed(rp) \/ ldr \/ rdr
    else return ldr \/ rdr

Algorithm hasDoubleRed(T, p)
    if T.isExternal(p) then
        return false
    if !T.isRoot(p) /\ isRED(T,p) /\ isRed(T, T.parent(p)) then
        return true
    ldr :=hasDoubleRed(T, T.leftChild(p))
    rdr := hasDoubleRed(T, T.rightChild(p))
        return ldr \/ rdr

// HasDoubleRed
Algorithm visitExternal(T, v, result)
    result[1] :=false
Algorithm visitPreOrder(T,p,result)
    if !T.isRoot(p) /\ isRED(T,p) /\ isRed(T, T.parent(p)) then
        return[1] :=true
    else result[1] :=false
Algorithm visitPostOrder(T,p,result)
    result[1] := result[0] \/ result[2] \/ result[1]

// SubClass validBlackHeight
Algorithm visitResultExternal(T, v result)
    result[1] :=1
Algorithm visitPostOrder(T, p, result)
    if result[0]=-1 \/ result[2]=-1 then
        result[1] :=-1
    else if result[0] !=result[2] then
        result[1] := -1
    else if isRed(p) then
        result[1] := result[0]
    else result[1] := result[0] + 1

Algorithm isValidRBTree(T)
    checkDR := new HasDoubleRed
    checkBH := new ValidBlackHeight
    DR := checkDR.eulerTour(T, T.root())
    BH := checkBH.eulerTour(T, T.root())
    if DR \/ BH =-1 then
        return false
    else return true

Algorithm

*/
