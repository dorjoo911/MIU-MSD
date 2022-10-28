"use strict";

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
module.exports = {myOwnMap,myOwnFilter, myOwnReduce}; //add all of your function names here that you need for the node mocha tests

/**
 *  array.Map()
 * @param {array} arr a array
 * @param {function} fun a function 
 * @returns {array} is the colection of returns of the fun(eachElemof array)
 */
function myOwnMap(arr, fun) {
    let returnArr = [];
    for (let item of arr) {
        returnArr.push(fun(item));
    }
    return returnArr;
}
/**
 * array.filter();
 * @param {array} arr is an array
 * @param {function} fun is a function
 * @returns {array} is the filtered array
 */
function myOwnFilter(arr, fun) {
    let returnArr = [];
    for (let item of arr) {
        if (fun(item)) {
            returnArr.push(item);
        }
    }
    return returnArr;
}
/**
 * array.reduce();
 * @param {array} arr is a array
 * @param {function} fun is a function
 * @returns {vary} one single value
 */
function myOwnReduce(arr, fun) {
    let result = null;
    for (let item of arr) {
        result = fun(prev, item);
    }
    return result;
}