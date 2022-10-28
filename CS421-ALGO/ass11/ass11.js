/*
R-2.19 Draw the 11-item hash table resulting from hashing the keys 
12, 44, 13, 88, 23, 94, 11, 39, 20, 16, 5, using the hash function 
h(i) = (2i + 5) mod 11 and assuming collisions are handled by chaining.

function --> h(i) = (2i + 5) mod 11
{12, 44, 13, 88, 23,   94,        11,     39,    20, 16, 5 } before
{0   1   2   3   4     5          6       7      8   9   10} index
{.   20  .   .   16,5  44,88,11   94,83   12,23  .   13  . } after
*/
function chainingHash(arr) {
  let newHash = [];
  for (let i = 0; i < arr.length; i++) {
    let index = (2 * arr[i] + 5) % 11;
    index = index.toString();
    if (index == i && newHash[i] == null) {
      newHash[i] = index;
    } else if (newHash[i] != null) {
      newHash[i] += index;
    }
  }
  return newHash;
}
console.log(chainingHash([12, 44, 13, 88, 23, 94, 11, 39, 20, 16, 5]));
/*
R-2.20 What is the result of the previous exercise, assuming collisions 
are handled by linear probing?

C-4.10 Suppose we are given an n-element sequence S such that each element in S 
represents a different vote in an election, where each vote is given as an integer 
representing the ID of the chosen candidate. Without making any assumptions about 
who is running or even how many candidates there are, design an efficient algorithm to 
see who wins the election S represents, assuming the candidate with the most votes 
wins.  Handle the possibility of multiple winners and do this using a Dictionary.  
Today specify your solution using pseudo code (tomorrow we will implement in 
JavaScript after discussing today’s pseudo code solution)

Algorithm findElectionWinner(S)
    Input: n-element sequence S where each element represents a different vote
    Output: ID of winning candidate

    mergeSort(S)
    winCandidateId <- S.first()
    maxVote <- 0
    prevId <- S.first()
    noOfVote <- 0
    while !S.isEmpty() do
        curId <- S.remove(S.first())
        if curId != prevId then
            if maxVote < noOfVote then
                   maxVote <- noOfVote
                   winCandidateId <- curId
                   noOfVote <- 0
        else
                prevId <- curId
                noOfVote <- noOfVote + 1
     return winCandidateId
*/
