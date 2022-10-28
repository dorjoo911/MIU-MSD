"use strict";

/* eslint-disable */

let phrase = "Hello";
if (true) {
  let user = "John";
  function sayHi() {
    console.log(`${phrase}, ${user}`);
  }
}
//console.log("user is: ", user);
sayHi();  //what will this show?  Assume running in strict mode (ES6)