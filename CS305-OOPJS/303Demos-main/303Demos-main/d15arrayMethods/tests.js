"use strict";
const assert = require("assert"); 

/* let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

alert( sorted ); // CSS, HTML, JavaScript
alert( arr ); // HTML, JavaScript, CSS (no changes)
*/
describe("copySorted", function () {
    it("get the sorted array back", function () {
        let arr = ["HTML", "JavaScript", "CSS"];
        let sorted = sorted(arr);
        assert.deepEqual(sorted, ["CSS","HTML", "JavaScript" ]);
    });
    it("have not changed original", function () {
        let arr = ["HTML", "JavaScript", "CSS"];
        let sorted = sorted(arr);
        assert.deepEqual(arr, ["HTML", "JavaScript", "CSS"]);
    });
});