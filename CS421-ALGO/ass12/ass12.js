/*
Algorithm findWinner(S, C)

	B <- new Dictionary(BST)
	cnt <- 0
	for each id in C do
		B.insertItem(id, cnt)
	
	maxVote <- 0
	winnerID <- 0
	v <- 0
	for i<-0 to S.size()-1 do
		v <- S.elementAtRank(i) //return candidate ID at the sequence i
		p <- B.findElement(v)
		
		if p <> NO_SUCH_KEY then
			cnt <- B.elem(p) + 1
			B.insertElement(B.key(p), cnt)
			if cnt > max then
				max <- cnt
				winnerID <- B.key(p)

	return winnerID
HT										BST
Algorithm countVotes(L)					
1	D := new Dictionary					1
n	for each id in L.elements() do		n
n		cnt := D.findValue(id)			nlog k
n		if null = cnt then				n
k			D.insertItem(id,1)			klog k
		else
n			D.insertItem(id, cnt + 1)	nlog k
1	return D							1

Algorithm findWinner(L)
	D :=countVotes(L)
	iter :=D.items()
	maxCount := 0
	while iter.hasNext() do
		(id, count) :=iter.nextObject()
		if count > maxCount then
			maxCount := count
			winners := []
			winners.push(id)
		else if count = maxCount then
			winners.push(id)
	return winners

Algorithm isPermutation(A,B)


*/
