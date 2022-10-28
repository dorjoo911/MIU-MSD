"use strict";

/* Write a recursive function to count the instances of a letter in a string.  Use recursion rather than split and filter.
Base case?
Reductive recursive call?  
*/

/**
 * 
 * @param {string} str of letters
 * @param {string} letter to be counted
 * @returns {number} count of instances of letter in the string
 */
function countLetters(str, letter) {
    //base case?
    if (str.length === 0) {
        return 0;
    } else {//reduction step?
        //check if first letter in string is the letter
        if (str[0] === letter) {
            return 1 + countLetters(str.substring(1), letter);
        } else {
            return countLetters(str.substring(1), letter);
        }
    }
}

console.log("expect 2 ", countLetters("abcabc", "a"));