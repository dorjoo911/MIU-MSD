"use strict";
/*global assert */

/* comment out the node specific code when going to the browser*/

const assert = require("assert");  //always need this with node
const myExports = require("./ho.js");  //with node need the name of your file with your functions here
const myOwnMap = myExports.myOwnMap;  //do this for all of the functions used in the Mocha tests
const myOwnFilter = myExports.myOwnFilter;
const myOwnReduce = myExports.myOwnReduce;

describe("my own array. map()", function () {
    it("return a new array MMAA", function () {
        let arr = [5, 3, 8, 1];
        let mapped = myOwnMap(arr, item => item * 2);
        assert.strictEqual(mapped, [10, 6, 16, 2]);
    });

});

it("return a new array MMBB", function () {
    let arr = [5, 3, 8, 1];
    let mapped = myOwnMap(arr, item => item * 2);
    assert.deepEqual(mapped, [10, 6, 16, 2]);
});




describe("my own array. filter()", function () {
    it("return a new array FFAA", function () {
        let arr = [5, 3, 8, 1];
        let filtered = myOwnFilter(arr, item => item > 3);
        assert.strictEqual(filtered, [5, 8]);
    });
});


it("return a new array FFBB", function () {
    let arr = [5, 3, 8, 1];
    let filtered = myOwnFilter(arr, item => item > 3);
    assert.deepEqual(filtered, [5, 8]);
});



describe("my own array. reduce()", function () {
    it("return a new array RRAA", function () {
        let arr = [5, 3, 8, 1];
        let prev = 0;
        let reduced = myOwnReduce(arr, (prev, item) => item + prev);
        assert.strictEqual(reduced, 17);
    });
  
});

it("return a new array RRBB", function () {
    let arr = [5, 3, 8, 1];
    let reduceed = myOwnMap(arr, (prev, item) => item + prev);
    assert.deepEqual(reduceed, 17);
});


