"use strict";

const { reverse } = require("dns");

module.exports = { checkPrime, ssReverse };
/**
 * @param {number} num is an integer
 * @returns {boolean} true if number is prime, else false
 * Prime numbers have only 2 factors: 1 and themselves.
 */
function checkPrime(num) {
  for (let i = 2; i < num; i++) if (num % i === 0) return false;
  return num > 1;
}
function ssReverse(nums) {
  let res = nums.reverse();
  return res;
}
//console.log(ssReverse([1, 2, 3]));
