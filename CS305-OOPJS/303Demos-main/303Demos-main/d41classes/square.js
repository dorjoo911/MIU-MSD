"use strict";
/* eslint-disable */

function area() { return this.side * this.side }
const squareProto = {area: area};
const square1 =  {
    side: 5,
    __proto__: squareProto
};

function Square(side){
    this.side = side;
}
Square.prototype.area = area;

class Square2 {
    constructor(side){
        this.side = side;
    }
    area(){ return this.side * this.side }
}

console.log("expect 25: ", square1.area());
console.log("expect 1: ", Object.getOwnPropertyNames(square1).length);

const constSquare1 = new Square(7);
console.log("expect 49: ", constSquare1.area());
console.log("expect 1: ", Object.getOwnPropertyNames(constSquare1).length);

const classSquare = new Square2(10);
console.log("expect 100: ", classSquare.area());
console.log("expect 1: ", Object.getOwnPropertyNames(classSquare).length);

/* add a new class, MorphableSquare, 
extends the square class
has properties color and className
has method morph that will set the value of the className property to the value of the color property
Create two morphableSquare objects
*/

class MorphableSquare extends Square2 {
    constructor(side, color, className){
        super(side);
        this.color = color;
        this.className = className;
    }
    morph(){
        this.className = this.color;
    }
}

const morph2blue = new MorphableSquare(3, "blue", "white");
const morph2green = new MorphableSquare(3, "green", "white");
console.log("expect 9: ", morph2blue.area());
console.log("expect 3: ", Object.getOwnPropertyNames(morph2blue).length);
