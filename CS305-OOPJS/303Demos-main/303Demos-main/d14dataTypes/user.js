"use strict";
/* eslint-disable */
/**
 * 
 * @param {string} name of new user
 * @returns {Object} new user object
 */
function User(name) {
    this.name = name;
    this.isAdmin = false;
  }
  
  let user =  User("Jack");
console.log(user);

  