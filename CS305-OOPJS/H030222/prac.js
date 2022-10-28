// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let newArr = [];

// arr.forEach((element) => {
//   if (element % 2 === 0) {
//     newArr.push(element);
//   }
//   return newArr;
// });

// console.log("My forEach " + newArr);

// const numbers = [1, 5, 18, 2, 77, 108];
// let myArr = [];
// numbers.findIndex((element) => {
//   if (element % 2 === 0) {
//     myArr.push(element);
//   }
//   //   return myArr;
// });
// console.log("findIndex " + myArr);

// console.log(`forEach evens are: ${numbers.forEach((num) => num % 2 === 0)}`);
// console.log(`filter evens are: ${numbers.filter((num) => num % 2 === 0)}`);
// console.log(`find evens are: ${numbers.find((num) => num % 2 === 0)}`);
// console.log(`findIndex are: ${numbers.findIndex((num) => num % 2 === 0)}`);

let user = { name: "John" };

Object.assign(user, { name: "Pete" });

console.log(user); // now user = { name: "Pete" }
