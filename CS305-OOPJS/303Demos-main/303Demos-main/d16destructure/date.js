"use strict";
/* eslint-disable */
/* Write code that measures how long it takes to find the maximal subarray for an array that has 10 elements and another 
that has 100 elements using first the O(n) solution and then the O(n**2) solution.
*/

function getMaxSubSumSlow(arr) {
    let maxSum = 0; // if we take no elements, zero will be returned

    for (let i = 0; i < arr.length; i++) {
        let sumFixedStart = 0;
        for (let j = i; j < arr.length; j++) {
            sumFixedStart += arr[j];
            maxSum = Math.max(maxSum, sumFixedStart);
        }
    }

    return maxSum;
}

function getMaxSubSum(arr) {
    let maxSum = 0;
    let partialSum = 0;

    for (let item of arr) { // for each item of arr
        partialSum += item; // add it to partialSum
        maxSum = Math.max(maxSum, partialSum); // remember the maximum
        if (partialSum < 0) partialSum = 0; // zero if negative
    }

    return maxSum;
}

function makeArray(n) {
    const arr = [];
    for (let i = 0; i <= n; i++) {
        arr.push(i);
    }
    return arr;
}
const arr10 = makeArray(10);
const arr100 = makeArray(10000);

let start = Date.now(); // milliseconds count from 1 Jan 1970
// do the job
// for (let i = 0; i < 100000; i++) {
//   let doSomething = i * i * i;
// }
//getMaxSubSumSlow(arr10);
// getMaxSubSumSlow(arr100);
// getMaxSubSum(arr10);
 getMaxSubSum(arr100);
let end = Date.now(); // done
console.log( `The loop took ${end - start} ms` ); // subtract numbers, not dates

