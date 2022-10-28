/* ********************************
Algorithm-A.a sum(L)
1    if n := 0
1      return true
n    return sum = sum + sum(n-1)
* *********************************/

/* ********************************
Algorithm-A.b sum2(L)
    if L.size = 0
        return 0
    return L.shift() + sum2(L)
* *********************************/

function sumRec2(input) {
  if (input.length == 0) {
    return 0;
  } else {
    return input.shift() + sumRec2(input);
  }
}
// console.log(sumRec2([1, 2, 3, 4]));

/* ********************************
Algorithm-B findMax(L)
    if L.isEmpty() then return null
    p := L.first()
    return findMaxHelper(L, p, p.element())

Algorithm findMaxHelper(L, p, currentMax)
    if p.element() > currMax then
        currMax := p.element()
    if L.isLast(p) then
        return currMax
    else
        return findMaxHelper(L, L/after(p), currentMax)
    

* *********************************/

function sumRec2(input) {
  if (input.length == 0) {
    return 0;
  } else {
    return input.shift() + sumRec2(input);
  }
}
// console.log(sumRec2([1, 2, 3, 4]));

/* **************************************************
Algorithm-C findSubsets(subset, nums, output, index)
     if index = nums.length 
        subset.push(output)
    return findSubsets(subset, nums, [...output], index + 1)

            **********************

Algorithm setOfSubsets(S)
    if S.isEmpty() then
        res := new Sequence
        res.insertLast(S)
        return res
    elem := S.remove(S.last())
    res := setOfSubsets(S)
    return copyInsert(elem, res, res.first(), new Sequence)

Algorithm copyInsert(elem, res, p, newRes)
    newRes.insertLast(p.element())
    c := copy(p.element())
    c.insertLast(elem)
    newRes.insertLast(c)
    if res.isLast(p) then
        return newRes
    return copyInsert(elem, res, res.after(p), newRes)

*************************************************** */

function setOfsubSets(S) {
  if (S.length === 0) return [[]];
  let N = S.pop();
  let K = setOfsubSets(S);
  return K.concat(union(K, N));
}
function union(S, N) {
  let R = [[]];
  for (let i = 0; i < S.length; i++) R[i] = S[i].concat(N);
  return R;
}
console.log(setOfsubSets([1, 2, 3, 4]));
