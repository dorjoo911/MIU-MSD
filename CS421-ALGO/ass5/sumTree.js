/*
Algorithm sum(T)
    return sumHelper(T, T.root())

Algorithm sumHelper(T, p)
    if T.isExternal(p) then
        return 0
    else
        Lsum :=sumHelper(T, T.leftChild(p))
        Rsum :=sumHelper(T, T.rigthCild(p))
        return Lsum + Rsum + p.element()
*/
