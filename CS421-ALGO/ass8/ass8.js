/*
Algorithm findWinner(L)
1       if !L.isEmpty() then return new List
nlogn   PQ-sort(L)
n        iter := L.elements()
1        maxCount :=0
1        currID := iter.nextObject()
1        currCount :=1
        // winner := new List
n        while iter.hasNext() do
n            nextID := iter.nextObject()
n            if nextID != currID \/ !iter.hasNext() then
n                if currCount > maxCount then
n                    winner := new List
n                    winners.insertLast(currID) // winners.push(currID)
n                    maxCount := currCount
n                    currID := nextID
n                    currCount :=0
n                else if currCount = maxCount
n                    winners.insertLast(currID) // winners.push(currID)
n                    currCount := 0
n            currCount++   
1        return winners
    
    
for each nextID in L.elements() do
*********** ******************************** **************
My Algorithm findWinner(L)
		C := winner id
		sortedS := mergeSort(S, C)                 // nlogn
		lastWinnerID := NULL
        winningID := NULL
        maxID :=0
        count :=0
        iterator := sortedS.elements()
        while iterator.hasNext() do                // n
            winnerID = iterator.nextObject()
            if lastWinnerID != NULL && !C.isEqual(lastWinnerID, winnerID) then
                if maxID < count then
                    maxID = count
                    winningID = lastWinnerID
                count =0
            lastWinnerID = winnerID
            count < count +1
        if maxID < count then
            maxID = count
            winningID = lastWinnerID
        return winningID

*/
