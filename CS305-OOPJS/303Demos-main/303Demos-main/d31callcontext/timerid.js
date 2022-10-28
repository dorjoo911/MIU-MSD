"use strict";

let timerId = setTimeout(() => console.log("never happens"), 1000);
console.log("timerid is: ", timerId); // timer identifier

clearTimeout(timerId);
//console.log(timerId); // same identifier (doesn't become null after canceling)