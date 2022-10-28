"use strict";


let arr = [1, 2, 3, 4, 5];
let result = arr.reduce(function (sum, current) { return sum + current; }, 0);
let result2 = arr.reduce((sum, current) => sum + current, 0);
console.log(result); // 15
console.log(result2); // 15

/* multiply all elements */
let resultM = arr.reduce(function (prod, current) { return prod * current; }, 1);
console.log("expect 120 : ", resultM); // 120

/* find max */
let resultMax = arr.reduce(function (max, current) { return Math.max(max, current); }, -10000000);
console.log("expect 5 : ", resultMax); // 5