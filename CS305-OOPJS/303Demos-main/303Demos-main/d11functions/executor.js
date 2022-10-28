"use strict";
/* eslint-disable */
const assert = require("assert");

/* write functions executor, add, and mult as defined by the test below */

// describe("executor", function(){
//     it ("tests add", function(){
//         assert.strictEqual(executor(add, 5, 10), 15);
//     });
//     it("tests mult", function(){
//         assert.strictEqual(executor(mult, 5, 10), 50);
//     });
// });

function add(i, j){
    return i + j;
}

function mult(i, j){
    return i * j;
}

function executor(callback, i, j){
    return callback(i,j);
}

executor(add, 5, 10);