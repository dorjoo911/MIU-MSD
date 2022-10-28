// *** 1 *** Write any additional code so the console.log gives the shown outputs

function foo(bar, abc, xyz) {
  if (bar < 100) {
    return abc(bar); // less than 100 then result is double the value
  } else {
    return xyz(bar); // greater or equal to 100 then result is triple the value
  }
}
console.log("foo(100, apple, banana) :>> ", foo(100, apple, banana)); //300
console.log("foo(90, apple, banana) :>> ", foo(90, apple, banana)); //180

function apple(value) {
  return value * 2;
}
function banana(value) {
  return value * 3;
}

// *** 6 *** What will be logged when the following code runs?

function sayHi() {
  console.log('"hello" :>> ', "Hello");
  return function () {
    console.log('"Bye" :>> ', "Bye");
  };
}
setTimeout(sayHi(), 2000);
