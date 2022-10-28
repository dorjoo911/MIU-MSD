"use strict";

/* Write both iterative and recursive solutions to calculate factorial of an integer. 
    factorial (0) = 1
    factorial (n) = n * factorial (n-1) [for n>0]
*/
/**
 * 
 * @param {number} number is an integer
 * @returns {number} the factorial
 */
function factorial(number) {
    let total = 1;
    for (let i = 1; i <= number; i++) {
        total = total * i;
    }
    return total;

}

console.log("expect 120: ", factorial(5));

/**
 * 
 * @param {number} number is an integer
 * @returns {number} the factorial
 */
function recFactorial(number){
    if (number === 2){
        return 2;
    } else {
        return number * recFactorial( number - 1);
    }
}

console.log("expect 120: ", recFactorial(1));