"use strict";

/**
 * 
 * @param {Array} arr of numbers
 * @returns {number} sum of arr numbers
 */
 function sum(arr){
    let tot = 0;
    for (const number of arr){
        tot += number;
    }
    return tot;
}

const abc = {sum};
console.log("abc sum: ", abc.sum([1,2,3])); 
