const PQ = require("./PriorityQueue.js");
const Tab = require("./BST_Dictionary.js");
const Map = require("./HT_Dictionary.js");
const Util = require("./GenCopyFunctions.js");

let HelperFunctions = new Util.GenCopyFunctions();

function isPermutationPQ(A, B) {
  let PQA = new PQ.PriorityQueue();
  let PQB = new PQ.PriorityQueue();
  // your code goes here
  let D;
  for (a in A.elements()) {
    D.insertElement(A, a);
    for (b in B.elements()) {
      let p = D.findElement(b);
      if (p == NO_SUCH_KEY) {
        return false;
      } else {
        D.removeElement(b);
      }
    }
  }

  return true;
}
function isPermutationBST(A, B) {
  let DA = new Tab.OrderedDictionary();
  let DB = new Tab.OrderedDictionary();
  // your code goes here
}
function isPermutationHT(A, B) {
  let DA = new Map.HT_Dictionary();
  let DB = new Map.HT_Dictionary();
  // your code goes here
}

function isPermutationTest(A, B) {
  console.log("A=" + HelperFunctions.arrayToString(A));
  console.log("B=" + HelperFunctions.arrayToString(B));
  console.log("isPermutationPQ=" + isPermutationPQ(A, B));
  console.log("isPermutationHT=" + isPermutationHT(A, B));
  console.log("isPermutationBST=" + isPermutationBST(A, B));
}

let A1 = [17, 15, 55, 19, 34, 19, 28, 5, 2, 10, 99, 75, 25, 67, 94, 122, 21];
let B1 = [17, 15, 55, 34, 19, 28, 5, 2, 10, 99, 75, 25, 67, 94, 122, 21, 19];
let A2 = [17, 15, 55, 20, 34, 19, 28, 5, 2, 10, 99, 75, 25, 67, 94, 122, 21];
let B2 = [17, 15, 55, 34, 19, 28, 5, 2, 10, 99, 75, 25, 67, 94, 122, 21, 99];

isPermutationTest(A1, B1); // True
isPermutationTest(A2, B2); // False
isPermutationTest(A1, B2); // False
isPermutationTest(A1, A2); // False
isPermutationTest(B1, B2); // False
