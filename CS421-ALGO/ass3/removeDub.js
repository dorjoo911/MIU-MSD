/* ****************************************************
Algorithm removeDups(L)
curr := L.first()
while ! L.isLast(curr) do
    currElem = curr.element()
    p := L.after(curr)
    while !L.isLast(p) do // remove all elements = currElem
        if p.element()=currElem then 
            prev := L.before(p)
            L.remove(p)
            p := prev
        if !L.isLast(p) then 
            p:=L.after(p)
    if p !=curr /\ currElem = p.element() then 
        L.remove(p)
    if !L.isLast(curr) then 
        curr:=L.after(curr)
****************************************************** */
const Iter = require("./List.js");

function removeDups(L) {
  let curr = L.first();
  let currElem, p, prev;
  while (curr != L.after) {
    currElem = curr.element();
    p = L.after(curr);
    while (!L.isLast(p)) {
      prev = L.before(p);
      L.remove(p);
    }
  }
}
