"use strict";

const arr = [1, 5, 16, 3, 108];

/**
 * 
 * @param {*} number any integer
 * @returns {boolean} true if even
 */
function isEvenLog(number, index, array) {
    if (number % 2 === 0) {
        console.log(index , ". " , number , " from the array: " , array);
    }
}

const forE = arr.forEach(isEvenLog);
console.log("forE is: " , forE);
console.log('hi');