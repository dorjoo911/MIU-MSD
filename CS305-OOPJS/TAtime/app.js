// // Arrow function
// reduce((previousValue, currentValue) => {
//   /* ... */
// });
// reduce((previousValue, currentValue, currentIndex) => {
//   /* ... */
// });
// reduce((previousValue, currentValue, currentIndex, array) => {
//   /* ... */
// });
// reduce((previousValue, currentValue, currentIndex, array) => {
//   /* ... */
// }, initialValue);

// // Callback function
// reduce(callbackFn);
// reduce(callbackFn, initialValue);

// // Inline callback function
// reduce(function (previousValue, currentValue) {
//   /* ... */
// });
// reduce(function (previousValue, currentValue, currentIndex) {
//   /* ... */
// });
// reduce(function (previousValue, currentValue, currentIndex, array) {
//   /* ... */
// });
// reduce(function (previousValue, currentValue, currentIndex, array) {
//   /* ... */
// }, initialValue);

// const getMax = (a, b) => Math.max(a, b);

// // callback is invoked for each element in the array starting at index 0
// [1, 100].reduce(getMax, 50); // 100
// [50].reduce(getMax, 10); // 50

// // callback is invoked once for element at index 1
// [1, 100].reduce(getMax); // 100

// // callback is not invoked
// [50].reduce(getMax); // 50
// [].reduce(getMax, 1); // 1

// [].reduce(getMax); // TypeError

// const array = [15, 16, 17, 18, 19];
// let init = 0;
// function reducer(previous, current, index, array) {
//   const returns = previous + current;
//   console.log(
//     `previous: ${previous}, current: ${current}, index: ${index}, returns: ${returns}`
//   );
//   return returns;
// }

// array.reduce(reducer, 1);
// array.reduce(reducer, 0);
// array.reduce(reducer);

// [15, 16, 17, 18, 19].reduce(
//   (previousValue, currentValue, currentIndex, array) =>
//     previousValue + currentValue,
//   10
// );
// let sum = [0, 1, 2, 3].reduce(function (previousValue, currentValue, index) {
//   return previousValue + currentValue;
// }, 4);
// console.log("sum :>> ", sum);

// let initialValue = 0;
// let sum = [
//   { x: 1, y: null },
//   { x: 2, y: 1 },
//   { x: 3, y: 2 },
// ].reduce((previousValue, currentValue, index) => {
//   return previousValue + currentValue.x;
// }, initialValue);

// console.log(sum); // logs 6

// let flattened = [
//   [0, 1],
//   [2, 3],
//   [4, 5],
// ].reduce(function (previousValue, currentValue) {
//   return previousValue.concat(currentValue);
// }, []);
// console.log("flattened  :>> ", flattened); //[0, 1, 2, 3, 4, 5]

// let names = ["Alice", "Bob", "Tiff", "Bruce", "Alice"];

// let countedNames = names.reduce(function (allNames, name) {
//   if (name in allNames) {
//     allNames[name]++;
//   } else {
//     allNames[name] = 1;
//   }
//   return allNames;
// }, {});
// // countedNames is:
// // { 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1 }

let people = [
  { name: "Alice", age: 17, id: 1352 }, // people[i].age
  { name: "Max", age: 21, id: 354 },
  { name: "Jane", age: 21, id: "09" },
  { name: "Alice", age: 11, id: 1352 },
  { name: "Max", age: 21, id: 354 },
  { name: "Jane", age: 25, id: "09" },
];
let max = 0;
let idP = 0;
let nameP = "MARy";
for (let val of people) {
  if (val.age > max) {
    max = val.age;
    idP = val.id;
    nameP = val.name;
  }
}
console.log("object :>> ", { id: idP, name: nameP, oldest: max });
// {id: 09, name: "Jane", oldest: 25  },
// function groupBy(objectArray) {
//   return objectArray.reduce(function (acc, obj) {
//     let key = obj.age; //17
//     if (!acc[key])
//       //17
//       acc[key] = [];

//     acc[key].push(obj);
//     return acc;
//   }, {});
// }

// let groupedPeople = groupBy(people);
// console.log("groupedPeople :>> ", groupedPeople);
// console.log(people[2].id);
// friends - an array of objects
// where object field "books" is a list of favorite books
// let friends = [
//   {
//     name: "Anna",
//     books: ["Bible", "Harry Potter"],
//     age: 21,
//   },
//   {
//     name: "Bob",
//     books: ["War and peace", "Romeo and Juliet"],
//     age: 26,
//   },
//   {
//     name: "Alice",
//     books: ["The Lord of the Rings", "The Shining"],
//     age: 18,
//   },
// ];

// // allbooks - list which will contain all friends' books +
// // additional list contained in initialValue
// let allbooks = friends.reduce(
//   function (previousValue, currentValue) {
//     return [...previousValue, ...currentValue.books];
//   },
//   ["Alphabet"]
// );

// // allbooks = [
// //   'Alphabet', 'Bible', 'Harry Potter', 'War and peace',
// //   'Romeo and Juliet', 'The Lord of the Rings',
// //   'The Shining'
// // ]

/*function Car(name) {
  this.model = name;
  this.year = 2000;
}

let audi = new Car("Audi");
let mercedes = new Car("Mercedes");
audi.year = 1999;
console.log("mercedes :>> ", mercedes);

console.log(audi);
let house = {
  color: "red",
  area: function () {
    console.log("Area is undefined");
  },
};

function play() {
  console.log("nothing here");
}

function print(func, val) {
  if (val > 10) func();
  return false;
}

console.log(print(play, 14));


*/

//nst prompt = require("prompt-sync")();
function ask(question, yes, no) {}
function showOk() {
  console.log("You agreed.");
}
function showCancel() {
  console.log("You canceled the execution.");
}
ask("Do you agree?", showOk, showCancel);
