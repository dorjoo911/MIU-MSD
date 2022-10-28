"use strict";
/* eslint-disable */
const assert = require("assert"); 
//TODO - check if even number is included in the array
function includesEvenNum(arr) {
    for (let num of arr) {
        if (!isEven(num))
            return false;
    }
    return true;
}

//TODO - check if even age is included
function includesEvenAge(arr) {
    return arr.includes((item) => isEven(item.age));
}

describe("need this too", function () {
    it("includes even age -- write this test", function () {
        //assert.deepEqual(includesEvenAge(peopleArray), true);
        const peopleOddAge = [{ name: "Sam", age: 15 }, { name: "Lucy", age: 13 }, { name: "Barney", age: 81 }];
        assert.deepEqual(includesEvenAge(peopleOddAge), false);
    });

    function isEven(num) {
        if (num % 2 !== 0) return false;
        else
            return true;
    }

})