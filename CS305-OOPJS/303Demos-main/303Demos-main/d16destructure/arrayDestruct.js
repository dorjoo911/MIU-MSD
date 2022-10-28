"use strict";


const team = [ "Bob",  "Fred",  "Jim"];
// destructure the team array onto variables with the same names as the properties, but all lower case

const [bob, fred, jim, jay, joe] = team;

console.log("expect Bob", bob );
console.log("expect Jim", jim);

const team2 = { point: "Bob", shooting: "Fred", power: "Jim", small: "Al",  center:  "Big Sleep" }

// 1. destructure the team object onto variables with the same names as the properties
const {point, shooting, small, power, center} = team2;

console.log("expect Big Sleep", center);
console.log("expect Jim", power);


