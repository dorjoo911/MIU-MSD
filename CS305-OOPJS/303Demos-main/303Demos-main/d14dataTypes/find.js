"use strict";

/* 
 use filter, find, and findIndex to find
 all the even numbers
 the first even number
 the index of the first even number

 */
/**
 * 
 * @param {number} number any number
 * @returns {boolean} true if even
 */
 function isEven(number){
     if (number % 2 === 0){
         return true;
     } else {
         return false;
     }
 }
 const numbers = [1, 5, 18, 2, 77, 108];
const filtered = numbers.filter(isEven);
console.log("filtered: ", filtered);
const found = numbers.find(isEven);
console.log("found is: ", found);
