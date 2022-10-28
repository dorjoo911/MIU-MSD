"use strict";

let hamster = {
    stomach: [],

    eat(food) {
        //if (this.stomach.length === 0){
        if (!Object.prototype.hasOwnProperty.call(this, "stomach")){  //safe form of this.hasOwnProperty("stomach")
                        this.stomach = [food];
        } else {
            this.stomach.push(food);
        }
    }
};

let speedy = {
    __proto__: hamster
};

let lazy = {
    __proto__: hamster
};

// This one found the food
speedy.eat("apple");
console.log("expect apple: ", speedy.stomach); // apple

console.log("expect undefined: ", lazy.stomach); // undefined

speedy.eat("orange");
console.log("expect apple, orange: ", speedy.stomach);

console.log("expect undefined: ", lazy.stomach); // undefined

lazy.eat("salad");
console.log("expect salad: ", lazy.stomach); // undefined
console.log("expect apple, orange: ", speedy.stomach);