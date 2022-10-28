"use strict";

/**
 * @returns {undefined} only logs
 */
function sayHi() {
    console.log( "Hello" );
   }
   const myHi = sayHi;
   console.log( sayHi() ); // shows the function code
   /* eslint-disable */
   function higherOrder() { return sayHi; }
   higherOrder()();
   