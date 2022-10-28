//"use strict";  
/* eslint-disable */

/**
 * @returns {undefined}
 */
function sayHi() {
    this.lat = 41.00;
    this.long = -92.96;
    console.log(this);
  }

  sayHi(); // undefined
  console.log(lat);